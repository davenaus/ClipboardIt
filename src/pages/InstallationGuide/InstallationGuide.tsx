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
          <h1 className="section-title">Install Clipboard It and import your first image</h1>
          <p className="section-description">Install through Adobe Exchange, open the panel in Premiere Pro, and confirm that your image is saved and imported.</p>
        </div>
      </div>
    </section>
    <main className="page-content">
      <div className="container">
        <div className="installation-steps">
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="step-content">
              <h2 className="step-title">Check compatibility and purchase</h2>
              <p className="step-description">Clipboard It is a $24.99 one-time purchase for Premiere Pro on Mac and Windows. Check the current marketplace listing against your Premiere version and operating system before purchasing.</p>
              <div className="step-action"><a href={CLIPBOARD_ADOBE_URL} target="_blank" rel="noopener noreferrer" className="button-primary" data-track-placement="installation-purchase">View Clipboard It on Adobe Exchange</a></div>
              <div className="step-note"><p>Clipboard It imports clipboard images into bins. Premiere’s native clip, text, and effect copying use separate workflows. <Link to="/blog">Find the guide for your task.</Link></p></div>
            </div>
          </section>
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-content">
              <h2 className="step-title">Install through Creative Cloud</h2>
              <p className="step-description">Use the same Adobe account for your purchase and Creative Cloud desktop app. Follow the installation instructions shown on Exchange and in Creative Cloud.</p>
              <ol className="instruction-list">
                <li>Sign in to Adobe Exchange and complete your purchase.</li>
                <li>Open the Creative Cloud desktop app and follow the plugin installation prompts.</li>
                <li>Check the plugin’s installation status before opening Premiere.</li>
              </ol>
              <div className="step-note"><p>If installation does not start or finish, follow <a href="https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-extensions-using-creative-cloud-desktop-app.html">Adobe’s plugin installation guide</a> and the troubleshooting checks below.</p></div>
            </div>
          </section>
          <section className="installation-step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-content">
              <h2 className="step-title">Open the panel in Premiere Pro</h2>
              <ol className="instruction-list">
                <li>Restart Premiere if it was open during installation.</li>
                <li>Open your intended project.</li>
                <li>Look for Clipboard It under <strong>Window → Extensions</strong>.</li>
                <li>Open the panel and dock it where you can reach its Paste button.</li>
              </ol>
              <p className="step-description">If the panel is missing, check installation and version compatibility before continuing.</p>
            </div>
          </section>
          <section className="installation-step" id="first-image" aria-labelledby="first-image-heading">
            <div className="step-number" aria-hidden="true">4</div>
            <div className="step-content">
              <h2 className="step-title" id="first-image-heading">Import your first image</h2>
              <p className="step-description">Use a simple image you can keep with your project. A successful import leaves both a saved image file and an item in Premiere’s Project panel.</p>
              <ol className="instruction-list">
                <li>Select a writable destination folder on disk, such as your project’s Graphics folder.</li>
                <li>Enter a bin name, such as <strong>Graphics</strong>, or a nested path such as <strong>Assets/Graphics</strong>.</li>
                <li>Set an optional filename prefix, such as <strong>Reference</strong>.</li>
                <li>In your browser, choose <strong>Copy Image</strong>. Copy Image Address copies a URL instead of image pixels.</li>
                <li>Click <strong>Paste</strong> inside the Clipboard It panel.</li>
                <li>Check the selected disk folder for the saved file, then locate the image in your chosen Premiere bin.</li>
                <li>Drag the imported image onto your timeline when you want to use it.</li>
              </ol>
              <div className="step-note"><p>Keep the saved image file with your project. A bin contains media references; it does not embed the image in the project file. The panel remembers folder, bin, and prefix settings, so check them when switching projects.</p></div>
              <p className="step-description"><Link to="/blog/why-you-cant-copy-paste-images-premiere-pro">Read the full image-import guide</Link> or <Link to="/blog/organize-premiere-pro-projects-like-pro">organize folders, filenames, and bins</Link>.</p>
            </div>
          </section>
          <section className="installation-step" id="troubleshooting" aria-labelledby="installation-troubleshooting-heading">
            <div className="step-number" aria-hidden="true">5</div>
            <div className="step-content">
              <h2 className="step-title" id="installation-troubleshooting-heading">Troubleshoot setup and first use</h2>
              <div className="troubleshooting-accordion">
                <details className="accordion-item">
                  <summary className="accordion-header">Clipboard It is not appearing</summary>
                  <div className="accordion-content"><ol>
                    <li>Confirm the current Exchange listing supports your Premiere version and OS.</li>
                    <li>Check that Creative Cloud is signed in to the account used for purchase and shows the plugin as installed.</li>
                    <li>Restart Premiere completely and check its Extensions menu again.</li>
                    <li>If it is still missing, contact support with your Premiere version, OS, and installation status.</li>
                  </ol></div>
                </details>
                <details className="accordion-item">
                  <summary className="accordion-header">Paste finds no image</summary>
                  <div className="accordion-content"><ol>
                    <li>Copy the actual image again using Copy Image rather than Copy Image Address.</li>
                    <li>Check that the destination folder is writable and the intended Premiere project is open.</li>
                    <li>Try a simple image from another source. Clipboard formats vary by app and OS.</li>
                    <li>As a fallback, save or export a PNG and use Premiere’s File → Import command.</li>
                  </ol></div>
                </details>
                <details className="accordion-item">
                  <summary className="accordion-header">The file is saved but the bin looks empty</summary>
                  <div className="accordion-content"><ol>
                    <li>Check the active project and the remembered bin name.</li>
                    <li>Look in the Project panel root as well as the chosen bin; a failed bin lookup or creation can fall back to the root.</li>
                    <li>Try importing the saved file with File → Import to separate a capture problem from a Premiere import problem.</li>
                    <li>Keep the error message and version details for support.</li>
                  </ol></div>
                </details>
              </div>
            </div>
          </section>
          <section className="installation-cta">
            <h2>Need more help?</h2>
            <p>Include your Premiere version, operating system, source application, and error message. Share the steps you took; avoid including private project media.</p>
            <Link to="/support" className="button-primary">Contact support</Link>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default InstallationGuide;
