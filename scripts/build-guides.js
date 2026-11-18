/**
 * 生成 guides/ 目录下的所有教程页面
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
const GUIDES_DIR = path.join(ROOT_DIR, 'guides');

if (!fs.existsSync(GUIDES_DIR)) {
  fs.mkdirSync(GUIDES_DIR, { recursive: true });
}

function generateGuides() {
  const guides = [
    {
      slug: 'windows',
      title: 'Windows系统配置Clash Verge Rev与v2rayN图文教程 - 梯子推荐网',
      h1: 'Windows系统Clash与v2rayN客户端配置教程',
      desc: '专为Windows 10/11用户编写的科学上网客户端配置图文教程：涵盖Clash Verge Rev下载安装、订阅链接导入、系统代理开启、Tun模式及开机自启完整操作。',
      content: `
        <div class="callout callout-info">
          <strong>教程速览：</strong>Windows平台目前首推现代开源客户端 <strong>Clash Verge Rev</strong>（基于Mihomo内核，支持最新协议与优雅界面）。整个配置只需三步：下载安装 → 导入机场订阅链接 → 开启“系统代理”即可顺畅访问海外网络。
        </div>

        <h2>一、准备工作与客户端下载</h2>
        <p>在配置前，请确保您已在受信任的<a href="../recommend/index.html">优质机场推荐</a>服务商处注册并获得了专属于您的<strong>订阅链接（Subscription URL）</strong>。</p>
        <p>推荐使用的客户端版本：</p>
        <ul>
          <li><strong>Clash Verge Rev (推荐)：</strong>支持 Windows 10/11 64位系统，内置 Mihomo 核心，界面现代化且中文支持完善。</li>
          <li><strong>v2rayN：</strong>传统经典客户端，适合更喜欢传统列表界面或需调试单一 Vmess/Vless 节点的技术用户。</li>
        </ul>

        <h2>二、Clash Verge Rev 详细配置步骤</h2>
        <h3>步骤 1：安装与初次启动</h3>
        <p>双击安装包完成安装后启动软件。若弹出 Windows Defender 防火墙网络访问提示，请勾选“专用网络”并点击“允许访问”。</p>

        <h3>步骤 2：导入机场订阅链接</h3>
        <ol>
          <li>在左侧导航栏点击 <strong>订阅 (Profiles)</strong>。</li>
          <li>在顶部输入框中粘贴您从机场后台复制的“Clash 订阅链接”。</li>
          <li>点击右侧的 <strong>保存 (Save)</strong> 或 <strong>下载 (Download)</strong> 按钮。</li>
          <li>等待几秒，下方将显示拉取成功的配置卡片，<strong>右键或左键点击该卡片以激活使用</strong>。</li>
        </ol>

        <h3>步骤 3：选择节点与开启代理</h3>
        <ol>
          <li>点击左侧导航栏的 <strong>代理 (Proxies)</strong> 选项卡。</li>
          <li>模式建议保持默认的 <strong>规则 (Rule)</strong> 模式（国内流量直连不耗费节点，国外网站走代理）。</li>
          <li>展开策略组（通常名为 PROXY 或 节点选择），在节点列表中点选一个低延迟节点（如香港01、日本01）。</li>
          <li>回到 <strong>设置 (Settings)</strong> 页面，将 <strong>系统代理 (System Proxy)</strong> 开关切换为开启状态。</li>
        </ol>

        <h2>三、高级功能：Tun 虚拟网卡模式</h2>
        <p>如果您发现某些无法设置系统代理的软件（如命令行终端 CMD、部分游戏客户端或特定海外桌面软件）无法连网，可以在设置中开启 <strong>Tun 模式</strong>。Tun 模式会接管全局操作系统层级流量，让所有网络请求均走分流规则。</p>

        <h2>四、常见问题排查</h2>
        <ul>
          <li><strong>打不开网页但显示已连接：</strong>检查本地系统时间是否与网络时间同步；或检查浏览器是否安装了冲突的代理扩展插件。</li>
          <li><strong>订阅拉取失败 (Fetch Failed)：</strong>请先开启其他备用节点，或在机场后台尝试更换备用的订阅分发域名。</li>
        </ul>
      `
    },
    {
      slug: 'android',
      title: 'Android安卓手机配置Clash Meta与Sing-box教程 - 梯子推荐网',
      h1: 'Android平台Clash与Sing-box客户端配置指南',
      desc: 'Android手机科学上网完整教程：涵盖Clash Meta for Android (CMFA) 与 Sing-box 客户端下载、订阅导入、分流规则与省电保活设置。',
      content: `
        <div class="callout callout-info">
          <strong>教程速览：</strong>安卓手机推荐使用 <strong>Clash Meta for Android (CMFA)</strong> 或 <strong>Sing-box</strong>。由于安卓系统的后台电池管理机制，配置时需特别注意开启“后台无限制”与“锁定后台”，防止连接中途被系统杀进程。
        </div>

        <h2>一、客户端选择与获取</h2>
        <p>安卓生态拥有多款优秀的开源代理工具：</p>
        <ul>
          <li><strong>Clash Meta for Android：</strong>功能完善，支持现代分流规则与各种自建协议。</li>
          <li><strong>Sing-box：</strong>内存占用低，CPU 占用少，省电性能优异，支持 Hysteria2 协议。</li>
        </ul>

        <h2>二、Clash Meta 配置四步法</h2>
        <h3>步骤 1：导入订阅</h3>
        <p>打开软件后点击 <strong>配置 (Profiles)</strong> → 点击右上角 <strong>+</strong> 号 → 选择 <strong>从 URL 导入 (URL)</strong> → 填写名称并粘贴机场订阅链接 → 点击右上角保存图标下载。</p>

        <h3>步骤 2：选择并选中配置</h3>
        <p>下载完成后，点击该配置使其单选框变为选中高亮状态，然后返回主界面。</p>

        <h3>步骤 3：启动 VPN 服务</h3>
        <p>在主界面点击顶部中央的“已停止/启动”开关。初次使用时系统会弹出 <strong>“网络连接请求”</strong> 授权弹窗，点击 <strong>“确定”</strong> 允许创建本地 VPN 隧道。</p>

        <h3>步骤 4：挑选低延迟节点</h3>
        <p>点击 <strong>代理 (Proxy)</strong> 页面，点击右下角的雷电图标进行批量延迟测速，选择显示绿色延迟数值的节点即可。</p>

        <h2>三、关键优化：防止后台休眠断连</h2>
        <ol>
          <li>进入手机系统“设置” → “应用管理” → 找到客户端。</li>
          <li>进入“电池”或“省电策略”，将后台运行权限修改为 <strong>“无限制”</strong> 或 <strong>“允许后台高耗电运行”</strong>。</li>
          <li>在手机多任务界面将客户端卡片下拉锁定（加锁）。</li>
        </ol>
      `
    },
    {
      slug: 'ios',
      title: 'iOS苹果设备Shadowrocket小火箭订阅与节点导入教程 - 梯子推荐网',
      h1: 'iOS设备Shadowrocket小火箭配置与使用教程',
      desc: '专为iPhone与iPad用户打造的Shadowrocket（小火箭）安装与配置指南：美区Apple ID获取、一键导入机场订阅、规则分流与去广告模块配置。',
      content: `
        <div class="callout callout-info">
          <strong>教程速览：</strong>在 iOS 苹果生态中，<strong>Shadowrocket（俗称小火箭）</strong>是公认性价比最高、兼容性最广的翻墙工具。只需海外 Apple ID 即可在 App Store 购买下载，支持一键扫码导入和链接订阅。
        </div>

        <h2>一、前提准备：获取海外 Apple ID</h2>
        <p>由于政策原因，小火箭在大陆 App Store 未上架。您需要准备一个<strong>非国区 Apple ID（如美区、港区或日区）</strong>：</p>
        <ul>
          <li>可在苹果官网自行注册美区账号（地区选美国，付款方式选无）。</li>
          <li>登录海外账号后搜索 <code>Shadowrocket</code> 购买安装（开发者为 Pan Gu）。</li>
          <li>安装完成后即可退出海外 ID，换回您的大陆常用 ID，不影响小火箭日常更新与使用。</li>
        </ul>

        <h2>二、小火箭添加机场订阅步骤</h2>
        <h3>方法 1：一键网页导入（最便捷）</h3>
        <p>用 Safari 浏览器登录您的机场后台，点击“导入到 Shadowrocket”，系统会自动唤起小火箭并将全部节点拉取导入。</p>

        <h3>方法 2：手动添加订阅链接</h3>
        <ol>
          <li>打开 Shadowrocket，点击右上角的 <strong>+</strong> 号。</li>
          <li>在“类型”一栏中点击并选择 <strong>Subscribe (订阅)</strong>。</li>
          <li>在“URL”输入框中粘贴您的机场订阅链接。</li>
          <li>备注填写机场名称，点击右上角 <strong>完成 (Done)</strong>。</li>
          <li>小火箭会自动拉取节点列表，随后在主界面节点列表中勾选您想使用的节点。</li>
        </ol>

        <h2>三、开启与分流全局路由选择</h2>
        <p>将全局路由设置为 <strong>配置 (Config)</strong> 模式：</p>
        <ul>
          <li><strong>配置模式：</strong>系统自动根据分流规则匹配，国内网络走直连（不耗费流量），国外受阻网络走代理。</li>
          <li>打开主界面顶部的 <strong>未连接</strong> 开关，首次连接时系统弹出“允许添加 VPN 配置”，输入手机锁屏密码授权即可。</li>
        </ul>
      `
    },
    {
      slug: 'macos',
      title: 'macOS系统配置Clash Verge Rev与Surge使用教程 - 梯子推荐网',
      h1: 'macOS系统Clash与Surge客户端配置指南',
      desc: 'Mac苹果电脑配置科学上网完整图文指南：支持Apple Silicon (M1/M2/M3/M4) 与 Intel芯片，详解Clash Verge Rev安装、系统代理与Tun虚拟网卡模式。',
      content: `
        <div class="callout callout-info">
          <strong>教程速览：</strong>macOS 用户推荐使用开源免费的 <strong>Clash Verge Rev for Mac</strong>，原生适配 Apple Silicon (M系列芯片) 与 Intel 架构；若预算充裕追求极致网络调优，可选择专业的商业软件 <strong>Surge for Mac</strong>。
        </div>

        <h2>一、Clash Verge Rev for Mac 安装</h2>
        <ol>
          <li>根据您的 Mac 芯片类型下载对应安装包：
            <ul>
              <li><code>aarch64.dmg</code>：适用于 M1 / M2 / M3 / M4 系列芯片的 Mac。</li>
              <li><code>x64.dmg</code>：适用于老款 Intel 芯片的 Mac。</li>
            </ul>
          </li>
          <li>打开 DMG 安装包，将应用图标拖动到 <code>Applications (应用程序)</code> 文件夹中。</li>
          <li>首次打开如提示“来自未知开发者无法打开”，请前往系统设置 → 隐私与安全性 → 找到提示并点击“仍要打开”。</li>
        </ol>

        <h2>二、配置订阅与代理</h2>
        <ol>
          <li>打开 Clash Verge Rev，进入 <strong>订阅 (Profiles)</strong> 页面。</li>
          <li>粘贴您的专属订阅 URL，点击 <strong>下载 (Download)</strong>。</li>
          <li>选中已下载的配置卡片，使其高亮生效。</li>
          <li>进入 <strong>设置 (Settings)</strong>，打开 <strong>系统代理 (System Proxy)</strong> 开关。</li>
          <li>在状态栏图标或代理页面选择需要的节点（如香港、日本线路）。</li>
        </ol>

        <h2>三、终端（Terminal）与开发环境代理配置</h2>
        <p>macOS 系统的终端默认不继承系统 GUI 代理。若在终端中使用 <code>git</code> 或 <code>curl</code> 需要代理，可在终端运行：</p>
        <pre><code>export http_proxy=http://127.0.0.1:7897
export https_proxy=http://127.0.0.1:7897</code></pre>
        <p>或者直接在 Clash Verge Rev 设置中开启 <strong>Tun 模式</strong>，全局接管所有命令行流量。</p>
      `
    },
    {
      slug: 'troubleshooting',
      title: '节点超时与订阅更新失败排查指南 | 梯子连不上外网解决方案 - 梯子推荐网',
      h1: '节点连接超时与订阅失败完整排查指南',
      desc: '科学上网常见故障排查手册：深度解决客户端节点全部超时、订阅更新报错、连上梯子打不开网页、系统时间偏差及DNS污染等常见疑难杂症。',
      content: `
        <div class="callout callout-warning">
          <strong>排查必读：</strong>遇到连不上外网时，不要慌张。超过 90% 的连接问题都源于<strong>本地配置、系统时间、系统代理开关或本地杀毒软件拦截</strong>，而非服务商跑路。请按以下顺序逐步排查。
        </div>

        <h2>一、故障现象一：所有节点 Ping 全部超时 / 提示 Timeout</h2>
        <h3>排查 1：检查本地系统时间</h3>
        <p>Vmess、Vless、Trojan 等现代加密协议要求客户端与服务器时间误差<strong>不得超过90秒</strong>。若系统时间偏差较大，握手将直接失败。</p>
        <p><strong>解决办法：</strong>打开 Windows/Mac 系统设置 → 时间和语言 → 开启“自动设置时间”并点击“立即同步”。</p>

        <h3>排查 2：机场订阅是否已过期或流量耗尽</h3>
        <p>登录您的机场后台，检查当前套餐是否处于活跃状态、流量是否用尽、或者是否有账单逾期未付。</p>

        <h2>二、故障现象二：客户端显示已连接，但网页完全打不开</h2>
        <h3>排查 1：系统代理开关是否真正生效</h3>
        <p>检查 Windows 设置中的“网络和 Internet” → “代理”。确保“使用代理服务器”已开启，并且地址为 <code>127.0.0.1</code>，端口对应客户端的混合端口（通常为 7890 或 7897）。</p>

        <h3>排查 2：浏览器插件冲突</h3>
        <p>如果您安装了 SwitchyOmega、AdGuard 或其他网络加速插件，请检查是否覆盖了系统代理设置，将其暂时切换为“使用系统代理”。</p>

        <h2>三、故障现象三：订阅链接无法更新 (Fetch / Download Failed)</h2>
        <p>当订阅地址无法拉取时，说明当前用于更新配置的本地网络无法直连机场的订阅分发服务器：</p>
        <ol>
          <li>尝试临时连接手机热点进行更新。</li>
          <li>在浏览器中直接打开该订阅链接，看能否正常下载 YAML 或 Base64 配置文件。</li>
          <li>联系机场官方客服获取备用更新节点或最新的订阅转换地址。</li>
        </ol>
      `
    }
  ];

  guides.forEach(g => {
    const meta = {
      title: g.title,
      description: g.desc,
      keywords: 'windows梯子,clash教程,v2rayn教程,小火箭教程,梯子连不上,节点超时',
      canonicalPath: `guides/${g.slug}.html`,
      schema: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": g.h1,
        "description": g.desc,
        "publisher": {
          "@type": "Organization",
          "name": "梯子推荐网",
          "url": `${DOMAIN}/`
        }
      }
    };

    const breadcrumbs = [
      { name: '首页', url: '../index.html' },
      { name: '客户端使用教程', url: 'windows.html' },
      { name: g.h1, url: `${g.slug}.html` }
    ];

    const html = `${renderHead(meta, 1)}
${renderHeader(1, 'guides')}
${renderBreadcrumbs(breadcrumbs, 1)}

<main class="container">
  <div class="article-layout">
    <div class="article-content prose">
      <h1>${g.h1}</h1>

      <div class="article-header-meta">
        <span>更新时间：2026年11月</span>
        <span>栏目：客户端配置图文指引</span>
        <span>适配系统：全平台支持</span>
      </div>

      ${g.content}

      <h2>五、相关知识与进阶推荐</h2>
      <ul>
        <li><a href="../recommend/index.html">精选优质稳定机场推荐列表</a></li>
        <li><a href="../ranking/overall.html">2026年机场综合实力排行榜</a></li>
        <li><a href="../glossary/subscription.html">网络百科：什么是机场订阅链接与分流规则？</a></li>
        <li><a href="../blog/beginner-selection-guide.html">新手挑选机场节点的五大黄金准则</a></li>
      </ul>
    </div>

    ${renderSidebarWidgets(1)}
  </div>
</main>

${renderFooter(1)}`;

    fs.writeFileSync(path.join(GUIDES_DIR, `${g.slug}.html`), html, 'utf8');
    console.log(`Generated: guides/${g.slug}.html`);
  });
}

module.exports = { generateGuides };

if (require.main === module) {
  generateGuides();
}
