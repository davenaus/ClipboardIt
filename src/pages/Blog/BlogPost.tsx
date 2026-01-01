import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug, getRelatedPosts } from '../../blog/data';
import BlogCard from '../../blog/components/BlogCard';
import MarkdownRenderer from '../../blog/components/MarkdownRenderer';
import { blogStyles } from '../../blog/components/BlogStyles';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);

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

  // Generate Table of Contents from headings in content
  const generateTableOfContents = (content: string) => {
    // Remove the first H1 (title) and first image from content for TOC generation
    const cleanContent = content
      .replace(/^#\s+.*$/m, '') // Remove first H1
      .replace(/!\[[^\]]*\]\([^)]*\)/, ''); // Remove first image
    
    const headings = cleanContent.match(/^(#{1,3})\s+(.+)$/gm);
    if (!headings || headings.length < 3) return null;

    return (
      <div className="table-of-contents">
        <h4>📖 Table of Contents</h4>
        <ul>
          {headings.map((heading, index) => {
            const level = heading.match(/^#+/)?.[0].length || 1;
            const text = heading.replace(/^#+\s*/, '');
            const id = text.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <li key={index} style={{ marginLeft: `${(level - 1) * 16}px` }}>
                <a href={`#${id}`}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // Clean content by removing duplicate title and first image
  const getCleanContent = (content: string) => {
    return content
      .replace(/^#\s+.*$/m, '') // Remove first H1 (title)
      .replace(/^\s*!\[[^\]]*\]\([^)]*\)\s*$/m, '') // Remove first image
      .trim();
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
      
      {/* Hero Section with Gradient - Same as Blog List */}
      <section className="blog-hero">
        <div className="container">
          <Header />
          {/* Blog Post Hero Content */}
          <div className="blog-hero-content" style={{ margin: '60px auto 0', textAlign: 'left' }}>
            <nav className="blog-nav" style={{ margin: '0 0 40px 0' }}>
              <Link to="/blog" className="back-to-blog">
                ← Back to Blog
              </Link>
            </nav>
            
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
            
            <h1 className="blog-hero-title" style={{ 
              fontSize: '36px',
              lineHeight: '1.1',
              marginBottom: '16px'
            }}>{post.title}</h1>
            <p className="blog-hero-subtitle" style={{
              fontSize: '18px',
              marginBottom: '24px',
              maxWidth: '800px'
            }}>{post.description}</p>
            
            <div className="author-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>By {post.author}</span>
              <span>•</span>
              <span>Updated {formatDate(post.lastModified)}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="blog-post-container">
        <article>
          {/* Hero Image */}
          {post.image && (
            <div className="markdown-image-wrapper">
              <img 
                src={post.image.url} 
                alt={post.image.alt}
                className="markdown-image"
                style={{ marginBottom: '2rem' }}
              />
              {post.image.alt && (
                <p className="markdown-image-caption">{post.image.alt}</p>
              )}
            </div>
          )}

          {/* Table of Contents - Above Content */}
          {generateTableOfContents(post.content)}

          {/* Enhanced Markdown Content */}
          <MarkdownRenderer content={getCleanContent(post.content)} />

          {/* Tags */}
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '2px solid var(--gray-800)' 
          }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              marginBottom: '1rem', 
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🏷️ Tags
            </h3>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(104, 83, 255, 0.1)',
                    color: 'var(--primary-light)',
                    border: '1px solid rgba(104, 83, 255, 0.3)',
                    borderRadius: '25px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(104, 83, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--primary-light)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Share Section */}
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--gray-800)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              color: 'var(--white)' 
            }}>
              Share this article
            </h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://clipboard.it/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.5rem',
                  background: '#1DA1F2',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
                Tweet
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://clipboard.it/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.5rem',
                  background: '#0077B5',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2 className="related-posts-title">📚 Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* Enhanced Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #6853FF, #8B5FBF)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          textAlign: 'center',
          color: 'white',
          marginTop: '4rem',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'4\'/%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
            zIndex: 0
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '800', 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              🚀 Ready to Speed Up Your Premiere Pro Workflow?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '2rem', 
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6
            }}>
              Stop wasting time with manual image imports. Try Clipboard It and paste images directly into Premiere Pro with one click.
            </p>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1rem 2.5rem',
                background: 'white',
                color: '#6853FF',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              Download Clipboard It
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPostPage;
