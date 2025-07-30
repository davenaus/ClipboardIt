export const homeStyles = `
/* Hero Section */
.hero {
  background: linear-gradient(to bottom, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 100%);
  padding: 40px 0 40px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.hero-content {
  max-width: 500px;
}

.hero-content h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--white);
}

.hero-content h1 span {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-content p {
  font-size: 20px;
  font-weight: 400;
  color: var(--gray-300);
  margin-bottom: 40px;
  line-height: 1.5;
}

.author-pill {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 6px 16px 6px 6px;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.author-pill:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary);
  position: relative;
  overflow: hidden;
  background-image: url('https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png');
  background-size: cover;
  background-position: center;
}

.author-pill span {
  font-size: 14px;
  color: var(--gray-200);
  font-weight: 500;
}

.hero-image {
  justify-self: flex-end;
  position: relative;
}

.hero-video {
  width: 100%;
  height: auto;
  max-width: 720px;
  border-radius: 12px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--gray-800);
  display: block;
  transform: scale(1.09);
  transition: transform 0.3s ease;
}

/* Old Way vs New Way Workflow Comparison */
.old-vs-new {
  padding: 80px 0;
  background: var(--dark);
  position: relative;
}

.workflow-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.workflow-column {
  background: var(--dark-surface);
  border-radius: 16px;
  padding: 30px;
  position: relative;
  border: 1px solid var(--gray-800);
  height: 100%;
}

.old-way {
  border-color: rgba(255, 110, 127, 0.3);
  background: linear-gradient(135deg, rgba(255, 110, 127, 0.05), var(--dark-surface));
}

.new-way {
  border-color: rgba(16, 185, 129, 0.3);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), var(--dark-surface));
}

.workflow-header {
  text-align: center;
  margin-bottom: 24px;
}

.workflow-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.old-icon {
  background: var(--secondary);
  color: var(--white);
}

.new-icon {
  background: #10B981;
  color: var(--white);
}

.workflow-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.workflow-subtitle {
  font-size: 16px;
  color: var(--gray-400);
  margin-bottom: 0;
}

.scenario-box {
  background: var(--dark-surface-2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  border: 1px solid var(--gray-700);
  text-align: center;
}

.scenario-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--white);
  margin: 0;
  font-style: italic;
}

.workflow-steps-list {
  margin-bottom: 24px;
}

.workflow-step-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--gray-300);
}

.step-bullet {
  background: var(--gray-700);
  color: var(--white);
  font-weight: 600;
  font-size: 12px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
}

.pain-point .step-bullet {
  background: var(--secondary);
}

.magic-item .step-bullet {
  background: #10B981;
}

.win-point .step-bullet {
  background: #10B981;
}

.vs-divider {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  align-self: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--dark);
  position: relative;
  z-index: 2;
}

.time-indicator {
  text-align: center;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 20px;
}

.old-time {
  background: rgba(255, 110, 127, 0.2);
  color: var(--secondary);
  border: 1px solid rgba(255, 110, 127, 0.3);
}

.new-time {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

/* How It Works */
.how-it-works {
  padding: 95px 0;
  position: relative;
  margin-top: 50px;
}

.workflow-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
  position: relative;
  z-index: 1;
}

.workflow-steps::after {
  content: '';
  position: absolute;
  height: 2px;
  background: var(--gray-800);
  width: 80%;
  top: 30px;
  left: 10%;
  z-index: 0;
}

.workflow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
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
  margin-bottom: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;
  background: var(--primary);
  border: 3px solid var(--dark);
}

.workflow-step:hover .step-number {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0px 12px 24px rgba(104, 83, 255, 0.2);
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
}

.step-description {
  font-size: 16px;
  color: var(--gray-400);
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

.step-image-container {
  position: relative;
  max-width: 330px;
  width: 100%;
}

.step-image {
  width: 100%;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.workflow-step:hover .step-image {
  transform: scale(1.05);
}

/* Features */
.features {
  padding: var(--section-spacing) 0;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.feature-card {
  background: var(--dark-surface);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray-800);
}

.feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: var(--primary);
  transition: height 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--gray-700);
}

.feature-card:hover::after {
  height: 100%;
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: var(--dark-surface-2);
  border: 1px solid var(--gray-800);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  border-color: var(--primary);
}

.feature-icon svg {
  width: 28px;
  height: 28px;
  color: var(--primary);
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.feature-description {
  font-size: 16px;
  color: var(--gray-400);
  line-height: 1.6;
  flex-grow: 1;
}

/* Pricing */
.pricing {
  padding: var(--section-spacing) 0;
  position: relative;
  margin-top: 40px;
  margin-bottom: 20px;
}

.pricing-card-wrapper {
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-card {
  background: var(--dark-surface);
  border-radius: 20px;
  padding: 0;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray-800);
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  border-color: var(--primary-light);
}

.pricing-badge {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  padding: 16px 24px;
  text-align: center;
  margin-bottom: 32px;
}

.badge-text {
  font-size: 16px;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

.countdown-mini {
  opacity: 0.9;
}

.pricing-header {
  padding: 0 32px;
  text-align: center;
  margin-bottom: 32px;
}

.product-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 4px;
}

.product-subtitle {
  font-size: 16px;
  color: var(--gray-400);
  margin-bottom: 24px;
}

.price-container {
  position: relative;
  margin-bottom: 16px;
}

.old-price {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
}

.old-price::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 2px;
    background: var(--gray-400);
    top: 50%;
}

.old-price .currency {
  font-size: 16px;
  color: var(--gray-400);
  margin-right: 4px;
}

.old-price .amount {
  font-size: 24px;
  font-weight: 600;
  color: var(--gray-400);
}

.current-price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 16px;
  position: relative;
}

.current-price .currency {
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-right: 4px;
  align-self: flex-start;
  margin-top: 8px;
}

.current-price .main-amount {
  font-size: 64px;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.current-price .cents {
  font-size: 32px;
  font-weight: 700;
  color: var(--white);
  margin-left: 2px;
}

.discount-badge {
  position: absolute;
  top: -8px;
  right: 20px;
  background: var(--secondary);
  color: var(--white);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(255, 110, 127, 0.3);
}

.payment-info {
  font-size: 14px;
  color: var(--gray-400);
  opacity: 0.8;
}

.features-section {
  padding: 0 32px;
  margin-bottom: 32px;
}

.features-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 20px;
  text-align: center;
}

.pricing-features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pricing-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 15px;
  color: var(--gray-200);
}

.pricing-feature svg {
  min-width: 20px;
  height: 20px;
  color: var(--primary);
  flex-shrink: 0;
}

.cta-section {
  padding: 32px;
  background: var(--dark-surface-2);
  border-top: 1px solid var(--gray-800);
  text-align: center;
}

.pricing-cta-button {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--white);
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(104, 83, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.pricing-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(104, 83, 255, 0.4);
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
}

.button-text {
  font-size: 18px;
  font-weight: 700;
}

.button-subtext {
  font-size: 14px;
  opacity: 0.9;
  font-weight: 500;
}

.guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: var(--gray-400);
}

.guarantee svg {
  color: #10B981;
}

/* CTA */
.cta {
  padding: 80px 0 40px 0;
  position: relative;
}

.cta-container {
  background: linear-gradient(135deg, rgba(48, 48, 48, 0.8), rgba(28, 28, 28, 0.9));
  border-radius: 24px;
  padding: 48px;
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: auto;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--gray-800);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;
  align-items: center;
}

.cta-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236853FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
  z-index: 0;
}

.cta-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.cta-avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 0 8px 24px rgba(104, 83, 255, 0.3);
  position: relative;
}

.avatar-badge {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 28px;
  height: 28px;
  background: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border: 3px solid var(--dark);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.editor-stats {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 20px;
  font-weight: 800;
  color: var(--primary-light);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-header {
  margin-bottom: 24px;
}

.cta-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  color: var(--white);
  line-height: 1.2;
}

.author-signature {
  display: flex;
  align-items: center;
  gap: 12px;
}

.signature-text {
  font-size: 18px;
  color: var(--primary-light);
  font-weight: 600;
  font-style: italic;
}

.signature-line {
  height: 2px;
  width: 40px;
  background: linear-gradient(to right, var(--primary), transparent);
  border-radius: 1px;
}

.cta-story {
  margin-bottom: 32px;
}

.story-text {
  font-size: 18px;
  color: var(--gray-300);
  position: relative;
  z-index: 1;
  line-height: 1.6;
  margin-bottom: 12px;
}

.story-emphasis {
  font-size: 18px;
  color: var(--white);
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cta-primary-button {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--white);
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0px 8px 24px rgba(104, 83, 255, 0.3);
  position: relative;
  z-index: 1;
  align-self: flex-start;
}

.cta-primary-button:hover {
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  transform: translateY(-3px);
  box-shadow: 0px 12px 32px rgba(104, 83, 255, 0.4);
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-indicators {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--gray-400);
}

.trust-item svg {
  color: var(--primary-light);
  flex-shrink: 0;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
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
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
    text-align: center;
  }
  
  .cta-visual {
    order: 2;
  }
  
  .cta-content {
    order: 1;
  }
  
  .cta-title {
    font-size: 28px;
  }
  
  .editor-stats {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .trust-indicators {
    align-items: center;
  }

  .how-it-works {
    padding: 15px 0;
  }
}

/* Old Way vs New Way Section */
.old-vs-new {
  padding: 80px 0;
  background: var(--dark-surface);
  position: relative;
}

.workflow-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: start;
  margin-top: 60px;
}

.workflow-column {
  background: var(--dark-surface-2);
  border-radius: 16px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.workflow-column.old-way {
  border-color: var(--secondary);
  background: linear-gradient(135deg, rgba(255, 110, 127, 0.1), rgba(255, 110, 127, 0.05));
}

.workflow-column.new-way {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(104, 83, 255, 0.1), rgba(104, 83, 255, 0.05));
}

.workflow-header {
  text-align: center;
  margin-bottom: 24px;
}

.workflow-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 24px;
}

.old-icon {
  background: var(--secondary);
  color: var(--white);
}

.new-icon {
  background: var(--primary);
  color: var(--white);
}

.workflow-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.workflow-subtitle {
  font-size: 14px;
  color: var(--gray-400);
  font-weight: 500;
}

.scenario-box {
  background: var(--dark-surface);
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  border-left: 4px solid;
  border-left-color: var(--gray-600);
}

.old-way .scenario-box {
  border-left-color: var(--secondary);
}

.new-way .scenario-box {
  border-left-color: var(--primary);
}

.scenario-text {
  font-size: 16px;
  color: var(--gray-300);
  font-style: italic;
  text-align: center;
}

.workflow-steps-list {
  margin: 24px 0;
}

.workflow-step-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
  color: var(--gray-300);
  line-height: 1.5;
}

.step-bullet {
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--gray-700);
  color: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 2px;
}

.old-way .step-bullet {
  background: rgba(255, 110, 127, 0.2);
  color: var(--secondary);
}

.new-way .step-bullet {
  background: rgba(104, 83, 255, 0.2);
  color: var(--primary);
}

.pain-point {
  background: rgba(255, 110, 127, 0.1);
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid var(--secondary);
}

.pain-point .step-bullet {
  background: var(--secondary);
  color: var(--white);
}

.magic-item {
  background: rgba(104, 83, 255, 0.1);
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid var(--primary);
}

.magic-item .step-bullet {
  background: var(--primary);
  color: var(--white);
}

.win-point {
  background: rgba(16, 185, 129, 0.1);
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #10B981;
}

.win-point .step-bullet {
  background: #10B981;
  color: var(--white);
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-size: 18px;
  font-weight: 800;
  position: relative;
  align-self: center;
  margin-top: 100px;
}

.time-indicator {
  text-align: center;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 20px;
}

.old-time {
  background: rgba(255, 110, 127, 0.2);
  color: var(--secondary);
  border: 1px solid rgba(255, 110, 127, 0.3);
}

.new-time {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

/* Hide launch sale callout on mobile */
@media screen and (max-width: 768px) {
  .pricing-card > div[style*="position: absolute"][style*="background: var(--secondary)"] {
    display: none !important;
  }
  
  div[style*="background: linear-gradient(to right, var(--primary), var(--secondary))"] {
    display: none !important;
  }
  
  .pricing-card-wrapper {
    max-width: 100%;
  }
  
  .pricing-card {
    margin: 0 20px;
  }
  
  .pricing-header {
    padding: 0 20px;
  }
  
  .features-section {
    padding: 0 20px;
  }
  
  .cta-section {
    padding: 24px 20px;
  }
  
  .product-title {
    font-size: 28px;
  }
  
  .current-price .main-amount {
    font-size: 48px;
  }
  
  .current-price .cents {
    font-size: 24px;
  }
  
  .workflow-comparison {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .vs-divider {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
  
  .workflow-column {
    padding: 20px;
  }
  
  .workflow-step-item {
    font-size: 14px;
  }
}
`