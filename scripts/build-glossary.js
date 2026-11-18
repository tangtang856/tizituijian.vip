/**
 * 生成 glossary/ 目录下的所有专业术语百科页面
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
const GLOSSARY_DIR = path.join(ROOT_DIR, 'glossary');

if (!fs.existsSync(GLOSSARY_DIR)) {
  fs.mkdirSync(GLOSSARY_DIR, { recursive: true });
}

function generateGlossaryPages() {
  const terms = [
    {
      slug: 'iplc-iepl',
      title: '什么是IPLC和IEPL专线？跨境网络技术原理通俗百科 - 梯子推荐网',
      h1: '网络百科：什么是IPLC与IEPL专线？',
      desc: '深度解析跨境专线通信术语：IPLC（国际私有租用线路）与IEPL（国际以太网专线）的技术原理、内网光纤传输机制及在机场梯子中的核心优势。',
      content: `
        <div class="callout callout-info">
          <strong>术语权威定义：</strong><strong>IPLC（International Private Leased Circuit，国际私用租用线路）</strong>与 <strong>IEPL（International Ethernet Private Line，国际以太网专线）</strong>是指跨越国家或地区边境的点对点物理隔离专用通信链路。在网络加速领域，专线代表着最高级别的稳定性和抗干扰能力。
        </div>

        <h2>一、专线的物理实现与传输机制</h2>
        <p>普通的跨国互联网通信，数据包必须经过公网骨干路由，并穿过国家级国际互联进出口局（即公共防火墙 GFW）。每逢晚高峰或敏感时期，公网国际出口常常发生严重的丢包（Packet Loss）与延迟激增。</p>
        <p>而 IPLC/IEPL 专线是电信运营商（如中国电信、中国联通、PCCW等）铺设的跨境内网光纤网络。数据在境内机房接入后，直接在专用二层或三层内网物理通道中传输至境外机房（如香港、东京），<strong>物理路径上完全绕过了公网国际出口局</strong>。</p>

        <h2>二、IPLC 与 IEPL 的细微技术区别</h2>
        <ul>
          <li><strong>IPLC（国际私用租线）：</strong>通常基于传统的 SDH/SONET 传输架构，提供恒定独占的时隙带宽，抖动极小，但带宽扩展成本高昂。</li>
          <li><strong>IEPL（国际以太网专线）：</strong>基于以太网标准封装，配置更加灵活，支持抖动较低的高突发带宽调度，是近几年主流专线机场的核心基础设施。</li>
        </ul>

        <h2>三、专线节点的核心优势</h2>
        <ol>
          <li><strong>晚高峰极度稳定：</strong>不论外部公网多么拥堵，专线内部带宽独享，晚高峰丢包率低于 0.1%。</li>
          <li><strong>延迟固定且极低：</strong>例如深圳到香港专线内网延迟仅约 2-5ms，上海到东京专线仅约 25-30ms。</li>
          <li><strong>完全免疫敏感期封锁：</strong>由于不经过公网 GFW，不会被阻断或断流。</li>
        </ol>
      `
    },
    {
      slug: 'node-ratio',
      title: '什么是机场节点倍率？如何准确计算套餐实际消耗流量 - 梯子推荐网',
      h1: '网络百科：节点倍率机制与流量计费公式',
      desc: '通俗讲解机场节点倍率（0.1x / 1.0x / 2.0x）的计算原理、设立初衷及流量换算公式，教你识破虚假大流量套路，合理规划每月网络开销。',
      content: `
        <div class="callout callout-info">
          <strong>核心速记公式：</strong><br>
          <code>实际扣除流量 = 本地实际产生流量 × 节点倍率系数</code><br>
          例如：您在 <code>2.0x</code> 倍率节点下载了一个 1GB 的文件，机场后台将扣除 <strong>2GB</strong> 的套餐配额！
        </div>

        <h2>一、为什么机场会设立不同的节点倍率？</h2>
        <p>机场拥有数十甚至上百个不同线路等级的服务器。不同服务器的采购成本与带宽成本差距极其巨大：</p>
        <ul>
          <li><strong>低倍率节点（如 0.2x - 0.5x）：</strong>通常为成本极低的普通直连线路或空闲时段中转线路，用于分流大流量下载与轻度浏览。</li>
          <li><strong>基准倍率节点（1.0x）：</strong>标准的优质 BGP 中转节点，扣费与实际使用完全 1:1。</li>
          <li><strong>高倍率节点（如 1.5x - 3.0x）：</strong>昂贵的 IPLC 内网专线或成本高昂的原生住宅 IP 节点，为了防止个别用户长时间超负荷跑满带宽，通过倍率进行经济调节。</li>
        </ul>

        <h2>二、使用倍率节点的注意事项</h2>
        <ol>
          <li><strong>避免在 2x 以上节点跑测速：</strong>一次 Speedtest 测速通常消耗 1GB 至 3GB 流量。如果在 3.0x 节点上频繁测速，几十 GB 流量几分钟内就会被扣光。</li>
          <li><strong>利用低倍率节点下载大文件：</strong>常规软件更新、Steam 游戏加速或百度网盘海外同步，可临时切换到 0.5x 节点以节省流量。</li>
        </ol>
      `
    },
    {
      slug: 'protocols',
      title: 'Shadowsocks、Trojan、Vmess、Hysteria2协议深度对比 - 梯子推荐网',
      h1: '网络百科：主流代理翻墙协议深度对比与选型',
      desc: '全面对比当前主流翻墙与加速协议的技术架构、加密握手原理、抗封锁特征及性能差异：涵盖经典Shadowsocks、Vmess、Trojan及新一代基于QUIC的Hysteria2。',
      content: `
        <div class="callout callout-info">
          <strong>协议演进简史：</strong>从早期的明文代理与简单加密（Shadowsocks），到对抗特征分析的复杂数据包封装（Vmess），再到伪装真实网站流量的（Trojan），直至新一代基于 UDP/QUIC 克服恶劣丢包的（Hysteria2），技术一直在持续演进。
        </div>

        <h2>一、四大主流代理协议横向对比</h2>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>协议名称</th>
                <th>基础传输层</th>
                <th>伪装机制</th>
                <th>弱网抗丢包</th>
                <th>客户端兼容性</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Shadowsocks (SS)</strong></td>
                <td>TCP / UDP</td>
                <td>对称流加密（AEAD）</td>
                <td>一般</td>
                <td>极高（全平台支持）</td>
              </tr>
              <tr>
                <td><strong>Vmess (V2Ray)</strong></td>
                <td>TCP / mKCP / WS</td>
                <td>自定义协议头加密</td>
                <td>一般</td>
                <td>极高（经典主流）</td>
              </tr>
              <tr>
                <td><strong>Trojan</strong></td>
                <td>TLS over TCP</td>
                <td>伪装标准 HTTPS 网站</td>
                <td>良好</td>
                <td>极高（现代化首选）</td>
              </tr>
              <tr>
                <td><strong>Hysteria2</strong></td>
                <td>UDP (QUIC)</td>
                <td>定制拥塞控制 + 伪装</td>
                <td><strong>极高（丢包率30%仍满速）</strong></td>
                <td>较好（需现代客户端）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>二、各个协议的适用场景</h2>
        <ul>
          <li><strong>专线网络推荐：</strong>Shadowsocks 与 Trojan。因为在内网专线环境中不需要复杂的抗封锁混淆，更纯粹的加密能带来极低的 CPU 消耗与极低延迟。</li>
          <li><strong>校园网/移动弱网推荐：</strong>Hysteria2。其自主研发的拥塞控制算法能主动抵消公网丢包带来的降速。</li>
        </ul>
      `
    },
    {
      slug: 'subscription',
      title: '什么是机场订阅链接？节点自动更新与分流规则原理解析 - 梯子推荐网',
      h1: '网络百科：机场订阅链接的工作机制与安全防泄露',
      desc: '详解机场订阅链接（Subscription URL）的技术规范、Base64与YAML格式转换、分流规则配置机制以及订阅链接被他人盗用时的紧急处置方案。',
      content: `
        <div class="callout callout-info">
          <strong>一句话理解：</strong>订阅链接就如同一个包含了你所有可用节点服务器参数的<strong>网络动态名片</strong>。客户端定期访问这个链接，就能自动把最新的可用节点和分流路由下载到本地。
        </div>

        <h2>一、订阅链接的工作流程</h2>
        <ol>
          <li><strong>用户发出请求：</strong>客户端（如 Clash Verge 或小火箭）向订阅链接发起一个带有特定 User-Agent 的 HTTP GET 请求。</li>
          <li><strong>服务器动态下发：</strong>机场服务端根据用户当前的套餐状态、剩余流量与到期时间，实时动态生成一份配置文件（通常为 YAML 格式或 Base64 编码的节点列表）。</li>
          <li><strong>本地解析渲染：</strong>客户端将拉取到的配置解析成节点列表和分流策略组供用户选择。</li>
        </ol>

        <h2>二、安全警示：订阅链接切勿泄露</h2>
        <p>订阅链接本质上等同于您的<strong>账号连接凭证（Token）</strong>。任何人只要拿到您的订阅链接，就可以直接将其导入自己的手机或电脑并消耗您的套餐流量，甚至可能因多人多地同时并发连接而触发机场系统的“防滥用封号机制”。</p>
        <p><strong>紧急补救办法：</strong>若不慎将订阅泄露在截图或公开论坛中，请立即登录机场后台，找到“重置订阅信息（Reset Subscription Token）”，旧的订阅链接将瞬间失效。</p>
      `
    },
    {
      slug: 'residential-native-ip',
      title: '原生IP、广播IP与住宅IP的区别？为什么AI和流媒体会封锁机房IP - 梯子推荐网',
      h1: '网络百科：原生IP、广播IP与住宅IP的技术区别',
      desc: '深入科普IP地址属性与归属地判定：什么是原生IP、机房广播IP与原生家庭住宅IP？揭示为什么ChatGPT和Netflix能精准识别机房代理。',
      content: `
        <div class="callout callout-info">
          <strong>核心概念：</strong>IP 地址的归属地和属性并不是由服务器的物理摆放位置决定的，而是由国际权威互联网络信息中心（如 APNIC、ARIN）在 WHOIS 数据库中的登记信息决定的。
        </div>

        <h2>一、三种常见 IP 类型的通俗对比</h2>
        <ul>
          <li><strong>原生 IP (Native IP)：</strong>其注册归属国家/地区与机房实际物理所在国家/地区完全一致。例如机房在香港，WHOIS 登记也在香港。流媒体和版权数据库通常直接将其判定为当地真实 IP。</li>
          <li><strong>广播 IP (Anycast / BGP Routed IP)：</strong>机房物理上在香港，但广播的是原本分配给美国或其它地区的 IP 段。在部分数据库中可能会被识别为原属国，造成流媒体地区判定混乱。</li>
          <li><strong>住宅 IP (Residential IP / 家宽 IP)：</strong>由当地网络服务商（如 AT&amp;T、Comcast、HKT）分配给普通居民家庭宽带的真实 IP。在商业情报库中风控评分极低，是目前解锁 ChatGPT 4o 与严苛流媒体的最佳利器。</li>
        </ul>

        <h2>二、为什么大型平台对机房 IP 零容忍？</h2>
        <p>机房 IP（IDC IP）的租用成本低、支持批量申请，常年被黑产、恶意爬虫、滥用机器人所使用。大型商业平台为了防止服务被滥用、避免版税纠纷，会直接订购 MaxMind 等商业风控黑名单，将所有的 IDC 机房网段一键拉黑。</p>
      `
    }
  ];

  terms.forEach(t => {
    const meta = {
      title: t.title,
      description: t.desc,
      keywords: 'IPLC专线,IEPL专线,节点倍率,翻墙协议,Trojan,Hysteria2,原生IP,住宅IP',
      canonicalPath: `glossary/${t.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": t.h1,
        "description": t.desc,
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "网络技术术语百科"
        }
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '网络技术百科', url: 'iplc-iepl.html' },
      { name: t.h1, url: `${t.slug}.html` }
    ];

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'glossary')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${t.h1}</h1>

      <div class="article-header-meta">
        <span>更新日期：2026年11月</span>
        <span>分类：网络通信技术百科</span>
        <span>审校：梯子推荐网技术团队</span>
      </div>

      ${t.content}

      <h2>相关技术词条与推荐</h2>
      <ul>
        <li><a href="../glossary/iplc-iepl.html">IPLC与IEPL专线技术深度解析</a></li>
        <li><a href="../glossary/node-ratio.html">节点倍率机制与流量计费算法</a></li>
        <li><a href="../glossary/protocols.html">主流代理翻墙协议深度横向对比</a></li>
        <li><a href="../recommend/index.html">精选优质稳定机场推荐</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(GLOSSARY_DIR, `${t.slug}.html`), html, 'utf8');
    console.log(`Generated: glossary/${t.slug}.html`);
  });
}

module.exports = { generateGlossaryPages };

if (require.main === module) {
  generateGlossaryPages();
}
