import { absoluteUrl, SITE_URL } from './site';
export { generateSitemap, generateRobotsTxt } from './sitemap';

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
        "url": SITE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${absoluteUrl('/blog')}?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };

    case 'blog':
      return {
        ...baseStructure,
        "@type": "Blog",
        "name": "Clipboard It Blog",
        "description": "Professional Premiere Pro tutorials and video editing tips",
        "url": absoluteUrl('/blog'),
        "publisher": {
          "@type": "Organization",
          "name": "Clipboard It",
          "url": SITE_URL
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": absoluteUrl('/blog')
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
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": absoluteUrl('/logo.png')
          }
        },
        "datePublished": data.publishDate,
        "dateModified": data.lastModified,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": absoluteUrl(`/blog/${data.slug}`)
        },
        "url": absoluteUrl(`/blog/${data.slug}`),
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
  return absoluteUrl(path);
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
