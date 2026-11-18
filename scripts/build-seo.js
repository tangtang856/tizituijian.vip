/**
 * 生成 robots.txt、sitemap.xml 与 IndexNow 验证文件
 */

const fs = require('fs');
const path = require('path');
const { DOMAIN, airports } = require('./site-template');

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
`;
  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf8');
  console.log('Generated: robots.txt');

  // 2. 生成 IndexNow Key 验证文件
  fs.writeFileSync(path.join(ROOT_DIR, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf8');
  console.log(`Generated: ${INDEXNOW_KEY}.txt`);

  // 3. 收集全站所有正式公开页面的 URL
  const pages = [
    '', // 首页
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
    'guides/windows.html',
    'guides/android.html',
    'guides/ios.html',
    'guides/macos.html',
    'guides/troubleshooting.html',
    'blog/beginner-selection-guide.html',
    'blog/cheap-airport-risks.html',
    'blog/iplc-bgp-difference.html',
    'blog/ai-streaming-unlock.html',
    'blog/vpn-airport-difference.html',
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

  airports.forEach(a => {
    pages.push(`airport/${a.slug}.html`);
    pages.push(`review/${a.slug}.html`);
  });

  const today = '2026-11-18';

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => {
  const loc = p === '' ? `${DOMAIN}/index.html` : `${DOMAIN}/${p}`;
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
  console.log('Generated: sitemap.xml');
}

module.exports = { generateSeoFiles, INDEXNOW_KEY };

if (require.main === module) {
  generateSeoFiles();
}
