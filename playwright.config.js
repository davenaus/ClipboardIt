const { defineConfig } = require('@playwright/test');
const artifactDir = process.env.SEO_ARTIFACT_DIR || 'test-results';
module.exports = defineConfig({
  testDir: './tests',
  outputDir: artifactDir,
  timeout: 30000,
  use: {
    baseURL: process.env.SEO_BASE_URL || 'http://127.0.0.1:4173',
    browserName: 'chromium',
    launchOptions: process.env.PLAYWRIGHT_CHROME_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROME_PATH } : {}
  },
  webServer: process.env.SEO_BASE_URL ? undefined : { command: 'node scripts/preview.js', url: 'http://127.0.0.1:4173', reuseExistingServer: true },
  reporter: [['list'], ['json', { outputFile: `${artifactDir}/seo-results.json` }]]
});
