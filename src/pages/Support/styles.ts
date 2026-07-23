export const supportStyles = `
.support-hero {
  background: linear-gradient(180deg, rgba(104, 83, 255, 0.16) 0%, rgba(18, 18, 18, 0) 82%);
  padding: 40px 0 52px;
}

.support-hero .nav {
  margin-bottom: 56px;
}

.support-hero-content {
  max-width: 760px;
  padding-top: 0;
}

.support-kicker {
  display: inline-flex;
  color: var(--primary-light);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.support-hero h1 {
  color: var(--white);
  font-size: clamp(40px, 6vw, 72px);
  line-height: 1;
  margin: 0 0 24px;
  max-width: 720px;
}

.support-hero p {
  color: var(--gray-300);
  font-size: 19px;
  line-height: 1.7;
  max-width: 680px;
}

.support-page-section {
  background: var(--dark);
  padding: 8px 0 96px;
}

.support-layout {
  align-items: start;
  display: grid;
  gap: 32px;
  grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);
}

.support-info-panel {
  display: grid;
  gap: 16px;
  position: sticky;
  top: 24px;
}

.support-info-item,
.support-form-card {
  background: var(--dark-surface);
  border: 1px solid var(--gray-800);
  border-radius: 8px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
}

.support-info-item {
  padding: 22px;
}

.support-info-item span {
  color: var(--white);
  display: block;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 8px;
}

.support-info-item p {
  color: var(--gray-400);
  font-size: 14px;
  line-height: 1.65;
  margin: 0;
}

.support-form-card {
  overflow: hidden;
  padding: 34px;
}

.support-form-header {
  border-bottom: 1px solid var(--gray-800);
  margin-bottom: 28px;
  padding-bottom: 24px;
}

.support-form-header h2,
.support-success h2 {
  color: var(--white);
  font-size: 30px;
  line-height: 1.15;
  margin: 0 0 10px;
}

.support-form-header p,
.support-success p {
  color: var(--gray-400);
  font-size: 15px;
  line-height: 1.65;
  margin: 0;
}

.support-form {
  display: grid;
  gap: 22px;
}

.support-field-row {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.support-field {
  display: grid;
  gap: 9px;
}

.support-field label {
  align-items: center;
  color: var(--white);
  display: flex;
  font-size: 14px;
  font-weight: 800;
  justify-content: space-between;
}

.support-field label span {
  color: var(--gray-600);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.support-field input,
.support-field select,
.support-field textarea {
  appearance: none;
  background: var(--dark-surface-2);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  color: var(--white);
  font: inherit;
  min-height: 52px;
  outline: none;
  padding: 14px 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  width: 100%;
}

.support-field select {
  background-image: linear-gradient(45deg, transparent 50%, var(--gray-300) 50%), linear-gradient(135deg, var(--gray-300) 50%, transparent 50%);
  background-position: calc(100% - 20px) 22px, calc(100% - 14px) 22px;
  background-repeat: no-repeat;
  background-size: 6px 6px, 6px 6px;
  padding-right: 42px;
}

.support-field textarea {
  line-height: 1.6;
  min-height: 170px;
  resize: vertical;
}

.support-field input:focus,
.support-field select:focus,
.support-field textarea:focus {
  border-color: var(--primary-light);
  box-shadow: 0 0 0 4px rgba(104, 83, 255, 0.18);
}

.support-field input[aria-invalid='true'],
.support-field select[aria-invalid='true'],
.support-field textarea[aria-invalid='true'] {
  border-color: var(--secondary);
}

.support-field-error,
.support-submit-error {
  color: #ff9aa6;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.support-submit-error {
  background: rgba(255, 110, 127, 0.1);
  border: 1px solid rgba(255, 110, 127, 0.28);
  border-radius: 8px;
  padding: 14px 16px;
}

.support-submit-button,
.support-secondary-button {
  align-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 800;
  justify-content: center;
  min-height: 54px;
  padding: 15px 24px;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.support-submit-button {
  background: var(--primary);
  box-shadow: 0 12px 24px rgba(104, 83, 255, 0.28);
  color: var(--white);
  font-size: 16px;
  width: fit-content;
}

.support-submit-button:hover,
.support-secondary-button:hover {
  transform: translateY(-2px);
}

.support-submit-button:hover {
  background: var(--primary-light);
  box-shadow: 0 16px 28px rgba(104, 83, 255, 0.32);
}

.support-submit-button:disabled {
  cursor: wait;
  opacity: 0.68;
  transform: none;
}

.support-success {
  display: grid;
  gap: 18px;
  justify-items: start;
  padding: 18px 4px;
}

.support-success-mark {
  align-items: center;
  background: rgba(104, 83, 255, 0.18);
  border: 1px solid rgba(138, 121, 255, 0.35);
  border-radius: 8px;
  color: var(--primary-light);
  display: inline-flex;
  font-size: 26px;
  font-weight: 900;
  height: 54px;
  justify-content: center;
  width: 54px;
}

.support-success strong {
  color: var(--white);
}

.support-secondary-button {
  background: var(--dark-surface-2);
  border: 1px solid var(--gray-700);
  color: var(--white);
  font-size: 15px;
}

.support-secondary-button:hover {
  background: var(--gray-800);
}

@media (max-width: 900px) {
  .support-hero {
    padding: 28px 0 42px;
  }

  .support-hero-content {
    padding-top: 0;
  }

  .support-layout {
    grid-template-columns: 1fr;
  }

  .support-info-panel {
    position: static;
  }
}

@media (max-width: 640px) {
  .support-hero h1 {
    font-size: 42px;
  }

  .support-hero p {
    font-size: 17px;
  }

  .support-page-section {
    padding-bottom: 72px;
  }

  .support-form-card {
    padding: 24px;
  }

  .support-field-row {
    grid-template-columns: 1fr;
  }

  .support-submit-button {
    width: 100%;
  }
}
`;
