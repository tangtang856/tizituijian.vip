/**
 * 生成首页 index.html - 现代科技资讯门户设计系统 (Design System 2.0)
 * 丰富多维布局，杜绝千篇一律的卡片重复
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
    canonicalPath: '',
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

  // 排序机场 (严格按照用户指定的 customRank 顺序 1~14)
  const sortedAirports = airports.slice().sort((a, b) => (a.customRank || 99) - (b.customRank || 99));
  const top1Airport = sortedAirports[0]; // 微风网络

  const html = `${renderHead(meta, 0)}
${renderHeader(0, 'home')}

<main>
  <!-- Section 1: Modern Split-Grid Hero 焦点区 -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div>
        <div class="hero-status-pill">
          <span class="hero-status-dot"></span>
          2026年11月实测数据库 · 14大精选品牌动态雷达
        </div>
        <h1 class="hero-title">
          2026优质<span class="hero-title-highlight">机场推荐</span>与网络加速选购指南
        </h1>
        <p class="hero-lead">
          专注提供客观中立的<strong>机场推荐</strong>、<strong>梯子推荐</strong>与<strong>性价比机场</strong>深度实测。为学术科研、跨国企业办公、4K流媒体追剧及 ChatGPT / Claude 大模型提供稳定抗封锁的<strong>机场节点</strong>与<strong>VPN推荐</strong>选型矩阵。
        </p>
        
        <div class="hero-quick-tags">
          <span class="hero-tag-label">🔥 快速筛选：</span>
          <a href="recommend/budget.html" class="hero-tag-chip">💰 平价月付 ¥4.9起</a>
          <a href="recommend/premium.html" class="hero-tag-chip">🚀 IPLC/IEPL 纯专线</a>
          <a href="recommend/ai.html" class="hero-tag-chip">🤖 ChatGPT/Claude 原生</a>
          <a href="recommend/streaming.html" class="hero-tag-chip">🎬 4K 奈飞流媒体</a>
          <a href="ranking/value.html" class="hero-tag-chip">⚡ 每GB单价榜</a>
        </div>

        <div class="hero-actions">
          <a href="ranking/overall.html" class="btn btn-primary btn-lg">查看2026综合排行榜 →</a>
          <a href="compare/index.html" class="btn btn-outline btn-lg">14大品牌横向对比</a>
        </div>
      </div>

      <!-- 右侧焦点卡片 (Hero Spotlight Card) -->
      <div>
        <div class="hero-spotlight-card">
          <div class="spotlight-header">
            <div>
              <span class="spotlight-badge">🏆 今日综合领跑首选</span>
              <h2 class="spotlight-brand-title" style="margin-top:6px;">${top1Airport.name}</h2>
              <div style="font-size:0.82rem; color:var(--text-light);">${top1Airport.tagline}</div>
            </div>
            <span class="card-status-badge badge-verified">✓ 官方真实数据</span>
          </div>

          <div class="spotlight-price-box">
            <span class="spotlight-price-val">¥${top1Airport.startingPrice}</span>
            <span class="spotlight-price-sub">/月起 (含 ${top1Airport.plans[0].trafficGb}GB 专线配额)</span>
          </div>

          <div class="spotlight-specs-grid">
            <div class="spotlight-spec-item">
              <span>主力线路：</span><strong>${top1Airport.lineType}</strong>
            </div>
            <div class="spotlight-spec-item">
              <span>参考单价：</span><strong>¥${top1Airport.plans[0].unitPricePerGb.toFixed(3)}/GB</strong>
            </div>
            <div class="spotlight-spec-item">
              <span>主流协议：</span><strong>${top1Airport.protocols.slice(0, 2).join(' / ')}</strong>
            </div>
            <div class="spotlight-spec-item">
              <span>在线设备：</span><strong>${top1Airport.deviceLimit}</strong>
            </div>
          </div>

          <div class="card-coupon-bar">
            <span>专属 9 折优惠码：</span>
            <code>${top1Airport.coupon}</code>
          </div>

          <div class="card-actions-grid">
            <a href="review/${top1Airport.slug}.html" class="btn btn-primary btn-sm">阅读深度评测</a>
            <a href="${top1Airport.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-outline btn-sm">直达官网选购 ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: 核心结论先知 (Quick Answers) -->
  <section class="section section-alt" style="padding: 36px 0;">
    <div class="container">
      <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px 28px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
          <span style="font-size:1.4rem;">💡</span>
          <h2 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0;">
            新手选购快速指南：如何在3分钟内挑选适合自己的梯子与VPN？
          </h2>
        </div>
        <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6; margin-bottom:18px;">
          挑选<strong>机场推荐</strong>服务与<strong>VPN节点</strong>时，切勿盲目购买大额年付。根据核心场景对号入座即可：
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
          <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <div style="font-weight:750; font-size:0.95rem; color:var(--text-main); margin-bottom:6px;">💰 超低预算与入门轻量</div>
            <div style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">首选 <strong>飞V</strong>（¥4.9起）或 <strong>微风网络</strong>（¥8/月 200GB），极低门槛月付试错。</div>
          </div>
          <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <div style="font-weight:750; font-size:0.95rem; color:var(--text-main); margin-bottom:6px;">🤖 ChatGPT / Claude 生产力</div>
            <div style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">首选配备纯净原生住宅双ISP或专线池（如 <strong>灵猫</strong>、<strong>闪跃</strong>、<strong>隐形人</strong>），避免风控封锁。</div>
          </div>
          <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <div style="font-weight:750; font-size:0.95rem; color:var(--text-main); margin-bottom:6px;">🎬 4K 追剧 / 大流量用户</div>
            <div style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">重度油管与奈飞追剧首选 <strong>微风网络</strong> 或 <strong>飞猫云</strong>（折约¥7/月 150GB），下行带宽充裕。</div>
          </div>
          <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <div style="font-weight:750; font-size:0.95rem; color:var(--text-main); margin-bottom:6px;">🛡️ 晚高峰稳定与外贸办公</div>
            <div style="font-size:0.86rem; color:var(--text-muted); line-height:1.55;">零抖动防断连优选纯内网物理专线（如 <strong>无忧</strong>、<strong>暮光网络</strong>、<strong>浪网</strong>），SLA 99.9% 稳定可靠。</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: 精选推荐 (多维展台 - 富有层次变化，杜绝重复) -->
  <section class="section">
    <div class="container">
      <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
        <div>
          <h2 class="section-title">🌟 2026年度精选优质机场推荐 (14大主流品牌)</h2>
          <p class="section-subtitle">
            严格按照评测与核验顺序排序，全量支持 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等主流客户端
          </p>
        </div>
        <a href="ranking/overall.html" class="btn btn-outline btn-sm">查看全站排行榜单 →</a>
      </div>

      <div class="airport-grid">
        ${sortedAirports.map((a, idx) => {
          const isTop3 = idx < 3;
          const rankClass = idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : 'rank-normal';
          const rankText = idx === 0 ? '🥇 TOP 1' : idx === 1 ? '🥈 TOP 2' : idx === 2 ? '🥉 TOP 3' : `${idx + 1}`;
          
          return `
          <article class="airport-card ${isTop3 ? 'card-featured' : ''}">
            <div class="card-top-meta">
              <div class="card-title-box">
                <span class="card-rank-badge ${rankClass}">${rankText}</span>
                <h3 class="card-brand-name">
                  <a href="airport/${a.slug}.html">${a.name}</a>
                </h3>
              </div>
              <span class="card-status-badge badge-verified">✓ 真实数据</span>
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
              <li><span class="icon-check">✓</span> <span>${a.advantages[0] || '高速稳定线路'}</span></li>
              <li><span class="icon-check">✓</span> <span>${a.advantages[1] || '多端适配，节点秒切'}</span></li>
              ${a.disadvantages && a.disadvantages[0] ? `<li><span class="icon-warn">!</span> <span style="color:var(--text-light);">${a.disadvantages[0]}</span></li>` : ''}
            </ul>

            ${a.coupon ? `
            <div class="card-coupon-bar">
              <span>专属优惠券码：</span>
              <code>${a.coupon}</code>
            </div>
            ` : ''}

            <div class="card-actions-grid">
              <a href="review/${a.slug}.html" class="btn btn-outline btn-sm">独立评测</a>
              <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-sm">直达官网 ↗</a>
            </div>
          </article>
          `;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- Section 4: 综合排行榜预览 (Full-Width Data Table) -->
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
              <th style="width:50px; text-align:center;">排名</th>
              <th style="white-space:nowrap; min-width:140px;">机场品牌</th>
              <th style="white-space:nowrap; min-width:95px;">起步价格</th>
              <th style="white-space:nowrap; min-width:85px;">月可用流量</th>
              <th style="white-space:nowrap; min-width:100px;">主力线路</th>
              <th style="white-space:nowrap; min-width:115px;">AI/流媒体支持</th>
              <th style="white-space:nowrap; min-width:90px;">综合评分</th>
              <th style="white-space:nowrap; text-align:center; min-width:90px;">操作</th>
            </tr>
          </thead>
          <tbody>
            ${sortedAirports.map((a, idx) => `
            <tr>
              <td style="text-align:center; white-space:nowrap;">
                <span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">
                  ${idx + 1}
                </span>
              </td>
              <td>
                <strong style="white-space:nowrap;"><a href="airport/${a.slug}.html">${a.name}</a></strong>
                <div style="font-size:0.75rem; color:var(--text-light); white-space:nowrap;">${a.protocols.slice(0, 2).join(' / ')}</div>
              </td>
              <td style="white-space:nowrap;">
                <span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span><span style="font-size:0.85rem; color:var(--text-muted);">/月起</span>
              </td>
              <td style="white-space:nowrap;">${a.plans[0].trafficGb}&nbsp;GB</td>
              <td style="white-space:nowrap;"><span class="tag" style="white-space:nowrap; display:inline-block; padding:3px 8px;">${a.lineType}</span></td>
              <td style="white-space:nowrap;">${a.aiSupport.slice(0, 2).join('、')}</td>
              <td style="white-space:nowrap;">
                <span style="font-weight:800; color:var(--success); font-size:1.05rem;">${a.metrics.overallScore}</span>
                <span style="font-size:0.75rem; color:var(--text-light);"> / 10</span>
              </td>
              <td style="white-space:nowrap; text-align:center;">
                <a href="review/${a.slug}.html" class="btn btn-outline btn-sm" style="padding:5px 12px; white-space:nowrap; font-size:0.82rem;">详细评测</a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 5: 按需求场景选型 Bento-Grid (杜绝6个一模一样的小框) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">🎯 按使用需求精准选型 (Bento-Grid 专题矩阵)</h2>
        <p class="section-subtitle">每个使用场景对网络延迟、协议抗封锁、IP纯净度要求各不相同，选择最适合您的专题</p>
      </div>

      <div class="bento-grid">
        <!-- 宽幅重点卡 1 -->
        <div class="bento-card bento-card-wide">
          <div>
            <div class="bento-icon">💰</div>
            <h3 class="bento-title"><a href="recommend/budget.html">低预算平价高性价比机场</a></h3>
            <p class="bento-desc">
              专为学生党与轻量级科研用户定制：告别大额年付绑架，飞V ¥4.9超低起步，微风网络 ¥8 享200GB专线配额，单价低至 0.040元/GB，更有 29 元不限时永久流量包。
            </p>
            <div class="bento-pills-row">
              <span class="tag">飞V ¥4.9起</span>
              <span class="tag">微风网络 ¥8/200GB</span>
              <span class="tag">飞猫云折约¥7/月</span>
              <span class="tag">支持纯月付</span>
            </div>
          </div>
          <a href="recommend/budget.html" class="btn btn-primary btn-sm" style="align-self:flex-start;">查看低预算专题推荐 →</a>
        </div>

        <!-- 宽幅重点卡 2 -->
        <div class="bento-card bento-card-wide">
          <div>
            <div class="bento-icon">🚀</div>
            <h3 class="bento-title"><a href="recommend/premium.html">高端 IPLC / IEPL 企业级专线</a></h3>
            <p class="bento-desc">
              跨国内网端到端光纤直达，数据全程不过 GFW 公共网关。暮光网络、隐形人、闪跃、无忧、灵猫纯专线方案，SLA 99.9% 在线率保证，敏感时期零断连。
            </p>
            <div class="bento-pills-row">
              <span class="tag">内网不过GFW</span>
              <span class="tag">网络抖动 < 2ms</span>
              <span class="tag">双入口容灾</span>
              <span class="tag">商务与高频交易</span>
            </div>
          </div>
          <a href="recommend/premium.html" class="btn btn-primary btn-sm" style="align-self:flex-start;">查看高端专线专题推荐 →</a>
        </div>

        <!-- 紧凑主题卡 3 -->
        <div class="bento-card">
          <div>
            <div class="bento-icon">🔰</div>
            <h3 class="bento-title"><a href="recommend/beginner.html">新手零门槛入门</a></h3>
            <p class="bento-desc">提供一键傻瓜式导入、详细视频教程与专属客服在线指导，小白 30 秒轻松连通。</p>
          </div>
          <a href="recommend/beginner.html" class="btn btn-outline btn-sm" style="margin-top:auto;">新手入门推荐 →</a>
        </div>

        <!-- 紧凑主题卡 4 -->
        <div class="bento-card">
          <div>
            <div class="bento-icon">🛡️</div>
            <h3 class="bento-title"><a href="recommend/stable.html">晚高峰稳定抗封锁</a></h3>
            <p class="bento-desc">针对每晚 20:00-23:00 骨干网拥堵时段深度调校，具备多入口动态故障切换容灾。</p>
          </div>
          <a href="recommend/stable.html" class="btn btn-outline btn-sm" style="margin-top:auto;">抗封锁专题推荐 →</a>
        </div>

        <!-- 紧凑主题卡 5 -->
        <div class="bento-card">
          <div>
            <div class="bento-icon">🤖</div>
            <h3 class="bento-title"><a href="recommend/ai.html">ChatGPT / Claude 解锁</a></h3>
            <p class="bento-desc">部署原生住宅双 ISP 干净出海 IP，彻底消除 Access Denied 报错与封号风险。</p>
          </div>
          <a href="recommend/ai.html" class="btn btn-outline btn-sm" style="margin-top:auto;">AI专属节点推荐 →</a>
        </div>

        <!-- 紧凑主题卡 6 -->
        <div class="bento-card">
          <div>
            <div class="bento-icon">🎬</div>
            <h3 class="bento-title"><a href="recommend/streaming.html">4K 流媒体解锁追剧</a></h3>
            <p class="bento-desc">完整解锁 Netflix 全球片库与中文字幕、Disney+、YouTube 4K/8K 码率稳定不降画质。</p>
          </div>
          <a href="recommend/streaming.html" class="btn btn-outline btn-sm" style="margin-top:auto;">流媒体解锁推荐 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: 横向对比工具互动入口 -->
  <section class="section section-alt" style="padding: 42px 0;">
    <div class="container" style="text-align:center;">
      <div style="max-width:800px; margin:0 auto;">
        <span style="font-size:2rem; display:block; margin-bottom:10px;">⚖️</span>
        <h2 style="font-size:1.6rem; font-weight:800; color:var(--text-main); margin-bottom:10px;">
          无法决定选哪家？使用 14 大主流品牌横向对比工具
        </h2>
        <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:20px;">
          自由勾选 2 到 5 家机场服务商，实时在线对比套餐价格、每GB流量单价、节点协议、设备数量限制与海外大模型解锁支持。
        </p>
        <a href="compare/index.html" class="btn btn-primary btn-lg">立即进入机场全维度对比工具 →</a>
      </div>
    </div>
  </section>

  <!-- Section 7: 客户端教程中心 (Magazine Platform Hub) -->
  <section class="section">
    <div class="container">
      <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
        <div>
          <h2 class="section-title">📚 全平台客户端配置与使用教程 (共30篇)</h2>
          <p class="section-subtitle">详细图文指导，覆盖从客户端下载、订阅导入到高级规则分流的每一个操作细节</p>
        </div>
        <a href="guides/index.html" class="btn btn-outline btn-sm">查看全部30篇教程大全 →</a>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:20px;">
        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:22px; transition:transform 0.2s;">
          <div style="font-size:1.8rem; margin-bottom:8px;">💻</div>
          <h3 style="font-size:1.15rem; font-weight:750; margin-bottom:6px;"><a href="guides/windows.html">Windows 配置教程</a></h3>
          <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55; margin-bottom:14px;">Clash Verge Rev 与 v2rayN 客户端安装、订阅链接导入与系统代理设置图文详解。</p>
          <a href="guides/windows.html" style="font-size:0.84rem; font-weight:600;">阅读 Windows 教程 →</a>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:22px; transition:transform 0.2s;">
          <div style="font-size:1.8rem; margin-bottom:8px;">📱</div>
          <h3 style="font-size:1.15rem; font-weight:750; margin-bottom:6px;"><a href="guides/android.html">Android 安卓教程</a></h3>
          <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55; margin-bottom:14px;">Clash Meta (CMFA) 与 Sing-box 客户端配置、应用分流与后台防杀优化教程。</p>
          <a href="guides/android.html" style="font-size:0.84rem; font-weight:600;">阅读 Android 教程 →</a>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:22px; transition:transform 0.2s;">
          <div style="font-size:1.8rem; margin-bottom:8px;">🍏</div>
          <h3 style="font-size:1.15rem; font-weight:750; margin-bottom:6px;"><a href="guides/ios.html">iOS 苹果设备教程</a></h3>
          <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55; margin-bottom:14px;">Shadowrocket (小火箭) 节点导入、配置规则更新与海外 Apple ID 获取指引。</p>
          <a href="guides/ios.html" style="font-size:0.84rem; font-weight:600;">阅读 iOS 教程 →</a>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:22px; transition:transform 0.2s;">
          <div style="font-size:1.8rem; margin-bottom:8px;">🖥️</div>
          <h3 style="font-size:1.15rem; font-weight:750; margin-bottom:6px;"><a href="guides/macos.html">macOS 苹果电脑教程</a></h3>
          <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.55; margin-bottom:14px;">Clash Verge Rev for Mac 与 Surge 配置，增强模式 (Tun Mode) 与开机自启教程。</p>
          <a href="guides/macos.html" style="font-size:0.84rem; font-weight:600;">阅读 macOS 教程 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 8: 杂志风选购指南与技术科普 (Magazine Editorial Showcase) -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
        <div>
          <h2 class="section-title">💡 深度选购指南与技术专栏 (共100篇精选)</h2>
          <p class="section-subtitle">拒绝盲目跟风，理解底层网络物理架构，理性避开跑路套路与高倍率水分</p>
        </div>
        <a href="blog/index.html" class="btn btn-outline btn-sm">浏览全部100篇专栏 →</a>
      </div>

      <div class="magazine-grid">
        <!-- 重点封面长文 -->
        <div class="magazine-lead-card">
          <div>
            <span style="font-size:0.78rem; background:#eff6ff; color:#1d4ed8; padding:3px 8px; border-radius:4px; font-weight:700;">🌟 本周深度焦点</span>
            <h3 style="font-size:1.45rem; font-weight:800; color:var(--text-main); margin:14px 0 10px; line-height:1.35;">
              <a href="blog/beginner-selection-guide.html">2026新手挑选优质机场节点的五大黄金准则</a>
            </h3>
            <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7; margin-bottom:18px;">
              挑选机场绝非“价格越贵越好”或“宣称几百个节点越好”。从传输线路（IPLC/BGP）、计费周期策略、节点倍率陷阱、客服响应及实际需求五大维度，手把手教你挑出最省心靠谱的梯子。
            </p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f1f5f9; padding-top:14px;">
            <span style="font-size:0.82rem; color:var(--text-light);">2026年11月 · 约 6 分钟阅读</span>
            <a href="blog/beginner-selection-guide.html" class="btn btn-primary btn-sm">阅读深度长文 →</a>
          </div>
        </div>

        <!-- 右侧精选列表 (Stacked List) -->
        <div class="magazine-list">
          <div class="magazine-list-item">
            <div>
              <span style="font-size:0.75rem; background:#fff1f2; color:#be123c; padding:2px 6px; border-radius:3px; font-weight:600;">避坑必读</span>
              <h4 style="font-size:1rem; font-weight:750; margin:6px 0 4px;">
                <a href="blog/cheap-airport-risks.html">警惕一元机场陷阱：为什么低价机场容易频繁跑路？</a>
              </h4>
              <p style="font-size:0.82rem; color:var(--text-light); margin:0;">深度拆解服务器带宽成本账，揭秘超卖与资金链断裂内幕。</p>
            </div>
            <a href="blog/cheap-airport-risks.html" style="font-size:0.82rem; font-weight:600; white-space:nowrap; margin-left:12px;">阅读 →</a>
          </div>

          <div class="magazine-list-item">
            <div>
              <span style="font-size:0.75rem; background:#ecfdf5; color:#047857; padding:2px 6px; border-radius:3px; font-weight:600;">线路硬核</span>
              <h4 style="font-size:1rem; font-weight:750; margin:6px 0 4px;">
                <a href="blog/iplc-bgp-difference.html">专线IPLC/IEPL与普通BGP中转直连节点全方位对比</a>
              </h4>
              <p style="font-size:0.82rem; color:var(--text-light); margin:0;">地下隧道物理光纤与公网直连原理测评，弄懂为什么专线零断连。</p>
            </div>
            <a href="blog/iplc-bgp-difference.html" style="font-size:0.82rem; font-weight:600; white-space:nowrap; margin-left:12px;">阅读 →</a>
          </div>

          <div class="magazine-list-item">
            <div>
              <span style="font-size:0.75rem; background:#fef3c7; color:#b45309; padding:2px 6px; border-radius:3px; font-weight:600;">大模型实战</span>
              <h4 style="font-size:1rem; font-weight:750; margin:6px 0 4px;">
                <a href="blog/ai-streaming-unlock.html">海外AI与流媒体解锁节点核心考量与避坑指南</a>
              </h4>
              <p style="font-size:0.82rem; color:var(--text-light); margin:0;">解决 ChatGPT Access Denied 与 Netflix 仅能看自制剧难题。</p>
            </div>
            <a href="blog/ai-streaming-unlock.html" style="font-size:0.82rem; font-weight:600; white-space:nowrap; margin-left:12px;">阅读 →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 9: 常见问题 FAQ -->
  <section class="section">
    <div class="container" style="max-width:880px;">
      <div class="section-header" style="text-align:center;">
        <h2 class="section-title">❓ 机场推荐与VPN使用常见问题 (FAQ)</h2>
        <p class="section-subtitle">针对广大翻墙与科学上网用户最关心的核心疑问进行真实、专业的解答</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:16px;">
        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px;">
          <h3 style="font-size:1.05rem; font-weight:750; margin-bottom:8px; color:var(--text-main);">
            1. 什么是机场？机场与传统商业 VPN 有什么本质区别？
          </h3>
          <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.65;">
            “机场”通常是指基于专用代理协议（如 VLESS、Shadowsocks、Trojan、V2Ray 等）搭建的分布式中转加速服务，用户使用开源客户端（如 Clash Verge Rev、Sing-box、小火箭等）导入订阅节点进行灵活分流。相比传统全流量包裹的 VPN，机场具备智能规则分流能力（国内直连不耗流量、海外受限自动加速）、更低延迟以及更具弹性的多线路秒切优势。
          </div>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px;">
          <h3 style="font-size:1.05rem; font-weight:750; margin-bottom:8px; color:var(--text-main);">
            2. 购买机场套餐时，应该选月付还是年付？
          </h3>
          <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.65;">
            强烈建议所有新用户在初次使用任何机场服务商时<strong>坚持月付或季付</strong>！即使服务商声称具备专线资质，也应在完成至少 2 至 3 个月的晚高峰与敏感期稳定性验证后，再根据需求考虑长期套餐，最大程度规避服务商跑路或线路调整带来的经济损失。
          </div>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px;">
          <h3 style="font-size:1.05rem; font-weight:750; margin-bottom:8px; color:var(--text-main);">
            3. 什么是 IPLC / IEPL 物理专线？为什么价格会比普通中转略贵？
          </h3>
          <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.65;">
            IPLC / IEPL 是企业向电信运营商租用的点对点跨国局域网内网光纤物理专线。其核心技术优势在于<strong>数据完全走内网，不经过公网 GFW 国际出口局审查</strong>。因此在特殊敏感网络监管时期也能保证零丢包、超低延迟抖动，SLA 可用性高达 99.9%，但由于物理光纤租金昂贵，套餐价格通常高于普通直连中转。
          </div>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px;">
          <h3 style="font-size:1.05rem; font-weight:750; margin-bottom:8px; color:var(--text-main);">
            4. 为什么访问 ChatGPT、Netflix 时会提示地区受限或被拦截？
          </h3>
          <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.65;">
            OpenAI 与 Netflix 接入了高级威胁情报库，会主动检测连接 IP 的 ASN 属性。如果节点属于公开的数据中心机房（IDC Hosting），往往会被直接判定为风控高危对象。访问上述平台需选用拥有<strong>原生住宅 IP (Residential IP)</strong> 或具备专属解锁 DNS 池的节点。
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

${renderFooter(0)}`;

  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), html, 'utf8');
  console.log('Generated: index.html (Modern Tech Media Portal 2.0)');
}

module.exports = { generateHomePage };

if (require.main === module) {
  generateHomePage();
}
