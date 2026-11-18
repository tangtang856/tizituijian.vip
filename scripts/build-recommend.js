/**
 * 生成 recommend/ 目录下的所有推荐专题页面 (14大真实品牌适配)
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
const REC_DIR = path.join(ROOT_DIR, 'recommend');

if (!fs.existsSync(REC_DIR)) {
  fs.mkdirSync(REC_DIR, { recursive: true });
}

// 1. recommend/index.html (推荐中心主页)
function generateRecommendHub() {
  const meta = {
    title: '机场推荐大全 2026 | 14大主流品牌场景选型与梯子推荐 - 梯子推荐网',
    description: '梯子推荐网2026最新机场推荐专题汇总：涵盖低预算平价机场（¥4.9起）、高端IPLC/IEPL纯专线、新手开箱即用、长期高稳定抗封锁、AI大模型及4K流媒体专用加速节点。',
    keywords: '机场推荐,性价比机场,梯子推荐,vpn推荐,专线机场,新手梯子',
    canonicalPath: 'recommend/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "2026六大使用场景机场推荐专题汇总",
      "url": `${DOMAIN}/recommend/index.html`,
      "description": "针对预算、稳定性、流媒体、AI等六大场景的系统化机场推荐指南"
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '机场推荐', url: 'index.html' }
  ];

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'recommend')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>2026年度多维度机场与梯子节点推荐专题</h1>
      
      <div class="article-header-meta">
        <span>更新时间：2026年11月</span>
        <span>核验状态：14大主流品牌持续监测</span>
        <span>覆盖类型：IEPL/IPLC专线、BGP中转、优化线路</span>
      </div>

      <div class="callout callout-info">
        <strong>选型导读：</strong>科学上网与海外加速并非“越贵越好”。选择机场的核心逻辑在于“场景匹配度”。我们根据网络传输原理与实际用户需求，梳理了六大核心细分专题，助您快速锁定最合适的解决方案。
      </div>

      <h2>一、六大核心需求专题入口</h2>

      <div class="category-grid" style="margin:24px 0;">
        <div class="category-card">
          <div class="category-icon">💰</div>
          <h3 class="category-title"><a href="budget.html">性价比平价机场推荐</a></h3>
          <p class="category-desc">精选飞V（¥4.9起）、微风网络（¥8/200GB）、飞猫云（折合¥7/月）等大流量低门槛方案。</p>
          <a href="budget.html" class="btn btn-outline btn-sm">进入平价专题 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🚀</div>
          <h3 class="category-title"><a href="premium.html">高端IPLC/IEPL专线推荐</a></h3>
          <p class="category-desc">隐形人、闪跃、无忧、灵猫纯专线架构，物理内网过境不过GFW，超低网络抖动与SLA保障。</p>
          <a href="premium.html" class="btn btn-outline btn-sm">进入专线专题 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🔰</div>
          <h3 class="category-title"><a href="beginner.html">新手入门一键梯子推荐</a></h3>
          <p class="category-desc">极简使用门槛，支持一键配置导入，附带专属折扣优惠码，1分钟快速上手。</p>
          <a href="beginner.html" class="btn btn-outline btn-sm">进入新手专题 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡️</div>
          <h3 class="category-title"><a href="stable.html">稳定抗封锁高可用VPN推荐</a></h3>
          <p class="category-desc">暮光网络、跨界、浪网等抗封锁高容灾架构，敏感期不失联，晚高峰流畅观看4K超清视频。</p>
          <a href="stable.html" class="btn btn-outline btn-sm">进入稳定专题 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3 class="category-title"><a href="ai.html">AI 大模型加速专线推荐</a></h3>
          <p class="category-desc">针对 ChatGPT 4o、Claude 3.5 Sonnet 及 Midjourney 专门优化的原生住宅双ISP落地IP。</p>
          <a href="ai.html" class="btn btn-outline btn-sm">进入AI专线专题 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🎬</div>
          <h3 class="category-title"><a href="streaming.html">4K超清流媒体解锁推荐</a></h3>
          <p class="category-desc">专攻 Netflix、Disney+、YouTube Premium、TikTok 等多国版权限制的高带宽解锁节点。</p>
          <a href="streaming.html" class="btn btn-outline btn-sm">进入流媒体专题 →</a>
        </div>
      </div>

      <h2>二、2026年机场选型的三项基本防坑原则</h2>
      <ol>
        <li><strong>首购永远坚持月付：</strong>无论服务商宣传多么诱人，绝不要在初次体验时直接购买大额年付套餐。</li>
        <li><strong>区分中转与专线：</strong>普通直连节点容易在晚高峰遇到骨干网国际出口拥堵（QoS），优先选择BGP多线中转或IPLC/IEPL内网专线。</li>
        <li><strong>注意节点倍率套路：</strong>本站收录的微风网络、无忧等品牌均标注标准1.0x倍率，购买前需核算实际折算后的可用流量。</li>
      </ol>

      <h2>三、快速对比工具</h2>
      <p>如果您已经有了心仪的备选品牌，可以通过我们的横向对比工具，直观查看 14 大品牌在价格、协议、设备数等维度的差异：</p>
      <p><a href="../compare/index.html" class="btn btn-primary btn-sm">使用机场横向全维度对比工具</a></p>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(REC_DIR, 'index.html'), html, 'utf8');
  console.log('Generated: recommend/index.html');
}

// 2. 六个细分专题页面生成器
function generateTopicPages() {
  const topics = [
    {
      slug: 'budget',
      title: '性价比机场推荐 2026 | 低预算平价优质翻墙梯子节点精选 - 梯子推荐网',
      h1: '2026高性价比与平价实惠机场推荐',
      desc: '专为学生党与预算有限用户整理的高性价比机场推荐：解析飞V（¥4.9起）、微风网络（¥8/200GB）、飞猫云等每GB低至0.036元的大流量平价方案。',
      targetAirports: ['feiv', 'breezenet', 'feimaoyun', 'firefly'],
      intro: '在科学上网与跨境加速领域，“性价比”并不等于单纯的“超低劣质”。真正的性价比是在保证网络稳定可用、晚高峰不至于断流的前提下，实现每 GB 流量成本的最优化。',
      advice: '对于月使用流量在100GB-200GB左右的用户，首推微风网络（¥8元享200GB专线流量，单价低至0.04元/GB）；对于只想以极小成本尝试的新手，飞V月付仅需¥4.9起，同时还提供29元不限时永久流量包。'
    },
    {
      slug: 'premium',
      title: '高端专线VPN机场推荐 2026 | IPLC/IEPL高速稳定节点精选 - 梯子推荐网',
      h1: '2026高端IPLC/IEPL专线VPN机场精选推荐',
      desc: '面向跨国企业办公、外贸金融与高要求极客的高端内网专线机场推荐：精选隐形人、闪跃、无忧、灵猫纯专线物理光纤过境方案，零丢包不卡顿。',
      targetAirports: ['yinxingren', 'flashleap', 'wuyou', 'lingmao', 'breezenet'],
      intro: '高端专线机场采用 IPLC（国际私有租线）或 IEPL（国际以太网专线）物理内网光纤传输。数据在境内入口服务器接收后，通过物理内网隧道直达境外机房，全程不通过公共 GFW 防火墙审查，因此拥有无与伦比的极速与超高网络 SLA 保证。',
      advice: '高端专线起步月付通常在19元至25元之间。如果您从事跨境电商、跨国视频会议、海外服务器运维或对网络丢包率有零容忍要求，隐形人、闪跃、无忧等专线方案是全天候可靠体验的首选。'
    },
    {
      slug: 'beginner',
      title: '新手入门机场推荐 | 零基础傻瓜式客户端与一键配置节点 - 梯子推荐网',
      h1: '新手入门首选机场推荐与零门槛梯子指南',
      desc: '面向刚接触科学上网的新手小白用户的机场推荐：精选提供一键傻瓜式客户端导入、支持便捷支付与专属折扣优惠券的品牌。',
      targetAirports: ['breezenet', 'feiv', 'feimaoyun', 'lingdongcloud'],
      intro: '对于初次接触翻墙与机场的新手而言，面对开源客户端（如 Clash、v2rayN）中繁杂的订阅转换、分流规则往往感到无从下手。选择新手友好型机场，核心标准是：客户端导入易用性、专属优惠券支持以及完善的图文教程。',
      advice: '新手可优先选择飞V（¥4.9尝鲜）或微风网络（¥8月付享200GB，优惠码 weifeng90），支持一键导入主流客户端，熟练后再深入探索分流规则。'
    },
    {
      slug: 'stable',
      title: '稳定高可用VPN与机场推荐 2026 | 晚高峰抗封锁不卡顿 - 梯子推荐网',
      h1: '2026稳定高可用VPN与专线机场节点推荐',
      desc: '聚焦长期稳定性与抗封锁能力的机场梯子推荐：暮光网络、跨界、浪网、无忧采用物理专线与多协议容灾架构，保障晚高峰与敏感时期持续可用。',
      targetAirports: ['yinxingren', 'flashleap', 'wuyou', 'muguang', 'kuajiecloud'],
      intro: '机场的“稳定性”主要体现在两个维度：一是晚高峰（每日20:00至23:00）的网络带宽承载力与丢包率；二是遭遇特殊网络监管时期（敏感期）时的抗封锁与自愈能力。采用物理专线内网传输能够实现真正的高可用。',
      advice: '选购高可用服务时，重点考察服务商是否采用 IPLC/IEPL 纯专线或全专线架构（如隐形人 9.6分、闪跃 9.5分、跨界 9.3分）。'
    },
    {
      slug: 'ai',
      title: 'ChatGPT与Claude专用VPN节点推荐 | AI解锁与海外流媒体加速 - 梯子推荐网',
      h1: '2026海外AI与流媒体解锁专用优质节点推荐',
      desc: '针对 ChatGPT 4o、Claude 3.5 Sonnet、Gemini 及 Midjourney 大模型风控的专用节点推荐：隐形人、闪跃、灵猫配备原生住宅双ISP落地IP，彻底告别地区报错。',
      targetAirports: ['yinxingren', 'lingmao', 'flashleap', 'breezenet'],
      intro: 'OpenAI 与 Anthropic 对访问者的网络环境设立了严格的风控机制。普通数据中心机房 IP 经常触发“Access Denied”报错。访问 AI 工具需要机场投入成本采购原生住宅 IP 或专属双 ISP 落地解锁池。',
      advice: '使用 AI 工具时，首选隐形人或灵猫的美国、日本、新加坡原生节点， OpenAI 官方对这些区域支持完善且无风控拦截。'
    },
    {
      slug: 'streaming',
      title: '流媒体解锁机场推荐 | 4K奈飞/油管/Disney+专用高带宽节点 - 梯子推荐网',
      h1: '2026超清流媒体专用机场节点推荐',
      desc: '专为海外流媒体打造的超清解锁节点推荐：支持 Netflix 多地区原生片库、Disney+、YouTube 4K/8K、TikTok、Hulu 免换节点畅享。',
      targetAirports: ['breezenet', 'flashleap', 'wavenet', 'laddercloud', 'quanqiuyun'],
      intro: '不同流媒体平台具有不同的地域版权限制。以 Netflix（奈飞）为例，非原生机房 IP 仅能观看无版权限制的“自制剧”，无法观看当地热播影片。流媒体专用机场节点不仅需要充足的千兆下行带宽，更需要配备原生解锁能力。',
      advice: '观看流媒体时首选微风网络或闪跃的香港、日本和新加坡节点，物理距离近、网络往返延迟低，4K视频加载几乎零缓冲。'
    }
  ];

  topics.forEach(t => {
    const meta = {
      title: t.title,
      description: t.desc,
      keywords: '机场推荐,梯子推荐,性价比机场,机场节点,vpn,vpn机场,vpn推荐',
      canonicalPath: `recommend/${t.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.h1,
        "description": t.desc,
        "author": {
          "@type": "Organization",
          "name": "梯子推荐网评测组"
        },
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网",
          "url": `${DOMAIN}/`
        },
        "datePublished": "2026-01-15T08:00:00+08:00",
        "dateModified": "2026-11-18T12:00:00+08:00"
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '机场推荐', url: 'index.html' },
      { name: t.h1, url: `${t.slug}.html` }
    ];

    const matchedAirports = airports.filter(a => t.targetAirports.includes(a.id));

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'recommend')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${t.h1}</h1>
      
      <div class="article-header-meta">
        <span>更新时间：2026年11月</span>
        <span>栏目：精选推荐专题</span>
        <span>核验状态：数据真实核验</span>
      </div>

      <div class="callout callout-info">
        <strong>专题导读：</strong>${t.intro}
      </div>

      <h2>一、本专题精选适配品牌列表</h2>

      <div class="airport-grid" style="margin:28px 0;">
        ${matchedAirports.map(a => `
        <article class="airport-card">
          <span class="card-badge-top badge-tested">
            ✓ 真实核验数据
          </span>
          <div class="airport-card-header">
            <h3 class="airport-name"><a href="../airport/${a.slug}.html">${a.name}</a></h3>
            <div class="airport-tagline">${a.tagline}</div>
          </div>
          
          <div class="airport-price-box">
            <div>
              <span class="price-val">¥${a.startingPrice}</span>
              <span class="price-unit">/月起</span>
            </div>
            <div class="price-sub">${a.plans[0].trafficGb}GB · ${a.deviceLimit}</div>
          </div>

          <div class="tag-cloud">
            <span class="tag" style="background:#eff6ff; color:#1d4ed8; font-weight:600;">${a.lineType}</span>
            ${a.protocols.slice(0, 2).map(p => `<span class="tag">${p}</span>`).join('')}
            ${a.regions.slice(0, 3).map(r => `<span class="tag">${r}</span>`).join('')}
          </div>

          <ul class="feature-list">
            ${a.advantages.slice(0, 3).map(adv => `
              <li class="feature-item"><span class="feature-icon-check">✓</span><span>${adv}</span></li>
            `).join('')}
            <li class="feature-item"><span class="feature-icon-warn">!</span><span>${a.disadvantages[0]}</span></li>
          </ul>

          <div class="card-actions">
            <a href="../airport/${a.slug}.html" class="btn btn-outline btn-sm">查看参数</a>
            <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm">独立评测</a>
          </div>
          ${a.coupon ? `<div style="margin-top:10px; font-size:0.78rem; text-align:center; color:#e11d48; background:#fff1f2; padding:3px 6px; border-radius:4px;">专属优惠码：<strong>${a.coupon}</strong></div>` : ''}
        </article>
        `).join('')}
      </div>

      <h2>二、专业选型建议与避坑提醒</h2>
      <p>${t.advice}</p>

      <h2>三、常见关联知识与教程</h2>
      <ul>
        <li><a href="../guides/windows.html">Windows客户端配置教程与分流规则详解</a></li>
        <li><a href="../blog/beginner-selection-guide.html">2026新手挑选机场节点的五大黄金准则</a></li>
        <li><a href="../glossary/iplc-iepl.html">科普：什么是IPLC内网专线与IEPL以太网专线？</a></li>
        <li><a href="../compare/index.html">打开机场横向对比工具，自主比对14大品牌价格与协议</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(REC_DIR, `${t.slug}.html`), html, 'utf8');
    console.log(`Generated: recommend/${t.slug}.html`);
  });
}

function generateAllRecommend() {
  generateRecommendHub();
  generateTopicPages();
}

module.exports = { generateAllRecommend };

if (require.main === module) {
  generateAllRecommend();
}
