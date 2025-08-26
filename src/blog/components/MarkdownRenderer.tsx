import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parseContent = (text: string) => {
    const lines = text.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;
    let inCodeBlock = false;
    let codeLanguage = '';
    let codeContent: string[] = [];
    let inList = false;
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' = 'ul';

    const flushList = () => {
      if (listItems.length > 0) {
        const ListTag = listType;
        elements.push(
          <ListTag key={key++} className="markdown-list">
            {listItems.map((item, idx) => (
              <li key={idx} className="markdown-list-item" 
                  dangerouslySetInnerHTML={{ __html: formatInlineText(item) }} />
            ))}
          </ListTag>
        );
        listItems = [];
        inList = false;
      }
    };

    const formatInlineText = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') {
        if (inCodeBlock) {
          codeContent.push('');
        } else {
          flushList();
        }
        continue;
      }

      // Code blocks
      if (trimmedLine.startsWith('```')) {
        if (!inCodeBlock) {
          flushList();
          inCodeBlock = true;
          codeLanguage = trimmedLine.substring(3).trim() || 'text';
          codeContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={key++} className="code-block-wrapper">
              <div className="code-block-header">
                <span className="code-language">{codeLanguage}</span>
                <button 
                  className="copy-code-btn"
                  onClick={(e) => {
                    const button = e.currentTarget;
                    navigator.clipboard.writeText(codeContent.join('\n'));
                    button.textContent = 'Copied!';
                    setTimeout(() => button.textContent = 'Copy', 2000);
                  }}
                >
                  Copy
                </button>
              </div>
              <pre className="code-block">
                <code className={`language-${codeLanguage}`}>
                  {codeContent.join('\n')}
                </code>
              </pre>
            </div>
          );
          codeContent = [];
          codeLanguage = '';
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Lists
      const unorderedMatch = trimmedLine.match(/^[-*+]\s+(.+)$/);
      const orderedMatch = trimmedLine.match(/^\d+\.\s+(.+)$/);
      
      if (unorderedMatch || orderedMatch) {
        const isNewListType = unorderedMatch ? 'ul' : 'ol';
        if (!inList || listType !== isNewListType) {
          flushList();
          inList = true;
          listType = isNewListType;
        }
        listItems.push(unorderedMatch ? unorderedMatch[1] : orderedMatch![1]);
        continue;
      } else if (inList) {
        flushList();
      }

      // Headers
      if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="markdown-h3" id={trimmedLine.substring(4).toLowerCase().replace(/\s+/g, '-')}>
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="markdown-h2" id={trimmedLine.substring(3).toLowerCase().replace(/\s+/g, '-')}>
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="markdown-h1" id={trimmedLine.substring(2).toLowerCase().replace(/\s+/g, '-')}>
            {trimmedLine.substring(2)}
          </h1>
        );
      }
      // Blockquotes
      else if (trimmedLine.startsWith('> ')) {
        elements.push(
          <blockquote key={key++} className="markdown-blockquote">
            <p dangerouslySetInnerHTML={{ __html: formatInlineText(trimmedLine.substring(2)) }} />
          </blockquote>
        );
      }
      // Images
      else if (trimmedLine.match(/!\[([^\]]*)\]\(([^)]+)\)/)) {
        const match = trimmedLine.match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (match) {
          elements.push(
            <div key={key++} className="markdown-image-wrapper">
              <img 
                src={match[2]} 
                alt={match[1]} 
                className="markdown-image"
                loading="lazy"
              />
              {match[1] && <p className="markdown-image-caption">{match[1]}</p>}
            </div>
          );
        }
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={key++} className="markdown-p" 
             dangerouslySetInnerHTML={{ __html: formatInlineText(trimmedLine) }} />
        );
      }
    }

    // Flush any remaining list items
    flushList();

    return elements;
  };

  return <div className="markdown-content">{parseContent(content)}</div>;
};

export default MarkdownRenderer;
