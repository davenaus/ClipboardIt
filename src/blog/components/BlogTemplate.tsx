import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import HeaderWithAnnouncement from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { blogStyles } from './BlogStyles';

interface BlogTemplateProps {
  post: BlogPost;
  children: React.ReactNode;
  relatedPosts?: BlogPost[];
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ post, children, relatedPosts = [] }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image?.url,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Clipboard It",
      "url": "https://clipboard.it"
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://clipboard.it/blog/${post.slug}`
    },
    "url": `https://clipboard.it/blog/${post.slug}`,
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime}M`,
    "keywords": post.tags.join(', '),
    "articleSection": post.category
  };

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.description} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={post.canonicalUrl || `https://clipboard.it/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://clipboard.it/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image?.url} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.lastModified} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image?.url} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <style>{blogStyles}</style>
      
      <HeaderWithAnnouncement />

      <main className="blog-post-container">
        <nav className="blog-nav">
          <Link to="/blog" className="back-to-blog">
            ← Back to Blog
          </Link>
        </nav>

        <article>
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className={`category-badge ${getCategoryColor(post.category)}`}>
                {post.category.replace('-', ' ')}
              </span>
              <time className="publish-date" dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
              <span className="reading-time">{post.readingTime} min read</span>
            </div>
            
            {post.featured && (
              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #6853FF, #8B5FBF)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Featured
                </span>
              </div>
            )}
            
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-description">{post.description}</p>
            
            <div className="author-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>By {post.author}</span>
              <span>•</span>
              <span>Updated {formatDate(post.lastModified)}</span>
            </div>
          </header>

          {post.image && (
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src={post.image.url} 
                alt={post.image.alt}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          )}

          {children}

          {/* Tags */}
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
              Tags
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: '#f3f4f6',
                    color: '#6853FF',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2 className="related-posts-title">Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="related-post-card">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.description}</p>
                    <span className="read-more">Read More →</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #6853FF, #8B5FBF)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
          color: 'white',
          marginTop: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Ready to Speed Up Your Premiere Pro Workflow?
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
            Stop wasting time with manual image imports. Try Clipboard It and paste images directly into Premiere Pro.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'white',
              color: '#6853FF',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Download Clipboard It
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogTemplate;
