import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { blogImageSrcSet } from '../images';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryBackground = (category: string) => {
    const backgrounds = {
      'premiere-pro': 'linear-gradient(135deg, #6853FF, #8B5FBF)',
      'clipboard-it': 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
      'video-editing': 'linear-gradient(135deg, #10B981, #047857)',
      'workflow': 'linear-gradient(135deg, #F59E0B, #D97706)'
    };
    return backgrounds[category as keyof typeof backgrounds] || 'linear-gradient(135deg, #6B7280, #4B5563)';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'premiere-pro': (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 8.5C14.5 9.32843 13.8284 10 13 10C12.1716 10 11.5 9.32843 11.5 8.5C11.5 7.67157 12.1716 7 13 7C13.8284 7 14.5 7.67157 14.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'clipboard-it': (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'video-editing': (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'workflow': (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 2V6H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 7V13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 6L12 15L7.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[category as keyof typeof icons] || icons['workflow'];
  };

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article className="blog-card">
        <div
          className="blog-card-image"
          style={!post.image ? { background: getCategoryBackground(post.category) } : undefined}
        >
          {post.image && (
            <img
              src={post.image.url}
              srcSet={blogImageSrcSet(post.image.url)}
              sizes="(max-width: 600px) calc(100vw - 40px), 400px"
              alt={post.image.alt}
              width={post.image.width || 2048}
              height={post.image.height || 1365}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
            />
          )}
          {(!post.image || imageError) && (
            <div
              className="blog-card-fallback"
              style={{ background: getCategoryBackground(post.category) }}
            >
              {getCategoryIcon(post.category)}
            </div>
          )}
          {post.featured && <div className="featured-badge">Featured</div>}
        </div>

        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="category-badge">{post.category.replace(/-/g, ' ')}</span>
            <span className="blog-card-meta-dot" aria-hidden="true" />
            <span>{post.readingTime} min read</span>
          </div>

          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-description">{post.description}</p>

          <div className="read-more-link">
            Continue reading
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
