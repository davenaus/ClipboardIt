export const blogStyles = `
  /* Blog Hero Section */
  .blog-hero {
    background: linear-gradient(to bottom, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 100%);
    padding: 40px 0 60px;
    position: relative;
    overflow: hidden;
  }

  .blog-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236853FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  .blog-hero-content {
    text-align: center;
    max-width: 800px;
    margin: 60px auto 0;
    position: relative;
    z-index: 1;
  }

  .blog-overline {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-light);
    margin-bottom: 16px;
    display: inline-block;
  }

  .blog-hero-title {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    color: var(--white);
  }

  .gradient-text {
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .blog-hero-subtitle {
    font-size: 20px;
    font-weight: 400;
    color: var(--gray-300);
    margin-bottom: 40px;
    line-height: 1.5;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .blog-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    background: rgba(255, 255, 255, 0.05);
    padding: 24px 32px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    max-width: 300px;
    margin: 0 auto;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 24px;
    font-weight: 800;
    color: var(--primary-light);
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: var(--gray-400);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
  }

  /* Blog Layout Styles - Integrated with Global Design System */
  .blog-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px 60px 32px;
    background-color: var(--dark);
    min-height: 50vh;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 10px;
    padding: 10px 0;
  }

  .blog-title {
    font-size: 36px;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .blog-subtitle {
    font-size: 18px;
    color: var(--gray-400);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Filter Navigation */
  .filter-nav {
    background: transparent;
    border-radius: 0;
    padding: 0;
    margin-bottom: 32px;
    border: none;
    position: relative;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-nav::before {
    display: none;
  }

  .filter-nav h3 {
    display: none;
  }

  .filter-nav h3::before {
    display: none;
  }

  .filter-nav button {
    background: transparent;
    color: var(--gray-400);
    border: 1px solid var(--gray-800);
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    z-index: 1;
  }

  .filter-nav button:hover {
    background: rgba(104, 83, 255, 0.1);
    color: var(--primary-light);
    border-color: var(--primary);
  }

  .filter-nav button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Active filter button */
  .filter-nav button[style*="border: 2px solid rgb(104, 83, 255)"] {
    background: var(--primary) !important;
    color: var(--white) !important;
    border-color: var(--primary) !important;
  }

  /* Blog Grid */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 28px;
    margin-bottom: 60px;
  }

  /* Blog Card Styles */
  .blog-card {
    background: var(--dark-surface);
    border-radius: 12px;
    border: 1px solid var(--gray-800);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .blog-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 12px 30px rgba(104, 83, 255, 0.2);
  }

  .blog-card-image {
    position: relative;
    width: 100%;
    height: 140px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, rgba(104, 83, 255, 0.1), rgba(255, 110, 127, 0.1));
  }

  .blog-card-icon {
    font-size: 32px;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
  }

  .blog-card:hover .blog-card-icon {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 1);
  }

  .featured-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: var(--white);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .blog-card-content {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .blog-card-meta {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .category-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .category-badge.bg-purple-100 {
    background: rgba(104, 83, 255, 0.15);
    color: var(--primary-light);
  }

  .category-badge.bg-blue-100 {
    background: rgba(59, 130, 246, 0.15);
    color: #60A5FA;
  }

  .category-badge.bg-green-100 {
    background: rgba(34, 197, 94, 0.15);
    color: #4ADE80;
  }

  .category-badge.bg-orange-100 {
    background: rgba(249, 115, 22, 0.15);
    color: #FB923C;
  }

  .publish-date {
    display: none;
  }

  .blog-card-title {
    margin: 0 0 16px 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
  }

  .title-link {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .title-link:hover {
    color: var(--primary-light);
  }

  .blog-card-description {
    color: var(--gray-300);
    line-height: 1.7;
    margin-bottom: 0;
    font-size: 15px;
    flex-grow: 1;
  }

  .blog-card-footer {
    display: none;
  }

  .blog-card-tags {
    display: none;
  }

  .tag {
    display: none;
  }

  .reading-time {
    display: none;
  }

  .read-more-link {
    color: var(--primary-light);
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: color 0.3s ease;
  }

  .read-more-link:hover {
    color: var(--white);
  }

  /* Blog Post Page Styles */
  .blog-post-container {
    max-width: 900px;
    margin: -60px auto 0; /* Negative margin to reduce gap from hero */
    background-color: var(--dark);
    position: relative;
    z-index: 2;
  }

  .blog-nav {
    margin-bottom: 40px;
  }

  .back-to-blog {
    color: var(--primary-light);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-size: 15px;
  }

  .back-to-blog:hover {
    color: var(--white);
    transform: translateX(-4px);
  }

  .blog-post-header {
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--gray-800);
  }

  .blog-post-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .blog-post-title {
    font-size: 32px;
    font-weight: 800;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .blog-post-description {
    font-size: 18px;
    color: var(--gray-300);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray-400);
    font-size: 14px;
  }

  .author-info svg {
    color: var(--primary-light);
  }

  /* Enhanced Markdown Content Styles */
  .markdown-content {
    line-height: 1.8;
    color: var(--gray-300);
    font-size: 16px;
    max-width: none;
  }

  .markdown-h1,
  .markdown-h2,
  .markdown-h3 {
    color: var(--white);
    margin: 40px 0 20px 0;
    line-height: 1.3;
    font-weight: 700;
    position: relative;
  }

  .markdown-h1 {
    font-size: 32px;
    margin-top: 60px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--gray-800);
  }

  .markdown-h2 {
    font-size: 26px;
    margin-top: 50px;
    position: relative;
  }

  .markdown-h2::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: linear-gradient(to bottom, var(--primary), var(--primary-light));
    border-radius: 2px;
  }

  .markdown-h3 {
    font-size: 22px;
    color: var(--primary-light);
    margin-top: 40px;
  }

  .markdown-p {
    margin: 20px 0;
    line-height: 1.8;
    font-size: 16px;
  }

  .markdown-list {
    margin: 20px 0;
    padding-left: 24px;
  }

  .markdown-list-item {
    margin: 12px 0;
    line-height: 1.7;
    font-size: 16px;
  }

  .markdown-list ul,
  .markdown-list ol {
    margin-top: 12px;
  }

  .inline-code {
    background: var(--gray-800);
    color: var(--primary-light);
    padding: 3px 8px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    font-weight: 500;
  }

  .code-block-wrapper {
    margin: 32px 0;
    border-radius: 12px;
    overflow: hidden;
    background: var(--dark-surface);
    border: 1px solid var(--gray-800);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .code-block-header {
    background: var(--gray-800);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-700);
  }

  .code-language {
    font-size: 12px;
    color: var(--primary-light);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .copy-code-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .copy-code-btn:hover {
    background: var(--primary-light);
    transform: translateY(-1px);
  }

  .code-block {
    background: var(--dark);
    color: var(--gray-300);
    padding: 24px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
    overflow-x: auto;
    margin: 0;
  }

  .markdown-blockquote {
    border-left: 4px solid var(--primary);
    margin: 32px 0;
    padding: 20px 24px;
    background: rgba(104, 83, 255, 0.05);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: var(--gray-300);
    position: relative;
  }

  .markdown-blockquote::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 48px;
    color: var(--primary);
    font-weight: bold;
    line-height: 1;
  }

  .markdown-blockquote p {
    margin: 0;
    font-size: 17px;
    line-height: 1.7;
  }

  .markdown-image-wrapper {
    margin: 40px 0;
    text-align: center;
  }

  .markdown-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
  }

  .markdown-image:hover {
    transform: scale(1.02);
  }

  .markdown-image-caption {
    margin-top: 12px;
    font-size: 14px;
    color: var(--gray-400);
    font-style: italic;
  }

  /* Table of Contents */
  .table-of-contents {
    background: var(--dark-surface);
    border: 1px solid var(--gray-800);
    border-radius: 12px;
    padding: 24px;
    margin: 32px 0;
    max-width: 100%;
    position: static;
  }

  .table-of-contents h4 {
    color: var(--white);
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 700;
  }

  .table-of-contents ul {
    list-style: none;
    padding: 0;
  }

  .table-of-contents li {
    margin: 8px 0;
  }

  .table-of-contents a {
    color: var(--gray-400);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
    padding-left: 16px;
    position: relative;
  }

  .table-of-contents a::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--primary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .table-of-contents a:hover {
    color: var(--primary-light);
  }

  .table-of-contents a:hover::before {
    opacity: 1;
  }

  /* Related Posts */
  .related-posts {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid var(--gray-800);
  }

  .related-posts-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    color: var(--white);
  }

  .related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }

  /* Newsletter Signup */
  .newsletter-signup {
    background: linear-gradient(135deg, rgba(48, 48, 48, 0.9), rgba(28, 28, 28, 0.95));
    border-radius: 20px;
    padding: 50px 40px;
    text-align: center;
    color: var(--white);
    margin-top: 80px;
    margin-bottom: 2rem;
    border: 1px solid var(--gray-800);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .newsletter-signup::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236853FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  .newsletter-signup * {
    position: relative;
    z-index: 1;
  }

  .newsletter-signup::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    z-index: 1;
  }

  .newsletter-signup h2 {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 16px;
    background: linear-gradient(to right, var(--white), var(--gray-200));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .newsletter-signup p {
    font-size: 18px;
    margin-bottom: 32px;
    opacity: 0.9;
    color: var(--gray-300);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .newsletter-signup input {
    flex: 1;
    padding: 16px 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 15px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .newsletter-signup input::placeholder {
    color: var(--gray-400);
  }

  .newsletter-signup input:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(104, 83, 255, 0.2);
  }

  .newsletter-signup button {
    padding: 16px 32px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: var(--white);
    border: none;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(104, 83, 255, 0.3);
  }

  .newsletter-signup button:hover {
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(104, 83, 255, 0.4);
  }

  /* Results Info */
  .results-info {
    margin-bottom: 24px;
    color: var(--gray-400);
    font-size: 14px;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 60px 32px;
    color: var(--gray-400);
  }

  .empty-state h3 {
    color: var(--white);
    margin-bottom: 12px;
    font-size: 20px;
  }

  .empty-state p {
    margin-bottom: 24px;
  }

  .empty-state button {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .empty-state button:hover {
    background: var(--primary-light);
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-hero {
      padding: 20px 0 60px;
    }

    .blog-hero-content {
      margin: 40px auto 0;
      padding: 0 20px;
    }

    .blog-hero-title {
      font-size: 32px;
    }

    .blog-hero-subtitle {
      font-size: 16px;
      margin-bottom: 32px;
    }

    .blog-stats {
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px 24px;
      max-width: 100%;
    }

    .filter-nav {
      padding: 24px 20px;
      margin-bottom: 32px;
    }

    .filter-nav h3 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .filter-nav button {
      padding: 10px 16px;
      font-size: 13px;
    }

    .blog-container,
    .blog-post-container {
      padding: 0 20px;
      margin-top: -40px; /* Less negative margin on mobile */
    }

    .blog-title {
      font-size: 28px;
    }

    .blog-post-title {
      font-size: 24px;
    }

    .markdown-h1 {
      font-size: 24px;
    }

    .markdown-h2 {
      font-size: 22px;
    }

    .markdown-h2::before {
      left: -16px;
      width: 3px;
      height: 20px;
    }

    .markdown-h3 {
      font-size: 20px;
    }

    .code-block {
      padding: 16px;
      font-size: 13px;
    }

    .code-block-header {
      padding: 10px 16px;
    }

    .blog-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .blog-card-meta,
    .blog-card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .related-posts-grid {
      grid-template-columns: 1fr;
    }

    .filter-nav {
      padding: 20px;
    }

    .newsletter-signup {
      padding: 40px 24px;
      margin-top: 60px;
    }

    .newsletter-signup h2 {
      font-size: 24px;
    }

    .newsletter-signup p {
      font-size: 16px;
      margin-bottom: 24px;
    }

    .newsletter-signup > div {
      flex-direction: column !important;
      gap: 16px !important;
    }

    .newsletter-signup input {
      width: 100% !important;
      padding: 14px 18px;
    }

    .newsletter-signup button {
      padding: 14px 24px;
      width: 100%;
    }
  }

  /* Focus states for accessibility */
  .title-link:focus,
  .read-more-link:focus,
  .back-to-blog:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Featured posts section */
  .featured-section {
    margin-bottom: 60px;
  }

  .featured-section h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 24px;
  }

  /* Syntax highlighting styles */
  .language-javascript .keyword { color: #ff79c6; }
  .language-javascript .string { color: #f1fa8c; }
  .language-javascript .function { color: #8be9fd; }
  .language-javascript .comment { color: #6272a4; font-style: italic; }
  .language-javascript .number { color: #bd93f9; }

  .language-css .property { color: #8be9fd; }
  .language-css .value { color: #f1fa8c; }
  .language-css .selector { color: #ff79c6; }

  .language-html .tag { color: #ff79c6; }
  .language-html .attr-name { color: #8be9fd; }
  .language-html .attr-value { color: #f1fa8c; }
`;
