import { blogPosts } from '../blog/data';

interface SitemapEntry {
  url: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://clipboard.it';
  const currentDate = new Date().toISOString();

  const staticPages: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      priority: '1.0',
      changefreq: 'monthly'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      priority: '0.9',
      changefreq: 'weekly'
    },
    {
      url: `${baseUrl}/installation`,
      lastmod: currentDate,
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      url: `${baseUrl}/support`,
      lastmod: currentDate,
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: currentDate,
      priority: '0.3',
      changefreq: 'yearly'
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      priority: '0.3',
      changefreq: 'yearly'
    }
  ];

  const blogPages: SitemapEntry[] = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.lastModified,
    priority: post.featured ? '0.9' : '0.8',
    changefreq: 'monthly'
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Blog content
Allow: /blog/
Allow: /blog/*

# Static pages
Allow: /installation
Allow: /support
Allow: /privacy
Allow: /terms

# Sitemaps
Sitemap: https://clipboard.it/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;
};

// Function to save sitemap to public directory (for build process)
export const saveSitemapToPublic = async (): Promise<void> => {
  if (typeof window !== 'undefined') {
    console.warn('Sitemap generation should only be run during build process');
    return;
  }

  try {
    const fs = require('fs');
    const path = require('path');
    
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    const robotsPath = path.join(publicDir, 'robots.txt');
    
    // Generate and save sitemap
    const sitemapContent = generateSitemap();
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    // Generate and save robots.txt
    const robotsContent = generateRobotsTxt();
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    
    console.log('✅ Sitemap and robots.txt generated successfully');
    console.log(`📊 Generated sitemap with ${blogPosts.length + 6} URLs`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// SEO utilities
export const generateStructuredData = (type: 'website' | 'blog' | 'blogPost', data?: any) => {
  const baseStructure = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case 'website':
      return {
        ...baseStructure,
        "@type": "WebSite",
        "name": "Clipboard It",
        "description": "Streamline your Premiere Pro workflow with instant image importing",
        "url": "https://clipboard.it",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://clipboard.it/blog?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

    case 'blog':
      return {
        ...baseStructure,
        "@type": "Blog",
        "name": "Clipboard It Blog",
        "description": "Professional Premiere Pro tutorials and video editing tips",
        "url": "https://clipboard.it/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Clipboard It",
          "url": "https://clipboard.it"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://clipboard.it/blog"
        }
      };

    case 'blogPost':
      if (!data) return baseStructure;
      return {
        ...baseStructure,
        "@type": "BlogPosting",
        "headline": data.title,
        "description": data.description,
        "image": data.image?.url,
        "author": {
          "@type": "Person",
          "name": data.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Clipboard It",
          "url": "https://clipboard.it",
          "logo": {
            "@type": "ImageObject",
            "url": "https://clipboard.it/logo.png"
          }
        },
        "datePublished": data.publishDate,
        "dateModified": data.lastModified,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://clipboard.it/blog/${data.slug}`
        },
        "url": `https://clipboard.it/blog/${data.slug}`,
        "wordCount": data.content.split(' ').length,
        "timeRequired": `PT${data.readingTime}M`,
        "keywords": data.tags.join(', '),
        "articleSection": data.category,
        "inLanguage": "en-US",
        "isAccessibleForFree": true
      };

    default:
      return baseStructure;
  }
};

export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://clipboard.it';
  return `${baseUrl}${path}`;
};

export const getPageTitle = (title: string, includeAppName: boolean = true): string => {
  if (includeAppName) {
    return `${title} | Clipboard It`;
  }
  return title;
};

export const truncateDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  const truncated = description.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? `${truncated.substring(0, lastSpace)}...` : `${truncated}...`;
};
