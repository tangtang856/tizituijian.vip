/**
 * 生成 compare/index.html 横向对比工具页面
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
    title: '机场横向对比工具 | 价格/协议/节点/流媒体多维度即时对比 - 梯子推荐网',
    description: '梯子推荐网提供交互式机场横向对比工具：自由勾选2-4家主流机场服务商，实时对比套餐价格、每GB流量单价、传输协议、流媒体与AI大模型解锁能力。',
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
    <h1 style="font-size:2.2rem; font-weight:800; margin-bottom:12px;">⚖️ 主流机场梯子节点全维度横向对比工具</h1>
    <p style="font-size:1rem; color:var(--text-muted); line-height:1.6;">
      勾选您感兴趣的 2 至 5 家机场服务商，下方矩阵表格将自动实时更新对比列。助您快速看清价格、线路、协议与解锁能力差异。
    </p>
  </div>

  <!-- 勾选控制器 -->
  <div class="compare-selector-bar">
    <strong style="font-size:0.95rem; color:var(--text-main);">选择对比品牌（已选 <span id="selected-count">5</span> 家）：</strong>
    <div class="compare-checkbox-group">
      ${airports.map(a => `
        <label class="compare-check-label">
          <input type="checkbox" class="compare-check-input" value="${a.id}" checked>
          <span>${a.name}</span>
        </label>
      `).join('')}
    </div>
  </div>

  <!-- 横向对比矩阵表格 -->
  <div class="table-responsive">
    <table class="data-table" id="compare-table" style="min-width:900px;">
      <thead>
        <tr>
          <th style="width:140px; background:#f1f5f9; position:sticky; left:0; z-index:10;">对比维度</th>
          ${airports.map(a => `
            <th class="compare-col" data-airport="${a.id}" style="text-align:center; min-width:180px;">
              <div style="font-size:1.1rem; font-weight:700; margin-bottom:4px;">${a.name}</div>
              <div style="font-size:0.75rem; color:var(--text-light); font-weight:normal;">${a.testStatus === 'tested' ? '✓ 编辑部实测' : '官方核验'}</div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">起步价格</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              <span style="font-size:1.3rem; font-weight:800; color:var(--primary);">¥${a.startingPrice}</span> / 月起
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">主力套餐流量</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              ${a.plans[0].trafficGb} GB / 月
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">参考每GB成本</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              <span style="font-weight:700; color:var(--success);">¥${a.plans[0].unitPricePerGb.toFixed(3)}</span> / GB
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">核心传输线路</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              ${a.id === 'paopaodog' ? '全内网 IPLC 专线' : a.id === 'feiniaoyun' ? 'Hysteria2 弱网加速' : '优质多入口 BGP 中转'}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">支持协议</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem;">
              ${a.protocols.join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">同时在线设备</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              ${a.deviceLimit}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">海外 AI 解锁</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem;">
              ${a.aiSupport.join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">4K 流媒体解锁</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center; font-size:0.85rem;">
              ${a.streamingSupport.slice(0, 3).join('、')}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">核心突出优势</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="font-size:0.85rem; vertical-align:top;">
              <ul style="padding-left:14px; margin:0;">
                ${a.advantages.slice(0, 2).map(adv => `<li>${adv}</li>`).join('')}
              </ul>
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">主要短板与提醒</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="font-size:0.85rem; color:var(--warning); vertical-align:top;">
              ${a.disadvantages[0]}
            </td>
          `).join('')}
        </tr>

        <tr>
          <td style="background:#f1f5f9; position:sticky; left:0; font-weight:600;">详情与评测</td>
          ${airports.map(a => `
            <td class="compare-col" data-airport="${a.id}" style="text-align:center;">
              <div style="display:flex; flex-direction:column; gap:6px;">
                <a href="../airport/${a.slug}.html" class="btn btn-outline btn-sm">查看参数</a>
                <a href="../review/${a.slug}.html" class="btn btn-primary btn-sm">阅读评测</a>
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
      • <strong>追求极致网络 SLA、游戏低延迟与外贸办公：</strong>首选 <a href="../airport/paopaodog.html">泡泡狗</a>（全内网 IPLC 专线）。<br>
      • <strong>追求老牌大厂口碑与多设备自用：</strong>首选 <a href="../airport/speedycat.html">闪电猫</a>（4年老牌运营）。<br>
      • <strong>追求超低单价与大流量下载：</strong>首选 <a href="../airport/juziyun.html">桔子云</a>（单价低至0.078元/GB）。<br>
      • <strong>校园网弱网抗丢包与新兴 Hysteria2 协议：</strong>首选 <a href="../airport/feiniaoyun.html">飞鸟云</a>。<br>
      • <strong>零基础纯小白一键傻瓜式连接：</strong>首选 <a href="../airport/beibeiyun.html">贝贝云</a>（12元月付尝鲜）。
    </p>
  </div>
</main>

${renderFooter(1)}`;

  fs.writeFileSync(path.join(COMPARE_DIR, 'index.html'), html, 'utf8');
  console.log('Generated: compare/index.html');
}

module.exports = { generateComparePage };

if (require.main === module) {
  generateComparePage();
}
