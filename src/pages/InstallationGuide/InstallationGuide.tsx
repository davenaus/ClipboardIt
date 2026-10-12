import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { installationStyles } from './styles';
import { absoluteUrl, CLIPBOARD_ADOBE_URL } from '../../utils/site';
import { installationSeo } from '../../utils/searchMetadata';

const InstallationGuide: React.FC = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: installationStyles }} />
    <Helmet>
      <title>{installationSeo.title}</title>
      <meta name="description" content={installationSeo.description} />
      <link rel="canonical" href={absoluteUrl('/installation')} />
    </Helmet>
    <section className="hero">
      <div className="container">
        <Header />
        <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
          <span className="section-overline">Getting Started</span>
          <h1 className="section-title">Install Clipboard It</h1>
          <p className="section-description">From purchase to your first pasted image.</p>
        </div>
      </div>
    </section>
    <main className="page-content">
      <div className="container">
        <div className="installation-steps">
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="step-content">
              <h2 className="step-title">Buy on Adobe Exchange</h2>
              <p className="step-description">$24.99, one time, Mac and Windows. Check that the listing supports your Premiere version first.</p>
              <div className="step-action"><a href={CLIPBOARD_ADOBE_URL} target="_blank" rel="noopener noreferrer" className="button-primary" data-track-placement="installation-purchase">View Clipboard It on Adobe Exchange</a></div>
              <div className="step-note"><p>Clipboard It handles images. For copying clips, text, or effects, <Link to="/blog">see the tutorials</Link>.</p></div>
            </div>
          </section>
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-content">
              <h2 className="step-title">Install through Creative Cloud</h2>
              <p className="step-description">Use the same Adobe account for the purchase and the Creative Cloud app.</p>
              <ol className="instruction-list">
                <li>Complete the purchase on Adobe Exchange.</li>
                <li>Open the Creative Cloud desktop app and follow the install prompt.</li>
                <li>Wait until it shows the plugin as installed.</li>
              </ol>
              <div className="step-note"><p>Install stuck? See <a href="https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-extensions-using-creative-cloud-desktop-app.html">Adobe’s plugin install guide</a>.</p></div>
            </div>
          </section>
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-content">
              <h2 className="step-title">Open the panel in Premiere Pro</h2>
              <ol className="instruction-list">
                <li>Restart Premiere if it was open.</li>
                <li>Open your project.</li>
                <li>Choose <strong>Window → Extensions → Clipboard It</strong>.</li>
                <li>Dock the panel somewhere you can reach Paste.</li>
              </ol>
            </div>
          </section>
          <section className="installation-step" id="first-image" aria-labelledby="first-image-heading">
            <div className="step-number" aria-hidden="true">4</div>
            <div className="step-content">
              <h2 className="step-title" id="first-image-heading">Import your first image</h2>
              <p className="step-description">When it works, you get a saved image file on disk and a clip in your bin.</p>
              <ol className="instruction-list">
                <li>Pick a destination folder, such as your project’s Graphics folder.</li>
                <li>Enter a bin name, like <strong>Graphics</strong> or <strong>Assets/Graphics</strong>.</li>
                <li>Optional: set a filename prefix, like <strong>Reference</strong>.</li>
                <li>In your browser, right-click an image and choose <strong>Copy Image</strong> (not Copy Image Address).</li>
                <li>Click <strong>Paste</strong> in the panel.</li>
                <li>The image appears in your bin, ready for the timeline.</li>
              </ol>
              <div className="step-note"><p>Keep the saved files with your project; bins only reference them. The panel remembers your settings, so update them when you switch projects.</p></div>
              <p className="step-description"><Link to="/blog/why-you-cant-copy-paste-images-premiere-pro">Full image guide</Link> · <Link to="/blog/organize-premiere-pro-projects-like-pro">Organizing folders and bins</Link></p>
            </div>
          </section>
          <section className="installation-step" id="troubleshooting" aria-labelledby="installation-troubleshooting-heading">
            <div className="step-number" aria-hidden="true">5</div>
            <div className="step-content">
              <h2 className="step-title" id="installation-troubleshooting-heading">Troubleshooting</h2>
              <div className="troubleshooting-accordion">
                <details className="accordion-item">
                  <summary className="accordion-header">Clipboard It is not appearing</summary>
                  <div className="accordion-content"><ol>
                    <li>Check the Exchange listing supports your Premiere version and OS.</li>
                    <li>Make sure Creative Cloud is signed in to the buying account and shows the plugin as installed.</li>
                    <li>Quit and reopen Premiere, then check <strong>Window → Extensions</strong>.</li>
                    <li>Still missing? Contact support with your Premiere version and OS.</li>
                  </ol></div>
                </details>
                <details className="accordion-item">
                  <summary className="accordion-header">Paste finds no image</summary>
                  <div className="accordion-content"><ol>
                    <li>Copy again with Copy Image, not Copy Image Address.</li>
                    <li>Check the destination folder is writable and your project is open.</li>
                    <li>Try an image from another source; clipboard formats vary by app and OS.</li>
                    <li>Fallback: save or export a PNG and use File → Import.</li>
                  </ol></div>
                </details>
                <details className="accordion-item">
                  <summary className="accordion-header">The file is saved but the bin looks empty</summary>
                  <div className="accordion-content"><ol>
                    <li>Check you're in the right project and the bin name is correct.</li>
                    <li>Look in the root of the Project panel; images can land there if the bin can't be found or created.</li>
                    <li>Import the saved file with File → Import. If that fails too, it's a Premiere import issue.</li>
                  </ol></div>
                </details>
              </div>
            </div>
          </section>
          <section className="installation-cta">
            <h2>Need more help?</h2>
            <p>Send your Premiere version, OS, the app you copied from, and any error message.</p>
            <Link to="/support" className="button-primary">Contact support</Link>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default InstallationGuide;
