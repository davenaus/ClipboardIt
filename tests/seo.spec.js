const { test, expect } = require('@playwright/test');
require('../scripts/load-source');
const { getSitePaths } = require('../src/utils/sitemap');
const { blogPosts } = require('../src/blog/data');
const { renderMarkdown } = require('../src/blog/markdown');
const routes = getSitePaths();
const baseURL = process.env.SEO_BASE_URL || 'http://127.0.0.1:4173';
const artifactDir = process.env.SEO_ARTIFACT_DIR || 'test-results';

async function captureFullPage(page, path) {
  // Visit each image as a reader would, so lazy-loaded media appears in the saved capture.
  for (const image of await page.locator('img').all()) {
    const box = await image.boundingBox();
    if (!box || !box.width || !box.height) continue;
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(element => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  // Chrome skips offscreen images with content-visibility:auto, even in a full-page screenshot.
  // Override it only for capture; leave the site's normal rendering behavior unchanged.
  await page.screenshot({ path, fullPage: true, style: 'img { content-visibility: visible !important; }' });
}

test('all existing routes contain content and unique SEO metadata without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  const titles = new Set();
  for (const route of routes) {
    const response = await page.goto(baseURL + route);
    expect(response.status(), route).toBe(200);
    expect(response.headers()['x-robots-tag'] || '', route).not.toMatch(/\bnoindex\b/i);
    for (const directive of await page.locator('meta[name="robots"], meta[name="googlebot"]').all()) {
      expect(await directive.getAttribute('content'), route).not.toMatch(/\bnoindex\b/i);
    }
    await expect(page.locator('#root h1'), route).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://clipboard.it.com' + (route === '/' ? '/' : route));
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    expect(await page.locator('#root').innerText()).not.toMatch(/newsletter|1,200\+|JavaScript Required/i);
    if (route.startsWith('/blog/')) expect((await page.locator('article').first().innerText()).length).toBeGreaterThan(250);
    for (const script of await page.locator('script[type="application/ld+json"]').allTextContents()) expect(() => JSON.parse(script)).not.toThrow();
    for (const image of await page.locator('img[src^="/"]').all()) {
      const asset = await context.request.get(await image.getAttribute('src'));
      expect(asset.status()).toBe(200);
    }
  }
  await context.close();
});

test('sitemap dates describe content changes and unknown routes are real 404s', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('User-agent: *\nAllow: /');
  const response = await request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const sitemap = await response.text();
  expect((sitemap.match(/<loc>/g) || []).length).toBe(routes.length);
  for (const post of blogPosts) expect(sitemap).toContain(`<lastmod>${post.lastModified}</lastmod>`);
  const missing = await request.get('/not-a-real-page');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('noindex, follow');
});

test('demo shows its first-frame poster and starts with keyboard input without autoplay', async ({ page, request }) => {
  const mediaRequests = [];
  page.on('request', request => { if (request.url().includes('/clipboard-it-demo.mp4')) mediaRequests.push(request.url()); });
  await page.goto('/');
  const video = page.locator('.hero-video');
  const play = page.getByRole('button', { name: 'Play Clipboard It demo', exact: true });
  await expect(play).toBeVisible();
  await expect(video).toHaveAttribute('poster', '/clipboard-it-demo-poster.jpg');
  await expect(video).toHaveAttribute('preload', 'none');
  await expect(video).toHaveJSProperty('autoplay', false);
  await expect(video).toHaveJSProperty('paused', true);
  await expect(video).toHaveJSProperty('controls', false);
  expect(mediaRequests).toEqual([]);
  expect((await request.get('/clipboard-it-demo-poster.jpg')).status()).toBe(200);
  await page.locator('.hero-demo').screenshot({ path: `${artifactDir}/demo-preview.png` });
  await play.focus();
  await play.press('Enter');
  await expect(video).toHaveJSProperty('paused', false);
  await expect.poll(() => video.evaluate(element => element.currentTime)).toBeGreaterThan(0);
  await expect(play).toHaveCount(0);
  await expect(video).toHaveJSProperty('controls', true);
  expect(mediaRequests.length).toBeGreaterThan(0);
  await video.evaluate(element => element.pause());
});

test('demo provides a retry button and direct link when the media request fails', async ({ page }) => {
  await page.route('**/clipboard-it-demo.mp4', route => route.abort());
  await page.goto('/');
  const play = page.getByRole('button', { name: 'Play Clipboard It demo', exact: true });
  await play.click();
  await expect(page.getByRole('status')).toContainText('The video could not start');
  await expect(play).toBeEnabled();
  await expect(page.getByRole('link', { name: 'open the demo', exact: true })).toHaveAttribute('href', '/clipboard-it-demo.mp4');
});

test('Markdown renders tables, deep headings, and safe content', () => {
  const html = renderMarkdown('#### Details\n\n| Input | Result |\n|---|---|\n| PNG | Image |\n\n<script>alert(1)</script>\n\n[bad](javascript:alert(1))');
  expect(html).toContain('<h4');
  expect(html).toContain('<table>');
  expect(html).not.toContain('<script>');
  expect(html).not.toContain('href="javascript:');
});

for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 740 }]) {
  test(`hydrated navigation and layout at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/exchange.adobe.com/**', route => route.fulfill({ body: 'Test destination' }));
    await page.goto('/');
    await page.screenshot({ path: `${artifactDir}/home-${viewport.width}.png` });
    const workflow = page.getByRole('region', { name: 'Your files, your folder, your bins' });
    await expect(workflow).toHaveCSS('padding-top', viewport.width <= 768 ? '40px' : '64px');
    await expect(workflow.locator('h2')).toHaveCSS('font-size', viewport.width <= 768 ? '28px' : '32px');
    await expect(workflow.locator('a').first()).toHaveCSS('text-decoration-line', 'underline');
    await workflow.screenshot({ path: `${artifactDir}/workflow-${viewport.width}.png` });
    await captureFullPage(page, `${artifactDir}/home-full-${viewport.width}.png`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    if (viewport.width < 768) await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.locator('nav').getByRole('link', { name: 'Tutorials', exact: true }).click();
    await expect(page.getByRole('searchbox')).toHaveCount(0);
    await expect(page.locator('.blog-grid .blog-card')).toHaveCount(blogPosts.length);
    await expect(page.locator('main button')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    await captureFullPage(page, `${artifactDir}/tutorials-full-${viewport.width}.png`);
    await page.goto('/blog/why-you-cant-copy-paste-images-premiere-pro');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    await captureFullPage(page, `${artifactDir}/article-${viewport.width}.png`);
    await page.goto('/blog/organize-premiere-pro-projects-like-pro');
    await expect(page.locator('article table').first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('purchase-interest clicks send product and source without claiming a sale', async ({ page }) => {
  await page.addInitScript(() => {
    window.auditEvents = [];
    window.va = (type, data) => window.auditEvents.push({ type, data });
  });
  await page.route('**/_vercel/insights/**', route => route.fulfill({ body: '' }));
  await page.goto('/');
  await page.locator('.pricing-cta-button').evaluate(link => link.addEventListener('click', event => event.preventDefault()));
  await page.locator('.pricing-cta-button').click();
  await expect.poll(() => page.evaluate(() => window.auditEvents.filter(event => event.data?.name === 'adobe_exchange_click').length)).toBe(1);
});

test('article CTAs measure interest and setup separately from navigation', async ({ page }) => {
  await page.addInitScript(() => {
    window.auditEvents = [];
    window.va = (type, data) => window.auditEvents.push({ type, data });
  });
  await page.route('**/_vercel/insights/**', route => route.fulfill({ body: '' }));
  await page.goto('/blog/why-you-cant-copy-paste-images-premiere-pro');
  await page.locator('a').evaluateAll(links => links.forEach(link => link.addEventListener('click', event => event.preventDefault())));
  await page.locator('.logo').click();
  expect(await page.evaluate(() => window.auditEvents.filter(event => event.data?.name === 'article_product_click').length)).toBe(0);
  await page.locator('.article-product').getByRole('link', { name: 'See features and price' }).click();
  await expect.poll(() => page.evaluate(() => window.auditEvents.find(event => event.data?.name === 'article_product_click')?.data?.data)).toEqual({
    source_path: '/blog/why-you-cant-copy-paste-images-premiere-pro', product: 'Clipboard It', product_fit: 'direct', placement: 'article-cta'
  });
  await page.locator('.article-product').getByRole('link', { name: 'Set up your first image' }).click();
  await expect.poll(() => page.evaluate(() => window.auditEvents.filter(event => event.data?.name === 'installation_guide_click').length)).toBe(1);
});

test('article answers precede contents and product recommendations follow task fit', async ({ page }) => {
  for (const post of blogPosts) {
    await page.goto('/blog/' + post.slug);
    await expect(page.getByRole('region', { name: 'The quick answer' })).toContainText(post.directAnswer);
    expect(await page.locator('.article-answer').evaluate(answer => Boolean(answer.compareDocumentPosition(document.querySelector('.table-of-contents')) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
    await expect(page.locator('.article-product')).toHaveCount(post.productFit === 'context' ? 0 : 1);
  }
});

test('homepage and article schema stay consistent through hydration', async ({ page, request }) => {
  for (const path of ['/', '/blog/why-you-cant-copy-paste-images-premiere-pro']) {
    const html = await (await request.get(path)).text();
    const serverSchema = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    expect(JSON.stringify(serverSchema)).not.toContain('SearchAction');
    await page.goto(path);
    const clientSchema = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(text => JSON.parse(text));
    expect(clientSchema).toEqual(serverSchema);
    if (path !== '/') {
      await expect(page.getByRole('navigation', { name: 'Breadcrumb', exact: true })).toBeVisible();
      expect(JSON.stringify(clientSchema)).toContain('BreadcrumbList');
    }
  }
});

test('blog aliases redirect and installation reaches a first-image checklist', async ({ request, page }) => {
  for (const alias of ['/blog/', '/blog/index.html']) {
    const response = await request.get(alias, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe('/blog');
  }
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    // A same-document hash navigation preserves native details state; start each viewport fresh.
    await page.goto('about:blank');
    await page.goto('/installation#first-image');
    const firstImage = page.getByRole('region', { name: 'Import your first image' });
    await expect(firstImage).toContainText('saved image file');
    await firstImage.screenshot({ path: `${artifactDir}/installation-first-image-${width}.png` });
    await page.getByText('Paste finds no image', { exact: true }).click();
    await expect(page.locator('details[open] .accordion-content')).toBeVisible();
    await expect(page.locator('details[open]')).toContainText('save or export a PNG');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    await captureFullPage(page, `${artifactDir}/installation-full-${width}.png`);
  }
});

test('every article has readable links, working contents anchors, and responsive visuals', async ({ page }) => {
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const post of blogPosts) {
      await page.goto('/blog/' + post.slug);
      await expect(page.locator('.article-workflow li')).toHaveCount(3);
      await expect(page.locator('.article-heading h1')).toHaveCount(1);
      const audit = await page.evaluate(() => {
        const rgb = value => value.match(/[\d.]+/g).slice(0, 3).map(Number);
        const luminance = color => rgb(color).map(c => {
          c /= 255;
          return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
        }).reduce((sum, c, i) => sum + c * [.2126, .7152, .0722][i], 0);
        const links = [...document.querySelectorAll('.markdown-content a')];
        const contrast = links.map(link => {
          let ancestor = link;
          while (ancestor.parentElement && getComputedStyle(ancestor).backgroundColor === 'rgba(0, 0, 0, 0)') ancestor = ancestor.parentElement;
          const foreground = luminance(getComputedStyle(link).color);
          const background = luminance(getComputedStyle(ancestor).backgroundColor);
          return (Math.max(foreground, background) + .05) / (Math.min(foreground, background) + .05);
        });
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          contrast,
          underlined: links.every(link => getComputedStyle(link).textDecorationLine.includes('underline')),
          anchors: [...document.querySelectorAll('.table-of-contents a')].every(link => document.getElementById(decodeURIComponent(link.hash.slice(1))))
        };
      });
      expect(audit.overflow, post.slug + ' ' + width).toBe(false);
      expect(audit.underlined).toBe(true);
      expect(audit.anchors).toBe(true);
      for (const contrast of audit.contrast) expect(contrast).toBeGreaterThanOrEqual(4.5);
      await page.locator('.article-workflow').screenshot({ path: `${artifactDir}/post-${post.id}-workflow-${width}.png` });
    }
  }
});
