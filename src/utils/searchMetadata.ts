import { BlogPost } from '../blog/types';
import { absoluteUrl, AUTHOR_NAME, CLIPBOARD_ADOBE_URL, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './site';

export const homeSeo = {
  title: 'Clipboard It: Copy & Paste Plugin for Premiere Pro',
  description: 'Copy and paste images into Premiere Pro. Set your folder and bin once; the Clipboard It plugin saves, names, and imports each image. Mac and Windows.'
};

export const blogSeo = {
  title: 'Premiere Pro Tutorials: Images & Workflow | Clipboard It',
  description: 'Find Premiere Pro guides for pasting images, organizing media, editing shortcuts, audio, and proxies. Start with the task you need to complete.'
};

export const installationSeo = {
  title: 'Install Clipboard It in Premiere Pro: Setup Guide',
  description: 'Install Clipboard It through Adobe Exchange, open the Premiere Pro panel, save and import your first image, and troubleshoot setup or bin-import problems.'
};

export const supportSeo = {
  title: 'Clipboard It Support & FAQ',
  description: 'Clipboard It support and FAQ: installing from Adobe Exchange, Mac and Windows, Premiere versions, where pasted images are saved, and how to contact support.'
};

const publisher = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL };

export const createHomeSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: SITE_NAME, url: absoluteUrl('/') },
    {
      '@type': 'SoftwareApplication',
      name: SITE_NAME,
      description: homeSeo.description,
      url: absoluteUrl('/'),
      applicationCategory: 'MultimediaApplication',
      operatingSystem: ['Windows', 'macOS'],
      offers: {
        '@type': 'Offer', price: '24.99', priceCurrency: 'USD',
        url: CLIPBOARD_ADOBE_URL, availability: 'https://schema.org/InStock'
      },
      author: { '@type': 'Person', name: AUTHOR_NAME },
      publisher,
      screenshot: DEFAULT_OG_IMAGE
    }
  ]
});

export const createBlogSchema = (posts: BlogPost[]) => ({
  '@context': 'https://schema.org', '@type': 'Blog',
  name: 'Clipboard It Tutorials', description: blogSeo.description,
  url: absoluteUrl('/blog'), publisher,
  blogPost: posts.map(post => ({
    '@type': 'BlogPosting', headline: post.title,
    url: post.canonicalUrl || absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishDate,
    author: { '@type': 'Person', name: post.author }
  }))
});

export const createArticleSchema = (post: BlogPost) => {
  const url = post.canonicalUrl || absoluteUrl(`/blog/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', headline: post.title, description: post.description,
        image: post.image ? absoluteUrl(post.image.url) : undefined, author: { '@type': 'Person', name: post.author },
        publisher, datePublished: post.publishDate, dateModified: post.lastModified,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url,
        timeRequired: `PT${post.readingTime}M`, keywords: post.tags.join(', '),
        articleSection: post.category, inLanguage: 'en-US', isAccessibleForFree: true
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Tutorials', item: absoluteUrl('/blog') },
          { '@type': 'ListItem', position: 3, name: post.title, item: url }
        ]
      }
    ]
  };
};
