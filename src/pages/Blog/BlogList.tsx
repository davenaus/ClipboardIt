import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts, getAllTags, getPostsByTag, getPostsByCategory } from '../../blog/data';
import BlogCard from '../../blog/components/BlogCard';
import { blogStyles } from '../../blog/components/BlogStyles';
import { Header } from '../../components/layout/Header';
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
          <Header />
          <div className="blog-hero-content">
            <div className="blog-overline">Professional Resources</div>
            <h1 className="blog-hero-title">
              Master Premiere Pro & <span className="gradient-text">Video Editing</span>
            </h1>
            <p className="blog-hero-subtitle">
              Professional insights, workflow optimizations, and editing techniques from industry experts.
              Learn the shortcuts, tools, and strategies that separate professional editors from beginners.
            </p>
          </div>
        </div>
      </section>

      <main className="blog-container">
        {/* Simplified Filter Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Category Filters - Simple horizontal row */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedFilter('all');
                }}
                style={{
                  padding: '8px 16px',
                  border: selectedCategory === category.id ? '1px solid var(--primary)' : '1px solid var(--gray-800)',
                  borderRadius: '8px',
                  background: selectedCategory === category.id ? 'var(--primary)' : 'transparent',
                  color: selectedCategory === category.id ? 'var(--white)' : 'var(--gray-400)',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
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
