export const blogStyles = `
  .blog-hero, .article-hero {
    --blog-text: #f5f5f7;
    --blog-muted: #b9bcc6;
    --blog-accent: #b4a8ff;
    background:
      radial-gradient(ellipse 70% 60% at 50% 0%, rgba(104, 83, 255, 0.22), transparent 70%),
      linear-gradient(to bottom, rgba(104, 83, 255, 0.12), rgba(18, 18, 18, 0));
    padding: 40px 0 64px;
  }
  .blog-container, .blog-post-container {
    --blog-text: #f5f5f7;
    --blog-body: #c9cbd3;
    --blog-muted: #a3a7b2;
    --blog-accent: #b4a8ff;
    --blog-surface: var(--dark-surface);
    --blog-surface-2: #24242a;
    --blog-border: #2f3036;
    --blog-border-strong: #44454d;
  }

  /* ---------- Tutorials index ---------- */
  .blog-hero-content { max-width: 760px; margin: 24px auto 0; text-align: center; }
  .blog-overline { display: inline-block; color: var(--blog-accent); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
  .blog-hero-title { color: var(--blog-text); font-size: 52px; font-weight: 800; line-height: 1.1; letter-spacing: -0.5px; margin-bottom: 20px; }
  .gradient-text { background: linear-gradient(to right, var(--primary-light), var(--secondary)); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .blog-hero-subtitle { max-width: 600px; margin: 0 auto; color: var(--blog-muted); font-size: 18px; line-height: 1.65; }

  .blog-container { max-width: 1280px; margin: 0 auto; padding: 8px 32px 80px; }
  .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); gap: 24px; }
  .tutorial-task-picker, .tutorial-group { margin-bottom: 72px; }
  .tutorial-task-picker > h2, .tutorial-group > h2, .tutorial-setup h2 { color: var(--blog-text); font-size: 28px; font-weight: 700; line-height: 1.3; letter-spacing: -0.2px; margin-bottom: 10px; }
  .tutorial-group > p, .tutorial-setup p { color: var(--blog-muted); max-width: 680px; margin-bottom: 28px; font-size: 16px; line-height: 1.65; }

  .tutorial-task-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 24px; }
  .tutorial-task-grid a { position: relative; display: flex; flex-direction: column; gap: 8px; padding: 22px 48px 22px 22px; border: 1px solid var(--blog-border); border-radius: 12px; background: var(--blog-surface); text-decoration: none; transition: border-color .2s ease, background-color .2s ease, transform .2s ease; }
  .tutorial-task-grid a::after { content: '→'; position: absolute; top: 20px; right: 20px; color: var(--blog-muted); font-size: 16px; transition: transform .2s ease, color .2s ease; }
  .tutorial-task-grid a[href^="http"]::after { content: '↗'; }
  .tutorial-task-grid a:first-child { border-color: rgba(104, 83, 255, 0.55); background: linear-gradient(135deg, rgba(104, 83, 255, 0.16), rgba(104, 83, 255, 0.04)), var(--blog-surface); }
  .tutorial-task-grid strong { color: var(--blog-text); font-size: 16px; font-weight: 600; line-height: 1.35; }
  .tutorial-task-grid span { color: var(--blog-muted); line-height: 1.55; font-size: 14px; }
  .tutorial-task-grid a:hover { border-color: var(--primary-light); background-color: var(--blog-surface-2); transform: translateY(-2px); }
  .tutorial-task-grid a:hover::after { color: var(--blog-accent); transform: translateX(3px); }
  .tutorial-task-grid a[href^="http"]:hover::after { transform: translate(2px, -2px); }

  .tutorial-setup { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 36px 40px; border: 1px solid var(--blog-border); border-radius: 16px; background: linear-gradient(135deg, rgba(104, 83, 255, 0.14), rgba(255, 110, 127, 0.06)), var(--blog-surface); }
  .tutorial-setup p { margin-bottom: 0; }
  .tutorial-setup-actions { display: flex; flex-wrap: wrap; gap: 12px; flex-shrink: 0; }
  .blog-button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 10px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: background-color .2s ease, border-color .2s ease, transform .2s ease; }
  .blog-button-primary { background: var(--primary); color: var(--white); box-shadow: 0 6px 15px rgba(104, 83, 255, 0.3); }
  .blog-button-primary:hover { background: var(--primary-light); transform: translateY(-2px); }
  .blog-button-secondary { border: 1px solid var(--blog-border-strong); color: var(--blog-text); background: rgba(255, 255, 255, 0.03); }
  .blog-button-secondary:hover { border-color: var(--blog-accent); background: rgba(255, 255, 255, 0.06); }

  /* ---------- Cards ---------- */
  .blog-card-link { display: block; height: 100%; text-decoration: none; color: inherit; border-radius: 12px; }
  .blog-card { background: var(--blog-surface); border: 1px solid var(--blog-border); border-radius: 12px; overflow: hidden; height: 100%; display: flex; flex-direction: column; min-width: 0; transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease; }
  .blog-card-link:hover .blog-card { border-color: rgba(138, 121, 255, 0.6); transform: translateY(-3px); box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35); }
  .blog-card-image { position: relative; aspect-ratio: 16 / 9; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--blog-surface-2); }
  .blog-card-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; transition: transform .5s ease; }
  .blog-card-link:hover .blog-card-image img { transform: scale(1.04); }
  .blog-card-fallback { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--white); }
  .featured-badge { position: absolute; top: 12px; left: 12px; background: rgba(18, 18, 18, 0.72); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); color: var(--white); border: 1px solid rgba(255, 255, 255, 0.12); padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; }
  .blog-card-content { padding: 22px 24px 24px; display: flex; flex-direction: column; flex: 1; }
  .blog-card-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 12px; font-weight: 600; letter-spacing: 0.4px; text-transform: uppercase; color: var(--blog-muted); }
  .blog-card-meta .category-badge { color: var(--blog-accent); }
  .blog-card-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: currentColor; opacity: 0.6; }
  .blog-card-title { color: var(--blog-text); font-size: 19px; font-weight: 700; line-height: 1.35; margin-bottom: 10px; }
  .blog-card-description { color: var(--blog-muted); font-size: 14.5px; line-height: 1.6; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .read-more-link { margin-top: auto; display: inline-flex; align-items: center; gap: 6px; color: var(--blog-accent); font-size: 14px; font-weight: 600; }
  .read-more-link svg { transition: transform .2s ease; }
  .blog-card-link:hover .read-more-link svg { transform: translate(2px, -2px); }

  /* ---------- Article header ---------- */
  .article-heading { max-width: 1080px; margin: 24px auto 0; }
  .article-breadcrumbs { margin-bottom: 28px; font-size: 13px; color: var(--blog-muted); }
  .article-breadcrumbs ol { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; list-style: none; padding: 0; margin: 0; }
  .article-breadcrumbs li { display: flex; align-items: center; min-width: 0; white-space: nowrap; }
  .article-breadcrumbs li + li::before { content: '/'; margin-right: 10px; opacity: 0.5; }
  .article-breadcrumbs li:last-child { flex: 1 1 0; overflow: hidden; }
  .article-breadcrumbs li:last-child span { overflow: hidden; text-overflow: ellipsis; }
  .article-breadcrumbs a { color: var(--blog-accent); text-decoration: none; }
  .article-breadcrumbs a:hover { color: var(--white); text-decoration: underline; text-underline-offset: 3px; }
  .article-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; font-size: 12px; font-weight: 600; letter-spacing: 0.4px; text-transform: uppercase; margin-bottom: 18px; }
  .article-meta span:first-child { color: var(--blog-accent); background: rgba(104, 83, 255, 0.16); border: 1px solid rgba(138, 121, 255, 0.3); padding: 4px 10px; border-radius: 999px; }
  .article-meta span + span { color: var(--blog-muted); }
  .article-heading h1 { color: var(--blog-text); max-width: 900px; font-size: 48px; font-weight: 800; line-height: 1.12; letter-spacing: -0.5px; margin: 0 0 20px; }
  .article-deck { max-width: 740px; color: var(--blog-muted); font-size: 19px; line-height: 1.6; margin-bottom: 24px; }
  .article-byline { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; color: var(--blog-muted); font-size: 14px; }
  .article-byline span { color: var(--blog-text); font-weight: 500; }
  .article-byline time::before { content: ''; display: inline-block; width: 3px; height: 3px; border-radius: 50%; background: currentColor; opacity: 0.6; vertical-align: middle; margin-right: 16px; }

  /* ---------- Article body ---------- */
  .blog-post-container { max-width: 1144px; margin: 0 auto; padding: 0 32px 80px; }
  .article-answer { position: relative; padding: 24px 28px; margin: 0 0 48px; border: 1px solid rgba(138, 121, 255, 0.3); background: linear-gradient(135deg, rgba(104, 83, 255, 0.14), rgba(104, 83, 255, 0.04)), var(--blog-surface); border-radius: 12px; }
  .article-answer h2 { display: flex; align-items: center; gap: 8px; color: var(--blog-accent); font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; }
  .article-answer h2::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--primary-light); box-shadow: 0 0 0 4px rgba(138, 121, 255, 0.2); }
  .article-answer p { color: #eceaf5; font-size: 17.5px; line-height: 1.7; margin: 0; }

  .article-layout { display: grid; grid-template-columns: 220px minmax(0, 780px); justify-content: space-between; gap: 56px; align-items: start; }
  .article-layout > aside { position: sticky; top: 24px; max-height: calc(100vh - 48px); overflow-y: auto; }
  .article-body { min-width: 0; }
  .article-cover { margin-bottom: 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--blog-border); aspect-ratio: 16 / 7; background: var(--blog-surface-2); }
  .article-cover img { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 0; }

  .table-of-contents h2 { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--blog-muted); margin: 0 0 12px; }
  .toc-toggle { display: none; }
  .table-of-contents ol { padding: 0; margin: 0; list-style: none; border-left: 1px solid var(--blog-border); }
  .table-of-contents a { display: block; margin-left: -1px; padding: 7px 0 7px 14px; border-left: 2px solid transparent; color: var(--blog-muted); text-decoration: none; font-size: 13.5px; line-height: 1.45; transition: color .15s ease, border-color .15s ease; }
  .table-of-contents a:hover { color: var(--blog-text); border-left-color: var(--primary-light); }

  .article-workflow { margin: 0 0 40px; padding: 24px; border: 1px solid var(--blog-border); border-radius: 12px; background: var(--blog-surface); }
  .article-workflow figcaption { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--blog-accent); margin-bottom: 20px; }
  .article-workflow ol { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; padding: 0; margin: 0; list-style: none; }
  .article-workflow li { display: flex; flex-direction: column; gap: 4px; min-width: 0; position: relative; }
  .workflow-index { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; color: var(--white); background: var(--primary); font-size: 13px; font-weight: 700; margin-bottom: 10px; box-shadow: 0 4px 12px rgba(104, 83, 255, 0.35); }
  .article-workflow strong { font-size: 15px; color: var(--blog-text); }
  .article-workflow li > span:last-child { font-size: 13px; color: var(--blog-muted); line-height: 1.5; }
  .article-workflow li:not(:last-child)::after { content: ''; position: absolute; height: 2px; background: linear-gradient(to right, rgba(138, 121, 255, 0.5), var(--blog-border)); top: 15px; left: 44px; right: 0; }

  .markdown-content { font-size: 17px; line-height: 1.8; color: var(--blog-body); overflow-wrap: break-word; }
  .markdown-content p { margin: 0 0 24px; font-size: inherit; line-height: inherit; }
  .markdown-content strong { color: var(--blog-text); font-weight: 600; }
  .markdown-content h2, .markdown-content h3, .markdown-content h4 { scroll-margin-top: 28px; }
  .markdown-content h2 { margin: 56px 0 18px; color: var(--blog-text); font-size: 30px; font-weight: 700; line-height: 1.25; letter-spacing: -0.3px; }
  .markdown-content h3 { margin: 36px 0 14px; color: var(--blog-text); font-size: 21px; font-weight: 650; line-height: 1.4; }
  .markdown-content h4, .markdown-content h5, .markdown-content h6 { color: var(--blog-text); margin: 28px 0 12px; font-size: 18px; }
  .markdown-content a, .article-share a { color: var(--blog-accent); text-decoration: underline; text-decoration-color: rgba(180, 168, 255, 0.45); text-decoration-thickness: 1px; text-underline-offset: 4px; transition: color .15s ease, text-decoration-color .15s ease; }
  .markdown-content a:hover { color: var(--white); text-decoration-color: currentColor; }
  .blog-post-container a:focus-visible, .blog-container a:focus-visible, .blog-hero a:focus-visible, .toc-toggle:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 3px; border-radius: 4px; }
  .markdown-list { margin: 20px 0 28px; padding-left: 26px; }
  .markdown-list-item { padding-left: 6px; margin: 10px 0; }
  .markdown-list-item::marker { color: var(--primary-light); font-weight: 700; }
  .markdown-list-item p { margin-bottom: 8px; }
  .markdown-list .markdown-list { margin: 10px 0; }
  .markdown-content code { font: .86em 'SFMono-Regular', Menlo, Consolas, monospace; color: #ddd6ff; background: rgba(104, 83, 255, 0.16); border-radius: 4px; padding: 2px 6px; }
  .code-block-wrapper { position: relative; margin: 28px 0; padding: 48px 20px 20px; border: 1px solid var(--blog-border); border-radius: 10px; background: #18181c; }
  .code-block-wrapper pre { overflow-x: auto; margin: 0; font-size: 14px; line-height: 1.6; }
  .code-block-wrapper code { padding: 0; background: transparent; }
  .copy-code-btn { position: absolute; top: 10px; right: 12px; background: var(--blog-surface-2); color: var(--blog-text); border: 1px solid var(--blog-border-strong); border-radius: 6px; padding: 5px 10px; font-size: 12px; cursor: pointer; }
  .copy-code-btn:hover { border-color: var(--blog-accent); }
  .markdown-blockquote { margin: 28px 0; padding: 18px 22px; border-left: 3px solid var(--primary-light); background: rgba(104, 83, 255, 0.08); color: #dcd9e8; border-radius: 0 10px 10px 0; }
  .markdown-blockquote p:last-child { margin-bottom: 0; }
  .markdown-table-wrapper { overflow-x: auto; max-width: 100%; margin: 28px 0; border: 1px solid var(--blog-border); border-radius: 10px; background: var(--blog-surface); }
  .markdown-content table { width: 100%; min-width: 480px; border-collapse: collapse; font-size: 14.5px; line-height: 1.6; }
  .markdown-content th, .markdown-content td { padding: 14px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--blog-border); }
  .markdown-content th { background: var(--blog-surface-2); color: var(--blog-text); font-weight: 600; font-size: 13px; letter-spacing: 0.3px; }
  .markdown-content td:first-child { color: var(--blog-text); font-weight: 500; }
  .markdown-content tr:last-child td { border-bottom: 0; }
  .markdown-image { max-width: 100%; height: auto; border-radius: 10px; }
  .markdown-content hr { border: 0; border-top: 1px solid var(--blog-border); margin: 40px 0; }

  .article-share { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 48px; padding: 24px 0 0; background: none; border-top: 1px solid var(--blog-border); color: var(--blog-muted); font-size: 14px; }
  .article-share span { margin-right: 6px; }
  .article-share a { display: inline-flex; align-items: center; min-height: 36px; padding: 6px 14px; border: 1px solid var(--blog-border-strong); border-radius: 999px; color: var(--blog-text); text-decoration: none; font-size: 13px; font-weight: 600; transition: border-color .2s ease, background-color .2s ease; }
  .article-share a:hover { border-color: var(--blog-accent); background: rgba(255, 255, 255, 0.05); }

  .article-product { margin-top: 64px; padding: 36px 40px; border: 1px solid rgba(138, 121, 255, 0.35); border-radius: 16px; background: radial-gradient(ellipse 80% 120% at 100% 0%, rgba(255, 110, 127, 0.12), transparent 60%), linear-gradient(135deg, rgba(104, 83, 255, 0.2), rgba(104, 83, 255, 0.05)), var(--blog-surface); display: flex; align-items: center; justify-content: space-between; gap: 32px; }
  .article-product h2 { font-size: 24px; font-weight: 700; line-height: 1.3; margin-bottom: 10px; color: var(--blog-text); }
  .article-product p { max-width: 560px; font-size: 15.5px; line-height: 1.65; color: var(--blog-muted); }
  .article-product-actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; min-width: 220px; }

  .related-posts { margin-top: 72px; }
  .related-posts-title { color: var(--blog-text); font-size: 26px; font-weight: 700; margin-bottom: 24px; }
  .related-posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr)); gap: 24px; }

  @media (max-width: 1100px) {
    .tutorial-task-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 900px) {
    .article-layout { grid-template-columns: minmax(0, 1fr); gap: 0; }
    .article-layout > aside { position: static; max-height: none; overflow: visible; margin-bottom: 32px; }
        .table-of-contents { border: 1px solid var(--blog-border); border-radius: 12px; background: var(--blog-surface); }
    .table-of-contents h2 { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
    .toc-toggle { display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 52px; padding: 14px 18px; background: none; border: 0; color: var(--blog-text); font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-align: left; }
    .toc-toggle svg { color: var(--blog-muted); transition: transform .2s ease; }
    .toc-toggle[aria-expanded="true"] svg { transform: rotate(180deg); }
    .table-of-contents ol { display: none; border-left: 0; border-top: 1px solid var(--blog-border); padding: 6px 0; }
    .table-of-contents.is-open ol { display: block; }
    .table-of-contents a { margin: 0; padding: 11px 18px; border-left: 0; font-size: 15px; }
    .article-product { align-items: stretch; flex-direction: column; gap: 24px; }
    .article-product-actions { min-width: 0; }
  }
  @media (max-width: 768px) {
    .blog-hero, .article-hero { padding: 20px 0 40px; }
  }
  @media (max-width: 600px) {
    .blog-hero-content { margin-top: 8px; }
    .blog-overline { font-size: 12px; margin-bottom: 12px; }
    .blog-hero-title { font-size: 36px; letter-spacing: -0.3px; }
    .blog-hero-subtitle { font-size: 16.5px; }
    .blog-container, .blog-post-container { padding: 0 20px 56px; }
    .tutorial-task-picker, .tutorial-group { margin-bottom: 52px; }
    .tutorial-task-picker > h2, .tutorial-group > h2, .tutorial-setup h2 { font-size: 24px; }
    .tutorial-group > p { font-size: 15px; margin-bottom: 20px; }
    .tutorial-task-grid { grid-template-columns: minmax(0, 1fr); gap: 10px; }
    .tutorial-task-grid a { padding: 16px 44px 16px 18px; gap: 4px; }
    .tutorial-task-grid a::after { top: 50%; right: 18px; transform: translateY(-50%); }
    .tutorial-task-grid a:hover::after, .tutorial-task-grid a[href^="http"]:hover::after { transform: translateY(-50%); }
    .tutorial-task-grid strong { font-size: 15.5px; }
    .tutorial-setup { flex-direction: column; align-items: stretch; gap: 20px; padding: 28px 22px; }
    .tutorial-setup-actions { flex-direction: column; }
    .blog-grid { gap: 16px; }
    .blog-card-content { padding: 18px 20px 20px; }
    .blog-card-title { font-size: 18px; }

    .article-heading { margin-top: 8px; }
    .article-breadcrumbs { margin-bottom: 20px; }
    .article-breadcrumbs li:last-child { display: none; }
    .article-heading h1 { font-size: 32px; line-height: 1.18; letter-spacing: -0.3px; }
    .article-deck { font-size: 17px; margin-bottom: 18px; }
    .article-byline { font-size: 13px; }
    .article-answer { padding: 20px; margin-bottom: 28px; }
    .article-answer p { font-size: 16px; }
    .article-cover { aspect-ratio: 16 / 9; margin-bottom: 28px; }
    .article-workflow { padding: 20px; }
    .article-workflow ol { grid-template-columns: minmax(0, 1fr); gap: 18px; }
    .article-workflow li { padding-left: 46px; min-height: 32px; justify-content: center; }
    .article-workflow .workflow-index { position: absolute; top: 0; left: 0; margin: 0; }
    .article-workflow li:not(:last-child)::after { left: 15px; top: 38px; bottom: -14px; width: 2px; height: auto; right: auto; background: var(--blog-border-strong); }
    .markdown-content { font-size: 16.5px; line-height: 1.75; }
    .markdown-content h2 { font-size: 24px; margin-top: 44px; }
    .markdown-content h3 { font-size: 19px; }
    .markdown-list { padding-left: 22px; }
    .markdown-blockquote { padding: 16px 18px; }

    /* Stack tables into labelled cards on phones */
    .markdown-table-wrapper { overflow: visible; border: 0; background: none; }
    .markdown-content table { min-width: 0; }
    .markdown-content table, .markdown-content tbody, .markdown-content tr, .markdown-content td { display: block; width: 100%; }
    .markdown-content thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
    .markdown-content tr { margin-bottom: 12px; border: 1px solid var(--blog-border); border-radius: 10px; background: var(--blog-surface); overflow: hidden; }
    .markdown-content td { padding: 10px 16px; border-bottom: 1px solid var(--blog-border); }
    .markdown-content tr td:last-child { border-bottom: 0; }
    .markdown-content td:first-child { background: var(--blog-surface-2); font-weight: 600; }
    .markdown-content td[data-label]:not(:first-child)::before { content: attr(data-label); display: block; margin-bottom: 2px; color: var(--blog-accent); font-size: 11.5px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }

    .article-share span { width: 100%; margin-bottom: 2px; }
    .article-product { margin-top: 48px; padding: 26px 22px; }
    .article-product h2 { font-size: 21px; }
    .related-posts { margin-top: 56px; }
    .related-posts-title { font-size: 22px; }
    .article-heading, .article-product, .blog-hero-title { overflow-wrap: break-word; }
  }
`;
