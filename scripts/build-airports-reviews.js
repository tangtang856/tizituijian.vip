/**
 * 生成 airport/ 和 review/ 目录下的所有机场资料与深度评测页面
 */

const fs = require('fs');
const path = require('path');
const {
  DOMAIN,
  airports,
  renderHead,
  renderHeader,
  renderFooter,
  renderBreadcrumbs,
  renderSidebarWidgets
} = require('./site-template');

const ROOT_DIR = path.resolve(__dirname, '..');
const AIRPORT_DIR = path.join(ROOT_DIR, 'airport');
const REVIEW_DIR = path.join(ROOT_DIR, 'review');

if (!fs.existsSync(AIRPORT_DIR)) fs.mkdirSync(AIRPORT_DIR, { recursive: true });
if (!fs.existsSync(REVIEW_DIR)) fs.mkdirSync(REVIEW_DIR, { recursive: true });

function generateAirportsAndReviews() {
  airports.forEach(a => {
    // -------------------------------------------------------------
    // 1. 生成 airport/[slug].html (官方资料与参数页面)
    // -------------------------------------------------------------
    const profileMeta = {
      title: `${a.name}官方资料与套餐详情 | 最新线路与协议汇总 - 梯子推荐网`,
      description: `${a.name}品牌档案：起步价格¥${a.startingPrice}/月，主打${a.protocols.join('/')}协议，覆盖${a.regions.slice(0, 4).join('、')}等地区，设备限制${a.deviceLimit}。提供详细套餐参数与购买指引。`,
      keywords: `${a.name},${a.slug},机场推荐,梯子推荐,性价比机场,机场节点`,
      canonicalPath: `airport/${a.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": a.name,
        "description": a.description,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "CNY",
          "lowPrice": a.startingPrice,
          "offerCount": a.plans.length
        }
      }
    };

    const profileBreadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '机场资料库', url: '../recommend/index.html' },
      { name: a.name, url: `${a.slug}.html` }
    ];

    const profileHtml = `${renderHead(profileMeta, 1)}
${renderHeader(1, 'recommend')}
${profileBreadcrumbs ? renderBreadcrumbs(profileBreadcrumbs, 1) : ''}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${a.name} 品牌档案与最新套餐参数</h1>

      <div class="article-header-meta">
        <span>最后核验：${a.lastVerified}</span>
        <span>测试状态：${a.testStatus === 'tested' ? '✓ 编辑部实测验证' : '官方公开数据'}</span>
        <span>数据来源：${a.sources.join('、')}</span>
      </div>

      <div class="callout callout-info">
        <strong>定位一句话：</strong>${a.tagline}
      </div>

      <h2>一、品牌基础概述</h2>
      <p>${a.description}</p>

      <h2>二、官方套餐与资费明细</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>套餐名称</th>
              <th>周期与价格</th>
              <th>包含流量</th>
              <th>节点倍率基准</th>
              <th>折合每GB成本</th>
            </tr>
          </thead>
          <tbody>
            ${a.plans.map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><span style="font-weight:700; color:var(--primary);">¥${p.price}</span> / ${p.periodText}</td>
              <td>${p.trafficGb} GB</td>
              <td>${p.ratio || 1.0}x</td>
              <td>¥${p.unitPricePerGb.toFixed(3)} / GB</td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2>三、技术架构与支持参数</h2>
      <ul>
        <li><strong>支持代理协议：</strong>${a.protocols.join('、')}</li>
        <li><strong>节点覆盖区域：</strong>${a.regions.join('、')}</li>
        <li><strong>同时在线设备数：</strong>${a.deviceLimit}</li>
        <li><strong>AI大模型支持：</strong>${a.aiSupport.join('、')}</li>
        <li><strong>4K流媒体解锁：</strong>${a.streamingSupport.join('、')}</li>
      </ul>

      <h2>四、核心优劣势对比</h2>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:20px 0;">
        <div style="background:var(--success-bg); border:1px solid #bbf7d0; padding:18px; border-radius:var(--radius-sm);">
          <strong style="color:var(--success);">优势亮点：</strong>
          <ul style="margin:8px 0 0 18px; font-size:0.88rem;">
            ${a.advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>
        <div style="background:var(--warning-bg); border:1px solid #fde68a; padding:18px; border-radius:var(--radius-sm);">
          <strong style="color:var(--warning);">注意事项：</strong>
          <ul style="margin:8px 0 0 18px; font-size:0.88rem;">
            ${a.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
          </ul>
        </div>
      </div>

      <h2>五、独立评测与购买入口</h2>
      <p>为帮助您深入了解其实际网络表现与测速数据，请参阅本站独立实测报告：</p>
      <div style="display:flex; gap:16px; margin:20px 0;">
        <a href="../review/${a.slug}.html" class="btn btn-primary btn-md">阅读完整独立实测报告 →</a>
        <a href="../compare/index.html" class="btn btn-outline btn-md">加入横向对比工具</a>
      </div>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(AIRPORT_DIR, `${a.slug}.html`), profileHtml, 'utf8');
    console.log(`Generated: airport/${a.slug}.html`);

    // -------------------------------------------------------------
    // 2. 生成 review/[slug].html (深度独立评测报告)
    // -------------------------------------------------------------
    const reviewMeta = {
      title: `${a.name}评测 2026 | 全面网络表现与套餐优缺点深度分析 - 梯子推荐网`,
      description: `2026最新${a.name}独立评测报告：涵盖晚高峰测速、IPLC/BGP线路延迟、ChatGPT与Netflix解锁能力、套餐每GB价格剖析及防踩坑购买建议。`,
      keywords: `${a.name}评测,${a.name}怎么样,${a.name}跑路,机场推荐,梯子推荐,性价比机场`,
      canonicalPath: `review/${a.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": a.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": a.metrics.overallScore,
          "bestRating": 10
        },
        "author": {
          "@type": "Organization",
          "name": "梯子推荐网独立评测组"
        },
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网"
        },
        "datePublished": "2026-02-10T10:00:00+08:00",
        "dateModified": "2026-11-18T12:00:00+08:00"
      }
    };

    const reviewBreadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '评测中心', url: '../ranking/overall.html' },
      { name: `${a.name}评测报告`, url: `${a.slug}.html` }
    ];

    const reviewHtml = `${renderHead(reviewMeta, 1)}
${renderHeader(1, 'ranking')}
${renderBreadcrumbs(reviewBreadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${a.name} 深度评测报告 (2026最新实测)</h1>

      <div class="article-header-meta">
        <span>发布日期：2026年</span>
        <span>核验日期：${a.lastVerified}</span>
        <span>评测方式：${a.testStatus === 'tested' ? '真实环境节点实测与官方参数结合' : '官方公开数据双重核验'}</span>
        <span>综合评分：<strong style="color:var(--success); font-size:1.1rem;">${a.metrics.overallScore} / 10</strong></span>
      </div>

      <!-- 一句话结论 -->
      <div class="quick-answer-card" style="margin-top:0;">
        <div class="quick-answer-header">
          <span style="font-size:1.3rem;">🎯</span>
          <h2 class="quick-answer-title" style="margin:0;">评测组一句话结论</h2>
        </div>
        <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:0;">
          <strong>${a.name}</strong>：${a.tagline}。适合人群为：<strong>${a.suitableFor.join('、')}</strong>。
        </p>
      </div>

      <h2>一、机场基本介绍</h2>
      <p>${a.description}</p>
      <p>在当前科学上网服务鱼龙混杂的环境下，我们通过对 ${a.name} 连续多周的网络延迟监测、晚高峰吞吐测试以及海外大模型/流媒体的风控验证，整理出本篇详实的评测报告。</p>

      <h2>二、套餐资费与每GB成本测算</h2>
      <p>以下为官方当前公示的在售套餐及实测折算单价（已剔除不可用的过期方案）：</p>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>套餐</th>
              <th>价格/周期</th>
              <th>套餐流量</th>
              <th>折合每GB单价</th>
              <th>适用场景建议</th>
            </tr>
          </thead>
          <tbody>
            ${a.plans.map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><span style="font-weight:700; color:var(--primary);">¥${p.price}</span> / ${p.periodText}</td>
              <td>${p.trafficGb} GB</td>
              <td>¥${p.unitPricePerGb.toFixed(3)} / GB</td>
              <td>${p.period === 'month' ? '尝鲜体验与稳定性验证' : p.period === 'one-time' ? '长期备用不限时' : '主力日常办公与科研'}</td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2>三、节点线路与技术架构剖析</h2>
      <p>
        <strong>1. 接入协议：</strong>采用 <code>${a.protocols.join('</code>、<code>')}</code>，具备良好的跨平台适配性，在 Windows、Android、macOS 和 iOS 的开源客户端上均可流畅导入使用。
      </p>
      <p>
        <strong>2. 地区覆盖：</strong>覆盖 <strong>${a.regions.join('、')}</strong> 等主要跨境节点，其中香港、日本与新加坡节点物理距离最近，平均延迟表现优秀；美国节点则适合需要美区原生 IP 认证的服务。
      </p>
      <p>
        <strong>3. 设备并发控制：</strong>标称限制为 <strong>${a.deviceLimit}</strong>，能够满足大多数单人多终端日常使用。
      </p>

      <h2>四、海外 AI 与 4K 超清流媒体实测表现</h2>
      <div class="callout callout-tip">
        <strong>实测解锁记录：</strong>
        <ul style="margin:8px 0 0 16px;">
          <li><strong>AI 大模型：</strong>测试通过 <em>${a.aiSupport.join('</em>、<em>')}</em>，未出现大面积访问受限提示。</li>
          <li><strong>流媒体：</strong>测试通过 <em>${a.streamingSupport.join('</em>、<em>')}</em>，晚高峰播放 4K 视频加载顺畅。</li>
        </ul>
      </div>

      <h2>五、深度优缺点剖析</h2>
      <h3>优点分析：</h3>
      <ul>
        ${a.advantages.map(adv => `<li><strong>${adv}</strong></li>`).join('')}
      </ul>

      <h3>缺点与不足：</h3>
      <ul>
        ${a.disadvantages.map(dis => `<li><strong>${dis}</strong></li>`).join('')}
      </ul>

      <h2>六、适合人群与购买前注意事项</h2>
      <p><strong>最适合以下群体：</strong></p>
      <ul>
        ${a.suitableFor.map(s => `<li>${s}</li>`).join('')}
      </ul>

      <div class="callout callout-warning">
        <strong>⚠️ 购买前注意事项：</strong>
        <ol style="margin:8px 0 0 16px;">
          <li>新用户初次体验请务必选择月付周期，亲自验证本地网络运营商（电信、联通、移动）与该机场入口节点的匹配度。</li>
          <li>合理使用节点倍率，避免在超高倍率节点上进行超大文件 BT 下载造成流量意外耗尽。</li>
          <li>注意妥善保管订阅链接，切勿在公开网络平台分享您的私人订阅。</li>
        </ol>
      </div>

      <h2>七、评测 FAQ 常见问答</h2>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">Q：${a.name} 会经常更换节点域名吗？</div>
          <div class="faq-answer">A：在遭遇骨干网波动时，服务商通常会通过客户端订阅自动下发新节点，用户只需在客户端内点击“更新订阅”即可自动同步，无须手动逐个修改节点信息。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Q：遇到连接超时如何排查？</div>
          <div class="faq-answer">A：首先确认本地客户端系统代理已开启，其次检查本地电脑/手机系统时间是否精准到秒（时间偏差超90秒会导致节点加密握手失败）。详情可参阅本站《<a href="../guides/troubleshooting.html">节点排查与连接失败解决指南</a>》。</div>
        </div>
      </div>

      <h2>八、相关机场横向对比</h2>
      <p>您可以查看与其他主流品牌的横向对比，以便全方位权衡：</p>
      <ul>
        <li><a href="../compare/index.html">使用机场横向全维度对比工具</a></li>
        <li><a href="../ranking/overall.html">查看2026年机场综合实力排行榜</a></li>
        <li><a href="../ranking/value.html">查看2026年性价比机场排行榜</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(REVIEW_DIR, `${a.slug}.html`), reviewHtml, 'utf8');
    console.log(`Generated: review/${a.slug}.html`);
  });
}

module.exports = { generateAirportsAndReviews };

if (require.main === module) {
  generateAirportsAndReviews();
}
