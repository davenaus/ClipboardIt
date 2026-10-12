import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../blog/data';
import { BlogPost } from '../../blog/types';
import BlogCard from '../../blog/components/BlogCard';
import { blogStyles } from '../../blog/components/BlogStyles';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { absoluteUrl, DEFAULT_OG_IMAGE } from '../../utils/site';
import { blogSeo, createBlogSchema } from '../../utils/searchMetadata';

const groups: { id: BlogPost['tutorialGroup']; title: string; description: string }[] = [
  { id: 'images', title: 'Work with still images', description: 'Paste, import, fit, and animate stills, and fix format and transparency problems.' },
  { id: 'editing', title: 'Editing techniques', description: 'Shortcuts, speed ramps, and keyframes.' },
  { id: 'media-workflows', title: 'Audio, proxy, and export workflows', description: 'Clean audio, smooth playback with proxies, and the right export settings.' }
];

const BlogListPage: React.FC = () => {
  const posts = [...blogPosts].sort((a, b) => Number(b.featured) - Number(a.featured) || b.publishDate.localeCompare(a.publishDate));
  const blogUrl = absoluteUrl('/blog');
  return (
    <>
      <Helmet>
        <title>{blogSeo.title}</title>
        <meta name="description" content={blogSeo.description} />
        <link rel="canonical" href={blogUrl} />
        <meta property="og:title" content={blogSeo.title} />
        <meta property="og:description" content={blogSeo.description} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogSeo.title} />
        <meta name="twitter:description" content={blogSeo.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(createBlogSchema(blogPosts))}</script>
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: blogStyles }} />
      <section className="blog-hero">
        <div className="container">
          <Header />
          <div className="blog-hero-content">
            <div className="blog-overline">Tutorials</div>
            <h1 className="blog-hero-title">Premiere Pro, <span className="gradient-text">step by step.</span></h1>
            <p className="blog-hero-subtitle">Short, practical guides for images, editing, and export.</p>
          </div>
        </div>
      </section>
      <main className="blog-container">
        <section className="tutorial-task-picker" aria-labelledby="copy-object-heading">
          <h2 id="copy-object-heading">What are you copying?</h2>
          <div className="tutorial-task-grid">
            <Link to="/blog/why-you-cant-copy-paste-images-premiere-pro"><strong>An image or screenshot</strong><span>Get it into a bin as a real file.</span></Link>
            <a href="https://helpx.adobe.com/premiere/desktop/edit-projects/change-clip-sequence/copy-and-paste-clips.html"><strong>A timeline clip</strong><span>Adobe’s copy-and-paste guide.</span></a>
            <a href="https://helpx.adobe.com/premiere/desktop/add-text-images/stylize-text/create-titles.html"><strong>Text for a title</strong><span>Adobe’s titles guide.</span></a>
            <a href="https://helpx.adobe.com/uk/premiere/desktop/add-video-effects/apply-video-effects/copy-and-paste-clip-effects.html"><strong>Effects or attributes</strong><span>Adobe’s guide to pasting effects.</span></a>
          </div>
        </section>
        {groups.map(group => (
          <section key={group.id} className="tutorial-group" aria-labelledby={`group-${group.id}`}>
            <h2 id={`group-${group.id}`}>{group.title}</h2>
            <p>{group.description}</p>
            <div className="blog-grid">{posts.filter(post => post.tutorialGroup === group.id).map(post => <BlogCard key={post.id} post={post} />)}</div>
          </section>
        ))}
        <section className="tutorial-setup" aria-labelledby="tutorial-setup-heading">
          <div>
            <h2 id="tutorial-setup-heading">Setting up Clipboard It?</h2>
            <p>Install it, import your first image, or fix a missing panel.</p>
          </div>
          <div className="tutorial-setup-actions">
            <Link to="/installation#first-image" className="blog-button blog-button-primary">Import your first image</Link>
            <Link to="/installation#troubleshooting" className="blog-button blog-button-secondary">Troubleshoot installation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogListPage;
