export const notFoundStyles = `
.not-found-hero {
  min-height: 72vh;
  padding: 40px 0 96px;
  background: linear-gradient(180deg, var(--dark) 0%, #111111 100%);
}

.not-found-content {
  max-width: 680px;
  margin-top: 120px;
}

.not-found-kicker {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--primary-light);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.not-found-content h1 {
  margin: 0 0 18px;
  color: var(--white);
  font-size: clamp(44px, 9vw, 84px);
  line-height: 0.96;
  letter-spacing: 0;
}

.not-found-content p {
  max-width: 520px;
  margin: 0 0 32px;
  color: var(--gray-300);
  font-size: 18px;
  line-height: 1.65;
}

.not-found-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.not-found-primary,
.not-found-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
}

.not-found-primary {
  background: var(--primary);
  color: var(--white);
}

.not-found-secondary {
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--white);
}

@media (max-width: 720px) {
  .not-found-hero {
    min-height: 66vh;
    padding: 24px 0 72px;
  }

  .not-found-content {
    margin-top: 72px;
  }

  .not-found-actions {
    flex-direction: column;
  }
}
`;
