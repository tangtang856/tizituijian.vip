/**
 * 生成 robots.txt、sitemap.xml、sitemap-index.xml 与 IndexNow 验证文件
 */

const fs = require('fs');
const path = require('path');
const { DOMAIN, airports } = require('./site-template');
const guides = require('../src/data/guides-data');
const articles = require('../src/data/blog-data');

const ROOT_DIR = path.resolve(__dirname, '..');
const INDEXNOW_KEY = '8f4b23c91d8e40f7b9c6543210abcdef';

function generateSeoFiles() {
  // 1. 生成 robots.txt
  const robotsTxt = `# robots.txt for tizituijian.vip
User-agent: *
Allow: /
Allow: /css/
Allow: /js/
Allow: /recommend/
Allow: /ranking/
Allow: /airport/
Allow: /review/
Allow: /compare/
Allow: /guides/
Allow: /blog/
Allow: /glossary/
Disallow: /404.html
Disallow: /scripts/
Disallow: /src/

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-index.xml
`;
  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf8');
  console.log('Generated: robots.txt');

  // 2. 生成 IndexNow Key 验证文件
  fs.writeFileSync(path.join(ROOT_DIR, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf8');
  console.log(`Generated: ${INDEXNOW_KEY}.txt`);

  // 3. 收集全站所有正式公开页面的 URL
  const pages = [
    '', // 首页 -> https://tizituijian.vip/
    'recommend/index.html',
    'recommend/budget.html',
    'recommend/premium.html',
    'recommend/beginner.html',
    'recommend/stable.html',
    'recommend/ai.html',
    'recommend/streaming.html',
    'ranking/overall.html',
    'ranking/value.html',
    'ranking/budget.html',
    'ranking/stable.html',
    'compare/index.html',
    'guides/index.html',
    'blog/index.html',
    'glossary/iplc-iepl.html',
    'glossary/node-ratio.html',
    'glossary/protocols.html',
    'glossary/subscription.html',
    'glossary/residential-native-ip.html',
    'about.html',
    'contact.html',
    'editorial-policy.html',
    'privacy-policy.html',
    'disclaimer.html'
  ];

  guides.forEach(g => {
    pages.push(`guides/${g.slug}.html`);
  });

  articles.forEach(art => {
    pages.push(`blog/${art.slug}.html`);
  });

  airports.forEach(a => {
    pages.push(`airport/${a.slug}.html`);
    pages.push(`review/${a.slug}.html`);
  });

  const today = '2026-11-18';

  // 4. 生成带 XSLT 样式的 sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => {
  const loc = p === '' ? `${DOMAIN}/` : `${DOMAIN}/${p}`;
  const priority = p === '' ? '1.0' : p.startsWith('recommend/') || p.startsWith('ranking/') ? '0.9' : p.startsWith('review/') || p.startsWith('guides/') ? '0.8' : '0.6';
  const changefreq = p === '' || p.startsWith('ranking/') ? 'daily' : 'weekly';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Generated: sitemap.xml (with XSLT stylesheet, total ${pages.length} URLs)`);

  // 5. 生成 sitemap-index.xml (兼容各种爬虫规范)
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
  console.log('Generated: sitemap-index.xml');
}

module.exports = { generateSeoFiles };

if (require.main === module) {
  generateSeoFiles();
}
