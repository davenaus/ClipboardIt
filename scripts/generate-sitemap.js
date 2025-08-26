#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import blog data (we'll need to read it directly from the file)
const blogDataPath = path.join(__dirname, '../src/blog/data.ts');
let blogPosts = [];

try {
  // Read and parse the blog data file to extract posts
  const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');
  
  // Extract the blogPosts array using regex (simple approach)
  const postsMatch = blogDataContent.match(/export const blogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
  
  if (postsMatch) {
    // This is a simplified extraction - in a real scenario you might want to use TypeScript compilation
    // For now, we'll create a basic sitemap with known URLs
    console.log('✅ Found blog posts data');
  }
} catch (error) {
  console.log('⚠️  Could not parse blog data, using fallback approach');
}

// Known blog post slugs (update this list when adding new posts)
const knownBlogPosts = [
  'why-you-cant-copy-paste-images-premiere-pro',
  '10-premiere-pro-keyboard-shortcuts-save-hours',
  'premiere-pro-proxy-workflow-complete-guide',
  '5-essential-audio-editing-techniques-premiere-pro',
  'organize-premiere-pro-projects-like-pro'
];

const generateSitemap = () => {
  const baseUrl = 'https://clipboard.it';
  const currentDate = new Date().toISOString();

  const staticPages = [
    { url: `${baseUrl}/`, lastmod: currentDate, priority: '1.0', changefreq: 'monthly' },
    { url: `${baseUrl}/blog`, lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/installation`, lastmod: currentDate, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/support`, lastmod: currentDate, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/privacy`, lastmod: currentDate, priority: '0.3', changefreq: 'yearly' },
    { url: `${baseUrl}/terms`, lastmod: currentDate, priority: '0.3', changefreq: 'yearly' }
  ];

  const blogPages = knownBlogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastmod: currentDate,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allPages = [...staticPages, ...blogPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
};

const generateRobotsTxt = () => {
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

# Crawl delay
Crawl-delay: 1`;
};

// Main execution
const main = () => {
  try {
    const publicDir = path.join(__dirname, '../public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    const robotsPath = path.join(publicDir, 'robots.txt');

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and save sitemap
    const sitemapContent = generateSitemap();
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Generated sitemap.xml');

    // Generate and save robots.txt
    const robotsContent = generateRobotsTxt();
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Generated robots.txt');

    console.log(`📊 Sitemap contains ${6 + knownBlogPosts.length} URLs`);
    console.log('🚀 SEO files generated successfully!');

  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
};

// Run the script
main();
