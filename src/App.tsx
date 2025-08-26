import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react";

// Regular imports for main pages (keep these loaded immediately)
import HomePage from './pages/Home/Home';
import InstallationGuide from './pages/InstallationGuide/InstallationGuide';
import PrivacyPage from './pages/Privacy/Privacy';
import TermsPage from './pages/Terms/Terms';
import DiscordSupportPage from './pages/Support/Support';
import ScrollToTop from './components/common/ScrollToTop';
import { GlobalStyles } from './styles/GlobalStyles';

// Lazy load blog components for better performance
const BlogListPage = lazy(() => import('./pages/Blog/BlogList'));
const BlogPostPage = lazy(() => import('./pages/Blog/BlogPost'));

// Loading component for lazy-loaded pages
const PageLoading: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    background: 'var(--dark)',
    color: 'var(--white)'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(104, 83, 255, 0.3)',
        borderTop: '3px solid var(--primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px auto'
      }} />
      <p style={{ color: 'var(--gray-400)', fontSize: '14px' }}>Loading content...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <style>{`
        ${GlobalStyles}
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Performance optimizations */
        img {
          content-visibility: auto;
          contain-intrinsic-size: 300px 200px;
        }
        
        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
        
        /* Focus visible for accessibility */
        *:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/installation" element={<InstallationGuide />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<DiscordSupportPage />} />
          <Route 
            path="/blog" 
            element={
              <Suspense fallback={<PageLoading />}>
                <BlogListPage />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/:slug" 
            element={
              <Suspense fallback={<PageLoading />}>
                <BlogPostPage />
              </Suspense>
            } 
          />
        </Routes>
      </Router>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;
