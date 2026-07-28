import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { absoluteUrl } from '../../utils/site';
import { notFoundStyles } from './styles';

const NotFoundPage: React.FC = () => (
  <>
    <style>{notFoundStyles}</style>
    <Helmet>
      <title>Page Not Found | Clipboard It</title>
      <meta
        name="description"
        content="This Clipboard It page could not be found. Return to Clipboard It or contact support."
      />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={absoluteUrl('/404')} />
    </Helmet>

    <section className="not-found-hero">
      <div className="container">
        <Header />
        <div className="not-found-content">
          <span className="not-found-kicker">404</span>
          <h1>Page Not Found</h1>
          <p>The page may have moved, or the link may have a typo.</p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-primary">
              Back to Clipboard It
            </Link>
            <Link to="/support" className="not-found-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default NotFoundPage;
