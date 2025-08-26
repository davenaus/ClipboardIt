import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'premiere-pro': 'bg-purple-100 text-purple-800',
      'clipboard-it': 'bg-blue-100 text-blue-800',
      'video-editing': 'bg-green-100 text-green-800',
      'workflow': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

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

  // Extract first few sentences for preview
  const getContentPreview = (content: string) => {
    const plainText = content
      .replace(/#{1,3}\s+/g, '') // Remove markdown headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
      .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // Remove images
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/>/g, '') // Remove blockquote markers
      .trim();
    
    const sentences = plainText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const preview = sentences.slice(0, 2).join('. ');
    return preview.length > 150 ? preview.substring(0, 150) + '...' : preview + '.';
  };

  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="blog-card" style={{ cursor: 'pointer' }}>
        {/* Enhanced Image Section */}
        <div 
          className="blog-card-image"
          style={{
            height: post.image ? '200px' : '120px',
            background: !post.image ? getCategoryBackground(post.category) : 'transparent',
            overflow: 'hidden'
          }}
        >
          {post.image ? (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {!imageLoaded && !imageError && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: getCategoryBackground(post.category),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    Loading...
                  </div>
                </div>
              )}
              
              <img 
                src={post.image.url}
                alt={post.image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: imageLoaded ? 1 : 0
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
              
              {imageError && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: getCategoryBackground(post.category),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div className="blog-card-icon">
                    {getCategoryIcon(post.category)}
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '12px',
                    textAlign: 'center'
                  }}>
                    Image unavailable
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="blog-card-icon">
                {getCategoryIcon(post.category)}
              </div>
            </>
          )}
          
          {post.featured && (
            <div className="featured-badge">Featured</div>
          )}
        </div>
        
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className={`category-badge ${getCategoryColor(post.category)}`}>
              {post.category.replace('-', ' ')}
            </span>
            <time className="publish-date" dateTime={post.publishDate}>
              {formatDate(post.publishDate)}
            </time>
          </div>
          
          <h2 className="blog-card-title" style={{ 
            fontSize: '18px',
            lineHeight: '1.4',
            marginBottom: '12px',
            fontWeight: '700'
          }}>
            {post.title}
          </h2>
          
          {/* Enhanced description with content preview */}
          <p className="blog-card-description" style={{
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {post.description}
          </p>

          {/* Content preview for longer articles */}
          {post.readingTime > 5 && (
            <p style={{
              fontSize: '13px',
              color: 'var(--gray-400)',
              lineHeight: '1.5',
              marginBottom: '16px',
              fontStyle: 'italic',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              "{getContentPreview(post.content)}"
            </p>
          )}
          
          <div className="blog-card-footer">
            <div className="blog-card-tags" style={{ flex: 1 }}>
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} className="tag" style={{
                  background: 'rgba(104, 83, 255, 0.1)',
                  color: 'var(--primary-light)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '500',
                  marginRight: '6px'
                }}>
                  #{tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span style={{
                  color: 'var(--gray-500)',
                  fontSize: '11px'
                }}>
                  +{post.tags.length - 2} more
                </span>
              )}
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              fontSize: '12px',
              color: 'var(--gray-400)'
            }}>
              <span className="reading-time">
                📖 {post.readingTime} min
              </span>
              {post.image && (
                <span>📷 Visual</span>
              )}
            </div>
          </div>
          
          <div className="read-more-link" style={{ 
            pointerEvents: 'none',
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            Continue Reading
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
