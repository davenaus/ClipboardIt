#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
require('./load-source');
const { generateSitemap, generateRobotsTxt, getSitePaths } = require('../src/utils/sitemap');

const publicDir = path.join(__dirname, '../public');
const sitemap = generateSitemap();
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
// Preserve the previously published sitemap URL for existing submissions.
fs.writeFileSync(path.join(publicDir, 'sitemap-google.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt());
console.log(`Generated sitemap for ${getSitePaths().length} routes.`);
