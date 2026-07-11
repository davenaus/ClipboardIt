export const extraPluginStyles = `
.extra-plugin-page {
  --plugin-accent: #3485ff;
  --plugin-accent-rgb: 52, 133, 255;
  --plugin-accent-alt: #f8faff;
  --plugin-bg: #080b12;
  --plugin-surface: #141821;
  background: var(--plugin-bg);
  color: #eef3fb;
}

.extra-plugin-shell {
  background:
    linear-gradient(180deg, rgba(var(--plugin-accent-rgb), 0.12), rgba(var(--plugin-accent-rgb), 0) 320px),
    var(--plugin-bg);
  padding: 56px 0 72px;
}

.extra-plugin-hero-grid {
  align-items: center;
  display: grid;
  gap: 54px;
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
}

.extra-plugin-hero-copy {
  max-width: 620px;
}

.extra-parent-link {
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.68);
  display: inline-flex;
  font-size: 14px;
  font-weight: 850;
  min-height: 40px;
  margin-bottom: 24px;
  padding: 0 14px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.extra-parent-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.22);
  color: #ffffff;
  transform: translateY(-2px);
}

.extra-plugin-brand-row {
  align-items: center;
  display: flex;
  gap: 14px;
  margin-bottom: 22px;
}

.extra-plugin-icon {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  height: 52px;
  width: 52px;
}

.extra-plugin-eyebrow {
  color: var(--plugin-accent);
  font-size: 13px;
  font-weight: 850;
  letter-spacing: 0;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.extra-plugin-format {
  color: rgba(255, 255, 255, 0.68);
  font-size: 14px;
  font-weight: 700;
}

.extra-plugin-hero-copy h1 {
  color: #ffffff;
  font-size: 66px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
  margin: 0 0 14px;
}

.extra-plugin-headline {
  color: var(--plugin-accent-alt);
  font-size: 28px;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.16;
  margin: 0 0 18px;
}

.extra-plugin-description {
  color: rgba(255, 255, 255, 0.76);
  font-size: 18px;
  line-height: 1.58;
  margin: 0 0 28px;
}

.extra-plugin-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.extra-plugin-button {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  font-size: 15px;
  font-weight: 850;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.extra-plugin-button:hover {
  transform: translateY(-2px);
}

.extra-plugin-button-primary {
  background: var(--plugin-accent);
  border: 1px solid var(--plugin-accent);
  color: #06101c;
  box-shadow: 0 14px 30px rgba(var(--plugin-accent-rgb), 0.22);
}

.extra-plugin-button-primary:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #06101c;
}

.extra-plugin-button-secondary {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #ffffff;
}

.extra-plugin-button-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.28);
}

.extra-plugin-specs {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
}

.extra-plugin-spec {
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-height: 82px;
  padding: 16px;
}

.extra-plugin-spec dt {
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.extra-plugin-spec dd {
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.08;
  margin: 0;
}

.extra-plugin-hero-media {
  margin: 0;
}

.hero-panel-mockup {
  background: #16181d;
  border: 1px solid rgba(var(--plugin-accent-rgb), 0.38);
  border-radius: 8px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
  color: #f2f4f7;
  overflow: hidden;
  width: 100%;
}

.mock-panel-titlebar {
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  gap: 12px;
  height: 42px;
  padding: 0 16px;
}

.mock-panel-titlebar span {
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 800;
}

.mock-window-dots {
  display: flex;
  gap: 6px;
}

.mock-window-dots span {
  border-radius: 50%;
  display: block;
  height: 10px;
  width: 10px;
}

.mock-window-dots span:nth-child(1) {
  background: #ff6f61;
}

.mock-window-dots span:nth-child(2) {
  background: #ffca58;
}

.mock-window-dots span:nth-child(3) {
  background: #6ed66a;
}

.mock-section-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.mock-section-head span {
  color: rgba(255, 255, 255, 0.86);
  font-size: 13px;
  font-weight: 850;
}

.mock-icon-buttons {
  display: flex;
  gap: 6px;
}

.mock-icon-buttons span {
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  display: inline-flex;
  font-size: 14px;
  height: 24px;
  justify-content: center;
  width: 24px;
}

.mock-label {
  color: rgba(255, 255, 255, 0.58);
  display: block;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.mock-apply-button {
  align-items: center;
  background: var(--plugin-accent);
  border-radius: 7px;
  color: #06101c;
  display: flex;
  font-size: 15px;
  font-weight: 900;
  justify-content: center;
  min-height: 44px;
}

.smooth-mock-layout {
  display: grid;
  gap: 14px;
  grid-template-columns: minmax(0, 1.1fr) 240px;
  padding: 16px;
}

.smooth-curve-panel,
.smooth-side-panel {
  background: #111217;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 14px;
}

.smooth-curve-graph {
  aspect-ratio: 1 / 0.82;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    #0d0f14;
  background-size: 28px 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.smooth-curve-graph svg {
  display: block;
  height: 100%;
  width: 100%;
}

.smooth-diagonal {
  fill: none;
  stroke: rgba(255, 255, 255, 0.12);
  stroke-dasharray: 4 5;
  stroke-width: 2;
}

.smooth-handle-line {
  stroke: rgba(255, 255, 255, 0.18);
  stroke-linecap: round;
  stroke-width: 3;
}

.smooth-curve {
  fill: none;
  stroke: #ffffff;
  stroke-linecap: round;
  stroke-width: 5;
}

.smooth-endpoint {
  fill: #111217;
  stroke: #ffffff;
  stroke-width: 4;
}

.smooth-handle {
  fill: #ffffff;
}

.smooth-presets {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.smooth-preset {
  align-items: center;
  background: #1d2028;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  color: rgba(255, 255, 255, 0.72);
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: 750;
  gap: 5px;
  min-height: 54px;
  justify-content: center;
  padding: 6px;
}

.smooth-preset.is-active {
  background: rgba(var(--plugin-accent-rgb), 0.24);
  border-color: rgba(var(--plugin-accent-rgb), 0.62);
  color: #ffffff;
}

.smooth-preset-curve {
  border-top: 2px solid currentColor;
  border-radius: 50%;
  display: block;
  height: 12px;
  transform: rotate(-14deg);
  width: 34px;
}

.smooth-target-head {
  margin-top: 16px;
}

.smooth-targets {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}

.smooth-targets span {
  background: rgba(var(--plugin-accent-rgb), 0.42);
  border-radius: 6px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 850;
  padding: 10px 12px;
}

.silence-panel-body {
  padding: 20px;
}

.silence-header {
  align-items: center;
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.silence-icon {
  align-items: center;
  background: var(--plugin-accent);
  border-radius: 8px;
  color: #ffffff;
  display: inline-flex;
  font-size: 24px;
  font-weight: 900;
  height: 42px;
  justify-content: center;
  width: 42px;
}

.silence-header strong {
  color: #ffffff;
  font-size: 24px;
}

.silence-card {
  background: #202228;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 14px;
  padding: 18px;
}

.silence-slider-row {
  align-items: center;
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 82px;
}

.silence-slider {
  background: #383944;
  border-radius: 999px;
  height: 6px;
  overflow: hidden;
  position: relative;
}

.silence-slider::before {
  background: var(--plugin-accent);
  content: '';
  display: block;
  height: 100%;
  width: 48%;
}

.silence-slider span {
  background: var(--plugin-accent);
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(var(--plugin-accent-rgb), 0.18);
  height: 15px;
  left: 46%;
  position: absolute;
  top: -5px;
  width: 15px;
}

.silence-value {
  background: #2a2d35;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 850;
  padding: 8px 10px;
  text-align: center;
}

.silence-advanced,
.silence-console {
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  font-weight: 800;
  margin-top: 16px;
  text-transform: uppercase;
}

.silence-segmented {
  background: #2a2d35;
  border-radius: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding: 6px;
}

.silence-segmented span {
  align-items: center;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.72);
  display: flex;
  font-size: 14px;
  font-weight: 850;
  justify-content: center;
  min-height: 40px;
}

.silence-segmented span.is-active {
  background: var(--plugin-accent);
  color: #06101c;
}

.silence-action {
  margin-top: 18px;
}

.select-panel-body {
  background: #1a1b20;
  padding: 24px;
}

.select-step {
  margin-bottom: 24px;
}

.select-step-label {
  align-items: center;
  color: #ffffff;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.select-step-label span {
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.72);
  display: inline-flex;
  font-size: 12px;
  font-weight: 850;
  height: 28px;
  justify-content: center;
  width: 28px;
}

.select-step-label strong {
  font-size: 18px;
}

.select-segmented {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
}

.select-segmented div {
  align-items: center;
  background: #282933;
  border: 1px solid transparent;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.56);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 90px;
  justify-content: center;
}

.select-segmented .is-active {
  background: rgba(var(--plugin-accent-rgb), 0.08);
  border-color: var(--plugin-accent);
  color: #ffffff;
}

.select-segmented strong {
  color: var(--plugin-accent);
  font-size: 26px;
}

.select-track-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}

.select-track-grid span {
  align-items: center;
  background: #252731;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.72);
  display: flex;
  font-size: 14px;
  font-weight: 850;
  justify-content: center;
  min-height: 72px;
}

.select-track-grid span.is-active {
  background: rgba(var(--plugin-accent-rgb), 0.12);
  border-color: var(--plugin-accent);
  color: #ffffff;
}

.select-action {
  min-height: 58px;
}

.extra-plugin-section {
  padding: 64px 0;
}

.extra-plugin-detail-grid {
  align-items: stretch;
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
}

.extra-plugin-panel {
  background: var(--plugin-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 28px;
}

.extra-plugin-section-label {
  color: var(--plugin-accent);
  display: inline-block;
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.extra-plugin-panel h2,
.extra-plugin-section-header h2,
.extra-plugin-product-grid h2,
.extra-plugin-more-row h2 {
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.12;
  margin: 0;
}

.extra-plugin-panel h2 {
  margin-bottom: 22px;
}

.extra-plugin-highlight-list {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.extra-plugin-highlight {
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  display: grid;
  font-size: 16px;
  gap: 12px;
  grid-template-columns: 26px 1fr;
  line-height: 1.45;
  padding: 14px;
}

.extra-plugin-check {
  align-items: center;
  background: rgba(var(--plugin-accent-rgb), 0.14);
  border: 1px solid rgba(var(--plugin-accent-rgb), 0.36);
  border-radius: 7px;
  color: var(--plugin-accent);
  display: inline-flex;
  font-size: 15px;
  font-weight: 900;
  height: 26px;
  justify-content: center;
  line-height: 1;
  width: 26px;
}

.extra-plugin-facts dl {
  display: grid;
  gap: 16px;
  margin: 0;
}

.extra-plugin-facts dl div {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 16px;
}

.extra-plugin-facts dt {
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.extra-plugin-facts dd {
  color: rgba(255, 255, 255, 0.86);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}

.extra-plugin-workflow {
  background: rgba(255, 255, 255, 0.025);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.extra-plugin-section-header {
  margin-bottom: 28px;
  max-width: 680px;
}

.extra-plugin-workflow-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);
}

.extra-plugin-step {
  background: var(--plugin-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-height: 206px;
  padding: 22px;
}

.extra-plugin-step-number {
  align-items: center;
  background: var(--plugin-accent);
  border-radius: 8px;
  color: #06101c;
  display: inline-flex;
  font-size: 14px;
  font-weight: 900;
  height: 32px;
  justify-content: center;
  margin-bottom: 20px;
  width: 32px;
}

.extra-plugin-step h3 {
  color: #ffffff;
  font-size: 20px;
  font-weight: 850;
  line-height: 1.18;
  margin: 0 0 10px;
}

.extra-plugin-step p,
.extra-plugin-product-grid p {
  color: rgba(255, 255, 255, 0.68);
  font-size: 16px;
  line-height: 1.55;
  margin: 0;
}

.extra-plugin-product-grid {
  align-items: center;
  display: grid;
  gap: 46px;
  grid-template-columns: minmax(240px, 0.7fr) minmax(0, 1fr);
}

.extra-plugin-box-image {
  border-radius: 8px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
  display: block;
  max-width: 430px;
  width: 100%;
}

.extra-plugin-product-grid p {
  margin: 18px 0 24px;
  max-width: 560px;
}

.extra-plugin-more {
  background: var(--plugin-surface);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 44px 0;
}

.extra-plugin-more-row {
  align-items: center;
  display: flex;
  gap: 18px;
  justify-content: space-between;
}

.extra-plugin-more-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.extra-plugin-more-link {
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #ffffff;
  display: inline-flex;
  gap: 10px;
  padding: 10px 14px;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.extra-plugin-more-link:hover {
  border-color: rgba(var(--plugin-accent-rgb), 0.48);
  transform: translateY(-2px);
}

.extra-plugin-more-link img {
  border-radius: 6px;
  height: 24px;
  width: 24px;
}

.extra-plugin-not-found {
  min-height: 100vh;
  background: var(--dark);
}

.extra-plugin-not-found-content {
  padding: 20px 0 100px;
  text-align: center;
}

.extra-plugin-not-found-content h1 {
  color: var(--white);
  font-size: 42px;
  margin-bottom: 18px;
}

.extra-plugin-not-found-content p {
  color: var(--gray-300);
  font-size: 18px;
  margin-bottom: 28px;
}

.extra-plugin-not-found-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

@media (max-width: 1024px) {
  .extra-plugin-hero-grid,
  .extra-plugin-detail-grid,
  .extra-plugin-product-grid {
    grid-template-columns: 1fr;
  }

  .extra-plugin-hero-copy {
    max-width: 760px;
  }

  .extra-plugin-hero-copy h1 {
    font-size: 58px;
  }

  .extra-plugin-workflow-grid {
    grid-template-columns: 1fr;
  }

  .extra-plugin-step {
    min-height: 0;
  }
}

@media (max-width: 768px) {
  .extra-plugin-shell {
    padding: 20px 0 48px;
  }

  .extra-plugin-hero-grid {
    gap: 34px;
  }

  .extra-plugin-hero-copy h1 {
    font-size: 46px;
  }

  .extra-plugin-headline {
    font-size: 24px;
  }

  .extra-plugin-description {
    font-size: 17px;
  }

  .extra-plugin-actions {
    flex-direction: column;
  }

  .extra-plugin-button {
    width: 100%;
  }

  .extra-plugin-specs {
    grid-template-columns: 1fr;
  }

  .extra-plugin-section {
    padding: 48px 0;
  }

  .extra-plugin-panel {
    padding: 22px;
  }

  .extra-plugin-panel h2,
  .extra-plugin-section-header h2,
  .extra-plugin-product-grid h2,
  .extra-plugin-more-row h2 {
    font-size: 26px;
  }

  .extra-plugin-hero-media img {
    aspect-ratio: 4 / 3;
  }

  .extra-plugin-more-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .extra-plugin-more-links {
    justify-content: flex-start;
    width: 100%;
  }
}
`;
