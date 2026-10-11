import { blogPosts } from '../blog/data';
import { extraPlugins } from '../data/extraPlugins';
import { absoluteUrl, SITE_URL } from './site';

export const staticPaths = ['/', '/blog', '/installation', '/support', '/privacy', '/terms'];

export const getSitePaths = (): string[] => [
  ...staticPaths,
  ...extraPlugins.map(plugin => `/plugins/${plugin.slug}`),
  ...blogPosts.map(post => `/blog/${post.slug}`)
];

const escapeXml = (value: string): string => value
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const generateSitemap = (): string => {
  const entries = getSitePaths().map(route => {
    const post = blogPosts.find(item => route === `/blog/${item.slug}`);
    const lastmod = post ? `\n    <lastmod>${escapeXml(post.lastModified)}</lastmod>` : '';
    return `  <url>\n    <loc>${escapeXml(absoluteUrl(route))}</loc>${lastmod}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
};

export const generateRobotsTxt = (): string =>
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
