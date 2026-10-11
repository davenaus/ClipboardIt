import MarkdownIt from 'markdown-it';

export interface ArticleHeading { level: number; text: string; id: string; }
interface MarkdownEnvironment { headings?: ArticleHeading[]; }

const markdown = new MarkdownIt({ html: false, linkify: false, typographer: false, breaks: true });

markdown.core.ruler.push('article-headings', state => {
  const counts = new Map<string, number>();
  const headings: ArticleHeading[] = [];
  state.tokens.forEach((token, index) => {
    if (token.type !== 'heading_open') return;
    const text = state.tokens[index + 1].content;
    // Keep existing heading anchors; suffix repeated headings deterministically.
    const base = text.toLowerCase().replace(/\s+/g, '-');
    const count = counts.get(base) || 0;
    counts.set(base, count + 1);
    const id = count ? `${base}-${count + 1}` : base;
    token.attrSet('id', id);
    token.attrSet('class', `markdown-${token.tag}`);
    headings.push({ level: Number(token.tag.substring(1)), text, id });
  });
  (state.env as MarkdownEnvironment).headings = headings;
});

// Label each cell with its column header so tables can stack into cards on small screens.
markdown.core.ruler.push('table-cell-labels', state => {
  let headers: string[] = [];
  let column = 0;
  state.tokens.forEach((token, index) => {
    if (token.type === 'thead_open') headers = [];
    else if (token.type === 'th_open') headers.push(state.tokens[index + 1].content);
    else if (token.type === 'tr_open') column = 0;
    else if (token.type === 'td_open') {
      const label = headers[column++];
      if (label) token.attrSet('data-label', label);
    }
  });
});

const classes: Record<string, string> = {
  paragraph_open: 'markdown-p', bullet_list_open: 'markdown-list',
  ordered_list_open: 'markdown-list', list_item_open: 'markdown-list-item',
  blockquote_open: 'markdown-blockquote'
};
Object.entries(classes).forEach(([rule, className]) => {
  markdown.renderer.rules[rule] = (tokens, index, options, env, renderer) => {
    tokens[index].attrJoin('class', className);
    return renderer.renderToken(tokens, index, options);
  };
});
markdown.renderer.rules.table_open = () => '<div class="markdown-table-wrapper" tabindex="0" role="region" aria-label="Article table"><table>';
markdown.renderer.rules.table_close = () => '</table></div>';
const renderImage = markdown.renderer.rules.image!;
markdown.renderer.rules.image = (tokens, index, options, env, renderer) => {
  tokens[index].attrSet('loading', 'lazy');
  tokens[index].attrSet('decoding', 'async');
  tokens[index].attrJoin('class', 'markdown-image');
  return renderImage(tokens, index, options, env, renderer);
};
const renderFence = markdown.renderer.rules.fence!;
markdown.renderer.rules.fence = (tokens, index, options, env, renderer) =>
  '<div class="code-block-wrapper"><button type="button" class="copy-code-btn">Copy code</button>' +
  renderFence(tokens, index, options, env, renderer) + '</div>';

export const renderMarkdown = (content: string): string => markdown.render(content);
export const getMarkdownHeadings = (content: string): ArticleHeading[] => {
  const env: MarkdownEnvironment = {};
  markdown.parse(content, env);
  return env.headings || [];
};
