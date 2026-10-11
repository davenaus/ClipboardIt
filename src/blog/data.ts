import { BlogPost } from './types';
import post1 from './posts/why-you-cant-copy-paste-images-premiere-pro';
import post2 from './posts/10-premiere-pro-keyboard-shortcuts-save-hours';
import post3 from './posts/premiere-pro-proxy-workflow-complete-guide';
import post4 from './posts/5-essential-audio-editing-techniques-premiere-pro';
import post5 from './posts/organize-premiere-pro-projects-like-pro';
import post6 from './posts/fit-image-to-frame-premiere-pro';
import post7 from './posts/ken-burns-effect-premiere-pro';
import post8 from './posts/premiere-pro-image-file-format-not-supported';
import post9 from './posts/transparent-png-background-premiere-pro';
import post10 from './posts/speed-ramp-premiere-pro';
import post11 from './posts/premiere-pro-export-settings-youtube';

export const blogPosts: BlogPost[] = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === postId);
  if (!currentPost) return [];
  
  // First try to get posts from related posts array
  const relatedFromArray = currentPost.relatedPosts
    ? currentPost.relatedPosts.map(id => blogPosts.find(post => post.id === id)).filter((post): post is BlogPost => Boolean(post))
    : [];
  
  // If not enough related posts, get posts from same category
  const categoryPosts = getPostsByCategory(currentPost.category)
    .filter(post => post.id !== postId);
  
  // Combine and limit
  const combined = [...relatedFromArray, ...categoryPosts];
  const unique = combined.filter((post, index, self) => 
    self.findIndex(p => p.id === post.id) === index
  );
  
  return unique.slice(0, limit);
};

export const getAllTags = (): string[] => {
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return uniqueTags.sort();
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};
