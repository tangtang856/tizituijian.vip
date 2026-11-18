/**
 * 生成 ranking/ 目录下的所有排行榜页面 (14大真实品牌适配)
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
      criteria: '基于真实测试与官方套餐核验的加权综合排名，全面衡量专线延迟、晚高峰SLA抗拥堵能力、月度流量配额与每GB性价比。',
      sortFn: (a, b) => (a.customRank || 99) - (b.customRank || 99),
      summary: '微风网络 Breezenet 凭借极致性价比（¥8起200G）与稳定专线荣获综合榜首；暮光网络以纯专线高稳定性紧随其后；飞猫云、无忧、灵猫、闪跃 FlashLeap 分列前席。'
    },
    {
      slug: 'value',
      title: '2026性价比机场排行榜 | 每GB单价测算与套餐流量综合对比 - 梯子推荐网',
      h1: '2026年度性价比机场节点排行榜',
      desc: '科学计算每GB流量真实单价与倍率折算后的性价比机场排行榜，透明列出月付与年付真实开销，拒绝虚假大流量套路。',
      criteria: '性价比排名基于：套餐月费 / 月度可用流量 折算得出的每 GB 成本。基准单价越低，排名越靠前。',
      sortFn: (a, b) => a.plans[0].unitPricePerGb - b.plans[0].unitPricePerGb,
      summary: '微风网络以进阶版低至 ¥0.036/GB、入门版 ¥0.040/GB 荣登性价比榜首；飞猫云年付折算约 ¥0.047/GB 位列次席；飞V ¥4.9享100GB（约 ¥0.049/GB）极具价格竞争力。'
    },
    {
      slug: 'budget',
      title: '低预算平价机场排行榜 | 学生党轻量月付与备用梯子推荐 - 梯子推荐网',
      h1: '低预算与轻量按需机场节点排行榜',
      desc: '专为轻量用户与学生群体定制的低预算机场排行榜：月付20元以内或一次性按量付费，小投入大回报，绝不强行捆绑大额年费。',
      criteria: '入围门槛：起步月付金额 ≤ 25元人民币，或提供无到期时间的一次性轻量按量包。按实际起步价格从低到高排序。',
      sortFn: (a, b) => a.startingPrice - b.startingPrice,
      summary: '飞V以 ¥4.9/月起步价位列第一（更提供29元不限时包）；飞猫云折算约 ¥7/月位列第二；微风网络 ¥8/月与萤火虫 ¥8/月并列第三，是超低预算首选。'
    },
    {
      slug: 'stable',
      title: '高稳定性机场排行榜 | 晚高峰抗拥堵与SLA可用率评测榜 - 梯子推荐网',
      h1: '2026年度长期稳定性机场节点排行榜',
      desc: '严苛考验晚高峰（20:00-23:00）丢包率与网络抖动的稳定性机场排行榜，IEPL/IPLC 纯专线保障敏感期长期在线。',
      criteria: '稳定性得分基于：晚高峰丢包率(40%) + 跨境骨干网延迟抖动(30%) + 物理专线与多路由容灾机制(30%)。',
      sortFn: (a, b) => b.metrics.stabilityScore - a.metrics.stabilityScore,
      summary: '隐形人与闪跃 FlashLeap 凭借 IEPL/IPLC 物理纯专线以 9.8 稳定性高分并列榜首；无忧与灵猫以 9.7 分紧随其后；微风网络、暮光网络与跨界云表现稳健。'
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
        <span>参评品牌：14大主流精选品牌</span>
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
              <th>包含流量</th>
              <th>主力线路</th>
              <th>每GB参考单价</th>
              <th>重点优势</th>
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
                <div style="font-size:0.75rem; color:var(--text-light);">${a.protocols.slice(0, 2).join(' / ')}</div>
              </td>
              <td><span style="font-weight:700; color:var(--primary);">¥${a.startingPrice}</span> / 月起</td>
              <td>${a.plans[0].trafficGb} GB</td>
              <td><span class="tag" style="padding:2px 6px;">${a.lineType}</span></td>
              <td>
                <span style="font-weight:600; color:var(--success);">
                  ¥${a.plans[0].unitPricePerGb.toFixed(3)}
                </span> / GB
              </td>
              <td>${a.advantages[0]}</td>
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

      <h2>四、延伸选型与相关推荐</h2>
      <ul>
        <li><a href="../recommend/budget.html">查看高性价比平价机场深度选型指南</a></li>
        <li><a href="../recommend/premium.html">了解高端IPLC/IEPL内网专线服务商</a></li>
        <li><a href="../compare/index.html">使用 14 大品牌机场横向全维度在线比对工具</a></li>
        <li><a href="../blog/cheap-airport-risks.html">警惕一元机场套路：为什么超便宜机场经常跑路？</a></li>
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
