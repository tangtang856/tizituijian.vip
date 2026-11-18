/**
 * 生成根目录下的信任、政策与合规页面及 404
 */

const fs = require('fs');
const path = require('path');
const {
  DOMAIN,
  renderHead,
  renderHeader,
  renderFooter,
  renderBreadcrumbs,
  renderSidebarWidgets
} = require('./site-template');

const ROOT_DIR = path.resolve(__dirname, '..');

function generatePages() {
  const pages = [
    {
      slug: 'about',
      title: '关于我们 | 梯子推荐网 - 专注于客观中立的机场与VPN资讯平台',
      h1: '关于梯子推荐网团队与网站使命',
      desc: '梯子推荐网创立于2026年，致力于打破信息不对称，为跨国学术科研、代码开发与出海贸易从业者提供真实透明的机场评测、网络测速与客户端配置指南。',
      content: `
        <h2>我们的创立初衷</h2>
        <p>在中文网络环境中，“机场”与“科学上网”信息充斥着大量的虚假宣传、推介返利诱导甚至恶意的跑路陷阱。许多新手用户因为信息不对称，往往在初次接触时就被诱导购买了昂贵的大额年付套餐，随后遭遇降速甚至关站跑路。</p>
        <p><strong>梯子推荐网 (tizituijian.vip)</strong> 的建立正是为了改变这一现状。我们坚持以<strong>“技术中立、实测验证、数据透明、首购月付”</strong>为核心宗旨，打造一个值得中文科研与出海从业者信赖的网络加速资讯门户。</p>

        <h2>我们的评测工作原则</h2>
        <ol>
          <li><strong>真实数据驱动：</strong>所有列出的套餐价格、节点倍率、在线设备限制均来自服务商官方公开声明或编辑部实际订阅环境。缺失数据统一明确标记为“尚未核实”，坚决不编造虚假跑分。</li>
          <li><strong>风险公开揭示：</strong>我们不会一味夸大任何服务商的优势。对于每个上榜品牌，均客观列出其存在的短板、高峰期潜在瓶颈以及使用注意事项。</li>
          <li><strong>鼓励科学消费：</strong>全站所有指引和推荐，均反复提醒用户在初次使用时坚持月付验证，拒绝任何形式的大额捆绑消费。</li>
        </ol>

        <h2>适用人群与倡导</h2>
        <p>本站内容主要面向：从事跨国学术科研交流的师生学者、GitHub开源社区开发者、跨境电商出海企业团队及海外公开资讯与多语言文献查阅人员。请所有读者自觉遵守所在地区的网络法律法规，文明、合规、安全上网。</p>
      `
    },
    {
      slug: 'contact',
      title: '联系我们 | 梯子推荐网 - 用户建议与数据纠错通道',
      h1: '联系我们与数据纠错通道',
      desc: '如果您发现本站收录的机场价格、节点倍率或在线限制有任何变动或疏漏，欢迎通过此通道提交纠错反馈。',
      content: `
        <h2>欢迎监督与数据纠错</h2>
        <p>机场服务商的套餐资费、节点线路、倍率机制经常发生动态调整。虽然我们维持双周例行核验机制，但难免存在时间差。</p>
        <p>如果您是普通用户或服务商品牌方，发现本站展示的任何参数（如价格变动、节点下架、协议更新）存在偏差，请通过以下方式联系我们勘误：</p>

        <div class="callout callout-info">
          <strong>官方沟通与纠错邮箱：</strong><br>
          <code>feedback@tizituijian.vip</code> 或通过 GitHub 仓库提交 Issue：<br>
          <a href="https://github.com/tangtang856/tizituijian.vip" target="_blank" rel="noopener">https://github.com/tangtang856/tizituijian.vip</a>
        </div>

        <h2>数据纠错提交须知</h2>
        <ol>
          <li>请在邮件中附带官方公告链接或控制台相关截图，以便核实真伪。</li>
          <li>我们通常会在收到勘误邮件后的 48 小时内完成核查与全站静态页面更新。</li>
          <li>本站不接受任何付费要求删除客观负面评测的商业请求，坚守内容中立性。</li>
        </ol>
      `
    },
    {
      slug: 'editorial-policy',
      title: '编辑政策与评测准则 | 梯子推荐网客观中立声明',
      h1: '梯子推荐网编辑政策与评测准则',
      desc: '详细阐明梯子推荐网的内容来源、数据核验流程、排行榜评分规则、商业合作边界与联盟推广透明披露。',
      content: `
        <div class="callout callout-info">
          <strong>诚信公开承诺：</strong>我们深信，只有公开透明的评测方法与明确的商业利益披露，才能赢得用户的长期信任。本政策适用于梯子推荐网全站所有推荐、评测、排行与文章。
        </div>

        <h2>一、数据来源与采纳标准</h2>
        <p>本站数据库（airports.json）中记录的所有数据均遵循严格的采纳标准：</p>
        <ul>
          <li><strong>官方公开资料：</strong>服务商官网公开展示的套餐价格、流量额度、支付方式及服务条款。</li>
          <li><strong>编辑部实测资料：</strong>测试团队以普通付费用户身份订阅后，在真实网络环境下记录的协议支持、延迟波动与大模型解锁表现。</li>
          <li><strong>尚未核实标记：</strong>对于未经测试或服务商未公开的细节（如部分冷门地区节点连通性），统一标记为“尚未核实”，绝不以猜测代替事实。</li>
        </ul>

        <h2>二、排行榜评分算法公开</h2>
        <p>综合实力排行榜的评分计算权重严格公开：</p>
        <p><code>综合得分 = 稳定性(35%) + 晚高峰速率(25%) + 性价比(20%) + 客户端与服务支持(20%)</code></p>
        <p>性价比排行榜则完全由每 GB 实际成本（扣减基准倍率折算）通过公式排序生成，杜绝任何人工暗箱干预。</p>

        <h2>三、商业合作与联盟推广（Affiliate）披露</h2>
        <p>为维持网站服务器运维、测试带宽采购与域名续费开支，本站部分页面包含指向服务商官网的推广链接（Affiliate Links）。</p>
        <p>我们郑重声明：<strong>推广合作绝不会影响我们的评测结论和排行榜位次！</strong>任何存在严重断连、虚报倍率或跑路风险的服务商，无论其提供多高的推广佣金，均会被降级甚至立即下架移除。</p>
      `
    },
    {
      slug: 'privacy-policy',
      title: '隐私政策与数据保护 | 梯子推荐网',
      h1: '梯子推荐网隐私保护政策',
      desc: '梯子推荐网严格遵守用户隐私保护原则：本站为纯静态页面架构，零重型第三方追踪脚本，不收集、不出售任何个人敏感信息。',
      content: `
        <h2>一、我们不收集任何个人敏感信息</h2>
        <p>梯子推荐网 (tizituijian.vip) 采用纯静态 HTML/CSS 架构开发，<strong>本站不设立任何用户注册系统、不要求输入手机号或邮箱，亦不使用任何外部重型第三方行为追踪或指纹收集 SDK</strong>。</p>

        <h2>二、本地存储与 Cookie 的使用</h2>
        <p>本站仅在必要时使用浏览器的少量本地存储（如保存您在横向对比工具中勾选的对比项），该数据仅保存在您的个人本地浏览器中，绝不会上传至任何远程服务器。</p>

        <h2>三、外部第三方网站链接</h2>
        <p>本站包含跳转至各机场服务商官方网站或开源客户端托管平台（如 GitHub）的外部链接。当您离开本站后，请知悉外部网站受其自身隐私政策管辖，建议您在访问时查阅其相应的隐私条款。</p>
      `
    },
    {
      slug: 'disclaimer',
      title: '免责声明与服务使用条款 | 梯子推荐网',
      h1: '免责声明与服务合规使用条款',
      desc: '梯子推荐网免责声明：明确本站资讯中立性、网络合规合法使用指引及服务商第三方独立责任。',
      content: `
        <h2>一、资讯与技术科普性质声明</h2>
        <p>梯子推荐网 (tizituijian.vip) 仅作为第三方中立的网络技术资讯与网络架构普及平台。本站自身<strong>不提供、不销售、不运营任何虚拟专用网络、网络代理节点或境外数据转发服务器</strong>。</p>

        <h2>二、严格合规与合法使用警示</h2>
        <div class="callout callout-warning">
          <strong>重要法律提示：</strong>使用者在借助网络加速技术从事跨国通信时，必须严格遵守中华人民共和国《网络安全法》、《计算机信息网络国际联网安全保护管理办法》及相关法律法规。
        </div>
        <p>严禁将本站介绍的技术、客户端软件及网络节点用于任何危害国家安全、传播违法有害信息、侵犯他人知识产权或破坏网络秩序的行为。因用户个人违法违规使用所引发的任何法律责任，均由使用者本人独立承担，本站概不承担任何连带责任。</p>

        <h2>三、第三方服务商独立责任</h2>
        <p>本站所评测的机场服务商均为独立的第三方商业实体。本站无法对其后续的线路运营质量、服务器维护周期、售后响应时效或不可抗力引发的关停承担任何明示或暗示的法律担保。用户在选择购买任何第三方服务时，请充分审慎评估风险，始终坚持小额月付。</p>
      `
    }
  ];

  pages.forEach(p => {
    const meta = {
      title: p.title,
      description: p.desc,
      keywords: '梯子推荐网,关于我们,免责声明,隐私政策,编辑政策,联系我们',
      canonicalPath: `${p.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": p.h1,
        "description": p.desc,
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网",
          "url": `${DOMAIN}/`
        }
      }
    };

    const breadcrumbs = [
      { name: '首页', url: 'index.html' },
      { name: p.h1, url: `${p.slug}.html` }
    ];

    const html = `${renderHead(meta, 0)}
${renderHeader(0, '')}
${renderBreadcrumbs(breadcrumbs, 0)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${p.h1}</h1>

      <div class="article-header-meta">
        <span>最后更新日期：2026年11月</span>
        <span>文件类别：官方规范与合规声明</span>
        <span>生效范围：全网访问生效</span>
      </div>

      ${p.content}
    </div>

    ${renderSidebarWidgets(0)}
  </div>
</main>

${renderFooter(0)}`;

    fs.writeFileSync(path.join(ROOT_DIR, `${p.slug}.html`), html, 'utf8');
    console.log(`Generated: ${p.slug}.html`);
  });

  // 生成 404.html
  const meta404 = {
    title: '404 - 页面未找到 | 梯子推荐网',
    description: '抱歉，您访问的页面不存在或已被移动。请返回梯子推荐网首页查看最新机场推荐与教程。',
    canonicalPath: '404.html'
  };

  const html404 = `${renderHead(meta404, 0)}
${renderHeader(0, '')}

<main class="container" style="padding:80px 20px; text-align:center;">
  <div style="max-width:600px; margin:0 auto; background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:48px 32px; box-shadow:var(--shadow-sm);">
    <div style="font-size:4rem; font-weight:900; color:var(--primary); margin-bottom:12px;">404</div>
    <h1 style="font-size:1.6rem; margin-bottom:16px;">抱歉，您访问的页面不存在</h1>
    <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:28px;">
      您查找的页面可能已被移动、更名或链接已失效。您可以浏览以下核心专题或返回首页：
    </p>
    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
      <a href="index.html" class="btn btn-primary">返回网站首页</a>
      <a href="ranking/overall.html" class="btn btn-outline">综合实力排行榜</a>
      <a href="recommend/budget.html" class="btn btn-outline">高性价比推荐</a>
    </div>
  </div>
</main>

${renderFooter(0)}`;

  fs.writeFileSync(path.join(ROOT_DIR, '404.html'), html404, 'utf8');
  console.log('Generated: 404.html');
}

module.exports = { generatePages };

if (require.main === module) {
  generatePages();
}
