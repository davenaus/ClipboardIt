#!/usr/bin/env node
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
require('./load-source');
const React = require('react');
const { renderToPipeableStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { PassThrough } = require('stream');
const App = require('../src/App').default;
const { blogPosts } = require('../src/blog/data');
const { extraPlugins } = require('../src/data/extraPlugins');
const siteMetadata = require('../src/config/siteMetadata.json');
const { homeSeo, blogSeo, installationSeo, createHomeSchema, createBlogSchema, createArticleSchema } = require('../src/utils/searchMetadata');

const buildDir = path.join(__dirname, '../build');
const indexPath = path.join(buildDir, 'index.html');
const SITE_URL = siteMetadata.siteUrl.replace(/\/$/, '');
const SITE_NAME = siteMetadata.siteName;
const AUTHOR_NAME = siteMetadata.authorName;
const DEFAULT_IMAGE = siteMetadata.defaultOgImage;
const CLIPBOARD_ADOBE_URL = siteMetadata.clipboardAdobeUrl;

const absoluteUrl = routePath => {
  if (!routePath || routePath === '/') return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(routePath)) return routePath;
  return `${SITE_URL}${routePath.startsWith('/') ? routePath : `/${routePath}`}`;
};

const escapeHtml = value =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const safeJson = value => JSON.stringify(value).replace(/</g, '\\u003c');

const stripManagedHeadTags = html => {
  const patterns = [
    /[ \t]*<title>[\s\S]*?<\/title>\s*/i,
    /[ \t]*<link\s+rel=["']canonical["'][^>]*>\s*/gi,
    /[ \t]*<meta\s+(?:name|property)=["'](?:title|description|keywords|robots|googlebot|author|blog|article:[^"']+|og:[^"']+|twitter:[^"']+)["'][^>]*>\s*/gi,
    /[ \t]*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi
  ];

  return patterns.reduce((output, pattern) => output.replace(pattern, ''), html);
};

const buildMetaTags = page => {
  const canonical = page.canonical === false ? null : page.canonical || page.url;
  const image = page.image || DEFAULT_IMAGE;
  const imageAlt = page.imageAlt || page.title;
  const robots = page.robots || 'index, follow';
  const type = page.type || 'website';
  const tags = [
    `    <title>${escapeHtml(page.title)}</title>`,
    `    <meta name="title" content="${escapeHtml(page.title)}">`,
    `    <meta name="description" content="${escapeHtml(page.description)}">`,
    `    <meta name="robots" content="${escapeHtml(robots)}">`,
    `    <meta name="author" content="${escapeHtml(AUTHOR_NAME)}">`
  ];

  if (page.keywords) {
    tags.push(`    <meta name="keywords" content="${escapeHtml(page.keywords)}">`);
  }

  if (canonical) {
    tags.push(`    <link rel="canonical" href="${escapeHtml(canonical)}">`);
  }

  tags.push(
    `    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}">`,
    '    <meta property="og:locale" content="en_US">',
    `    <meta property="og:type" content="${escapeHtml(type)}">`,
    `    <meta property="og:url" content="${escapeHtml(page.url)}">`,
    `    <meta property="og:title" content="${escapeHtml(page.ogTitle || page.title)}">`,
    `    <meta property="og:description" content="${escapeHtml(page.ogDescription || page.description)}">`,
    `    <meta property="og:image" content="${escapeHtml(image)}">`,
    `    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}">`,
    '    <meta name="twitter:card" content="summary_large_image">',
    `    <meta name="twitter:url" content="${escapeHtml(page.url)}">`,
    `    <meta name="twitter:title" content="${escapeHtml(page.twitterTitle || page.ogTitle || page.title)}">`,
    `    <meta name="twitter:description" content="${escapeHtml(page.twitterDescription || page.ogDescription || page.description)}">`,
    `    <meta name="twitter:image" content="${escapeHtml(image)}">`
  );

  if (page.article) {
    tags.push(
      `    <meta property="article:author" content="${escapeHtml(page.article.author)}">`,
      `    <meta property="article:published_time" content="${escapeHtml(page.article.publishedTime)}">`,
      `    <meta property="article:modified_time" content="${escapeHtml(page.article.modifiedTime)}">`,
      `    <meta property="article:section" content="${escapeHtml(page.article.section)}">`
    );

    page.article.tags.forEach(tag => {
      tags.push(`    <meta property="article:tag" content="${escapeHtml(tag)}">`);
    });
  }

  if (page.jsonLd) {
    tags.push(`    <script type="application/ld+json">${safeJson(page.jsonLd)}</script>`);
  }

  return tags.join('\n').replace(/<(title|meta|link|script)(?=[ >])/g, '<$1 data-rh="true"');
};

const renderHtml = (baseHtml, page) =>
  stripManagedHeadTags(baseHtml).replace(/\s*<\/head>/i, `\n${buildMetaTags(page)}\n  </head>`);

const writeRoute = (baseHtml, routePath, page) => {
  const outputPath =
    routePath === '/'
      ? indexPath
      : path.join(buildDir, routePath.replace(/^\/|\/$/g, ''), 'index.html');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, renderHtml(baseHtml, page), 'utf8');
};

const organizationSchema = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL
};

const webPageSchema = page => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: page.title,
  description: page.description,
  url: page.url,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL
  },
  publisher: organizationSchema
});

const homePage = {
  path: '/', ...homeSeo, url: absoluteUrl('/'),
  image: DEFAULT_IMAGE, imageAlt: 'Clipboard It Premiere Pro extension preview',
  jsonLd: createHomeSchema()
};

const staticPages = [
  {
    path: '/installation',
    ...installationSeo,
    keywords: 'Clipboard It installation, Premiere Pro extension install, Adobe Exchange plugin',
    url: absoluteUrl('/installation')
  },
  {
    path: '/support',
    title: 'Support | Clipboard It',
    description:
      'Contact Clipboard It support for installation help, bug reports, purchase questions, and feature requests.',
    keywords: 'Clipboard It support, Premiere Pro plugin support, Adobe Exchange support',
    url: absoluteUrl('/support')
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Clipboard It',
    description:
      'Read the Clipboard It privacy policy for information about support, purchase, usage, and error-report data.',
    keywords: 'Clipboard It privacy policy, Premiere Pro extension privacy',
    url: absoluteUrl('/privacy')
  },
  {
    path: '/terms',
    title: 'Terms and Conditions | Clipboard It',
    description:
      'Read the Clipboard It terms and conditions for licensing, payment, support, and software-use details.',
    keywords: 'Clipboard It terms, Premiere Pro extension license, Clipboard It conditions',
    url: absoluteUrl('/terms')
  }
].map(page => ({
  ...page,
  jsonLd: webPageSchema(page)
}));

const pluginPages = extraPlugins.map(plugin => {
  const url = absoluteUrl(`/plugins/${plugin.slug}`);
  const image = absoluteUrl(plugin.heroImage);
  const isFree = plugin.priceLabel === 'Free';
  const offer = {
    '@type': 'Offer',
    price: isFree ? '0' : plugin.priceLabel.replace(/[^0-9.]/g, ''),
    priceCurrency: 'USD',
    url: plugin.primaryCtaHref,
    availability: 'https://schema.org/InStock'
  };

  return {
    path: `/plugins/${plugin.slug}`,
    title: `${plugin.name} - Premiere Pro Plugin | Clipboard It`,
    description: `${plugin.name}: ${plugin.description}`,
    keywords: `${plugin.name}, Premiere Pro plugin, Adobe Exchange, Clipboard It, video editing workflow`,
    url,
    ogTitle: `${plugin.name} - Premiere Pro Plugin`,
    ogDescription: plugin.description,
    image,
    imageAlt: `${plugin.name} panel mockup`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: plugin.name,
      description: plugin.description,
      url,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: ['Windows', 'macOS'],
      image,
      offers: offer,
      publisher: organizationSchema
    }
  };
});

const blogIndexPage = {
  path: '/blog', ...blogSeo, url: absoluteUrl('/blog'),
  image: DEFAULT_IMAGE, imageAlt: 'Clipboard It Premiere Pro tutorials',
  jsonLd: createBlogSchema(blogPosts)
};

const blogPostPages = blogPosts.map(post => {
  const url = post.canonicalUrl || absoluteUrl(`/blog/${post.slug}`);
  return {
    path: `/blog/${post.slug}`,
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    keywords: post.tags.join(', '), url, canonical: url, type: 'article',
    ogTitle: post.title, ogDescription: post.description,
    image: post.image ? absoluteUrl(post.image.url) : undefined, imageAlt: post.image?.alt,
    article: {
      author: post.author, publishedTime: post.publishDate,
      modifiedTime: post.lastModified, section: post.category, tags: post.tags
    },
    jsonLd: createArticleSchema(post)
  };
});

const notFoundPage = {
  title: 'Page Not Found | Clipboard It',
  description: 'This Clipboard It page could not be found. Return to Clipboard It or contact support.',
  url: absoluteUrl('/404'),
  canonical: false,
  robots: 'noindex, follow',
  image: DEFAULT_IMAGE,
  imageAlt: 'Clipboard It',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page Not Found',
    description: 'This Clipboard It page could not be found.',
    url: absoluteUrl('/404'),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  }
};

const renderPage = url => new Promise((resolve, reject) => {
  const output = new PassThrough();
  let html = '';
  const timeout = setTimeout(() => {
    stream.abort();
    reject(new Error('Rendering timed out: ' + url));
  }, 30000);
  output.on('data', chunk => { html += chunk.toString(); });
  output.on('end', () => { clearTimeout(timeout); resolve(html); });
  output.on('error', error => { clearTimeout(timeout); reject(error); });
  const stream = renderToPipeableStream(
    React.createElement(StaticRouter, { location: url }, React.createElement(App)),
    {
      onAllReady() { stream.pipe(output); },
      onError(error) { clearTimeout(timeout); reject(error); }
    }
  );
});

const main = async () => {
  if (!fs.existsSync(indexPath)) {
    console.error('Build index.html was not found. Run react-scripts build before prerender-route-meta.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf8');
  if (!baseHtml.includes('<div id="root"></div>')) {
    throw new Error('Expected a fresh React build. Run npm run build to regenerate all routes.');
  }
  const routes = [homePage, ...staticPages, ...pluginPages, blogIndexPage, ...blogPostPages];

  for (const page of routes) {
    const body = await renderPage(page.path);
    const html = baseHtml.replace('<div id="root"></div>', () => '<div id="root">' + body + '</div>');
    writeRoute(html, page.path, page);
  }
  const notFoundBody = await renderPage('/404');
  const notFoundHtml = baseHtml.replace('<div id="root"></div>', () => '<div id="root">' + notFoundBody + '</div>');
  fs.writeFileSync(path.join(buildDir, '404.html'), renderHtml(notFoundHtml, notFoundPage), 'utf8');

  console.log(`Prerendered content and SEO metadata for ${routes.length} routes plus 404.html.`);
};

main().catch(error => { console.error(error); process.exitCode = 1; });
