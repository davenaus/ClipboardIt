export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  tags: string[];
  category: 'premiere-pro' | 'clipboard-it' | 'video-editing' | 'workflow';
  readingTime: number;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  relatedPosts?: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  color: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}
