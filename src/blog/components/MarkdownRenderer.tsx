import React, { useMemo } from 'react';
import { renderMarkdown } from '../markdown';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const html = useMemo(() => renderMarkdown(content), [content]);
  const copyCode = async (event: React.MouseEvent<HTMLDivElement>) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.copy-code-btn');
    const code = button?.parentElement?.querySelector('code')?.textContent;
    if (!button || code === undefined || code === null) return;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = 'Copied';
    } catch {
      button.textContent = 'Copy unavailable';
    }
  };
  return <div className="markdown-content" onClick={copyCode} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
