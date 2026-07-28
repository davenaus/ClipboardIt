#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const siteMetadata = require('../src/config/siteMetadata.json');

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

  return tags.join('\n');
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

const unescapeTsString = value => value.replace(/\\'/g, "'").replace(/\\"/g, '"');

const extractString = (block, fieldName) => {
  const match = block.match(new RegExp(`${fieldName}:\\s*'((?:\\\\'|[^'])*)'`));
  return match ? unescapeTsString(match[1]) : '';
};

const extractNumber = (block, fieldName) => {
  const match = block.match(new RegExp(`${fieldName}:\\s*(\\d+)`));
  return match ? Number(match[1]) : 0;
};

const extractBoolean = (block, fieldName) => {
  const match = block.match(new RegExp(`${fieldName}:\\s*(true|false)`));
  return match ? match[1] === 'true' : false;
};

const extractStringArray = (block, fieldName) => {
  const match = block.match(new RegExp(`${fieldName}:\\s*\\[([^\\]]*)\\]`));
  if (!match) return [];
  return Array.from(match[1].matchAll(/'((?:\\'|[^'])*)'/g), item => unescapeTsString(item[1]));
};

const parseBlogPosts = () => {
  const blogSource = fs.readFileSync(path.join(__dirname, '../src/blog/data.ts'), 'utf8');
  const blocks = Array.from(blogSource.matchAll(/\n\s*{\s*\n\s*id:\s*'[^']+'[\s\S]*?relatedPosts:\s*\[[^\]]*\]\s*\n\s*}/g));

  return blocks.map(match => {
    const block = match[0];
    const imageBlock = block.match(/image:\s*{([\s\S]*?)\n\s*}/);

    return {
      slug: extractString(block, 'slug'),
      title: extractString(block, 'title'),
      description: extractString(block, 'description'),
      author: extractString(block, 'author') || AUTHOR_NAME,
      publishDate: extractString(block, 'publishDate'),
      lastModified: extractString(block, 'lastModified'),
      tags: extractStringArray(block, 'tags'),
      category: extractString(block, 'category'),
      readingTime: extractNumber(block, 'readingTime'),
      featured: extractBoolean(block, 'featured'),
      seoTitle: extractString(block, 'seoTitle'),
      seoDescription: extractString(block, 'seoDescription'),
      image: {
        url: imageBlock ? extractString(imageBlock[1], 'url') : DEFAULT_IMAGE,
        alt: imageBlock ? extractString(imageBlock[1], 'alt') : 'Clipboard It blog article'
      }
    };
  }).filter(post => post.slug);
};

const parseExtraPlugins = () => {
  const pluginSource = fs.readFileSync(path.join(__dirname, '../src/data/extraPlugins.ts'), 'utf8');
  const blocks = Array.from(pluginSource.matchAll(/\n\s*{\s*\n\s*slug:\s*'[^']+'[\s\S]*?workflow:\s*\[[\s\S]*?\]\s*\n\s*}/g));

  return blocks.map(match => {
    const block = match[0];

    return {
      slug: extractString(block, 'slug'),
      name: extractString(block, 'name'),
      description: extractString(block, 'description'),
      headline: extractString(block, 'headline'),
      format: extractString(block, 'format'),
      heroImage: extractString(block, 'heroImage'),
      priceLabel: extractString(block, 'priceLabel'),
      primaryCtaHref: extractString(block, 'primaryCtaHref')
    };
  }).filter(plugin => plugin.slug);
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
  path: '/',
  title: 'Clipboard It - Copy & Paste For Premiere Pro | Speed Up Your Video Editing',
  description:
    'Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste. Transform your video editing workflow and save hours every week.',
  keywords:
    'premiere pro, copy paste, video editing, workflow, clipboard, image import, adobe premiere, editing efficiency, productivity',
  url: absoluteUrl('/'),
  ogTitle: 'Clipboard It - Copy & Paste For Premiere Pro',
  ogDescription:
    'Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste. Transform your video editing workflow.',
  image: DEFAULT_IMAGE,
  imageAlt: 'Clipboard It Premiere Pro extension preview',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: absoluteUrl('/'),
        potentialAction: {
          '@type': 'SearchAction',
          target: `${absoluteUrl('/blog')}?search={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        description: 'Adobe Premiere Pro extension for copying and pasting images directly into your video editing workflow',
        url: SITE_URL,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: ['Windows', 'macOS'],
        offers: {
          '@type': 'Offer',
          price: '24.99',
          priceCurrency: 'USD',
          url: CLIPBOARD_ADOBE_URL,
          availability: 'https://schema.org/InStock'
        },
        author: {
          '@type': 'Person',
          name: AUTHOR_NAME
        },
        publisher: organizationSchema,
        screenshot: DEFAULT_IMAGE
      }
    ]
  }
};

const staticPages = [
  {
    path: '/installation',
    title: 'Clipboard It Installation Guide | Premiere Pro Extension',
    description:
      'Install Clipboard It from Adobe Exchange, open it in Premiere Pro, and troubleshoot common extension setup issues.',
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

const pluginPages = parseExtraPlugins().map(plugin => {
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

const blogPosts = parseBlogPosts();
const blogIndexPage = {
  path: '/blog',
  title: 'Premiere Pro Tips & Video Editing Tutorials | Clipboard It Blog',
  description:
    'Professional Premiere Pro tutorials, keyboard shortcuts, workflow optimization, and video editing techniques. Learn from industry experts and speed up your editing process.',
  keywords:
    'Premiere Pro, video editing, tutorials, keyboard shortcuts, workflow, productivity, audio editing, proxy workflow',
  url: absoluteUrl('/blog'),
  ogTitle: 'Premiere Pro Tips & Video Editing Tutorials',
  ogDescription:
    'Professional insights, workflow optimizations, and editing techniques to help you create better content faster.',
  image: DEFAULT_IMAGE,
  imageAlt: 'Clipboard It Premiere Pro blog',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Clipboard It Blog',
    description: 'Professional Premiere Pro tutorials and video editing tips',
    url: absoluteUrl('/blog'),
    publisher: organizationSchema,
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishDate,
      author: {
        '@type': 'Person',
        name: post.author
      }
    }))
  }
};

const blogPostPages = blogPosts.map(post => {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.description;

  return {
    path: `/blog/${post.slug}`,
    title,
    description,
    keywords: post.tags.join(', '),
    url,
    type: 'article',
    ogTitle: post.title,
    ogDescription: post.description,
    image: post.image.url,
    imageAlt: post.image.alt,
    article: {
      author: post.author,
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified,
      section: post.category,
      tags: post.tags
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: post.image.url,
      author: {
        '@type': 'Person',
        name: post.author
      },
      publisher: organizationSchema,
      datePublished: post.publishDate,
      dateModified: post.lastModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      url,
      timeRequired: `PT${post.readingTime}M`,
      keywords: post.tags.join(', '),
      articleSection: post.category,
      inLanguage: 'en-US',
      isAccessibleForFree: true
    }
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

const main = () => {
  if (!fs.existsSync(indexPath)) {
    console.error('Build index.html was not found. Run react-scripts build before prerender-route-meta.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf8');
  const routes = [homePage, ...staticPages, ...pluginPages, blogIndexPage, ...blogPostPages];

  routes.forEach(page => writeRoute(baseHtml, page.path, page));
  fs.writeFileSync(path.join(buildDir, '404.html'), renderHtml(baseHtml, notFoundPage), 'utf8');

  console.log(`Prerendered SEO metadata for ${routes.length} routes plus 404.html.`);
};

main();
