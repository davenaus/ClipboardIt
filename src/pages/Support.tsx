import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const SupportPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://submit-form.com/your-formspark-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError('There was an error submitting your form. Please try again.');
      }
    } catch (err) {
      setError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Header />
          
          <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
            <span className="section-overline">Help & Support</span>
            <h2 className="section-title">We're Here To Help</h2>
            <p className="section-description">
              Have a question or need assistance with Clipboard It? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          {isSubmitted ? (
            <div className="support-form">
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ margin: '0 auto 20px', color: 'var(--primary)' }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 style={{ color: 'var(--white)', marginBottom: '16px', fontSize: '24px' }}>
                  Thank You!
                </h3>
                <p style={{ color: 'var(--gray-300)', marginBottom: '24px' }}>
                  Your message has been submitted successfully. We'll get back to you as soon as possible.
                </p>
                <Link
                  to="/"
                  style={{
                    display: 'inline-block',
                    background: 'var(--primary)',
                    color: 'var(--white)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form className="support-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              {error && (
                <div style={{ 
                  marginBottom: '20px', 
                  padding: '10px 15px',
                  backgroundColor: 'rgba(255, 87, 87, 0.1)',
                  borderRadius: '6px',
                  color: '#ff5757',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="form-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SupportPage;
