import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/layout/Footer';
import { ExtraPlugin, extraPlugins, getExtraPluginBySlug } from '../../data/extraPlugins';
import { extraPluginStyles } from './styles';

const PrimaryCta: React.FC<{ plugin: ExtraPlugin }> = ({ plugin }) => (
  <a
    href={plugin.primaryCtaHref}
    className="extra-plugin-button extra-plugin-button-primary"
    target={plugin.primaryCtaExternal ? '_blank' : undefined}
    rel={plugin.primaryCtaExternal ? 'noopener noreferrer' : undefined}
  >
    {plugin.primaryCtaLabel}
  </a>
);

const WindowDots: React.FC = () => (
  <div className="mock-window-dots" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const SmoothItMockup: React.FC = () => (
  <div className="hero-panel-mockup hero-panel-smooth-it" aria-label="Smooth It panel mockup">
    <div className="mock-panel-titlebar">
      <WindowDots />
      <span>Smooth It</span>
    </div>
    <div className="smooth-mock-layout">
      <section className="smooth-curve-panel">
        <div className="mock-section-head">
          <span>Curve</span>
          <div className="mock-icon-buttons" aria-hidden="true">
            <span>-</span>
            <span>+</span>
          </div>
        </div>
        <div className="smooth-curve-graph">
          <div className="smooth-grid-lines" aria-hidden="true"></div>
          <svg viewBox="0 0 280 220" aria-hidden="true">
            <path className="smooth-diagonal" d="M32 188 L248 32" />
            <path className="smooth-curve" d="M32 188 C96 188 184 32 248 32" />
            <line className="smooth-handle-line" x1="32" y1="188" x2="96" y2="188" />
            <line className="smooth-handle-line" x1="248" y1="32" x2="184" y2="32" />
            <circle className="smooth-endpoint" cx="32" cy="188" r="8" />
            <circle className="smooth-endpoint" cx="248" cy="32" r="8" />
            <circle className="smooth-handle" cx="96" cy="188" r="7" />
            <circle className="smooth-handle" cx="184" cy="32" r="7" />
          </svg>
        </div>
      </section>
      <aside className="smooth-side-panel">
        <div className="mock-section-head">
          <span>Presets</span>
        </div>
        <div className="smooth-presets">
          {['Linear', 'S-Curve', 'Ease In', 'Ease Out', 'Soft In', 'Soft Out', 'Smooth I/O', 'Snap In', 'Overshoot'].map((preset, index) => (
            <div className={`smooth-preset ${index === 1 ? 'is-active' : ''}`} key={preset}>
              <span className="smooth-preset-curve" aria-hidden="true"></span>
              <span>{preset}</span>
            </div>
          ))}
        </div>
        <div className="mock-section-head smooth-target-head">
          <span>Targets</span>
        </div>
        <div className="smooth-targets">
          <span>Position</span>
          <span>Scale</span>
        </div>
        <div className="mock-apply-button">Apply</div>
      </aside>
    </div>
  </div>
);

const SilenceCutterMockup: React.FC = () => (
  <div className="hero-panel-mockup hero-panel-silence-cutter" aria-label="Silence Cutter panel mockup">
    <div className="mock-panel-titlebar">
      <WindowDots />
      <span>Silence Cutter</span>
    </div>
    <div className="silence-panel-body">
      <div className="silence-header">
        <span className="silence-icon" aria-hidden="true">∿</span>
        <strong>Silence Cutter</strong>
      </div>
      <section className="silence-card">
        <span className="mock-label">Detection Threshold</span>
        <div className="silence-slider-row">
          <div className="silence-slider">
            <span></span>
          </div>
          <div className="silence-value">-50 dB</div>
        </div>
        <div className="silence-advanced">Advanced Settings</div>
      </section>
      <section className="silence-card">
        <span className="mock-label">Cut Mode</span>
        <div className="silence-segmented">
          <span className="is-active">Delete</span>
          <span>Disable</span>
        </div>
      </section>
      <div className="mock-apply-button silence-action">Remove Silence</div>
      <div className="silence-console">Show Console</div>
    </div>
  </div>
);

const SelectDisabledMockup: React.FC = () => (
  <div className="hero-panel-mockup hero-panel-select-disabled" aria-label="Select Disabled Clips panel mockup">
    <div className="mock-panel-titlebar">
      <WindowDots />
      <span>Select Disabled Clips</span>
    </div>
    <div className="select-panel-body">
      <section className="select-step">
        <div className="select-step-label">
          <span>1</span>
          <strong>Which clips?</strong>
        </div>
        <div className="select-segmented">
          <div className="is-active">
            <span>Disabled</span>
            <strong>322</strong>
          </div>
          <div>
            <span>Enabled</span>
            <strong>1,680</strong>
          </div>
        </div>
      </section>
      <section className="select-step">
        <div className="select-step-label">
          <span>2</span>
          <strong>On which tracks?</strong>
        </div>
        <div className="select-track-grid">
          <span>Video</span>
          <span>Audio</span>
          <span className="is-active">Both</span>
        </div>
      </section>
      <div className="mock-apply-button select-action">Select 322 clips</div>
    </div>
  </div>
);

const HeroPanelMockup: React.FC<{ plugin: ExtraPlugin }> = ({ plugin }) => {
  if (plugin.slug === 'smooth-it') return <SmoothItMockup />;
  if (plugin.slug === 'silence-cutter') return <SilenceCutterMockup />;
  return <SelectDisabledMockup />;
};

const PluginNotFound: React.FC = () => (
  <>
    <style>{extraPluginStyles}</style>
    <div className="extra-plugin-not-found">
      <section className="extra-plugin-shell">
        <div className="container">
          <div className="extra-plugin-not-found-content">
            <h1>Plugin Page Not Found</h1>
            <p>Try one of these Premiere Pro plugins.</p>
            <div className="extra-plugin-not-found-links">
              {extraPlugins.map(plugin => (
                <Link key={plugin.slug} to={`/plugins/${plugin.slug}`} className="button-primary">
                  {plugin.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

const ExtraPluginPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const plugin = getExtraPluginBySlug(slug);

  if (!plugin) {
    return <PluginNotFound />;
  }

  const otherPlugins = extraPlugins.filter(item => item.slug !== plugin.slug);
  const pageStyle = {
    '--plugin-accent': plugin.accent,
    '--plugin-accent-rgb': plugin.accentRgb,
    '--plugin-accent-alt': plugin.accentAlt,
    '--plugin-bg': plugin.background,
    '--plugin-surface': plugin.surface
  } as React.CSSProperties;

  const canonicalPath = `/plugins/${plugin.slug}`;
  const absoluteImage = `https://clipboard.it${plugin.heroImage}`;
  const title = `${plugin.name} - Premiere Pro Plugin | Clipboard It`;
  const offer =
    plugin.priceLabel === 'Free'
      ? {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          url: plugin.primaryCtaHref,
          availability: 'https://schema.org/InStock'
        }
      : {
          '@type': 'Offer',
          url: plugin.primaryCtaHref,
          availability: 'https://schema.org/InStock'
        };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${plugin.name}: ${plugin.description}`} />
        <meta
          name="keywords"
          content={`${plugin.name}, Premiere Pro plugin, Adobe Exchange, Clipboard It, video editing workflow`}
        />
        <link rel="canonical" href={`https://clipboard.it${canonicalPath}`} />

        <meta property="og:title" content={`${plugin.name} - Premiere Pro Plugin`} />
        <meta property="og:description" content={plugin.description} />
        <meta property="og:url" content={`https://clipboard.it${canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={absoluteImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${plugin.name} - Premiere Pro Plugin`} />
        <meta name="twitter:description" content={plugin.description} />
        <meta name="twitter:image" content={absoluteImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: plugin.name,
            description: plugin.description,
            url: `https://clipboard.it${canonicalPath}`,
            applicationCategory: 'MultimediaApplication',
            operatingSystem: ['Windows', 'macOS'],
            image: absoluteImage,
            offers: offer,
            publisher: {
              '@type': 'Organization',
              name: 'Clipboard It'
            }
          })}
        </script>
      </Helmet>

      <style>{extraPluginStyles}</style>

      <div className={`extra-plugin-page extra-plugin-page-${plugin.slug}`} style={pageStyle}>
        <main>
          <section className="extra-plugin-shell">
            <div className="container">
              <div className="extra-plugin-hero-grid">
                <div className="extra-plugin-hero-copy">
                  <Link to="/" className="extra-parent-link">
                    Back To Clipboard It
                  </Link>

                  <div className="extra-plugin-brand-row">
                    <img src={plugin.icon} alt={`${plugin.name} icon`} className="extra-plugin-icon" />
                    <div>
                      <p className="extra-plugin-eyebrow">{plugin.eyebrow}</p>
                      <p className="extra-plugin-format">{plugin.format}</p>
                    </div>
                  </div>

                  <h1>{plugin.name}</h1>
                  <p className="extra-plugin-headline">{plugin.headline}</p>
                  <p className="extra-plugin-description">{plugin.description}</p>

                  <div className="extra-plugin-actions">
                    <PrimaryCta plugin={plugin} />
                    <a href="#plugin-details" className="extra-plugin-button extra-plugin-button-secondary">
                      Details
                    </a>
                  </div>

                  <dl className="extra-plugin-specs" aria-label={`${plugin.name} details`}>
                    {plugin.metrics.map(metric => (
                      <div className="extra-plugin-spec" key={metric.label}>
                        <dt>{metric.label}</dt>
                        <dd>{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <figure className="extra-plugin-hero-media">
                  <HeroPanelMockup plugin={plugin} />
                </figure>
              </div>
            </div>
          </section>

          <section className="extra-plugin-section" id="plugin-details">
            <div className="container">
              <div className="extra-plugin-detail-grid">
                <section className="extra-plugin-panel">
                  <span className="extra-plugin-section-label">What It Does</span>
                  <h2>Focused tool, clear purpose.</h2>
                  <ul className="extra-plugin-highlight-list">
                    {plugin.highlights.map(highlight => (
                      <li className="extra-plugin-highlight" key={highlight}>
                        <span className="extra-plugin-check">+</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <aside className="extra-plugin-panel extra-plugin-facts">
                  <span className="extra-plugin-section-label">Details</span>
                  <h2>Plugin Facts</h2>
                  <dl>
                    <div>
                      <dt>Price</dt>
                      <dd>{plugin.priceLabel}</dd>
                    </div>
                    <div>
                      <dt>Host</dt>
                      <dd>{plugin.host}</dd>
                    </div>
                    <div>
                      <dt>Open In Premiere</dt>
                      <dd>{plugin.installMenu}</dd>
                    </div>
                  </dl>
                </aside>
              </div>
            </div>
          </section>

          <section className="extra-plugin-section extra-plugin-workflow">
            <div className="container">
              <div className="extra-plugin-section-header">
                <span className="extra-plugin-section-label">How It Works</span>
                <h2>Three steps inside Premiere Pro.</h2>
              </div>

              <div className="extra-plugin-workflow-grid">
                {plugin.workflow.map((step, index) => (
                  <article className="extra-plugin-step" key={step.title}>
                    <span className="extra-plugin-step-number">{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="extra-plugin-section extra-plugin-product">
            <div className="container">
              <div className="extra-plugin-product-grid">
                <img
                  src={plugin.boxImage}
                  alt={`${plugin.name} product artwork`}
                  className="extra-plugin-box-image"
                />
                <div>
                  <span className="extra-plugin-section-label">Adobe Exchange</span>
                  <h2>Install from the official listing.</h2>
                  <p>
                    The Adobe Exchange page has the current listing, compatibility notes, and install flow for {plugin.name}.
                  </p>
                  <PrimaryCta plugin={plugin} />
                </div>
              </div>
            </div>
          </section>

          {otherPlugins.length > 0 && (
            <section className="extra-plugin-more" aria-label="More plugins">
              <div className="container">
                <div className="extra-plugin-more-row">
                  <h2>More Plugins We Made</h2>
                  <div className="extra-plugin-more-links">
                    {otherPlugins.map(item => (
                      <Link
                        to={`/plugins/${item.slug}`}
                        className="extra-plugin-more-link"
                        key={item.slug}
                      >
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExtraPluginPage;
