/**
 * 生成首页 index.html
 */

const fs = require('fs');
const path = require('path');
const {
  DOMAIN,
  airports,
  renderHead,
  renderHeader,
  renderFooter
} = require('./site-template');

const ROOT_DIR = path.resolve(__dirname, '..');

function generateHomePage() {
  const meta = {
    title: '机场推荐 2026 | 精选高性价比稳定VPN与翻墙梯子节点指南 - 梯子推荐网',
    description: '梯子推荐网为您提供2026年度客观中立的机场推荐、高性价比机场节点评测、IPLC/IEPL专线梯子排行、稳定VPN与翻墙加速器对比，涵盖Windows/Mac/iOS/Android完整配置教程。',
    keywords: '机场推荐,梯子推荐,性价比机场,机场节点,vpn,vpn机场,vpn节点,vpn推荐',
    canonicalPath: 'index.html',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${DOMAIN}/#website`,
          "url": `${DOMAIN}/`,
          "name": "梯子推荐网",
          "description": "专业客观的中文机场推荐、节点评测与梯子VPN技术指南",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${DOMAIN}/compare/index.html`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": `${DOMAIN}/#organization`,
          "name": "梯子推荐网评测组",
          "url": `${DOMAIN}/`,
          "logo": `${DOMAIN}/favicon.ico`,
          "sameAs": ["https://github.com/tangtang856/tizituijian.vip"]
        },
        {
          "@type": "ItemList",
          "name": "2026年度精选优质机场节点综合排行",
          "itemListElement": airports.map((a, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": a.name,
            "url": `${DOMAIN}/airport/${a.slug}.html`
          }))
        }
      ]
    }
  };

  const html = `${renderHead(meta, 0)}
${renderHeader(0, 'home')}

<main>
  <!-- Section 2: Hero -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div>
        <div class="hero-badge-pill">⚡ 2026年最新核验 · 14大主流品牌深度实测</div>
        <h1 class="hero-title">2026优质机场推荐与网络加速服务选购指南</h1>
        <p class="hero-subtitle">
          汇聚全网优质<strong>机场推荐</strong>与<strong>梯子推荐</strong>，深度评测<strong>性价比机场</strong>套餐与高可用<strong>机场节点</strong>。为跨国科研交流、外贸办公、流媒体与AI大模型访问提供权威、中立的客观选型参考。
        </p>
        <div class="hero-actions">
          <a href="ranking/overall.html" class="btn btn-primary btn-lg">查看2026综合排行榜</a>
          <a href="compare/index.html" class="btn btn-outline btn-lg">横向对比工具</a>
        </div>
        <div class="hero-meta">
          <span class="hero-meta-item">✓ 真实价格流量透明</span>
          <span class="hero-meta-item">✓ 覆盖IEPL/IPLC专线</span>
          <span class="hero-meta-item">✓ 晚高峰网络实测SLA</span>
          <span class="hero-meta-item">✓ 涵盖全平台客户端配置</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: 快速答案 (Direct Quick Answers) -->
  <section class="section" style="padding-top:20px; padding-bottom:20px;">
    <div class="container">
      <div class="quick-answer-card">
        <div class="quick-answer-header">
          <span style="font-size:1.4rem;">💡</span>
          <h2 class="quick-answer-title">新手选购快速指南：如何在3分钟内挑选适合自己的梯子与VPN？</h2>
        </div>
        <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6;">
          在选择<strong>机场推荐</strong>服务与<strong>VPN节点</strong>时，切勿盲目追求虚标大年费。不同使用场景对应完全不同的网络架构考量：
        </p>
        <div class="quick-answer-grid">
          <div class="qa-item">
            <div class="qa-item-title">1. 超低预算与入门新手</div>
            <div class="qa-item-text">首选 <strong>飞V</strong>（¥4.9起步）或 <strong>微风网络</strong>（¥8/月享200GB超大专线流量），极低门槛轻松试错。</div>
          </div>
          <div class="qa-item">
            <div class="qa-item-title">2. ChatGPT / Claude 大模型</div>
            <div class="qa-item-text">务必选择配备原生住宅双ISP或真实物理专线（如 <strong>隐形人</strong>、<strong>闪跃</strong>、<strong>灵猫</strong>），有效避免风控报错。</div>
          </div>
          <div class="qa-item">
            <div class="qa-item-title">3. 高性价比 / 大流量用户</div>
            <div class="qa-item-text">重度视频观看优先考虑 <strong>微风网络</strong>（单价低至0.036元/GB）或 <strong>飞猫云</strong>（折算约¥7/月 150GB）。</div>
          </div>
          <div class="qa-item">
            <div class="qa-item-title">4. 晚高峰稳定办公</div>
            <div class="qa-item-text">防断连首选纯专线网络架构（如 <strong>无忧</strong>、<strong>暮光网络</strong>、<strong>跨界</strong>），内网直达不卡顿。</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: 精选推荐 (Featured Airport Cards) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">🌟 2026年度精选优质机场与VPN推荐 (14大主流品牌)</h2>
        <p class="section-subtitle">所有列出品牌均通过真实网络协议与价格流量核验，支持主流 Clash Verge、Shadowrocket、Sing-box</p>
      </div>

      <div class="airport-grid">
        ${airports.map(a => `
        <article class="airport-card">
          <span class="card-badge-top badge-tested">
            ✓ 真实核验数据
          </span>
          <div class="airport-card-header">
            <h3 class="airport-name"><a href="airport/${a.slug}.html">${a.name}</a></h3>
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
            <a href="airport/${a.slug}.html" class="btn btn-outline btn-sm">查看参数</a>
            <a href="review/${a.slug}.html" class="btn btn-primary btn-sm">独立评测</a>
          </div>
          ${a.coupon ? `<div style="margin-top:10px; font-size:0.78rem; text-align:center; color:#e11d48; background:#fff1f2; padding:3px 6px; border-radius:4px;">专属优惠码：<strong>${a.coupon}</strong></div>` : ''}
        </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Section 5: 综合排行榜预览 (Rankings Summary) -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
        <div>
          <h2 class="section-title">🏆 2026年机场节点综合实力排行榜</h2>
          <p class="section-subtitle">基于网络SLA稳定性、晚高峰速率、每GB单价与协议适配的综合加权排名</p>
        </div>
        <a href="ranking/overall.html" class="btn btn-outline btn-sm">查看完整排行细则 →</a>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:70px;">排名</th>
              <th>机场品牌</th>
              <th>起步价格</th>
              <th>月可用流量</th>
              <th>主力线路</th>
              <th>AI/流媒体支持</th>
              <th>综合评分</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${airports.slice().sort((a, b) => b.metrics.overallScore - a.metrics.overallScore).map((a, idx) => `
            <tr>
              <td>
                <span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">
                  ${idx + 1}
                </span>
              </td>
              <td>
                <strong><a href="airport/${a.slug}.html">${a.name}</a></strong>
                <div style="font-size:0.78rem; color:var(--text-light);">${a.protocols.join(' / ')}</div>
              </td>
              <td><span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span> / 月起</td>
              <td>${a.plans[0].trafficGb} GB</td>
              <td><span class="tag" style="padding:2px 6px;">${a.lineType}</span></td>
              <td>${a.aiSupport.slice(0, 2).join('、')}</td>
              <td>
                <span style="font-weight:800; color:var(--success); font-size:1.05rem;">${a.metrics.overallScore}</span>
                <span style="font-size:0.75rem; color:var(--text-light);"> / 10</span>
              </td>
              <td>
                <a href="review/${a.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 10px;">详细评测</a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 6: 按使用需求选型 (6 Topic Gateways) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">🎯 按使用需求精准选型</h2>
        <p class="section-subtitle">每个使用场景对网络延迟、协议抗封锁、IP纯净度要求各不相同，选择最适合您的专题</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <div class="category-icon">💰</div>
          <h3 class="category-title"><a href="recommend/budget.html">低预算平价机场</a></h3>
          <p class="category-desc">学生党与轻量用户的超高性价比之选，飞V ¥4.9起步，微风网络 ¥8 享200GB，单价低至0.036元/GB。</p>
          <a href="recommend/budget.html" class="btn btn-outline btn-sm">查看低预算推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🚀</div>
          <h3 class="category-title"><a href="recommend/premium.html">高端IPLC/IEPL专线</a></h3>
          <p class="category-desc">隐形人、闪跃、无忧、灵猫纯专线方案，跨国内网传输不过GFW，工业级零丢包SLA。</p>
          <a href="recommend/premium.html" class="btn btn-outline btn-sm">查看高端专线推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🔰</div>
          <h3 class="category-title"><a href="recommend/beginner.html">新手入门一键梯子</a></h3>
          <p class="category-desc">免配置规则，自带定制客户端或支持一键扫码导入，附带保姆级图文引导教程。</p>
          <a href="recommend/beginner.html" class="btn btn-outline btn-sm">查看新手推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡️</div>
          <h3 class="category-title"><a href="recommend/stable.html">稳定防封高可用VPN</a></h3>
          <p class="category-desc">针对敏感时期的抗封锁多协议容灾架构，暮光网络、跨界、浪网保障晚高峰流畅稳定。</p>
          <a href="recommend/stable.html" class="btn btn-outline btn-sm">查看高稳定推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3 class="category-title"><a href="recommend/ai.html">AI 大模型加速专线</a></h3>
          <p class="category-desc">专为 ChatGPT 4o、Claude 3.5 Sonnet 与 Midjourney 优化的纯净原生住宅IP与双ISP落地。</p>
          <a href="recommend/ai.html" class="btn btn-outline btn-sm">查看AI节点推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🎬</div>
          <h3 class="category-title"><a href="recommend/streaming.html">4K 超清流媒体解锁</a></h3>
          <p class="category-desc">针对 Netflix、Disney+、YouTube 4K、TikTok 等多国版权限制的高带宽专用通道。</p>
          <a href="recommend/streaming.html" class="btn btn-outline btn-sm">查看流媒体推荐 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: 机场横向比较工具入口 -->
  <section class="section section-alt">
    <div class="container">
      <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:40px; text-align:center; max-width:860px; margin:0 auto; box-shadow:var(--shadow-sm);">
        <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:12px;">⚖️ 14大主流机场横向全维度对比工具</h2>
        <p style="font-size:1rem; color:var(--text-muted); line-height:1.6; margin-bottom:24px;">
          还在纠结哪家更划算？自由勾选 2-5 家机场，即时对比每 GB 流量单价、协议支持、节点覆盖、解锁能力及在线设备限制。
        </p>
        <a href="compare/index.html" class="btn btn-primary btn-lg">立即进入横向对比工具</a>
      </div>
    </div>
  </section>

  <!-- Section 8: 客户端教程与知识普及 -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">📚 全平台客户端配置与使用教程</h2>
        <p class="section-subtitle">详细图文指导，覆盖从客户端下载、订阅导入到高级规则分流的每一个操作细节</p>
      </div>

      <div class="category-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <div class="category-card">
          <div class="category-icon">💻</div>
          <h3 class="category-title"><a href="guides/windows.html">Windows 配置教程</a></h3>
          <p class="category-desc">Clash Verge Rev 与 v2rayN 客户端安装、订阅链接导入与系统代理设置图文详解。</p>
          <a href="guides/windows.html" class="btn btn-outline btn-sm">阅读 Windows 教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">📱</div>
          <h3 class="category-title"><a href="guides/android.html">Android 安卓教程</a></h3>
          <p class="category-desc">Clash Meta (CMFA) 与 Sing-box 客户端配置、应用分流与电量优化教程。</p>
          <a href="guides/android.html" class="btn btn-outline btn-sm">阅读 Android 教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🍏</div>
          <h3 class="category-title"><a href="guides/ios.html">iOS 苹果设备教程</a></h3>
          <p class="category-desc">Shadowrocket (小火箭) 节点导入、配置规则更新与海外 Apple ID 申请指引。</p>
          <a href="guides/ios.html" class="btn btn-outline btn-sm">阅读 iOS 教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🖥️</div>
          <h3 class="category-title"><a href="guides/macos.html">macOS 苹果电脑教程</a></h3>
          <p class="category-desc">Clash Verge Rev for Mac 与 Surge 配置，增强模式 (Tun Mode) 与开机自启教程。</p>
          <a href="guides/macos.html" class="btn btn-outline btn-sm">阅读 macOS 教程 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 9: 选购指南与技术科普精选 -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">💡 深度选购指南与网络技术百科</h2>
        <p class="section-subtitle">拒绝盲目跟风，理解底层网络原理，理性避开跑路套路与低质劣质服务商</p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:24px;">
        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px;">
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:12px; color:var(--text-main);">
            <a href="blog/beginner-selection-guide.html">2026新手挑选机场节点的五大黄金准则</a>
          </h3>
          <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
            从协议类型、计费周期、SLA承诺、客服响应与退款机制等五个真实维度，教你一步步挑选最适合自身需求的科学上网梯子。
          </p>
          <a href="blog/beginner-selection-guide.html" style="font-size:0.85rem; font-weight:600;">阅读全文 →</a>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px;">
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:12px; color:var(--text-main);">
            <a href="blog/cheap-airport-risks.html">警惕一元机场陷阱：为什么低价机场频繁跑路？</a>
          </h3>
          <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
            深度剖析超低价廉价机场的服务器带宽运营成本结构，揭秘“超卖跑路”套路与月付防坑策略。
          </p>
          <a href="blog/cheap-airport-risks.html" style="font-size:0.85rem; font-weight:600;">阅读全文 →</a>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px;">
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:12px; color:var(--text-main);">
            <a href="glossary/iplc-iepl.html">网络百科：什么是 IPLC 与 IEPL 专线？</a>
          </h3>
          <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
            什么是点对点国际内网专线？为什么专线即使在特殊网络监管时期也能保证零丢包与超低延迟？
          </p>
          <a href="glossary/iplc-iepl.html" style="font-size:0.85rem; font-weight:600;">阅读全文 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 10: 常见问题 FAQ -->
  <section class="section">
    <div class="container" style="max-width:880px;">
      <div class="section-header" style="text-align:center;">
        <h2 class="section-title">❓ 机场推荐与VPN使用常见问题 (FAQ)</h2>
        <p class="section-subtitle">针对广大翻墙与科学上网用户最关心的核心疑问进行真实、专业的解答</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">1. 什么是机场？机场与传统商业 VPN 有什么本质区别？</h3>
          <div class="faq-answer">
            “机场”通常是指基于专用代理协议（如 VLESS、Shadowsocks、Trojan、V2Ray 等）搭建的分布式中转加速服务，用户使用开源客户端（如 Clash、Sing-box、小火箭等）导入订阅节点进行灵活分流。相比传统全流量包裹的 VPN，机场具备规则分流能力（国内直连、海外代理）、更低延迟以及更具弹性的节点切换优势。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">2. 购买机场套餐时，应该选月付还是年付？</h3>
          <div class="faq-answer">
            强烈建议所有新用户在初次使用任何机场服务商时<strong>坚持月付或季付</strong>！即使服务商声称具备专线资质，也应在完成至少2至3个月的晚高峰与敏感期稳定性验证后，再根据需求考虑长期套餐，最大程度规避服务商跑路或线路调整带来的经济损失。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">3. 为什么有的机场节点看 YouTube 很快，打开 ChatGPT 却提示拒绝访问？</h3>
          <div class="faq-answer">
            视频流媒体（如 YouTube）主要考量服务器的绝对下行带宽，只要带宽充足就能流畅播放 4K；而 ChatGPT、Claude 等 AI 服务对落地节点的 IP 属性风控极高，会主动检测并封锁机房 IDC 广播 IP。访问 AI 工具需要机场专门配备干净的原生双 ISP 住宅 IP 或未被污染的专线出口（如隐形人、闪跃、灵猫）。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">4. 什么是节点倍率？为什么我的流量消耗得比预期快？</h3>
          <div class="faq-answer">
            节点倍率是机场用于调节服务器负载与成本的流量计算系数。例如一个 2.0x 倍率的高速专线节点，你实际下载了 1GB 数据，系统后台会扣除 2GB 套餐流量。本站收录的微风网络、无忧等品牌均采用标准 1.0x 基准计费，透明无套路。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">5. 梯子连接成功但打不开外网网页，通常是什么原因？</h3>
          <div class="faq-answer">
            最常见的四种原因包括：系统代理未正确开启（客户端未勾选系统代理）、本地系统时间存在误差（时间偏差超90秒会导致加密握手失败）、本地DNS污染或冲突、以及订阅节点已失效未及时更新。可参阅本站的《节点排查与连接失败解决指南》逐项排查。
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

${renderFooter(0)}`;

  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), html, 'utf8');
  console.log('Generated: index.html (Updated with 14 brands)');
}

module.exports = { generateHomePage };

if (require.main === module) {
  generateHomePage();
}
