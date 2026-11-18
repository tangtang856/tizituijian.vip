/**
 * 生成 guides/ 目录下的所有 30 篇教程页面以及教程总览页 guides/index.html
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
const GUIDES_DIR = path.join(ROOT_DIR, 'guides');

if (!fs.existsSync(GUIDES_DIR)) {
  fs.mkdirSync(GUIDES_DIR, { recursive: true });
}

const guides = require('../src/data/guides-data');

function generateGuides() {
  console.log(`=== 开始生成 guides/ 教程: 共 ${guides.length} 篇 ===`);

  // 1. 生成 30 篇独立教程
  guides.forEach(g => {
    const meta = {
      title: g.title,
      description: g.desc,
      keywords: `${g.platform || ''},Clash教程,小火箭配置,Sing-box,梯子推荐,机场推荐,客户端教程`,
      canonicalPath: `guides/${g.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": g.h1,
        "description": g.desc,
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网",
          "url": `${DOMAIN}/`
        }
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '客户端使用教程', url: 'index.html' },
      { name: g.h1, url: `${g.slug}.html` }
    ];

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'guides')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <article class="article-content prose">
      <h1>${g.h1}</h1>

      <div class="article-header-meta">
        <span>更新时间：${g.date || '2026-11-18'}</span>
        <span>适配平台：${g.platform || '全平台'}</span>
        <span>难度等级：${g.difficulty || '入门新手'}</span>
        <span>阅读时长：${g.readTime || '约 7 分钟'}</span>
      </div>

      ${g.content}

      <h2>五、相关知识与进阶推荐</h2>
      <ul>
        <li><a href="../recommend/index.html">精选优质稳定机场推荐列表</a></li>
        <li><a href="../ranking/overall.html">2026年机场综合实力排行榜</a></li>
        <li><a href="../ranking/value.html">每GB流量单价性价比榜单</a></li>
        <li><a href="index.html">查看全部30篇客户端使用与调优教程</a></li>
        <li><a href="../glossary/subscription.html">网络百科：什么是机场订阅链接与分流规则？</a></li>
        <li><a href="../blog/beginner-selection-guide.html">新手挑选机场节点的五大黄金准则</a></li>
      </ul>
    </article>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(GUIDES_DIR, `${g.slug}.html`), html, 'utf8');
  });

  console.log(`✓ 已成功生成全部 ${guides.length} 篇独立教程！`);

  // 2. 生成 guides/index.html 教程总览中心
  generateGuidesIndex();
}

function generateGuidesIndex() {
  const meta = {
    title: '科学上网客户端配置图文教程中心（共30篇全平台指南） - 梯子推荐网',
    description: '梯子推荐网官方教程中心：覆盖Windows、Android、iOS小火箭、macOS、Linux、OpenWrt软路由、Apple TV及智能设备从零上手与进阶TUN排障图文教程。',
    keywords: '梯子教程,机场配置,Clash教程,小火箭配置,Sing-box教程,软路由翻墙,梯子推荐',
    canonicalPath: 'guides/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "科学上网客户端配置图文教程中心",
      "description": "覆盖Windows、Android、iOS小火箭、macOS及软路由全平台使用指南与进阶调优。",
      "publisher": {
        "@type": "Organization",
        "name": "梯子推荐网",
        "url": `${DOMAIN}/`
      }
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '使用教程总览', url: 'index.html' }
  ];

  const guideCards = guides.map((g, idx) => `
    <article class="guide-card" style="background:#fff; border:1px solid var(--border-color); border-radius:8px; padding:20px; transition:transform 0.2s, box-shadow 0.2s; display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:0.78rem; background:#ecfdf5; color:#047857; padding:3px 8px; border-radius:4px; font-weight:600;">${g.platform}</span>
          <span style="font-size:0.78rem; background:#f1f5f9; color:var(--text-muted); padding:3px 8px; border-radius:4px;">${g.difficulty}</span>
        </div>
        <h2 style="font-size:1.1rem; margin:0 0 10px 0; line-height:1.45;">
          <a href="${g.slug}.html" style="color:var(--text-main); text-decoration:none;">${g.h1}</a>
        </h2>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
          ${g.desc}
        </p>
      </div>
      <div style="border-top:1px solid #f1f5f9; padding-top:12px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-light);">${g.readTime || '7 分钟'}</span>
        <a href="${g.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 12px; font-size:0.82rem;">查看配置教程 →</a>
      </div>
    </article>
  `).join('\n');

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'guides')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding: 30px 15px 60px;">
  <section class="page-intro" style="margin-bottom: 35px; text-align:center;">
    <h1 style="font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:14px;">
      全平台科学上网客户端使用教程与调优中心
    </h1>
    <p style="font-size:1.05rem; color:var(--text-muted); max-width:850px; margin:0 auto; line-height:1.7;">
      收录 <strong>30 篇全平台标准化图文指引</strong>。全面覆盖 <strong>Windows、macOS、Android、iOS（小火箭/Loon/Stash）、Linux、OpenWrt 软路由、Apple TV 与游戏主机</strong>，包含从新手一键配置到 TUN 网卡接管与网络排障的保姆级教程。
    </p>
  </section>

  <!-- 教程网格列表 -->
  <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:22px;">
    ${guideCards}
  </div>

  <!-- 底部关联引导 -->
  <section class="callout callout-info" style="margin-top: 50px;">
    <h3 style="margin-top:0;">配置好客户端后，还没有靠谱的节点？</h3>
    <p>工欲善其事，必先利其器。拥有稳定低延迟的专线节点，才能让客户端发挥 100% 实力：</p>
    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:12px;">
      <a href="../ranking/overall.html" class="btn btn-primary btn-sm">2026综合实力排行榜</a>
      <a href="../recommend/budget.html" class="btn btn-outline btn-sm">平价高性价比机场</a>
      <a href="../recommend/premium.html" class="btn btn-outline btn-sm">高端IPLC专线精选</a>
      <a href="../compare/index.html" class="btn btn-outline btn-sm">横向对比工具</a>
    </div>
  </section>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(GUIDES_DIR, 'index.html'), html, 'utf8');
  console.log('✓ 已成功生成 guides/index.html 教程总览目录页！');
}

module.exports = { generateGuides };

if (require.main === module) {
  generateGuides();
}
