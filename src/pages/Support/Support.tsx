import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { supportStyles } from './styles';

const FORMSPARK_FORM_ID = 'bME50xW4x';
const FORMSPARK_URL = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

const initialValues = {
  name: '',
  email: '',
  product: 'Clipboard It',
  topic: '',
  adobeEmail: '',
  premiereVersion: '',
  message: '',
};

type SupportFormValues = typeof initialValues;
type SupportField = keyof SupportFormValues;
type SupportErrors = Partial<Record<SupportField, string>>;
type SupportTouched = Partial<Record<SupportField, boolean>>;

const productOptions = [
  'Clipboard It',
  'Smooth It',
  'Select Disabled Clips',
  'Silence Cutter',
];

const topicOptions = [
  { value: '', label: 'Select a topic' },
  { value: 'Installation help', label: 'Installation help' },
  { value: 'Bug report', label: 'Bug report' },
  { value: 'Purchase or license', label: 'Purchase or license' },
  { value: 'Feature request', label: 'Feature request' },
  { value: 'Other', label: 'Other' },
];

const validate = (values: SupportFormValues): SupportErrors => {
  const errors: SupportErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.name.trim().length < 2) {
    errors.name = 'Enter your name.';
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.topic) {
    errors.topic = 'Choose a topic.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Add a few details so I can help.';
  }

  return errors;
};

const SupportPage: React.FC = () => {
  const [values, setValues] = useState<SupportFormValues>(initialValues);
  const [errors, setErrors] = useState<SupportErrors>({});
  const [touched, setTouched] = useState<SupportTouched>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as SupportField;

    setValues(prev => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }

    setSubmitError(null);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const field = event.target.name as SupportField;
    setTouched(prev => ({ ...prev, [field]: true }));

    const nextErrors = validate(values);
    setErrors(prev => ({
      ...prev,
      [field]: nextErrors[field],
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);

    const nextTouched = Object.keys(initialValues).reduce<SupportTouched>((acc, key) => {
      acc[key as SupportField] = true;
      return acc;
    }, {});
    const nextErrors = validate(values);

    setTouched(nextTouched);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          product: values.product,
          topic: values.topic,
          adobe_account_email: values.adobeEmail.trim() || 'Not provided',
          premiere_pro_version: values.premiereVersion.trim() || 'Not provided',
          message: values.message.trim(),
          source: 'clipboard.it/support',
          _email: {
            subject: `[Clipboard It Support] ${values.topic} - ${values.name.trim()}`,
            from: values.name.trim(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspark returned ${response.status}`);
      }

      setSubmitted(true);
      setTouched({});
      setErrors({});
    } catch {
      setSubmitError('Something went wrong sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setTouched({});
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  const fieldError = (field: SupportField) => touched[field] ? errors[field] : undefined;

  return (
    <>
      <style>{supportStyles}</style>
      <Helmet>
        <title>Support | Clipboard It</title>
        <meta
          name="description"
          content="Contact Clipboard It support for installation help, bug reports, purchase questions, and feature requests."
        />
        <link rel="canonical" href="https://clipboard.it/support" />
      </Helmet>

      <section className="support-hero">
        <div className="container">
          <Header />
          <div className="support-hero-content">
            <span className="support-kicker">Support</span>
            <h1>Contact Clipboard It Support</h1>
            <p>
              Send installation issues, bug reports, purchase questions, or feature ideas.
              Include the details you have, and I will take a look.
            </p>
          </div>
        </div>
      </section>

      <main className="support-page-section">
        <div className="container support-layout">
          <aside className="support-info-panel" aria-label="Support details">
            <div className="support-info-item">
              <span>Response Time</span>
              <p>Most messages get a reply within a few business days.</p>
            </div>
            <div className="support-info-item">
              <span>Good Bug Reports</span>
              <p>Include Premiere Pro version, macOS or Windows version, and what happened right before the issue.</p>
            </div>
            <div className="support-info-item">
              <span>Adobe Account</span>
              <p>If your issue is purchase or install related, include the Adobe email connected to the Exchange account.</p>
            </div>
          </aside>

          <section className="support-form-card" aria-labelledby="support-form-title">
            {submitted ? (
              <div className="support-success" role="status" aria-live="polite">
                <div className="support-success-mark" aria-hidden="true">✓</div>
                <h2>Message Sent</h2>
                <p>
                  Thanks, {values.name.trim().split(' ')[0] || 'there'}. Your support request was received,
                  and a reply will be sent to <strong>{values.email}</strong>.
                </p>
                <button type="button" className="support-secondary-button" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="support-form-header">
                  <h2 id="support-form-title">Support Request</h2>
                  <p>All fields marked required must be filled before sending.</p>
                </div>

                <form className="support-form" onSubmit={handleSubmit} noValidate>
                  <div className="support-field-row">
                    <div className="support-field">
                      <label htmlFor="name">Name <span>Required</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="name"
                        aria-invalid={Boolean(fieldError('name'))}
                        aria-describedby={fieldError('name') ? 'name-error' : undefined}
                      />
                      {fieldError('name') && <p id="name-error" className="support-field-error">{fieldError('name')}</p>}
                    </div>

                    <div className="support-field">
                      <label htmlFor="email">Email <span>Required</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        aria-invalid={Boolean(fieldError('email'))}
                        aria-describedby={fieldError('email') ? 'email-error' : undefined}
                      />
                      {fieldError('email') && <p id="email-error" className="support-field-error">{fieldError('email')}</p>}
                    </div>
                  </div>

                  <div className="support-field-row">
                    <div className="support-field">
                      <label htmlFor="product">Plugin</label>
                      <select
                        id="product"
                        name="product"
                        value={values.product}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {productOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="support-field">
                      <label htmlFor="topic">Topic <span>Required</span></label>
                      <select
                        id="topic"
                        name="topic"
                        value={values.topic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldError('topic'))}
                        aria-describedby={fieldError('topic') ? 'topic-error' : undefined}
                      >
                        {topicOptions.map(option => (
                          <option key={option.value} value={option.value} disabled={option.value === ''}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {fieldError('topic') && <p id="topic-error" className="support-field-error">{fieldError('topic')}</p>}
                    </div>
                  </div>

                  <div className="support-field-row">
                    <div className="support-field">
                      <label htmlFor="adobeEmail">Adobe Account Email</label>
                      <input
                        id="adobeEmail"
                        name="adobeEmail"
                        type="email"
                        value={values.adobeEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                      />
                    </div>

                    <div className="support-field">
                      <label htmlFor="premiereVersion">Premiere Pro Version</label>
                      <input
                        id="premiereVersion"
                        name="premiereVersion"
                        type="text"
                        value={values.premiereVersion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Example: 2025 / 25.3"
                      />
                    </div>
                  </div>

                  <div className="support-field">
                    <label htmlFor="message">Message <span>Required</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={7}
                      aria-invalid={Boolean(fieldError('message'))}
                      aria-describedby={fieldError('message') ? 'message-error' : undefined}
                    />
                    {fieldError('message') && <p id="message-error" className="support-field-error">{fieldError('message')}</p>}
                  </div>

                  <button type="submit" className="support-submit-button" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Support Request'}
                  </button>

                  {submitError && (
                    <p className="support-submit-error" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              </>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SupportPage;
