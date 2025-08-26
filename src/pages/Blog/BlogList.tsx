import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts, getAllTags, getPostsByTag, getPostsByCategory } from '../../blog/data';
import BlogCard from '../../blog/components/BlogCard';
import { blogStyles } from '../../blog/components/BlogStyles';
import HeaderWithAnnouncement from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const BlogListPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'featured' | string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const allTags = getAllTags();

  // Enhanced search functionality
  const getFilteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by category first
    if (selectedCategory !== 'all') {
      posts = getPostsByCategory(selectedCategory);
    }

    // Apply additional filters
    if (selectedFilter === 'featured') {
      posts = posts.filter(post => post.featured);
    } else if (selectedFilter !== 'all') {
      posts = getPostsByTag(selectedFilter);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    // Sort by publish date (newest first), with featured posts boosted
    return posts.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
  }, [selectedCategory, selectedFilter, searchQuery]);

  const filteredPosts = getFilteredPosts;
  const featuredPosts = blogPosts.filter(post => post.featured);

  const categories = [
    { id: 'all', name: '📚 All Posts', count: blogPosts.length },
    { id: 'premiere-pro', name: '🎬 Premiere Pro', count: getPostsByCategory('premiere-pro').length },
    { id: 'clipboard-it', name: '📋 Clipboard It', count: getPostsByCategory('clipboard-it').length },
    { id: 'workflow', name: '⚡ Workflow', count: getPostsByCategory('workflow').length },
    { id: 'video-editing', name: '✂️ Video Editing', count: getPostsByCategory('video-editing').length }
  ];

  // Keyboard shortcuts for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const clearFilters = () => {
    setSelectedFilter('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  // Search suggestions based on current query
  const getSearchSuggestions = () => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    
    const query = searchQuery.toLowerCase();
    const suggestions = new Set<string>();
    
    blogPosts.forEach(post => {
      post.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query) && !suggestions.has(tag)) {
          suggestions.add(tag);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, 5);
  };

  const searchSuggestions = getSearchSuggestions();

  return (
    <>
      <Helmet>
        <title>Premiere Pro Tips & Video Editing Tutorials | Clipboard It Blog</title>
        <meta name="description" content="Professional Premiere Pro tutorials, keyboard shortcuts, workflow optimization, and video editing techniques. Learn from industry experts and speed up your editing process." />
        <meta name="keywords" content="Premiere Pro, video editing, tutorials, keyboard shortcuts, workflow, productivity, audio editing, proxy workflow" />
        <link rel="canonical" href="https://clipboard.it/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premiere Pro Tips & Video Editing Tutorials" />
        <meta property="og:description" content="Professional insights, workflow optimizations, and editing techniques to help you create better content faster." />
        <meta property="og:url" content="https://clipboard.it/blog" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Clipboard It Blog",
            "description": "Professional Premiere Pro tutorials and video editing tips",
            "url": "https://clipboard.it/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Clipboard It"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": `https://clipboard.it/blog/${post.slug}`,
              "datePublished": post.publishDate,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      <style>{blogStyles}</style>
      
      {/* Hero Section with Enhanced Design */}
      <section className="blog-hero">
        <div className="container">
          <HeaderWithAnnouncement />
          <div className="blog-hero-content">
            <div className="blog-overline">Professional Resources</div>
            <h1 className="blog-hero-title">
              Master Premiere Pro & <span className="gradient-text">Video Editing</span>
            </h1>
            <p className="blog-hero-subtitle">
              Professional insights, workflow optimizations, and editing techniques from industry experts. 
              Learn the shortcuts, tools, and strategies that separate professional editors from beginners.
            </p>
            <div className="blog-stats">
              <div className="stat-item">
                <div className="stat-number">{blogPosts.length}</div>
                <div className="stat-label">Expert Articles</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">{Math.round(blogPosts.reduce((sum, post) => sum + post.readingTime, 0) / 60)}</div>
                <div className="stat-label">Hours of Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="blog-container">
        {/* Enhanced Search and Filter Section */}
        <div className="filter-nav" style={{ marginBottom: '40px' }}>
          {/* Search Section */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔍 Search Articles
            </h3>
            <div style={{ position: 'relative', maxWidth: '500px' }}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search tutorials, shortcuts, techniques... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                style={{
                  width: '100%',
                  padding: '16px 50px 16px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `2px solid ${isSearchFocused ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '12px',
                  color: 'var(--white)',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              />
              
              {/* Search Icon */}
              <div style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--gray-400)',
                pointerEvents: 'none'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21L16.65 16.65"/>
                </svg>
              </div>

              {/* Search Suggestions */}
              {searchSuggestions.length > 0 && isSearchFocused && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'var(--dark-surface)',
                  border: '1px solid var(--gray-700)',
                  borderRadius: '8px',
                  marginTop: '4px',
                  padding: '8px 0',
                  zIndex: 10,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}>
                  <div style={{ 
                    padding: '8px 16px', 
                    fontSize: '12px', 
                    color: 'var(--gray-400)', 
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Popular Tags
                  </div>
                  {searchSuggestions.map(tag => (
                    <div
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      style={{
                        padding: '8px 16px',
                        cursor: 'pointer',
                        color: 'var(--gray-300)',
                        fontSize: '14px',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(104, 83, 255, 0.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '16px' }}>📂 Categories</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFilter('all');
                  }}
                  style={{
                    padding: '12px 20px',
                    border: selectedCategory === category.id ? `2px solid var(--primary)` : '1px solid var(--gray-700)',
                    borderRadius: '25px',
                    background: selectedCategory === category.id ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedCategory === category.id ? 'var(--white)' : 'var(--gray-300)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h3 style={{ marginBottom: '16px' }}>🎯 Quick Filters</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedFilter('featured')}
                style={{
                  padding: '8px 16px',
                  border: selectedFilter === 'featured' ? `2px solid var(--primary)` : '1px solid var(--gray-700)',
                  borderRadius: '20px',
                  background: selectedFilter === 'featured' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedFilter === 'featured' ? 'var(--white)' : 'var(--gray-300)',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                ⭐ Featured ({featuredPosts.length})
              </button>
              
              {allTags.slice(0, 6).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedFilter(tag)}
                  style={{
                    padding: '8px 16px',
                    border: selectedFilter === tag ? `2px solid var(--primary)` : '1px solid var(--gray-700)',
                    borderRadius: '20px',
                    background: selectedFilter === tag ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedFilter === tag ? 'var(--white)' : 'var(--gray-300)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results and Clear Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div className="results-info" style={{ fontSize: '16px', fontWeight: '500' }}>
            {filteredPosts.length > 0 ? (
              <>
                Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
                {searchQuery && (
                  <span> for "<strong>{searchQuery}</strong>"</span>
                )}
                {selectedCategory !== 'all' && (
                  <span> in <strong>{selectedCategory.replace('-', ' ')}</strong></span>
                )}
              </>
            ) : (
              <span>No articles found</span>
            )}
          </div>

          {(selectedFilter !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={clearFilters}
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid var(--gray-700)',
                borderRadius: '8px',
                color: 'var(--gray-300)',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear Filters
            </button>
          )}
        </div>

        {/* Blog Posts Grid */}
        <section className="blog-posts">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid" style={{ 
              animation: 'fadeIn 0.5s ease',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '32px'
            }}>
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  style={{
                    animation: `slideUp 0.6s ease ${index * 0.1}s both`
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state" style={{
              textAlign: 'center',
              padding: '80px 32px',
              color: 'var(--gray-400)'
            }}>
              <div style={{ 
                fontSize: '48px', 
                marginBottom: '24px',
                opacity: 0.6 
              }}>
                🔍
              </div>
              <h3 style={{ 
                color: 'var(--white)', 
                marginBottom: '12px', 
                fontSize: '24px',
                fontWeight: '700'
              }}>
                No articles found
              </h3>
              <p style={{ 
                marginBottom: '24px', 
                fontSize: '16px',
                lineHeight: '1.6',
                maxWidth: '400px',
                margin: '0 auto 24px auto'
              }}>
                {searchQuery 
                  ? `We couldn't find any articles matching "${searchQuery}". Try different keywords or explore our categories.`
                  : 'Try adjusting your filters or check back soon for new content.'
                }
              </p>
              <button
                onClick={clearFilters}
                style={{
                  background: 'var(--primary)',
                  color: 'var(--white)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                View All Articles
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-signup">
          <h2>📧 Get the Latest Premiere Pro Tips</h2>
          <p>
            Join <strong>1,200+ video editors</strong> who receive our weekly newsletter with the latest 
            Premiere Pro tutorials, workflow optimizations, and industry insights.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ flex: 1 }}
            />
            <button>
              Subscribe Free
            </button>
          </div>
          <p style={{ 
            fontSize: '13px', 
            opacity: 0.8, 
            marginTop: '12px',
            color: 'var(--gray-300)'
          }}>
            No spam, unsubscribe anytime. Join editors from Netflix, Adobe, and top agencies.
          </p>
        </section>
      </main>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default BlogListPage;
