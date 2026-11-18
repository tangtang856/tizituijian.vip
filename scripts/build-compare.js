/**
 * 生成 compare/index.html 横向对比工具页面 (14大真实品牌适配)
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
const COMPARE_DIR = path.join(ROOT_DIR, 'compare');

if (!fs.existsSync(COMPARE_DIR)) {
  fs.mkdirSync(COMPARE_DIR, { recursive: true });
}

function generateComparePage() {
  const meta = {
    title: '机场横向对比工具 | 14大主流品牌价格/协议/节点/流媒体多维度即时对比 - 梯子推荐网',
    description: '梯子推荐网提供交互式机场横向对比工具：自由勾选2-5家主流机场服务商，实时对比套餐价格、每GB流量单价、传输协议、流媒体与AI大模型解锁能力。',
    keywords: '机场对比,梯子对比,性价比机场,机场节点对比,vpn对比',
    canonicalPath: 'compare/index.html',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "机场全维度横向对比工具",
      "url": `${DOMAIN}/compare/index.html`,
      "applicationCategory": "UtilityApplication",
      "description": "多维度机场与梯子节点横向对比分析矩阵"
    }
  };

  const breadcrumbs = [
    { name: '首页', url: '../index.html' },
    { name: '横向对比工具', url: 'index.html' }
  ];

  const html = `${renderHead(meta, 1)}
${renderHeader(1, 'compare')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container" style="padding:30px 20px 60px;">
  <div style="max-width:960px; margin:0 auto 30px; text-align:center;">
    <h1 style="font-size:2.2rem; font-weight:800; margin-bottom:12px;">⚖️ 14大主流机场梯子节点全维度横向对比工具</h1>
    <p style="font-size:1rem; color:var(--text-muted); line-height:1.6;">
      勾选您感兴趣的 2 至 6 家机场服务商，下方矩阵表格将自动实时更新对比列。助您快速看清价格、线路、协议与解锁能力差异。
    </p>
  </div>

  <!-- 勾选控制器 -->
  <div class="compare-selector-bar">
    <strong style="font-size:0.95rem; color:var(--text-main);">选择对比品牌（已选 <span id="selected-count">${Math.min(airports.length, 5)}</span> 家）：</strong>
    <div class="compare-checkbox-group">
      ${airports.map((a, idx) => `
        <label class="compare-check-label">
          <input type="checkbox" class="compare-check-input" value="${a.id}" ${idx < 5 ? 'checked' : ''}>
          <span>${a.name}</span>
        </label>
      `).join('')}
    </div>
  </div>

  <!-- 横向对比矩阵表格 -->
  <div class="table-responsive">
    <table class="data-table" id="compare-table" style="min-width:1100px;">
      <thead>
        <tr>
          <th style="width:140px; background:#f1f5f9; position:sticky; left:0; z-index:10;">对比维度</th>
          ${airports.map((a, idx) => `
            <th class="compare-col" data-airport="${a.id}" style="text-align:center; min-width:180px; ${idx >= 5 ? 'display:none;' : ''}">
              <div style="font-size:1.05rem; font-weight:700; margin-bottom:4px;">${a.name}</div>
              <span class="tag" style="padding:1px 6px;">${a.lineType}</span>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">起步价格</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              <span style="font-size:1.3rem; font-weight:800; color:var(--primary);">¥${a.startingPrice}</span> / 月起
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">主力套餐流量</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.plans[0].trafficGb} GB / 月
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">参考每GB成本</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              <span style="font-weight:700; color:var(--success);">¥${a.plans[0].unitPricePerGb.toFixed(3)}</span> / GB
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">核心传输线路</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.lineType}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">支持协议</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.protocols.join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">同时在线设备</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.deviceLimit}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">海外 AI 解锁</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.aiSupport.join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">4K 流媒体解锁</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.streamingSupport.slice(0, 3).join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">核心突出优势</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="font-size:0.85rem; vertical-align:top; ${idx >= 5 ? 'display:none;' : ''}">
              <ul style="padding-left:14px; margin:0;">
                ${a.advantages.slice(0, 2).map(adv => `<li>${adv}</li>`).join('')}
              </ul>
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">主要短板与提醒</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="font-size:0.85rem; color:var(--warning); vertical-align:top; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.disadvantages[0]}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">专属优惠券</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              ${a.coupon ? `<code style="font-weight:bold; color:#e11d48; background:#fff1f2;">${a.coupon}</code>` : '<span style="color:#94a3b8;">官方直供</span>'}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">详情与官网</td>
          ${airports.map((a, idx) => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; ${idx >= 5 ? 'display:none;' : ''}">
              <div style="display:flex; flex-direction:column; gap:6px;">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary btn-sm" style="padding:4px 8px;">直达官网</a>
                <a href="../review/${a.slug}.html" class="btn btn-outline btn-sm" style="padding:4px 8px;">阅读评测</a>
              </div>
            </td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top:36px; padding:24px; background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md);">
    <h2 style="font-size:1.3rem; margin-bottom:12px;">对比总结建议</h2>
    <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6;">
      • <strong>追求超低预算入门：</strong>首选 <a href="../airport/feiv.html">飞V</a>（¥4.9起）或 <a href="../airport/breezenet.html">微风网络</a>（¥8享200GB超大专线流量）。<br>
      • <strong>追求顶级IEPL/IPLC纯专线与AI原生解锁：</strong>首选 <a href="../airport/yinxingren.html">隐形人</a>、<a href="../airport/flashleap.html">闪跃</a> 或 <a href="../airport/wuyou.html">无忧</a>。<br>
      • <strong>追求平价高配与优惠券折上折：</strong>首选 <a href="../airport/feimaoyun.html">飞猫云</a>（券: flycat888）与 <a href="../airport/quanqiuyun.html">全球云</a>（券: tt88）。
    </p>
  </div>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(COMPARE_DIR, 'index.html'), html, 'utf8');
  console.log('Generated: compare/index.html (Updated with 14 brands)');
}

module.exports = { generateComparePage };

if (require.main === module) {
  generateComparePage();
}
