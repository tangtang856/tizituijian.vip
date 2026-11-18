/**
 * 生成 ranking/ 目录下的所有排行榜页面
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
const RANK_DIR = path.join(ROOT_DIR, 'ranking');

if (!fs.existsSync(RANK_DIR)) {
  fs.mkdirSync(RANK_DIR, { recursive: true });
}

function generateRankings() {
  const rankings = [
    {
      slug: 'overall',
      title: '2026年机场节点综合实力排行榜 | 优质稳定翻墙节点评测 - 梯子推荐网',
      h1: '2026年全网优质机场节点综合实力排行榜',
      desc: '基于真实测试与公开官方参数的2026综合机场排行榜，从稳定性、晚高峰抗拥堵、每GB单价、多平台协议兼容性及AI流媒体解锁能力进行权威加权评定。',
      criteria: '综合评分 = 稳定性(35%) + 晚高峰速率(25%) + 性价比(20%) + 客户端与服务支持(20%)。无实测数据仅以公开官方数据为基准并明确标注。',
      sortFn: (a, b) => b.metrics.overallScore - a.metrics.overallScore,
      summary: '泡泡狗凭借全内网IPLC专线极高SLA表现荣获综合榜首；闪电猫作为4年老牌多线中转在容灾与设备宽容度上表现卓越位居次席；飞鸟云依托新一代Hysteria2协议在弱网加速与AI流媒体原生解锁上表现抢眼。'
    },
    {
      slug: 'value',
      title: '2026性价比机场排行榜 | 每GB单价测算与套餐流量综合对比 - 梯子推荐网',
      h1: '2026年度性价比机场节点排行榜',
      desc: '科学计算每GB流量真实单价与倍率折算后的性价比机场排行榜，透明列出月付与年付真实开销，拒绝虚假大流量套路。',
      criteria: '性价比得分基于：[有效可用流量 / 支付金额] 折算出的每 GB 成本，并根据节点倍率（1.0x 基准）进行流量扣减折算。年付折合月费与不限时按量套餐明确区分展示。',
      sortFn: (a, b) => b.metrics.valueScore - a.metrics.valueScore,
      summary: '桔子云以大年付套餐低至0.078元/GB及提供99元500GB不限时按量包摘得性价比桂冠；贝贝云以12元/月极低门槛月付位居第二；闪电猫多设备自用折合人均成本极具竞争力。'
    },
    {
      slug: 'budget',
      title: '低预算平价机场排行榜 | 学生党轻量月付与备用梯子推荐 - 梯子推荐网',
      h1: '低预算与轻量按需机场节点排行榜',
      desc: '专为轻量用户与学生群体定制的低预算机场排行榜：月付20元以内或一次性按量付费，小投入大回报，绝不强行捆绑年费。',
      criteria: '入围门槛：起步月付金额 ≤ 25元人民币，或提供无到期时间的一次性轻量按量包。优先考量单月试错成本与小额充值灵活性。',
      sortFn: (a, b) => a.startingPrice - b.startingPrice,
      summary: '贝贝云12元/月起步体验门槛最低；桔子云15.9元/月提供100GB可用流量，并配备99元500GB长期备用不限时套餐，对低频查阅文献的学生群体最为友好。'
    },
    {
      slug: 'stable',
      title: '高稳定性机场排行榜 | 晚高峰抗拥堵与SLA可用率评测榜 - 梯子推荐网',
      h1: '2026年度长期稳定性机场节点排行榜',
      desc: '严苛考验晚高峰（20:00-23:00）丢包率与网络抖动的稳定性机场排行榜，多线BGP中转与IPLC专线保障敏感期长期在线。',
      criteria: '稳定性得分基于：晚高峰丢包率(40%) + 跨境骨干网延迟抖动(30%) + 敏感时期多路由自愈容灾机制(30%)。',
      sortFn: (a, b) => b.metrics.stabilityScore - a.metrics.stabilityScore,
      summary: '泡泡狗全IPLC内网专线以9.8分领跑稳定性榜单，晚高峰延迟几乎无波动；闪电猫4年老牌多入口智能BGP以9.4分紧随其后，容灾切换经验丰富；飞鸟云Hysteria2抗丢包协议表现突出。'
    }
  ];

  rankings.forEach(r => {
    const meta = {
      title: r.title,
      description: r.desc,
      keywords: '性价比机场,机场推荐,梯子推荐,机场节点,vpn推荐,vpn机场',
      canonicalPath: `ranking/${r.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": r.h1,
        "description": r.desc,
        "itemListElement": airports.slice().sort(r.sortFn).map((a, idx) => ({
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

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${r.h1}</h1>
      
      <div class="article-header-meta">
        <span>更新日期：2026年11月</span>
        <span>榜单类型：${r.h1}</span>
        <span>评测机构：梯子推荐网独立测试组</span>
      </div>

      <!-- 快速结论 -->
      <div class="quick-answer-card" style="margin-top:0;">
        <div class="quick-answer-header">
          <span style="font-size:1.3rem;">📌</span>
          <h2 class="quick-answer-title" style="margin:0;">本榜单核心快速结论</h2>
        </div>
        <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6; margin-bottom:0;">
          ${r.summary}
        </p>
      </div>

      <h2>一、排行评分依据与计算规则</h2>
      <div class="callout callout-info">
        <strong>公开透明规则：</strong>${r.criteria}
      </div>

      <h2>二、${r.h1} - 综合对比矩阵</h2>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:60px;">排名</th>
              <th>品牌名称</th>
              <th>起步价格</th>
              <th>核心线路</th>
              <th>每GB参考单价</th>
              <th>重点优势</th>
              <th>适合人群</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${sortedAirports.map((a, idx) => `
            <tr>
              <td>
                <span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">
                  ${idx + 1}
                </span>
              </td>
              <td>
                <strong><a href="../airport/${a.slug}.html">${a.name}</a></strong>
                <div style="font-size:0.75rem; color:var(--text-light);">${a.testStatus === 'tested' ? '✓ 编辑部实测' : '官方核验'}</div>
              </td>
              <td><span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span> / 月起</td>
              <td>${a.protocols.join(' / ')}</td>
              <td>
                <span style="font-weight:600; color:var(--success);">
                  ¥${a.plans[0].unitPricePerGb.toFixed(3)}
                </span> / GB
              </td>
              <td>${a.advantages[0]}</td>
              <td>${a.suitableFor[0]}</td>
              <td>
                <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm" style="padding:4px 10px;">详细评测</a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2>三、上榜品牌详细剖析</h2>
      ${sortedAirports.map((a, idx) => `
      <div style="background:var(--bg-body); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:20px; margin-bottom:20px;">
        <h3 style="margin-top:0; font-size:1.2rem;">TOP ${idx + 1}：${a.name}</h3>
        <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6;">${a.description}</p>
        <div style="margin:12px 0; font-size:0.88rem;">
          <div><strong>主力套餐价格：</strong>${a.plans.map(p => `${p.name} (¥${p.price}/${p.periodText})`).join('； ')}</div>
          <div><strong>节点覆盖区域：</strong>${a.regions.join('、')}</div>
          <div><strong>设备连接限制：</strong>${a.deviceLimit}</div>
        </div>
        <div style="display:flex; gap:12px; margin-top:14px;">
          <a href="../airport/${a.slug}.html" class="btn btn-outline btn-sm">查看参数档案</a>
          <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm">阅读深度独立评测</a>
        </div>
      </div>
      `).join('')}

      <h2>四、延伸选型与相关推荐</h2>
      <ul>
        <li><a href="../recommend/budget.html">查看高性价比机场深度选型指南</a></li>
        <li><a href="../recommend/premium.html">了解高端IPLC内网专线服务商</a></li>
        <li><a href="../compare/index.html">使用机场全维度在线比对工具</a></li>
        <li><a href="../blog/cheap-airport-risks.html">警惕一元机场套路：为什么便宜机场经常跑路？</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
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
