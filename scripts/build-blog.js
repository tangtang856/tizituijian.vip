/**
 * 生成 blog/ 目录下的所有 100 篇选购指南与行业分析文章以及博客总览页 blog/index.html
 */

const fs = require('fs');
const path = require('path');
const {
  DOMAIN,
  renderHead,
  renderHeader,
  renderFooter,
  renderBreadcrumbs,
  renderSidebarWidgets
} = require('./site-template');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

const articles = require('../src/data/blog-data');

function generateBlogArticles() {
  console.log(`=== 开始生成 blog/ 文章: 共 ${articles.length} 篇 ===`);

  // 1. 生成 100 篇独立文章
  articles.forEach(art => {
    const meta = {
      title: art.title,
      description: art.desc,
      keywords: `${art.tags ? art.tags.join(',') + ',' : ''}机场推荐,梯子推荐,性价比机场,机场节点,vpn,vpn推荐,vpn机场,vpn节点`,
      canonicalPath: `blog/${art.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": art.h1,
        "description": art.desc,
        "author": {
          "@type": "Organization",
          "name": "梯子推荐网技术编辑部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网",
          "url": `${DOMAIN}/`
        },
        "datePublished": "2026-03-01T09:00:00+08:00",
        "dateModified": "2026-11-18T12:00:00+08:00"
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '选购指南', url: 'index.html' },
      { name: art.h1, url: `${art.slug}.html` }
    ];

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'blog')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <article class="article-content prose">
      <h1>${art.h1}</h1>

      <div class="article-header-meta">
        <span>发布日期：${art.date || '2026-11-18'}</span>
        <span>栏目：${art.category || '选购指南'}</span>
        <span>阅读时长：${art.readTime || '约 7 分钟'}</span>
        <span>核验状态：已核验</span>
      </div>

      ${art.content}

      <h2>延伸阅读与关联推荐</h2>
      <ul>
        <li><a href="../recommend/index.html">精选优质高性价比机场推荐专题</a></li>
        <li><a href="../ranking/overall.html">2026年机场节点综合实力排行榜</a></li>
        <li><a href="../ranking/value.html">每GB单价极致性价比排行榜</a></li>
        <li><a href="../compare/index.html">使用机场全维度在线比对工具</a></li>
        <li><a href="../guides/windows.html">Windows系统Clash客户端配置教程</a></li>
        <li><a href="../guides/troubleshooting.html">节点连接超时排查指南</a></li>
      </ul>
    </article>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(BLOG_DIR, `${art.slug}.html`), html, 'utf8');
  });

  console.log(`✓ 已成功生成全部 ${articles.length} 篇博客独立文章！`);

  // 2. 生成 blog/index.html 博客与选购文章总览页
  generateBlogIndex();
}

function generateBlogIndex() {
  const meta = {
    title: '科学上网与机场选购指南大全（共100篇深度专栏） - 梯子推荐网',
    description: '梯子推荐网官方文章中心：汇聚100篇涵盖性价比机场挑选、IPLC专线原理、ChatGPT与流媒体解锁、翻墙客户端分流调优及网络安全的深度原创文章。',
    keywords: '机场推荐,梯子推荐,性价比机场,机场节点,vpn,vpn推荐,vpn机场,vpn节点',
    canonicalPath: 'blog/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "科学上网与机场选购指南大全",
      "description": "汇聚100篇涵盖性价比机场挑选、IPLC专线、流媒体解锁与网络安全的深度专栏。",
      "publisher": {
        "@type": "Organization",
        "name": "梯子推荐网",
        "url": `${DOMAIN}/`
      }
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '文章与选购指南总览', url: 'index.html' }
  ];

  // 渲染所有文章的卡片
  const articleCards = articles.map((art, idx) => `
    <article class="blog-card" style="background:#fff; border:1px solid var(--border-color); border-radius:8px; padding:20px; transition:transform 0.2s, box-shadow 0.2s; display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:0.78rem; background:#e0f2fe; color:#0369a1; padding:3px 8px; border-radius:4px; font-weight:600;">${art.category}</span>
          <span style="font-size:0.8rem; color:var(--text-light);">${art.readTime || '6 分钟'}</span>
        </div>
        <h2 style="font-size:1.12rem; margin:0 0 10px 0; line-height:1.45;">
          <a href="${art.slug}.html" style="color:var(--text-main); text-decoration:none;">${art.h1}</a>
        </h2>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
          ${art.desc}
        </p>
      </div>
      <div style="border-top:1px solid #f1f5f9; padding-top:12px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-light);">${art.date}</span>
        <a href="${art.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 12px; font-size:0.82rem;">阅读全文 →</a>
      </div>
    </article>
  `).join('\n');

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'blog')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding: 30px 15px 60px;">
  <section class="page-intro" style="margin-bottom: 35px; text-align:center;">
    <h1 style="font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:14px;">
      科学上网与机场选购深度文章中心
    </h1>
    <p style="font-size:1.05rem; color:var(--text-muted); max-width:850px; margin:0 auto; line-height:1.7;">
      全站精心收录 <strong>100 篇深度原创长文</strong>。涵盖 <strong>性价比机场选购、IPLC/IEPL 专线原理、ChatGPT 与流媒体解锁、客户端规则分流、以及跨境隐私安全合规</strong>，帮助您彻底避坑，打造稳定可靠的跨国网络通道。
    </p>
  </section>

  <!-- 专题分类快捷入口 -->
  <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:30px;">
    <span style="padding:6px 14px; background:var(--primary); color:#fff; border-radius:20px; font-size:0.88rem; font-weight:600;">全部分类 (100)</span>
    <span style="padding:6px 14px; background:#f1f5f9; color:var(--text-main); border-radius:20px; font-size:0.88rem;">核心选购与避坑 (20)</span>
    <span style="padding:6px 14px; background:#f1f5f9; color:var(--text-main); border-radius:20px; font-size:0.88rem;">线路架构与协议 (20)</span>
    <span style="padding:6px 14px; background:#f1f5f9; color:var(--text-main); border-radius:20px; font-size:0.88rem;">AI与流媒体解锁 (20)</span>
    <span style="padding:6px 14px; background:#f1f5f9; color:var(--text-main); border-radius:20px; font-size:0.88rem;">客户端评测与分流 (20)</span>
    <span style="padding:6px 14px; background:#f1f5f9; color:var(--text-main); border-radius:20px; font-size:0.88rem;">行业揭秘与安全 (20)</span>
  </div>

  <!-- 文章网格列表 -->
  <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:22px;">
    ${articleCards}
  </div>

  <!-- 底部关联引导 -->
  <section class="callout callout-info" style="margin-top: 50px;">
    <h3 style="margin-top:0;">需要直接查看机场排名或测试数据？</h3>
    <p>如果您已经明确了自己的预算与需求，推荐直接参考我们的实时榜单：</p>
    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:12px;">
      <a href="../ranking/overall.html" class="btn btn-primary btn-sm">综合实力排行榜</a>
      <a href="../ranking/value.html" class="btn btn-outline btn-sm">性价比单价榜</a>
      <a href="../recommend/index.html" class="btn btn-outline btn-sm">按场景选机场</a>
      <a href="../compare/index.html" class="btn btn-outline btn-sm">多品牌在线对比</a>
    </div>
  </section>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), html, 'utf8');
  console.log('✓ 已成功生成 blog/index.html 博客总览目录页！');
}

module.exports = { generateBlogArticles };

if (require.main === module) {
  generateBlogArticles();
}
