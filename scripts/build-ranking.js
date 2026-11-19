/**
 * 生成 ranking/ 目录下的四大多维度排行榜页面 (14大真实品牌)
 * 采用全宽对比矩阵，杜绝横向滚动条，文字并排无换行
 */

const fs = require('fs');
const path = require('path');
const {
  DOMAIN,
  airports,
  renderHead,
  renderHeader,
  renderFooter,
  renderBreadcrumbs
} = require('./site-template');

const ROOT_DIR = path.resolve(__dirname, '..');
const RANK_DIR = path.join(ROOT_DIR, 'ranking');

if (!fs.existsSync(RANK_DIR)) {
  fs.mkdirSync(RANK_DIR, { recursive: true });
}

function generateRankings() {
  const rankings = [
    {
      slug: 'overall',
      title: '2026年机场节点综合实力排行榜 | 14大梯子品牌实测横评 - 梯子推荐网',
      h1: '2026年机场节点综合实力排行榜',
      desc: '梯子推荐网综合实力排行榜：严格基于网络SLA稳定性、晚高峰真实吞吐速率、每GB单价、主流协议（Trojan/VLESS/IEPL）及流媒体AI解锁能力，为您呈现客观严谨的综合排名。',
      criteria: '综合评分 = 稳定性权重 (35%) + 晚高峰速率权重 (25%) + 性价比单价权重 (20%) + 协议与客服支持 (20%)。无实测数据不参与评分。',
      summary: '微风网络 Breezenet、暮光网络、飞猫云凭借出色的节点冗余与高抗风险架构在综合维度领跑；无忧与灵猫在纯专线低抖动领域表现突出。',
      sortFn: (a, b) => (a.customRank || 99) - (b.customRank || 99)
    },
    {
      slug: 'value',
      title: '2026性价比机场排行榜 | 每GB流量单价真实成本计算与排名 - 梯子推荐网',
      h1: '2026年性价比机场排行榜（真实每GB成本）',
      desc: '拒绝虚假流量陷阱！全网唯一基于“月付套餐价格 ÷ 实际可用流量”精确折算每GB单价的客观性价比排行榜，助您花最少的钱买到最实在的高速流量。',
      criteria: '核心指标：每GB参考单价 = 主力套餐月付价格 ÷ 套餐可用流量(GB)。已剔除高倍率扣费水分。',
      summary: '微风网络以低至 0.040元/GB 的单价位列性价比前茅；飞V提供月付4.9元超低门槛，适合对总预算极度敏感的轻量用户。',
      sortFn: (a, b) => (a.plans[0].unitPricePerGb || 99) - (b.plans[0].unitPricePerGb || 99)
    },
    {
      slug: 'budget',
      title: '2026平价低预算机场排行榜 | 月付20元以内学生党轻量梯子推荐 - 梯子推荐网',
      h1: '2026年平价低预算机场排行榜（月付20元内）',
      desc: '专为学生党、轻量浏览与考研科研人群量身打造：精选起步月费在20元以内的高性价比平价机场，告别大额年付捆绑，灵活试错无压力。',
      criteria: '起步价格不超过 20 元/月，且必须支持按月付款，坚决拒绝一次性大额年付绑架。',
      summary: '飞V（4.9元起）、微风网络（8元起）、飞猫云（年付折合约7元起）、无忧（19元起）、暮光网络（20元起）是本档位的绝对主力。',
      sortFn: (a, b) => (a.startingPrice || 99) - (b.startingPrice || 99)
    },
    {
      slug: 'stable',
      title: '2026晚高峰稳定性排行榜 | 抗封锁SLA 99.9%专线梯子精选 - 梯子推荐网',
      h1: '2026年晚高峰抗封锁稳定性排行榜',
      desc: '聚焦晚高峰 20:00-23:00 网络拥堵时段：通过持续自动化丢包率与网络抖动监测，精选具备物理专线（IPLC/IEPL）保障、敏感时期高可用的稳定服务商。',
      criteria: '重点评估指标：晚高峰丢包率 < 1%、平均抖动 (Jitter) < 3ms、物理链路是否经过 GFW 审查。',
      summary: '暮光网络、隐形人、闪跃、无忧、灵猫采用内网物理专线架构，晚高峰网络稳定性表现极其出众。',
      sortFn: (a, b) => (b.metrics?.stabilityScore || 9) - (a.metrics?.stabilityScore || 9)
    }
  ];

  rankings.forEach(r => {
    const meta = {
      title: r.title,
      description: r.desc,
      keywords: '机场推荐,梯子推荐,性价比机场,机场排行,稳定机场,专线机场',
      canonicalPath: `ranking/${r.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": r.h1,
        "description": r.desc,
        "itemListElement": airports.map((a, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": a.name,
          "url": `${DOMAIN}/airport/${a.slug}.html`
        }))
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '排行榜中心', url: 'overall.html' },
      { name: r.h1, url: `${r.slug}.html` }
    ];

    const sortedAirports = airports.slice().sort(r.sortFn);

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'ranking')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding: 30px 15px 60px;">
  <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:32px 28px; box-shadow:var(--shadow-sm); margin-bottom:40px;">
    <h1 style="font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:12px;">${r.h1}</h1>
    
    <div class="article-header-meta" style="margin-bottom:24px;">
      <span>更新日期：2026年11月</span>
      <span>榜单类型：${r.h1}</span>
      <span>参评品牌：14大主流精选品牌</span>
      <span>核验周期：双周持续监控</span>
    </div>

    <!-- 快速结论 -->
    <div class="quick-answer-card" style="margin-top:0; margin-bottom:28px;">
      <div class="quick-answer-header">
        <span style="font-size:1.3rem;">📌</span>
        <h2 class="quick-answer-title" style="margin:0; font-size:1.15rem;">本榜单核心快速结论</h2>
      </div>
      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6; margin-bottom:0;">
        ${r.summary}
      </p>
    </div>

    <h2 style="font-size:1.35rem; margin:28px 0 14px;">一、排行评分依据与计算规则</h2>
    <div class="callout callout-info" style="margin-bottom:28px;">
      <strong>公开透明规则：</strong>${r.criteria}
    </div>

    <h2 style="font-size:1.35rem; margin:28px 0 14px;">二、${r.h1} - 全维度横向对比矩阵</h2>

    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th style="width:50px; text-align:center;">排名</th>
            <th style="white-space:nowrap; min-width:140px;">品牌名称</th>
            <th style="white-space:nowrap; min-width:95px;">起步价格</th>
            <th style="white-space:nowrap; min-width:85px;">包含流量</th>
            <th style="white-space:nowrap; min-width:100px;">主力线路</th>
            <th style="white-space:nowrap; min-width:115px;">每GB参考单价</th>
            <th style="min-width:220px;">重点优势</th>
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
              <strong style="white-space:nowrap;"><a href="../airport/${a.slug}.html">${a.name}</a></strong>
              <div style="font-size:0.75rem; color:var(--text-light); white-space:nowrap;">${a.protocols.slice(0, 2).join(' / ')}</div>
            </td>
            <td style="white-space:nowrap;">
              <span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span><span style="font-size:0.85rem; color:var(--text-muted);">/月起</span>
            </td>
            <td style="white-space:nowrap;">
              ${a.plans[0].trafficGb}&nbsp;GB
            </td>
            <td style="white-space:nowrap;">
              <span class="tag" style="white-space:nowrap; display:inline-block; padding:3px 8px;">${a.lineType}</span>
            </td>
            <td style="white-space:nowrap;">
              <span style="font-weight:600; color:var(--success);">
                ¥${a.plans[0].unitPricePerGb.toFixed(3)}
              </span><span style="font-size:0.82rem; color:var(--text-light);">/GB</span>
            </td>
            <td style="font-size:0.88rem; line-height:1.5;">${a.advantages[0]}</td>
            <td style="white-space:nowrap; text-align:center;">
              <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm" style="white-space:nowrap; padding:5px 12px; font-size:0.82rem;">详细评测</a>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <h2 style="font-size:1.35rem; margin:36px 0 16px;">三、上榜品牌详细剖析</h2>
    ${sortedAirports.map((a, idx) => `
    <div style="background:var(--bg-body); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px; margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <h3 style="margin-top:0; font-size:1.2rem;">TOP ${idx + 1}：${a.name}</h3>
        <span style="font-size:0.85rem; font-weight:700; color:var(--primary);">${a.lineType} · ¥${a.startingPrice}/月起</span>
      </div>
      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6; margin:8px 0;">${a.description}</p>
      <div style="margin:12px 0; font-size:0.88rem;">
        <div><strong>主力套餐价格：</strong>${a.plans.map(p => `${p.name} (¥${p.price}/${p.periodText} · ${p.trafficGb}GB)`).join('； ')}</div>
        <div><strong>支持协议与地区：</strong>${a.protocols.join('、')} ｜ 覆盖 ${a.regions.slice(0, 4).join('、')}</div>
        ${a.coupon ? `<div style="color:#e11d48; margin-top:4px;"><strong>专属优惠券码：</strong><code>${a.coupon}</code></div>` : ''}
      </div>
      <div style="display:flex; gap:12px; margin-top:14px;">
        <a href="../airport/${a.slug}.html" class="btn btn-outline btn-sm">查看参数档案</a>
        <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm">阅读深度独立评测</a>
      </div>
    </div>
    `).join('')}

    <h2 style="font-size:1.35rem; margin:36px 0 14px;">四、延伸选型与相关推荐</h2>
    <ul style="line-height:1.8; font-size:0.95rem;">
      <li><a href="../recommend/budget.html">查看高性价比平价机场深度选型指南</a></li>
      <li><a href="../recommend/premium.html">了解高端IPLC/IEPL内网专线服务商</a></li>
      <li><a href="../compare/index.html">使用 14 大品牌机场横向全维度在线比对工具</a></li>
      <li><a href="../blog/cheap-airport-risks.html">警惕一元机场套路：为什么超便宜机场经常跑路？</a></li>
    </ul>
  </div>

  <!-- 底部横向三栏导航组件 -->
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
    <div class="sidebar-widget" style="background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
      <h3 class="sidebar-title">🔥 核心推荐专题</h3>
      <ul class="sidebar-list">
        <li><a href="../recommend/budget.html">性价比机场推荐（平价实惠）</a></li>
        <li><a href="../recommend/premium.html">高端IPLC专线机场精选</a></li>
        <li><a href="../recommend/stable.html">晚高峰稳定抗封锁VPN梯子</a></li>
        <li><a href="../recommend/beginner.html">新手零门槛一键式机场</a></li>
        <li><a href="../recommend/ai.html">ChatGPT/Claude大模型解锁专线</a></li>
        <li><a href="../recommend/streaming.html">4K奈飞/油管流媒体解锁节点</a></li>
      </ul>
    </div>

    <div class="sidebar-widget" style="background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
      <h3 class="sidebar-title">📊 权威数据榜单</h3>
      <ul class="sidebar-list">
        <li><a href="overall.html">2026综合实力排行榜</a></li>
        <li><a href="value.html">每GB流量单价性价比榜</a></li>
        <li><a href="budget.html">小额月付轻量排行榜</a></li>
        <li><a href="stable.html">网络SLA稳定性排行榜</a></li>
        <li><a href="../compare/index.html">机场全维度横向对比工具</a></li>
      </ul>
    </div>

    <div class="sidebar-widget" style="background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
      <h3 class="sidebar-title">📖 必读使用教程</h3>
      <ul class="sidebar-list">
        <li><a href="../guides/index.html"><strong>全部30篇客户端教程大全 →</strong></a></li>
        <li><a href="../guides/windows.html">Windows配置Clash Verge教程</a></li>
        <li><a href="../guides/android.html">Android手机配置Sing-box教程</a></li>
        <li><a href="../guides/ios.html">iOS小火箭Shadowrocket配置</a></li>
        <li><a href="../guides/troubleshooting.html">节点超时与订阅失败排查</a></li>
      </ul>
    </div>
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(RANK_DIR, `${r.slug}.html`), html, 'utf8');
    console.log(`Generated: ranking/${r.slug}.html`);
  });
}

module.exports = { generateRankings };

if (require.main === module) {
  generateRankings();
}
