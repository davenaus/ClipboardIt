import { blogPosts } from '../blog/data';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://clipboard.it';
  
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/installation`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      loc: `${baseUrl}/support`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6'
    }
  ];

  const blogUrls: SitemapUrl[] = blogPosts.map(post => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.lastModified,
    changefreq: 'monthly',
    priority: post.featured ? '0.8' : '0.7'
  }));

  const allUrls = [...staticPages, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (): string => {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://clipboard.it/sitemap.xml

# Block crawling of admin paths (if any)
Disallow: /admin/
Disallow: /.well-known/

# Allow all content for SEO
Allow: /blog/
Allow: /installation/
Allow: /privacy/
Allow: /terms/
Allow: /support/
`;
};
