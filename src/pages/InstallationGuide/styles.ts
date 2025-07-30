export const installationStyles = `
.hero {
  background: linear-gradient(to bottom, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 100%);
  padding: 40px 0 40px;
  position: relative;
  overflow: hidden;
}

.installation-steps {
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.installation-step {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 30px;
  margin-bottom: 80px;
  position: relative;
}

.installation-step::after {
  content: '';
  position: absolute;
  left: 30px;
  top: 70px;
  bottom: -80px;
  width: 2px;
  background: var(--gray-800);
  z-index: 0;
}

.installation-step:last-child::after,
.installation-step:nth-last-child(2)::after {
  display: none;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border: 3px solid var(--dark);
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.step-content {
  padding-right: 20px;
}

.step-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
}

.step-description {
  font-size: 16px;
  color: var(--gray-300);
  margin-bottom: 20px;
  line-height: 1.6;
}

.step-action {
  margin-bottom: 20px;
}

.step-note {
  background: rgba(104, 83, 255, 0.1);
  border-left: 3px solid var(--primary);
  padding: 15px;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.note-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.step-note p {
  font-size: 14px;
  color: var(--gray-300);
  margin: 0;
  line-height: 1.5;
}

.step-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-image img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--gray-800);
  transition: all 0.3s ease;
}

.step-image img:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.step-details {
  background: var(--dark-surface);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid var(--gray-800);
}

.instruction-list {
  margin-left: 20px;
  color: var(--gray-300);
}

.instruction-list li {
  margin-bottom: 10px;
  line-height: 1.5;
}

.instruction-list li:last-child {
  margin-bottom: 0;
}

.os-tabs {
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--gray-800);
}

.os-tab {
  padding: 8px 16px;
  cursor: pointer;
  color: var(--gray-400);
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.os-tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.os-instructions.hidden {
  display: none;
}

.code-block {
  background: var(--dark-surface-2);
  border-radius: 6px;
  padding: 12px;
  margin: 10px 0;
  font-family: monospace;
}

.code-block pre {
  margin: 0 0 8px 0;
}

.code-block pre:last-child {
  margin-bottom: 0;
}

.troubleshooting-accordion {
  margin-bottom: 32px;
  background: var(--dark-surface);
  border-radius: 16px;
  padding: 8px;
  border: 1px solid var(--gray-800);
}

.accordion-item {
  border: none;
  border-radius: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  background: var(--dark);
  transition: all 0.3s ease;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-item:hover {
  background: var(--dark-surface-2);
}

.accordion-header {
  padding: 20px 24px;
  background: transparent;
  color: var(--white);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-header:hover {
  color: var(--primary-light);
}

.accordion-header::after {
  content: '+';
  width: 32px;
  height: 32px;
  background: rgba(104, 83, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.accordion-item.active .accordion-header {
  color: var(--primary-light);
  padding-bottom: 16px;
}

.accordion-item.active .accordion-header::after {
  content: '−';
  background: var(--primary);
  color: var(--white);
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  color: var(--gray-300);
}

.accordion-item.active .accordion-content {
  padding: 0 24px 24px 24px;
  max-height: 600px;
}

.accordion-content ol {
  margin-left: 20px;
  counter-reset: step-counter;
}

.accordion-content ol li {
  margin-bottom: 12px;
  line-height: 1.6;
  position: relative;
  padding-left: 8px;
}

.accordion-content ol li:last-child {
  margin-bottom: 0;
}

.accordion-content ul {
  margin: 12px 0 12px 20px;
}

.accordion-content ul li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.accordion-content strong {
  color: var(--white);
  font-weight: 600;
}

.accordion-content code {
  background: var(--dark-surface-2);
  padding: 3px 8px;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--primary-light);
  font-size: 13px;
  border: 1px solid var(--gray-800);
}

.installation-cta {
  background: var(--dark-surface);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  border: 1px solid var(--gray-800);
  margin-top: 40px;
}

.installation-cta h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
}

.installation-cta p {
  color: var(--gray-300);
  max-width: 600px;
  margin: 0 auto 20px;
}

.os-specific-notes {
  margin-top: 20px;
}

.os-note.hidden {
  display: none;
}

.note-important {
  background: rgba(255, 165, 0, 0.1);
  border-left: 3px solid #FFA500;
  padding: 15px;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 15px;
}

.warning-icon {
  color: #FFA500;
  flex-shrink: 0;
  margin-top: 2px;
}

.note-important p {
  font-size: 14px;
  color: var(--gray-300);
  margin: 0 0 10px 0;
  line-height: 1.5;
}

.note-important p:last-child {
  margin-bottom: 0;
}

.windows-debug-steps,
.mac-security-steps {
  margin-top: 10px;
  margin-left: 20px;
  color: var(--gray-300);
}

.windows-debug-steps li,
.mac-security-steps li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.windows-debug-steps ul {
  margin-top: 5px;
  margin-left: 20px;
}

code {
  background: var(--dark-surface-2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: var(--primary-light);
}

/* Responsive styles */
@media (max-width: 992px) {
  .installation-steps {
    max-width: 100%;
    padding: 0 20px;
  }
  
  .installation-step {
    grid-template-columns: 60px 1fr;
  }
}

@media (max-width: 768px) {
  .installation-steps {
    padding: 0 20px;
  }
  .installation-step::after {
    display: none;
  }
  
  .installation-step {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-800);
  }
  
  .installation-step:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .step-number {
    margin: 0 auto;
  }
  
  .step-content,
  .step-image {
    grid-column: 1;
    text-align: center;
    padding: 0;
  }
  
  .step-note {
    text-align: left;
  }

  .hero {
    padding: 20px 0 60px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  .hero-content h1 {
    font-size: 40px;
  }

  .hero-content p {
    font-size: 18px;
    margin: 0 auto 30px;
  }

  .author-pill {
    margin: 0 auto;
  }

  .hero-image {
    justify-self: center;
    max-width: 80%;
    margin: 0 auto;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .workflow-steps {
    grid-template-columns: 1fr;
  }

  .workflow-steps::after {
    display: none;
  }

  .cta-container {
    padding: 40px 20px;
  }

  .cta-title {
    font-size: 28px;
  }

  .how-it-works {
    padding: 15px 0;
  }
}

/* Hide launch sale callout on mobile */
@media screen and (max-width: 768px) {
  .pricing-card > div[style*="position: absolute"][style*="background: var(--secondary)"] {
    display: none !important;
  }
  
  div[style*="background: linear-gradient(to right, var(--primary), var(--secondary))"] {
    display: none !important;
  }
}
`;