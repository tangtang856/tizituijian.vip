/**
 * 梯子推荐网 (tizituijian.vip) 全站静态生成脚本
 * 纯 HTML5 + 原生 CSS + 纯相对路径 (无任何根斜杠 / 开头路径)
 * 支持本地 file:// 协议直接双击与 Cloudflare Pages 线上秒开
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = 'https://tizituijian.vip';
const airports = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'src/data/airports.json'), 'utf8'));

// 辅助函数：根据目录深度生成相对路径前缀
function getRelPrefix(depth) {
  return depth === 0 ? '' : '../'.repeat(depth);
}

// 统一 HTML Head 生成器
function renderHead(meta, depth = 0) {
  const p = getRelPrefix(depth);
  const canonicalUrl = `${DOMAIN}/${meta.canonicalPath || ''}`;
  
  const schemaOrg = meta.schema ? `<script type="application/ld+json">
${JSON.stringify(meta.schema, null, 2)}
</script>` : '';

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  <meta name="keywords" content="${meta.keywords || '机场推荐,梯子推荐,性价比机场,机场节点,vpn,vpn机场,vpn节点,vpn推荐'}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / 社交媒体卡片 -->
  <meta property="og:type" content="${meta.ogType || 'website'}">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="梯子推荐网">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  
  <!-- 原生标准样式表 (严格相对路径) -->
  <link rel="stylesheet" href="${p}css/style.css">
  ${schemaOrg}
</head>
<body>`;
}

// 统一 Header 生成器 (严格相对路径)
function renderHeader(depth = 0, currentSection = '') {
  const p = getRelPrefix(depth);
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${p}index.html" class="brand-logo" title="梯子推荐网 - 专注于客观中立的机场与VPN评测">
        <span class="brand-icon-box">⚡</span>
        <span>梯子推荐网</span>
        <span class="brand-badge">2026专业版</span>
      </a>
      <button class="nav-toggle-btn" aria-label="展开导航菜单" aria-expanded="false">☰</button>
      <nav class="site-nav">
        <a href="${p}index.html" class="nav-link ${currentSection === 'home' ? 'active' : ''}">首页</a>
        <a href="${p}recommend/index.html" class="nav-link ${currentSection === 'recommend' ? 'active' : ''}">机场推荐</a>
        <a href="${p}ranking/overall.html" class="nav-link ${currentSection === 'ranking' ? 'active' : ''}">综合排行</a>
        <a href="${p}review/index.html" class="nav-link ${currentSection === 'review' ? 'active' : ''}">机场评测</a>
        <a href="${p}compare/index.html" class="nav-link ${currentSection === 'compare' ? 'active' : ''}">横向对比</a>
        <a href="${p}guides/index.html" class="nav-link ${currentSection === 'guides' ? 'active' : ''}">客户端教程</a>
        <a href="${p}blog/index.html" class="nav-link ${currentSection === 'blog' ? 'active' : ''}">选购指南</a>
        <a href="${p}glossary/iplc-iepl.html" class="nav-link ${currentSection === 'glossary' ? 'active' : ''}">网络百科</a>
      </nav>
      <div class="header-cta">
        <a href="${p}ranking/value.html" class="btn btn-primary btn-sm">性价比榜单</a>
      </div>
    </div>
  </header>`;
}

// 统一 Footer 生成器 (严格相对路径)
function renderFooter(depth = 0) {
  const p = getRelPrefix(depth);
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-col-title">梯子推荐网 (tizituijian.vip)</div>
          <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
            专注提供客观、严谨、多维度的优质机场推荐、梯子节点测速、翻墙客户端配置教程与跨境网络技术科普，帮助用户安全、高效地获取海外资讯与科研工具。
          </p>
          <div style="font-size:0.82rem; color:var(--text-light);">
            <span>数据更新周期：双周核验</span> · 
            <span>测试节点：港/美/日/新/英</span>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">推荐与品牌专页</div>
          <ul class="footer-links">
            <li><a href="${p}review/index.html"><strong>14大品牌独立评测专页 →</strong></a></li>
            <li><a href="${p}airport/index.html">品牌官方参数档案库</a></li>
            <li><a href="${p}recommend/budget.html">性价比平价机场</a></li>
            <li><a href="${p}recommend/premium.html">高端IPLC专线机场</a></li>
            <li><a href="${p}ranking/overall.html">综合实力排行榜</a></li>
            <li><a href="${p}ranking/value.html">每GB单价性价比榜</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">使用教程与科普</div>
          <ul class="footer-links">
            <li><a href="${p}guides/index.html">全平台30篇教程大全</a></li>
            <li><a href="${p}blog/index.html">精选100篇选购指南</a></li>
            <li><a href="${p}guides/windows.html">Windows配置教程</a></li>
            <li><a href="${p}guides/android.html">Android手机教程</a></li>
            <li><a href="${p}guides/ios.html">iOS小火箭配置</a></li>
            <li><a href="${p}guides/troubleshooting.html">节点排障与连接失败</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">政策与信任体系</div>
          <ul class="footer-links">
            <li><a href="${p}editorial-policy.html">编辑政策与评测准则</a></li>
            <li><a href="${p}about.html">关于我们</a></li>
            <li><a href="${p}contact.html">联系与数据纠错</a></li>
            <li><a href="${p}privacy-policy.html">隐私权保护政策</a></li>
            <li><a href="${p}disclaimer.html">免责声明与服务条款</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-disclaimer-box">
        <strong>合规声明与风险警示：</strong>本站所有内容仅限用于跨国学术科研交流、跨国软件代码托管（如 GitHub）、企业跨境合法外贸业务及海外公开资讯查阅。严禁将本站介绍的技术、节点及客户端工具用于任何违反所在国家与地区法律法规的行为。请使用者严格自觉遵守当地网络安全法规，文明合规上网。
      </div>

      <div class="footer-bottom">
        <div>© 2026 梯子推荐网 (tizituijian.vip). 保留所有权利.</div>
        <div>原生静态极速版 · 无外链重型跟踪脚本</div>
      </div>
    </div>
  </footer>
  <script src="${p}js/main.js" defer></script>
</body>
</html>`;
}

// 统一面包屑生成器
function renderBreadcrumbs(items, depth = 0) {
  const p = getRelPrefix(depth);
  const breadcrumbItems = items.map((item, index) => {
    if (index === items.length - 1) {
      return `<li class="breadcrumb-item breadcrumb-current" aria-current="page">${item.name}</li>`;
    }
    return `<li class="breadcrumb-item">
      <a href="${item.url}" class="breadcrumb-link">${item.name}</a>
      <span class="breadcrumb-separator">/</span>
    </li>`;
  }).join('\n');

  return `
  <nav class="breadcrumb-nav" aria-label="当前页面位置">
    <div class="container">
      <ul class="breadcrumb-list">
        ${breadcrumbItems}
      </ul>
    </div>
  </nav>`;
}

// 统一侧边栏小部件
function renderSidebarWidgets(depth = 0) {
  const p = getRelPrefix(depth);
  return `
  <aside class="article-sidebar">
    <div class="sidebar-widget">
      <h3 class="sidebar-title">🔥 核心推荐专题</h3>
      <ul class="sidebar-list">
        <li><a href="${p}recommend/budget.html">性价比机场推荐（平价实惠）</a></li>
        <li><a href="${p}recommend/premium.html">高端IPLC专线机场精选</a></li>
        <li><a href="${p}recommend/stable.html">晚高峰稳定抗封锁VPN梯子</a></li>
        <li><a href="${p}recommend/beginner.html">新手零门槛一键式机场</a></li>
        <li><a href="${p}recommend/ai.html">ChatGPT/Claude大模型解锁专线</a></li>
        <li><a href="${p}recommend/streaming.html">4K奈飞/油管流媒体解锁节点</a></li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3 class="sidebar-title">📊 权威数据榜单</h3>
      <ul class="sidebar-list">
        <li><a href="${p}ranking/overall.html">2026综合实力排行榜</a></li>
        <li><a href="${p}ranking/value.html">每GB流量单价性价比榜</a></li>
        <li><a href="${p}ranking/budget.html">小额月付轻量排行榜</a></li>
        <li><a href="${p}ranking/stable.html">网络SLA稳定性排行榜</a></li>
        <li><a href="${p}compare/index.html">机场全维度横向对比工具</a></li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3 class="sidebar-title">📖 必读使用教程</h3>
      <ul class="sidebar-list">
        <li><a href="${p}guides/index.html"><strong>全部30篇客户端教程大全 →</strong></a></li>
        <li><a href="${p}guides/windows.html">Windows配置Clash Verge教程</a></li>
        <li><a href="${p}guides/android.html">Android手机配置Sing-box教程</a></li>
        <li><a href="${p}guides/ios.html">iOS小火箭Shadowrocket配置</a></li>
        <li><a href="${p}guides/troubleshooting.html">节点超时与订阅失败排查</a></li>
      </ul>
    </div>
  </aside>`;
}

module.exports = {
  DOMAIN,
  airports,
  getRelPrefix,
  renderHead,
  renderHeader,
  renderFooter,
  renderBreadcrumbs,
  renderSidebarWidgets
};
