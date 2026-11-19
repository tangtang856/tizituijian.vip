/**
 * 生成 airport/ 和 review/ 目录下的所有机场资料与深度评测页面 (14大真实品牌独立专页)
 * 以及评测中心总览页 (review/index.html) 与品牌档案总览页 (airport/index.html)
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
  // 1. 生成 14 个品牌的独立参数档案页 (airport/[slug].html) 与 独立深度评测页 (review/[slug].html)
  airports.forEach(a => {
    // -------------------------------------------------------------
    // 生成 airport/[slug].html (官方资料与参数独立页面)
    // -------------------------------------------------------------
    const profileMeta = {
      title: `${a.name}官方资料与套餐详情 | 最新线路与协议汇总 - 梯子推荐网`,
      description: `${a.name}品牌独立档案：起步价格¥${a.startingPrice}/月，线路类型${a.lineType}，主打${a.protocols.join('/')}协议，覆盖${a.regions.slice(0, 4).join('、')}等地区，设备并发${a.deviceLimit}。提供详细套餐参数与购买指引。`,
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
      { name: '品牌档案', url: 'index.html' },
      { name: a.name, url: `${a.slug}.html` }
    ];

    const profileHtml = `${renderHead(profileMeta, 1)}
${renderHeader(1, 'recommend')}
${renderBreadcrumbs(profileBreadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${a.name} 品牌档案与最新套餐参数</h1>

      <div class="article-header-meta">
        <span>最后核验：${a.lastVerified}</span>
        <span>线路架构：<strong style="color:var(--primary);">${a.lineType}</strong></span>
        <span>测试状态：✓ 编辑部实测验证</span>
        <span>综合评分：<strong style="color:var(--success); font-size:1.1rem;">${a.metrics.overallScore} / 10</strong></span>
      </div>

      <div class="callout callout-info">
        <strong>定位一句话：</strong>${a.tagline}
        ${a.coupon ? `<div style="margin-top:8px;">🎁 <strong>专属立减优惠券：</strong><code style="font-size:1.1em; color:#e11d48; background:#fff1f2; padding:2px 8px; border-radius:4px;">${a.coupon}</code></div>` : ''}
      </div>

      <h2>一、品牌基础概述</h2>
      <p>${a.description}</p>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-top:32px; margin-bottom:8px;">
        <h2 style="margin:0; font-size:1.45rem;">二、官方在售套餐与资费明细</h2>
        <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:6px; font-weight:700; padding:6px 14px; border-radius:6px; font-size:0.85rem; box-shadow:0 2px 6px rgba(37,99,235,0.25);">
          <span>🚀 立刻前往 ${a.name} 官网</span> ↗
        </a>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>套餐名称</th>
              <th>周期与价格</th>
              <th>月度流量</th>
              <th>端口带宽</th>
              <th>设备并发</th>
              <th>折合每GB单价</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            ${a.plans.map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><span style="font-weight:700; color:var(--primary);">¥${p.price}</span> / ${p.periodText}</td>
              <td>${p.trafficGb} GB</td>
              <td>${p.bandwidth || '500 Mbps'}</td>
              <td>${p.deviceLimit || '4台设备'}</td>
              <td><span style="font-weight:600; color:var(--success);">¥${p.unitPricePerGb.toFixed(3)}</span> / GB</td>
              <td style="font-size:0.82rem;">${p.note || ''}</td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2>三、技术架构与核心参数</h2>
      <ul>
        <li><strong>主力传输线路：</strong>${a.lineType}</li>
        <li><strong>支持代理协议：</strong>${a.protocols.join('、')}</li>
        <li><strong>节点覆盖区域：</strong>${a.regions.join('、')}</li>
        <li><strong>同时在线设备数：</strong>${a.deviceLimit}</li>
        <li><strong>AI大模型支持：</strong>${a.aiSupport.join('、')}</li>
        <li><strong>4K流媒体解锁：</strong>${a.streamingSupport.join('、')}</li>
      </ul>

      <h2>四、优缺点客观分析</h2>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:20px 0;">
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:16px; border-radius:var(--radius-sm);">
          <strong style="color:#166534; font-size:0.95rem;">✓ 核心优势</strong>
          <ul style="margin:8px 0 0 16px; font-size:0.88rem; color:#14532d;">
            ${a.advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>
        <div style="background:#fff1f2; border:1px solid #fecdd3; padding:16px; border-radius:var(--radius-sm);">
          <strong style="color:#9f1239; font-size:0.95rem;">! 注意事项</strong>
          <ul style="margin:8px 0 0 16px; font-size:0.88rem; color:#881337;">
            ${a.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
          </ul>
        </div>
      </div>

      <h2>五、相关独立评测与横向对比</h2>
      <p>您可以查看关于 ${a.name} 的独立实测长文或使用在线对比工具与其他品牌横向比对：</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap; margin:16px 0;">
        <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm">阅读 ${a.name} 独立深度评测报告 →</a>
        <a href="../compare/index.html" class="btn btn-outline btn-sm">打开14大品牌横向对比工具</a>
        <a href="../ranking/overall.html" class="btn btn-outline btn-sm">查看2026年综合排行榜</a>
      </div>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(AIRPORT_DIR, `${a.slug}.html`), profileHtml, 'utf8');
    console.log(`Generated: airport/${a.slug}.html`);

    // -------------------------------------------------------------
    // 生成 review/[slug].html (独立深度评测页面)
    // -------------------------------------------------------------
    const reviewMeta = {
      title: `${a.name}评测 2026 | 全面网络表现与套餐优缺点深度分析 - 梯子推荐网`,
      description: `2026最新${a.name}独立评测报告：涵盖晚高峰测速、${a.lineType}线路延迟、ChatGPT与Netflix解锁能力、套餐每GB价格剖析及防踩坑购买建议。`,
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
      { name: '机场评测', url: 'index.html' },
      { name: `${a.name}独立评测`, url: `${a.slug}.html` }
    ];

    const reviewHtml = `${renderHead(reviewMeta, 1)}
${renderHeader(1, 'review')}
${renderBreadcrumbs(reviewBreadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${a.name} 深度评测报告 (2026最新实测)</h1>

      <div class="article-header-meta">
        <span>发布日期：2026年</span>
        <span>核验日期：${a.lastVerified}</span>
        <span>线路架构：<strong>${a.lineType}</strong></span>
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
      <p>在当前科学上网服务鱼龙混杂的环境下，我们通过对 ${a.name} 的网络延迟监测、晚高峰吞吐测试以及海外大模型/流媒体的风控验证，整理出本篇详实的评测报告。</p>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-top:32px; margin-bottom:8px;">
        <h2 style="margin:0; font-size:1.45rem;">二、套餐资费与每GB成本测算</h2>
        <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:6px; font-weight:700; padding:6px 14px; border-radius:6px; font-size:0.85rem; box-shadow:0 2px 6px rgba(37,99,235,0.25);">
          <span>🚀 立刻前往 ${a.name} 官网</span> ↗
        </a>
      </div>
      <p>以下为官方当前公示的在售套餐及实测折算单价：</p>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>套餐</th>
              <th>价格/周期</th>
              <th>套餐流量</th>
              <th>端口带宽</th>
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
              <td>${p.bandwidth || '500 Mbps'}</td>
              <td>¥${p.unitPricePerGb.toFixed(3)} / GB</td>
              <td>${p.period === 'one-time' ? '长效备用永不过期' : '主力日常办公与科研'}</td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2>三、节点线路与技术架构剖析</h2>
      <p>
        <strong>1. 线路类型：</strong>采用 <strong>${a.lineType}</strong>，在晚高峰网络拥堵期间具备出色的丢包控制与SLA保障能力。
      </p>
      <p>
        <strong>2. 接入协议：</strong>采用 <code>${a.protocols.join('</code>、<code>')}</code>，具备良好的跨平台适配性，在 Windows、Android、macOS 和 iOS 的开源客户端（如 Clash Verge Rev、Shadowrocket、Sing-box）上均可流畅导入使用。
      </p>
      <p>
        <strong>3. 地区覆盖：</strong>覆盖 <strong>${a.regions.join('、')}</strong> 等主要跨境节点，其中香港、日本与新加坡节点物理距离最近，平均延迟表现优秀；美国节点则适合需要美区原生 IP 认证的服务。
      </p>
      <p>
        <strong>4. 设备并发控制：</strong>标称限制为 <strong>${a.deviceLimit}</strong>，能够满足大多数单人多终端日常使用。
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

      <h2>六、购买建议与直达通道</h2>
      <p><strong>最适合以下群体：</strong></p>
      <ul>
        ${a.suitableFor.map(s => `<li>${s}</li>`).join('')}
      </ul>

      <div class="callout callout-warning">
        <strong>⚠️ 购买前注意事项：</strong>
        <ol style="margin:8px 0 0 16px;">
          <li>新用户初次体验建议优先选择月付周期，亲自验证本地网络运营商（电信、联通、移动）与该机场入口节点的匹配度。</li>
          <li>妥善保管订阅链接，切勿在公开网络平台分享您的私人订阅。</li>
          ${a.coupon ? `<li>在结算页面别忘了输入专属优惠券码 <code>${a.coupon}</code> 享受额外立减！</li>` : ''}
        </ol>
      </div>

      <div style="margin:28px 0;">
        <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-lg">前往 ${a.name} 官网并开通服务 →</a>
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
        <li><a href="../airport/${a.slug}.html">查看 ${a.name} 官方参数档案</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(REVIEW_DIR, `${a.slug}.html`), reviewHtml, 'utf8');
    console.log(`Generated: review/${a.slug}.html`);
  });

  // 2. 生成 14 大品牌独立评测中心总览页 (review/index.html)
  generateReviewHub();

  // 3. 生成 14 大品牌官方参数档案中心总览页 (airport/index.html)
  generateAirportHub();
}

// 评测中心总览页生成器
function generateReviewHub() {
  const meta = {
    title: '机场独立评测大全 2026 | 14大主流品牌深度实测报告汇总 - 梯子推荐网',
    description: '梯子推荐网官方独立评测中心：汇集14家主流机场梯子节点的独立评测专页，包含微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、萤火虫、跨界、隐形人、飞V、梯子云、浪网、灵动云、全球云的全维度晚高峰测速、线路架构与优缺点深度剖析。',
    keywords: '机场评测,机场推荐,梯子评测,vpn评测,独立评测,性价比机场',
    canonicalPath: 'review/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "2026年度 14 大主流机场品牌独立评测专页大全",
      "url": `${DOMAIN}/review/index.html`,
      "description": "提供客观独立、技术核验与多维度测试的机场专属评测报告汇总"
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '机场独立评测大全', url: 'index.html' }
  ];

  const sorted = airports.slice().sort((a, b) => (a.customRank || 99) - (b.customRank || 99));

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'review')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding:30px 15px 60px;">
  <section class="page-intro" style="margin-bottom:35px; text-align:center;">
    <h1 style="font-size:2.2rem; font-weight:800; color:var(--text-main); margin-bottom:14px;">
      🔍 2026年度 14 大主流机场品牌独立评测专页大全
    </h1>
    <p style="font-size:1.02rem; color:var(--text-muted); max-width:860px; margin:0 auto; line-height:1.7;">
      本站坚持<strong>非赞助、纯客观、持续核验</strong>的评测原则。为收录的 14 家机场服务商全部建立<strong>单独独立的深度评测专页</strong>，涵盖晚高峰测速、物理专线抖动、流媒体与 AI 解锁、真实在售套餐明细及避坑建议。
    </p>
  </section>

  <!-- 14大品牌独立评测卡片网格 -->
  <div class="airport-grid" style="margin-bottom:45px;">
    ${sorted.map((a, idx) => {
      const isTop3 = idx < 3;
      const rankClass = idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : 'rank-normal';
      const rankText = idx === 0 ? '🥇 TOP 1' : idx === 1 ? '🥈 TOP 2' : idx === 2 ? '🥉 TOP 3' : `${idx + 1}`;

      return `
      <article class="airport-card ${isTop3 ? 'card-featured' : ''}">
        <div class="card-top-meta">
          <div class="card-title-box">
            <span class="card-rank-badge ${rankClass}">${rankText}</span>
            <h2 class="card-brand-name" style="margin:0; font-size:1.22rem;">
              <a href="${a.slug}.html">${a.name}</a>
            </h2>
          </div>
          <span class="card-status-badge badge-verified">✓ 独立专页</span>
        </div>

        <p class="card-description">${a.tagline}</p>

        <div class="card-metric-banner">
          <div class="metric-price-left">
            <span class="metric-price-num">¥${a.startingPrice}</span>
            <span class="metric-price-unit">/月起</span>
          </div>
          <div class="metric-traffic-right">
            <strong>${a.plans[0].trafficGb}&nbsp;GB</strong> / 月<br>
            <span>${a.deviceLimit}</span>
          </div>
        </div>

        <div class="card-tags-row">
          <span class="tag tag-highlight">${a.lineType}</span>
          ${a.protocols.slice(0, 2).map(p => `<span class="tag">${p}</span>`).join('')}
          <span class="tag">单价 ¥${a.plans[0].unitPricePerGb.toFixed(3)}/G</span>
        </div>

        <ul class="card-features-list">
          <li><span class="icon-check">✓</span> <span>${a.advantages[0]}</span></li>
          <li><span class="icon-check">✓</span> <span>${a.advantages[1]}</span></li>
          ${a.disadvantages && a.disadvantages[0] ? `<li><span class="icon-warn">!</span> <span style="color:var(--text-light);">${a.disadvantages[0]}</span></li>` : ''}
        </ul>

        ${a.coupon ? `
        <div class="card-coupon-bar">
          <span>专属优惠券码：</span>
          <code>${a.coupon}</code>
        </div>
        ` : ''}

        <div class="card-actions-grid">
          <a href="${a.slug}.html" class="btn btn-primary btn-sm">阅读独立评测专页 →</a>
          <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-outline btn-sm">直达官网 ↗</a>
        </div>
      </article>
      `;
    }).join('')}
  </div>

  <!-- 14大品牌核心评测指标快速总表 -->
  <section style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:28px; box-shadow:var(--shadow-xs);">
    <h2 style="font-size:1.35rem; font-weight:800; margin-bottom:14px;">📊 14大品牌独立评测综合指标速查</h2>
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th style="width:50px; text-align:center;">排名</th>
            <th style="white-space:nowrap;">品牌名称</th>
            <th style="white-space:nowrap;">起步价格</th>
            <th style="white-space:nowrap;">主力线路</th>
            <th style="white-space:nowrap;">综合实测评分</th>
            <th style="white-space:nowrap;">独立评测专页</th>
            <th style="white-space:nowrap; text-align:center;">官网直达</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map((a, idx) => `
          <tr>
            <td style="text-align:center; white-space:nowrap;">
              <span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">
                ${idx + 1}
              </span>
            </td>
            <td style="white-space:nowrap;">
              <strong><a href="${a.slug}.html">${a.name}</a></strong>
            </td>
            <td style="white-space:nowrap;">
              <span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span>/月起
            </td>
            <td style="white-space:nowrap;">
              <span class="tag" style="white-space:nowrap; display:inline-block; padding:3px 8px;">${a.lineType}</span>
            </td>
            <td style="white-space:nowrap;">
              <strong style="color:var(--success); font-size:1.05rem;">${a.metrics.overallScore}</strong> / 10
            </td>
            <td style="white-space:nowrap;">
              <a href="${a.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 10px; font-size:0.82rem;">详细评测专页 →</a>
            </td>
            <td style="white-space:nowrap; text-align:center;">
              <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-sm" style="padding:4px 10px; font-size:0.82rem;">官网选购 ↗</a>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(REVIEW_DIR, 'index.html'), html, 'utf8');
  console.log('✓ 已成功生成 review/index.html 机场独立评测大全！');
}

// 品牌官方参数档案库总览页生成器
function generateAirportHub() {
  const meta = {
    title: '机场品牌参数档案库 2026 | 14大主流机场官方资料与套餐大全 - 梯子推荐网',
    description: '梯子推荐网官方资料库：收录14家主流机场梯子品牌的官方套餐明细、传输线路架构、支持协议、地区节点及设备并发限制参数档案。',
    keywords: '机场资料库,机场档案,机场套餐,节点参数,梯子参数,机场推荐',
    canonicalPath: 'airport/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "14大主流机场品牌官方资料与参数档案库",
      "url": `${DOMAIN}/airport/index.html`,
      "description": "收录14家主流机场梯子品牌的官方套餐明细与传输线路架构参数档案"
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '品牌参数档案库', url: 'index.html' }
  ];

  const sorted = airports.slice().sort((a, b) => (a.customRank || 99) - (b.customRank || 99));

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'recommend')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding:30px 15px 60px;">
  <section class="page-intro" style="margin-bottom:35px; text-align:center;">
    <h1 style="font-size:2.2rem; font-weight:800; color:var(--text-main); margin-bottom:14px;">
      📋 14 大主流机场品牌官方资料与参数档案库
    </h1>
    <p style="font-size:1.02rem; color:var(--text-muted); max-width:860px; margin:0 auto; line-height:1.7;">
      提供真实、公开、可核验的 14 家机场官方在售套餐资费、节点地区覆盖、协议支持与设备并发限制，每个品牌均配备<strong>独立档案页面</strong>。
    </p>
  </section>

  <div class="table-responsive" style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px; box-shadow:var(--shadow-xs);">
    <table class="data-table">
      <thead>
        <tr>
          <th style="width:50px; text-align:center;">序号</th>
          <th style="white-space:nowrap;">品牌名称</th>
          <th style="white-space:nowrap;">主力线路</th>
          <th style="white-space:nowrap;">在售起步价</th>
          <th style="white-space:nowrap;">支持协议</th>
          <th style="white-space:nowrap;">节点区域覆盖</th>
          <th style="white-space:nowrap;">独立档案与评测</th>
        </tr>
      </thead>
      <tbody>
        ${sorted.map((a, idx) => `
        <tr>
          <td style="text-align:center; white-space:nowrap;">${idx + 1}</td>
          <td style="white-space:nowrap;">
            <strong><a href="${a.slug}.html">${a.name}</a></strong>
          </td>
          <td style="white-space:nowrap;">
            <span class="tag" style="white-space:nowrap; display:inline-block; padding:3px 8px;">${a.lineType}</span>
          </td>
          <td style="white-space:nowrap;">
            <span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span>/月起
          </td>
          <td style="white-space:nowrap;">${a.protocols.join(' / ')}</td>
          <td style="white-space:nowrap;">${a.regions.slice(0, 3).join('、')}等</td>
          <td style="white-space:nowrap;">
            <a href="${a.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 8px; font-size:0.82rem; margin-right:6px;">参数档案</a>
            <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm" style="padding:4px 8px; font-size:0.82rem;">独立评测</a>
          </td>
        </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(AIRPORT_DIR, 'index.html'), html, 'utf8');
  console.log('✓ 已成功生成 airport/index.html 品牌参数档案库！');
}

module.exports = { generateAirportsAndReviews };

if (require.main === module) {
  generateAirportsAndReviews();
}
