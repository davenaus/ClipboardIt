import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug, getRelatedPosts } from '../../blog/data';
import ArticleWorkflow from '../../blog/components/ArticleWorkflow';
import BlogCard from '../../blog/components/BlogCard';
import MarkdownRenderer from '../../blog/components/MarkdownRenderer';
import { getMarkdownHeadings } from '../../blog/markdown';
import { blogImageSrcSet } from '../../blog/images';
import { blogStyles } from '../../blog/components/BlogStyles';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { absoluteUrl } from '../../utils/site';
import { createArticleSchema } from '../../utils/searchMetadata';
import NotFoundPage from '../NotFound/NotFound';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tocOpen, setTocOpen] = useState(false);
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const relatedPosts = getRelatedPosts(post.id);
  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const canonicalUrl = post.canonicalUrl || postUrl;
  const imageUrl = post.image ? absoluteUrl(post.image.url) : undefined;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  };

  const generateTableOfContents = (content: string) => {
    const headings = getMarkdownHeadings(content).filter(heading => heading.level === 2);
    return (
      <nav className={`table-of-contents${tocOpen ? ' is-open' : ''}`} aria-label="On this page">
        <h2>On this page</h2>
        <button
          type="button"
          className="toc-toggle"
          aria-expanded={tocOpen}
          aria-controls="article-toc-list"
          onClick={() => setTocOpen(open => !open)}
        >
          On this page
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <ol id="article-toc-list">{headings.map(heading => (
          <li key={heading.id}><a href={`#${heading.id}`} onClick={() => setTocOpen(false)}>{heading.text}</a></li>
        ))}</ol>
      </nav>
    );
  };

  // Clean content by removing duplicate title and first image
  const getCleanContent = (content: string) => {
    return content
      .replace(/^#\s+.*$/m, '') // Remove first H1 (title)
      .replace(/^\s*!\[[^\]]*\]\([^)]*\)\s*$/m, '') // Remove first image
      .trim();
  };

  const structuredData = createArticleSchema(post);

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.description} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
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
        <meta name="twitter:image" content={imageUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: blogStyles }} />
      
      <header className="blog-hero article-hero">
        <div className="container">
          <Header />
          <div className="article-heading">
            <nav className="article-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link to="/">Clipboard It</Link></li>
                <li><Link to="/blog">Tutorials</Link></li>
                <li aria-current="page"><span>{post.title}</span></li>
              </ol>
            </nav>
            <div className="article-meta">
              <span>{post.category.replace(/-/g, ' ')}</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1>{post.title}</h1>
            <p className="article-deck">{post.description}</p>
            <div className="article-byline">
              <span>By {post.author}</span>
              <time dateTime={post.lastModified}>Updated {formatDate(post.lastModified)}</time>
            </div>
          </div>
        </div>
      </header>

      <main className="blog-post-container" data-product-fit={post.productFit}>
        <section className="article-answer" aria-labelledby="quick-answer">
          <h2 id="quick-answer">The quick answer</h2>
          <p>{post.directAnswer}</p>
        </section>
        <div className="article-layout">
          <aside>{generateTableOfContents(getCleanContent(post.content))}</aside>
          <article className="article-body">
            {post.image && (
              <div className="article-cover">
                <img src={post.image.url} srcSet={blogImageSrcSet(post.image.url)} sizes="(max-width: 900px) calc(100vw - 40px), 780px" alt={post.image.alt} width={post.image.width || 2048} height={post.image.height || 1365} decoding="async" />
              </div>
            )}
            <ArticleWorkflow workflow={post.workflow} />
            <MarkdownRenderer content={getCleanContent(post.content)} />
            <footer className="article-share">
              <span>Share this guide</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">X</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </footer>
          </article>
        </div>
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2 className="related-posts-title">Keep reading</h2>
            <div className="related-posts-grid">
              {relatedPosts.map(relatedPost => <BlogCard key={relatedPost.id} post={relatedPost} />)}
            </div>
          </section>
        )}
        {post.ctaType === 'image-import' && <section className="article-product">
          <div>
            <h2>Images to your Premiere bin, with fewer steps.</h2>
            <p>Clipboard It saves clipboard images to your folder, names the files, and imports them into your selected bin.</p>
          </div>
          <div className="article-product-actions">
            <Link to="/#pricing" className="blog-button blog-button-primary" data-track-placement="article-cta">See features and price</Link>
            <Link to="/installation#first-image" className="blog-button blog-button-secondary" data-track-placement="article-cta">Set up your first image</Link>
          </div>
        </section>}
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
