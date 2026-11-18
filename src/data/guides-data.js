/**
 * 30 篇完整客户端教程与进阶配置指南数据源
 * 包含通用排障、Windows、Android、iOS、macOS、软路由与进阶安全
 */

module.exports = [
  {
    "slug": "windows",
    "title": "Windows系统配置Clash Verge Rev与v2rayN图文教程 - 梯子推荐网",
    "h1": "Windows系统Clash与v2rayN客户端配置教程",
    "desc": "专为Windows 10/11用户编写的科学上网客户端配置图文教程：涵盖Clash Verge Rev下载安装、订阅链接导入、系统代理开启、Tun模式及开机自启完整操作。",
    "platform": "Windows",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>教程速览：</strong>Windows平台目前首推现代开源客户端 <strong>Clash Verge Rev</strong>（基于Mihomo内核，支持最新协议与优雅界面）。整个配置只需三步：下载安装 → 导入机场订阅链接 → 开启“系统代理”即可顺畅访问海外网络。\n      </div>\n\n      <h2>一、准备工作与客户端下载</h2>\n      <p>在配置前，请确保您已在受信任的<a href=\"../recommend/index.html\">优质机场推荐</a>服务商处注册并获得了专属于您的<strong>订阅链接（Subscription URL）</strong>。</p>\n      <p>推荐使用的客户端版本：</p>\n      <ul>\n        <li><strong>Clash Verge Rev (推荐)：</strong>支持 Windows 10/11 64位系统，内置 Mihomo 核心，界面现代化且中文支持完善。</li>\n        <li><strong>v2rayN：</strong>传统经典客户端，适合更喜欢传统列表界面或需调试单一 Vmess/Vless 节点的技术用户。</li>\n      </ul>\n\n      <h2>二、Clash Verge Rev 详细配置步骤</h2>\n      <h3>步骤 1：安装与初次启动</h3>\n      <p>双击安装包完成安装后启动软件。若弹出 Windows Defender 防火墙网络访问提示，请勾选“专用网络”并点击“允许访问”。</p>\n\n      <h3>步骤 2：导入机场订阅链接</h3>\n      <ol>\n        <li>在左侧导航栏点击 <strong>订阅 (Profiles)</strong>。</li>\n        <li>在顶部输入框中粘贴您从机场后台复制的“Clash 订阅链接”。</li>\n        <li>点击右侧的 <strong>保存 (Save)</strong> 或 <strong>下载 (Download)</strong> 按钮。</li>\n        <li>等待几秒，下方将显示拉取成功的配置卡片，<strong>右键或左键点击该卡片以激活使用</strong>。</li>\n      </ol>\n\n      <h3>步骤 3：选择节点与开启代理</h3>\n      <ol>\n        <li>点击左侧导航栏的 <strong>代理 (Proxies)</strong> 选项卡。</li>\n        <li>模式建议保持默认的 <strong>规则 (Rule)</strong> 模式（国内流量直连不耗费节点，国外网站走代理）。</li>\n        <li>展开策略组（通常名为 PROXY 或 节点选择），在节点列表中点选一个低延迟节点（如香港01、日本01）。</li>\n        <li>回到 <strong>设置 (Settings)</strong> 页面，将 <strong>系统代理 (System Proxy)</strong> 开关切换为开启状态。</li>\n      </ol>\n\n      <h2>三、高级功能：Tun 虚拟网卡模式</h2>\n      <p>如果您发现某些无法设置系统代理的软件（如命令行终端 CMD、部分游戏客户端或特定海外桌面软件）无法连网，可以在设置中开启 <strong>Tun 模式</strong>。Tun 模式会接管全局操作系统层级流量，让所有网络请求均走分流规则。</p>\n\n      <h2>四、常见问题排查</h2>\n      <ul>\n        <li><strong>打不开网页但显示已连接：</strong>检查本地系统时间是否与网络时间同步；或检查浏览器是否安装了冲突的代理扩展插件。</li>\n        <li><strong>订阅拉取失败 (Fetch Failed)：</strong>请先开启其他备用节点，或在机场后台尝试更换备用的订阅分发域名。更多排查细节可参考<a href=\"troubleshooting.html\">节点排障专项教程</a>。</li>\n      </ul>\n    "
  },
  {
    "slug": "android",
    "title": "Android安卓手机配置Clash Meta与Sing-box教程 - 梯子推荐网",
    "h1": "Android平台Clash与Sing-box客户端配置指南",
    "desc": "Android手机科学上网完整教程：涵盖Clash Meta for Android (CMFA) 与 Sing-box 客户端下载、订阅导入、分流规则与省电保活设置。",
    "platform": "Android",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>教程速览：</strong>安卓手机推荐使用 <strong>Clash Meta for Android (CMFA)</strong> 或 <strong>Sing-box</strong>。由于安卓系统的后台电池管理机制，配置时需特别注意开启“后台无限制”与“锁定后台”，防止连接中途被系统杀进程。\n      </div>\n\n      <h2>一、客户端选择与获取</h2>\n      <p>安卓生态拥有多款优秀的开源代理工具：</p>\n      <ul>\n        <li><strong>Clash Meta for Android：</strong>功能完善，支持现代分流规则与各种自建协议。</li>\n        <li><strong>Sing-box：</strong>内存占用低，CPU 占用少，省电性能优异，支持 Hysteria2 协议。</li>\n      </ul>\n\n      <h2>二、Clash Meta 配置四步法</h2>\n      <h3>步骤 1：导入订阅</h3>\n      <p>打开软件后点击 <strong>配置 (Profiles)</strong> → 点击右上角 <strong>+</strong> 号 → 选择 <strong>从 URL 导入 (URL)</strong> → 填写名称并粘贴机场订阅链接 → 点击右上角保存图标下载。</p>\n\n      <h3>步骤 2：选择并选中配置</h3>\n      <p>下载完成后，点击该配置使其单选框变为选中高亮状态，然后返回主界面。</p>\n\n      <h3>步骤 3：启动 VPN 服务</h3>\n      <p>在主界面点击顶部中央的“已停止/启动”开关。初次使用时系统会弹出 <strong>“网络连接请求”</strong> 授权弹窗，点击 <strong>“确定”</strong> 允许创建本地 VPN 隧道。</p>\n\n      <h3>步骤 4：挑选低延迟节点</h3>\n      <p>点击 <strong>代理 (Proxies)</strong> 界面，选择低延迟节点（可点击右下角闪电图标一键测试全节点延迟）。</p>\n\n      <h2>三、安卓系统后台防掉线设置</h2>\n      <p>国内安卓系统（如小米 HyperOS、华为鸿蒙、OPPO ColorOS、vivo OriginOS）通常具有严格的电池优化策略。请在系统设置中：</p>\n      <ol>\n        <li>将客户端的“电池策略”改为 <strong>无限制</strong>。</li>\n        <li>在多任务卡片视图中，长按该应用卡片并点击 <strong>加锁图标</strong>。</li>\n        <li>开启“自启动”权限。</li>\n      </ol>\n    "
  },
  {
    "slug": "ios",
    "title": "iOS苹果设备配置Shadowrocket小火箭与Loon/Stash教程 - 梯子推荐网",
    "h1": "iOS平台Shadowrocket小火箭与Loon客户端配置指南",
    "desc": "iPhone与iPad科学上网图文教程：涵盖非国区Apple ID获取、Shadowrocket小火箭安装、订阅链接一键导入、自动测速与分流规则配置。",
    "platform": "iOS",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>前置说明：</strong>由于苹果 App Store 地区政策限制，Shadowrocket（小火箭）、Loon、Stash 等代理软件仅在<strong>海外区 App Store（如美区、日区、港区）</strong>上架。请勿在国区 App Store 搜索假冒山寨软件。\n      </div>\n\n      <h2>一、海外 Apple ID 与软件获取</h2>\n      <p>您可以自行注册一个免信用卡的美区 Apple ID（账单地址填写免税州如俄勒冈州），或向可靠渠道租用已购小火箭的共享 ID：</p>\n      <ul>\n        <li>在 iPhone 设置中进入 App Store，退出当前账号并登录海外 Apple ID。</li>\n        <li>搜索 <code>Shadowrocket</code> 并下载安装。</li>\n        <li>下载完成后，<strong>立即退出海外账号，切回您的日常国区 ID</strong>（已安装的小火箭可正常永久使用）。</li>\n      </ul>\n\n      <h2>二、Shadowrocket (小火箭) 极速导入配置</h2>\n      <h3>步骤 1：一键导入或扫码</h3>\n      <p>登录您的<a href=\"../ranking/overall.html\">推荐机场后台</a>，找到“一键导入 Shadowrocket”按钮直接唤醒软件；或者点击小火箭右上角 <strong>+</strong> 号，类型选择 <strong>Subscribe</strong>，粘贴订阅链接后点击右上角“完成”。</p>\n\n      <h3>步骤 2：自动拉取与节点更新</h3>\n      <p>节点列表将自动拉取并展开。您可以点击“连通性测试”查看各个节点的 Ping 延迟。</p>\n\n      <h3>步骤 3：开启连接与授权</h3>\n      <ol>\n        <li>在底部标签栏确认全局路由为 <strong>配置 (Config)</strong>（即智能规则分流模式）。</li>\n        <li>将顶部“未连接”开关推向右侧开启。</li>\n        <li>首次开启时系统会弹出“Shadowrocket 想要添加 VPN 配置”，点击 <strong>Allow (允许)</strong> 并验证 Face ID / Touch ID 或锁屏密码。</li>\n      </ol>\n    "
  },
  {
    "slug": "macos",
    "title": "macOS苹果电脑配置Clash Verge与Surge/Loon教程 - 梯子推荐网",
    "h1": "macOS平台Clash Verge与Surge客户端配置指南",
    "desc": "Mac苹果电脑科学上网图文教程：支持Intel与Apple Silicon (M1/M2/M3/M4) 架构，涵盖Clash Verge Rev安装、系统代理与增强模式Tun设置。",
    "platform": "macOS",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>Mac 芯片适配提示：</strong>下载客户端时请注意区分处理器架构：Apple Silicon 芯片（M1/M2/M3/M4 系列）请下载 <code>aarch64 / arm64</code> 版本；Intel 老款机型请下载 <code>x64</code> 版本。\n      </div>\n\n      <h2>一、首选客户端推荐</h2>\n      <ul>\n        <li><strong>Clash Verge Rev for macOS (免费开源)：</strong>界面现代，完美适配 macOS 暗黑模式，支持 Enhanced Mode（增强模式 Tun）。</li>\n        <li><strong>Surge 5 for Mac (专业收费)：</strong>功能极为强悍的网络调试神器，支持精细抓包与设备网络接管。</li>\n      </ul>\n\n      <h2>二、Clash Verge Rev 配置步骤</h2>\n      <h3>步骤 1：安装与初次权限设置</h3>\n      <p>打开 dmg 镜像，将 Clash Verge 图标拖入 Applications 应用程序文件夹。首次启动若提示“无法打开，因为 Apple 无法检查其是否包含恶意软件”，请打开 <em>系统设置 → 隐私与安全性</em>，在安全性下方点击 <strong>仍要打开</strong>。</p>\n\n      <h3>步骤 2：导入订阅与启用</h3>\n      <ol>\n        <li>在“订阅”界面粘贴订阅 URL 并下载配置。</li>\n        <li>在“代理”界面选择“规则”模式，点选可用节点。</li>\n        <li>在“设置”中勾选 <strong>系统代理</strong>。</li>\n      </ol>\n\n      <h2>三、配置 Terminal 终端走代理</h2>\n      <p>macOS 系统代理默认不接管终端（zsh/bash）的网络请求。如需让 git clone 或 curl 走代理，请在 <code>~/.zshrc</code> 中追加：</p>\n      <pre><code>alias setproxy=\"export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890\"\nalias unsetproxy=\"unset http_proxy; unset https_proxy\"</code></pre>\n      <p>执行 <code>source ~/.zshrc</code> 后，在终端输入 <code>setproxy</code> 即可让命令行秒速连接外网。</p>\n    "
  },
  {
    "slug": "troubleshooting",
    "title": "节点连接超时与DNS污染排查指南 (常见错误与网络修复) - 梯子推荐网",
    "h1": "科学上网节点连接超时、无法打开网页排障全攻略",
    "desc": "汇总翻墙过程中最常见的“节点超时”、“TLS握手失败”、“订阅更新报错”、“微信打不开”等典型网络故障，提供标准化定位与逐步解决流程。",
    "platform": "通用排障",
    "difficulty": "故障排查",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>排障金法则：</strong>遇到网络连不上时，切忌盲目乱改设置。先判断是<strong>“本地系统问题”</strong>、<strong>“订阅配置问题”</strong>还是<strong>“服务器节点被封”</strong>，顺藤摸瓜即可在两分钟内恢复网络。\n      </div>\n\n      <h2>一、常见故障 1：系统时间未同步导致握手失败</h2>\n      <p><strong>现象：</strong>节点延迟测速正常，但任何外网都打不开，日志提示 <code>i/o timeout</code> 或 <code>tls: bad record MAC</code>。</p>\n      <p><strong>原因：</strong>现代翻墙加密协议（如 Vmess、Trojan、Reality）严格依赖时间戳防重放攻击。若电脑或手机系统时间与网络标准时间相差超过 <strong>90 秒</strong>，服务器会直接拒绝握手。</p>\n      <p><strong>解决办法：</strong>打开系统设置中的“日期与时间”，关闭并重新打开“自动设置时间”，点击“立即同步”。</p>\n\n      <h2>二、常见故障 2：订阅更新失败 (Fetch Failed)</h2>\n      <p><strong>现象：</strong>更新机场订阅时弹出 <code>Fetch Failed</code> 或 <code>Network Error</code>。</p>\n      <p><strong>解决办法：</strong></p>\n      <ol>\n        <li>机场官方订阅域名往往会被防火墙阻断。请先借用其他备用节点连接后，再尝试点击更新。</li>\n        <li>登录机场后台，切换其提供的“备用订阅链接”或“短链订阅”。</li>\n      </ol>\n\n      <h2>三、常见故障 3：连上梯子后国内应用打不开或微信转圈</h2>\n      <p><strong>原因：</strong>客户端工作模式被误设为了 <strong>全局 (Global)</strong> 模式，导致所有流量都被强制路由至海外服务器。</p>\n      <p><strong>解决办法：</strong>将工作模式切换回 <strong>规则 (Rule)</strong> 分流模式，确保国内域名直连。</p>\n    "
  },
  {
    "slug": "linux-clash",
    "title": "Linux系统（Ubuntu/Debian/CentOS）安装与配置Clash Meta/Mihomo教程 - 梯子推荐网",
    "h1": "Linux系统命令行配置Clash Meta与Systemd开机自启",
    "desc": "面向开发者的Linux科学上网教程：在Ubuntu、Debian与CentOS服务器上安装Mihomo内核，配置订阅文件下载与Systemd守护进程。",
    "platform": "Linux",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "9 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>核心方案：</strong>在无桌面GUI的Linux服务器或工作站上，首选轻量高效的 <strong>Mihomo (原Clash.Meta) 二进制核心</strong>，搭配 Systemd 服务实现无人值守常驻后台与开机自启动。\n      </div>\n\n      <h2>一、下载并安装 Mihomo 二进制核心</h2>\n      <p>根据您的系统架构（常见为 amd64 或 arm64）下载最新的 release 版本：</p>\n      <pre><code># 创建工作目录\nsudo mkdir -p /etc/mihomo\ncd /tmp\nwget https://github.com/MetaCubeX/mihomo/releases/download/v1.18.8/mihomo-linux-amd64-v1.18.8.gz\ngunzip mihomo-linux-amd64-v1.18.8.gz\nsudo mv mihomo-linux-amd64-v1.18.8 /usr/local/bin/mihomo\nsudo chmod +x /usr/local/bin/mihomo</code></pre>\n\n      <h2>二、拉取并配置订阅文件</h2>\n      <p>使用 curl 下载机场提供的 Clash 配置文件保存为 <code>/etc/mihomo/config.yaml</code>：</p>\n      <pre><code>sudo curl -L -o /etc/mihomo/config.yaml \"https://your-airport-sub-url.com\"</code></pre>\n      <p>同时在 <code>/etc/mihomo</code> 目录下下载 Country.mmdb 全球 IP 地理数据库：</p>\n      <pre><code>sudo wget -O /etc/mihomo/Country.mmdb https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/release/country.mmdb</code></pre>\n\n      <h2>三、配置 Systemd 服务实现开机自启</h2>\n      <p>创建服务文件 <code>/etc/systemd/system/mihomo.service</code>：</p>\n      <pre><code>[Unit]\nDescription=Mihomo Daemon Service\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nExecStart=/usr/local/bin/mihomo -d /etc/mihomo\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target</code></pre>\n      <p>加载并启动服务：</p>\n      <pre><code>sudo systemctl daemon-reload\nsudo systemctl enable --now mihomo\nsudo systemctl status mihomo</code></pre>\n\n      <h2>四、验证与环境变量配置</h2>\n      <p>设置 HTTP 和 SOCKS5 代理环境变量：</p>\n      <pre><code>export http_proxy=http://127.0.0.1:7890\nexport https_proxy=http://127.0.0.1:7890\ncurl -I https://www.google.com</code></pre>\n    "
  },
  {
    "slug": "router-openwrt",
    "title": "OpenWrt软路由配置PassWall与OpenClash全屋科学上网指南 - 梯子推荐网",
    "h1": "OpenWrt软路由PassWall与OpenClash全屋科学上网教程",
    "desc": "从零打造家庭网络无感翻墙中心：对比PassWall与OpenClash插件架构，详解订阅导入、DNS防污染设置与智能家居直连分流。",
    "platform": "软路由",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "10 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>软路由优势：</strong>在家庭网络主路由部署科学上网后，局域网内的所有手机、电脑、智能电视、游戏主机无需安装任何客户端，即可自动享受海外网络加速。\n      </div>\n\n      <h2>一、OpenClash 与 PassWall 选型对比</h2>\n      <div class=\"table-responsive\">\n        <table class=\"data-table\">\n          <thead>\n            <tr>\n              <th>对比维度</th>\n              <th>OpenClash</th>\n              <th>PassWall</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>底层核心</strong></td>\n              <td>Clash Premium / Mihomo (Meta)</td>\n              <td>Xray / Sing-box / Trojan-Go</td>\n            </tr>\n            <tr>\n              <td><strong>分流能力</strong></td>\n              <td>基于强大规则集与策略组，极为精细</td>\n              <td>基于分流列表与黑白名单，简洁高效</td>\n            </tr>\n            <tr>\n              <td><strong>内存硬件消耗</strong></td>\n              <td>偏高（建议 512MB 以上运存）</td>\n              <td>较低（适合轻量级路由器）</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <h2>二、OpenClash 核心配置步骤</h2>\n      <h3>1. 模式选择</h3>\n      <p>进入 OpenClash 插件设置，推荐选择 <strong>Fake-IP (TUN)</strong> 模式。该模式在软路由层级拦截 DNS 请求，无需向上游等待 DNS 解析即可直接建立连接，大大降低网页首屏载入延迟。</p>\n\n      <h3>2. 配置文件订阅与导入</h3>\n      <p>在“配置文件订阅”选项卡中添加机场订阅链接，勾选“自动更新”并设定每天凌晨 4 点定时更新订阅。</p>\n\n      <h3>3. DNS 防污染与国内分流</h3>\n      <p>开启“本地 DNS 劫持”，国内 DNS 设置为运营商 DNS 或 <code>223.5.5.5</code>，海外 DNS 选择 <code>https://1.1.1.1/dns-query</code>，彻底规避 DNS 污染风险。</p>\n    "
  },
  {
    "slug": "shadowrocket-setup",
    "title": "Shadowrocket小火箭从零配置、规则订阅与分流实战详解 - 梯子推荐网",
    "h1": "Shadowrocket小火箭完整使用与规则配置进阶教程",
    "desc": "iOS装机必备神器Shadowrocket全面上手指南：从节点导入、延迟测速、全局路由模式、到自定义ACL规则与去广告模块配置。",
    "platform": "iOS",
    "difficulty": "入门到进阶",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>神器定位：</strong>Shadowrocket（俗称小火箭）是 iOS 平台上性价比最高、普及率最广的代理客户端，售价仅 $2.99 美元，支持几乎所有主流加密协议。\n      </div>\n\n      <h2>一、三种添加节点的核心方法</h2>\n      <ol>\n        <li><strong>订阅链接自动同步（最推荐）：</strong>点击右上角 <strong>+</strong> → 类型选择 <strong>Subscribe</strong> → 粘贴 URL 并备注服务商名称。</li>\n        <li><strong>扫描屏幕二维码：</strong>点击左上角扫描图标，直接对准电脑屏幕上的节点二维码完成添加。</li>\n        <li><strong>从剪贴板一键读取：</strong>复制 <code>ss://</code>、<code>vmess://</code> 或 <code>trojan://</code> 链接后打开小火箭，软件会自动提示导入。</li>\n      </ol>\n\n      <h2>二、三种全局路由模式详解</h2>\n      <ul>\n        <li><strong>配置 (Config)：</strong>智能分流模式。遇到国内网站走 Direct 直连，遇到国外被封网站走 Proxy 代理，日常使用必备。</li>\n        <li><strong>代理 (Proxy)：</strong>全局代理模式。无论访问国内还是国外网站均走海外节点，适合调试。</li>\n        <li><strong>直连 (Direct)：</strong>相当于关闭代理通道，所有网络走本地原生物理宽带。</li>\n      </ul>\n\n      <h2>三、小火箭定期自动更新订阅设置</h2>\n      <p>进入 <em>设置 → 订阅</em>，勾选 <strong>“打开时更新”</strong> 与 <strong>“自动后台更新”</strong>，确保节点 IP 变更时小火箭能无感同步最新线路。</p>\n    "
  },
  {
    "slug": "clash-verge-rev",
    "title": "2026最新版Clash Verge Rev深度配置指南与TUN内核调优 - 梯子推荐网",
    "h1": "Clash Verge Rev深度调优：TUN模式与规则集最佳实践",
    "desc": "深度解析开源客户端Clash Verge Rev核心特性：Mihomo内核升级、TUN模式虚拟网卡配置、Script扩展脚本与防DNS泄漏最佳实践。",
    "platform": "Windows/macOS",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>版本说明：</strong>在原版 Clash for Windows 停止维护后，<strong>Clash Verge Rev</strong> 凭借现代的 Tauri 框架和对 Mihomo (Clash.Meta) 核心的深度整合，已成为 Windows/macOS 桌面端事实上的首选工具。\n      </div>\n\n      <h2>一、开启 TUN 模式实现全流量接管</h2>\n      <p>很多用户在使用命令行工具（Git、Pip、Docker）或外服游戏时，发现即便开启了“系统代理”依然无法联网。这是因为很多软件根本不遵循系统的 HTTP Proxy 代理设置。</p>\n      <h3>开启步骤：</h3>\n      <ol>\n        <li>在 Clash Verge Rev 左侧菜单点击 <strong>设置 (Settings)</strong>。</li>\n        <li>找到 <strong>Tun 模式 (Tun Mode)</strong> 并点击开关。首次开启系统会请求安装虚拟网卡驱动（Wintun）。</li>\n        <li>驱动安装成功后，系统网络适配器中将出现虚拟网卡，此时所有底层 UDP 与 TCP 数据包都将无缝进入代理内核。</li>\n      </ol>\n\n      <h2>二、Mihomo 内核切换与性能调优</h2>\n      <p>Clash Verge Rev 支持随时热切换内核版本。建议选择 <strong>Alpha / Meta 内核</strong>，该内核全面支持 Hysteria 2、VLESS-Reality 等现代防封锁协议。</p>\n    "
  },
  {
    "slug": "sing-box-config",
    "title": "Sing-box通用配置文件编写与客户端订阅导入全攻略 - 梯子推荐网",
    "h1": "Sing-box通用配置文件编写与多端订阅使用教程",
    "desc": "深入学习轻量高性能网络核心Sing-box：从JSON配置结构拆解、DNS独立路由、Inbounds与Outbounds组装，到移动端与桌面端通用导入。",
    "platform": "全平台",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "9 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>架构革新：</strong>Sing-box 是使用 Go 语言全新编写的通用代理框架，具有内存占用极小、CPU 占用极低、支持协议全面的特点，是目前公认的下一代网络核心。\n      </div>\n\n      <h2>一、Sing-box 配置文件核心四大模块</h2>\n      <p>Sing-box 的配置采用标准 JSON 格式，主要包含：</p>\n      <ul>\n        <li><code>dns</code>：定义独立 DNS 规则与 Fake-IP 映射。</li>\n        <li><code>inbounds</code>：定义本地监听端口（如 mixed 7890 或 tun 接口）。</li>\n        <li><code>outbounds</code>：定义海外出口节点和策略组（如 direct、block、selector）。</li>\n        <li><code>route</code>：定义分流规则集（rule_set）。</li>\n      </ul>\n\n      <h2>二、客户端直接导入订阅</h2>\n      <p>现代商业机场大多直接提供 Sing-box 专属订阅链接或 Clash 转 Sing-box 订阅转换服务。在 Sing-box 官方客户端（Android/iOS/macOS/Windows）中，只需在 Profiles 界面点击新建并粘贴链接即可一键完成导入。</p>\n    "
  },
  {
    "slug": "surge-ios-mac",
    "title": "顶级网络调试工具Surge 5在iOS与macOS上的高阶配置法则 - 梯子推荐网",
    "h1": "Surge 5从入门到精通：规则引擎与设备接管终极指南",
    "desc": "面向高端极客的Surge 5全方位教程：涵盖Module模块加载、MITM解密、URL Rewrite重定向、网关增强模式及设备接管机制。",
    "platform": "Apple生态",
    "difficulty": "极客专属",
    "date": "2026-11-18",
    "readTime": "10 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>苹果生态顶级利器：</strong>Surge 凭借无与伦比的稳定性和深厚的网络协议栈调校，被公认为 iOS/macOS 上最强大的高级网络调试工具。\n      </div>\n\n      <h2>一、Surge 规则引擎最佳架构</h2>\n      <p>Surge 的 <code>.conf</code> 配置文件由多个 Section 组成，推荐的规则匹配顺序如下：</p>\n      <ol>\n        <li><code>[Rule]</code> 最顶层：本地域名直连规则（SYSTEM, LAN, DOMAIN-KEYWORD 等）。</li>\n        <li>中间层：特定场景分流规则（如 OpenAI 走美区专线，Netflix 走新加坡/日本专线）。</li>\n        <li>底层兜底：<code>FINAL, PROXY, dns-failed</code>。</li>\n      </ol>\n\n      <h2>二、Mac 版网关模式 (Enhanced Mode)</h2>\n      <p>开启 Surge Mac 的“作为网关设备”，可以让局域网内的 Apple TV、Switch、PS5 等设备将网关和 DNS 指向 Mac，无需软路由即可实现全屋设备加速。</p>\n    "
  },
  {
    "slug": "loon-setup",
    "title": "Loon客户端脚本自动化、节点分流与插件管理进阶指南 - 梯子推荐网",
    "h1": "Loon客户端从零上手与插件脚本自动化教程",
    "desc": "iOS高口碑代理工具Loon上手教程：节点订阅导入、Plugin插件体系一键安装、JavaScript脚本自动化执行与节点延迟平滑切换。",
    "platform": "iOS",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>轻量与美观并重：</strong>Loon 拥有极具现代审美的 UI 界面和完善的插件机制，支持通过一键安装 Plugin 扩展去广告和增强分流规则。\n      </div>\n\n      <h2>一、Loon 极速配置流程</h2>\n      <p>1. 打开 Loon 底部“配置”菜单 → 点击“节点订阅” → 粘贴机场订阅链接拉取节点。</p>\n      <p>2. 点击“策略组”，针对海外流媒体和 AI 助手分配专属出口节点。</p>\n      <p>3. 打开“插件”模块，一键载入去广告与国内直连加速模块。</p>\n    "
  },
  {
    "slug": "stash-guide",
    "title": "Stash（iOS版Clash）完整上手教程与规则集订阅技巧 - 梯子推荐网",
    "h1": "Stash (iOS版Clash) 配置教程：完整兼容Clash配置",
    "desc": "针对习惯Clash生态的iOS用户：Stash下载、Clash配置直接复用、Rule-Set规则集自动拉取与Web控制台使用指南。",
    "platform": "iOS",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>无缝衔接：</strong>Stash 能够原生兼容 Clash 的 YAML 配置文件格式，如果您在电脑上已经有调好的 Clash 配置，可以直接无缝导入 Stash 使用。\n      </div>\n\n      <h2>一、导入 Clash 订阅配置</h2>\n      <p>在 Stash 中点击“配置” → 选择“从 URL 下载” → 粘贴 Clash 订阅 URL 即可完成拉取。</p>\n      <h2>二、使用 Web Dashboard 监控</h2>\n      <p>Stash 内置了优雅的 Web 控制面板，您可以直观查看网络连接速率、实时流量消耗与节点延迟矩阵。</p>\n    "
  },
  {
    "slug": "v2rayn-core",
    "title": "v2rayN 7.x客户端Xray核心配置与VLESS-Reality节点调校 - 梯子推荐网",
    "h1": "v2rayN 7.x配置教程：Xray核心与VLESS-Reality参数调优",
    "desc": "Windows经典客户端v2rayN 7.x最新版上手教程：内核在线更新、订阅分组管理、路由规则高级设置与VLESS节点测试。",
    "platform": "Windows",
    "difficulty": "入门到进阶",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>老牌经典：</strong>v2rayN 是 Windows 平台上资历最深、更新最勤奋的客户端之一，全面支持 Xray 核心的所有最新抗审查特性。\n      </div>\n\n      <h2>一、下载与运行环境要求</h2>\n      <p>运行 v2rayN 7.x 需要系统预装 <strong>Microsoft .NET 6.0 Desktop Runtime 或更高版本</strong>。双击打开 <code>v2rayN.exe</code> 后会在托盘区显示蓝底图标。</p>\n\n      <h2>二、订阅分组管理</h2>\n      <p>点击顶部菜单 <strong>订阅分组 (Subscription Group)</strong> → 点击添加 → 填入备注与订阅 URL → 确认后点击 <strong>“更新所有订阅”</strong>。</p>\n    "
  },
  {
    "slug": "hiddify-next",
    "title": "Hiddify多平台全能客户端一键导入配置与全协议支持教程 - 梯子推荐网",
    "h1": "Hiddify全能跨平台客户端上手指南：全协议支持开箱即用",
    "desc": "跨平台全能网络客户端Hiddify（支持Windows/macOS/Linux/Android/iOS）使用教程：极简交互界面、全协议深度支持与一键开启。",
    "platform": "全平台",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "5 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>多端一致体验：</strong>Hiddify 基于 Flutter 开发，在 Windows、Mac、安卓和 iOS 上拥有完全一致的极简 UI 交互，特别适合新手用户。\n      </div>\n\n      <h2>一、三秒极速连接</h2>\n      <p>1. 打开软件后，点击右上角 <strong>+</strong> 按钮。</p>\n      <p>2. 点击“从剪贴板添加配置”或“扫描二维码”。</p>\n      <p>3. 点击中央醒目的圆形大连接按钮，即可瞬间连通海外网络。</p>\n    "
  },
  {
    "slug": "apple-tv",
    "title": "Apple TV通过tvOS 17+小火箭/Surge实现电视端无感翻墙看Netflix - 梯子推荐网",
    "h1": "Apple TV配置科学上网教程：大屏看4K Netflix与YouTube",
    "desc": "tvOS 17全新原生VPN框架实战：在Apple TV安装Shadowrocket与Surge，免除软路由折腾，直接在大屏电视上畅享4K HDR海外流媒体。",
    "platform": "Apple TV",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>电视端革命：</strong>苹果在 tvOS 17 系统中首次引入了原生的系统级 VPN 接口，使得 Apple TV 可以像 iPhone 一样直接安装 Shadowrocket 运行。\n      </div>\n\n      <h2>一、获取与安装</h2>\n      <p>在 Apple TV 的 App Store 中切换登录之前已购小火箭的海外 Apple ID，即可直接下载 <strong>Shadowrocket tvOS 版</strong>。</p>\n\n      <h2>二、跨设备同步配置</h2>\n      <p>如果您的 iPhone 与 Apple TV 登录了相同的 iCloud 账号，且连接在同一 Wi-Fi 下，小火箭会自动通过 iCloud 将 iPhone 上的节点和分流配置无缝同步到 Apple TV 上，点击连接即可开启大屏 4K 追剧体验。</p>\n    "
  },
  {
    "slug": "android-tv",
    "title": "Android TV / 索尼电视 / 电视盒子安装Clash/TiviMate配置指南 - 梯子推荐网",
    "h1": "Android TV智能电视与电视盒子安装代理软件教程",
    "desc": "小米电视、索尼电视及各种外贸电视盒子安装Clash for Android教程：遥控器交互适配、自启动设置与海外流媒体APP配置。",
    "platform": "Android TV",
    "difficulty": "入门到进阶",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>电视盒子专解：</strong>通过电视端安装专用代理，让索尼、小米智能电视或外贸机顶盒直连海外 YouTube 4K HDR 和 Netflix。\n      </div>\n\n      <h2>一、U 盘侧载安装 APK</h2>\n      <p>在电脑上下载 <strong>Clash for Android (电视专用适配版)</strong> apk 文件复制到 U 盘，插入电视并在文件管理器中完成安装。</p>\n      <h2>二、导入订阅</h2>\n      <p>在电视端通过手机扫码投屏或电视内置浏览器打开机场后台，一键导入配置，使用遥控器方向键选择节点后启动连接。</p>\n    "
  },
  {
    "slug": "ps5-switch-xbox",
    "title": "PS5/Nintendo Switch/Xbox主机利用软路由与局域网代理加速联机 - 梯子推荐网",
    "h1": "PS5、Switch与Xbox主机利用局域网代理加速联机教程",
    "desc": "主机玩家必备加速指南：无需单独购买加速盒，利用电脑端Clash局域网共享代理（Allow LAN）或软路由实现NAT类型优化与联机防丢包。",
    "platform": "游戏主机",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>联机痛点解决：</strong>主机联机经常遇到 NAT 类型受限（NAT Type C/D/Strict）导致无法加入房间。通过局域网代理可优化为 NAT Type A/B，大幅减少丢包。\n      </div>\n\n      <h2>一、电脑端开启局域网共享 (Allow LAN)</h2>\n      <p>1. 在电脑端 Clash Verge 中开启 <strong>“允许局域网连接 (Allow LAN)”</strong>。</p>\n      <p>2. 查看电脑在局域网中的内网 IP（例如 <code>192.168.1.100</code>），默认端口通常为 <code>7890</code>。</p>\n\n      <h2>二、主机端网络设置</h2>\n      <p>进入 Switch 或 PS5 的网络设置：</p>\n      <ul>\n        <li>设置连接方式为 Wi-Fi 或有线网，IP 获取保持自动。</li>\n        <li>在 <strong>Proxy 代理服务器</strong> 设置中选择“使用”。</li>\n        <li>代理地址填入电脑内网 IP：<code>192.168.1.100</code>，端口填入：<code>7890</code>。</li>\n      </ul>\n    "
  },
  {
    "slug": "subconverter-selfhost",
    "title": "订阅转换Subconverter搭建教程与保护机场订阅隐私防泄露 - 梯子推荐网",
    "h1": "自建Subconverter订阅转换服务：保护隐私与防泄露",
    "desc": "警惕公开第三方订阅转换的盗取风险：手把手教你使用Docker搭建属于自己的私有Subconverter服务，彻底保障订阅节点安全。",
    "platform": "服务端/Docker",
    "difficulty": "极客专属",
    "date": "2026-11-18",
    "readTime": "9 分钟阅读",
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>隐私高危警示：</strong>许多免费公共订阅转换网站会在后台恶意记录用户的订阅 Token 并私下盗用流量。核心订阅切勿随便提交给不明第三方站点。\n      </div>\n\n      <h2>一、使用 Docker 一键部署私有服务</h2>\n      <p>在自己的 VPS 或本地 NAS 上执行：</p>\n      <pre><code>docker run -d   --name subconverter   --restart always   -p 25500:25500   tindy2013/subconverter:latest</code></pre>\n      <p>启动后，您的私有转换 API 地址即为 <code>http://YOUR-IP:25500/sub?target=clash&url=YOUR-SUB-URL</code>。</p>\n    "
  },
  {
    "slug": "telegram-proxy",
    "title": "Telegram电报内置MTProto代理与本地Socks5分流配置防失联 - 梯子推荐网",
    "h1": "Telegram电报内置MTProto与本地Socks5代理配置指南",
    "desc": "彻底摆脱TG频繁连接中与转圈：详解Telegram原生内置MTProto代理设置、Socks5本地分流及敏感群组防屏蔽设置。",
    "platform": "社交应用",
    "difficulty": "入门新手",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>专解电报失联：</strong>Telegram 拥有强大的内置网络代理支持，即便手机没有打开全局代理，也能通过应用内的独立代理保持消息即时收发。\n      </div>\n\n      <h2>一、配置本地 Socks5 代理</h2>\n      <ol>\n        <li>打开 Telegram，进入 <strong>Settings (设置) → Data and Storage (数据与存储) → Proxy Settings (代理设置)</strong>。</li>\n        <li>开启 <strong>Use Proxy</strong>，选择 <strong>SOCKS5</strong>。</li>\n        <li>服务器填入 <code>127.0.0.1</code>，端口填入本地客户端的 SOCKS 端口（通常为 <code>7890</code> 或 <code>10808</code>）。</li>\n      </ol>\n    "
  },
  {
    "slug": "chatgpt-warp-setup",
    "title": "解决ChatGPT/Claude地区报错：Cloudflare WARP与双重中继配置 - 梯子推荐网",
    "h1": "解决ChatGPT与Claude地区受限：Cloudflare WARP分流教程",
    "desc": "针对OpenAI与Anthropic严厉风控：利用Cloudflare WARP为节点套上干净原生出海IP，彻底消除Access Denied与账号封锁风险。",
    "platform": "AI生产力",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>风控克星：</strong>Cloudflare WARP 拥有海量纯净的高可信度出海 IP，可以作为落地的二级代理，彻底解决 ChatGPT 提示“您所在国家/地区不可用”的烦恼。\n      </div>\n\n      <h2>一、Mihomo / Clash 内核链式分流 WARP</h2>\n      <p>在客户端配置中，可以将 <code>openai.com</code> 和 <code>anthropic.com</code> 路由指向 WARP WireGuard 出口，而日常流量依然走高速 IPLC 专线，实现速度与解锁兼得。</p>\n    "
  },
  {
    "slug": "gaming-latency-opt",
    "title": "外服游戏（Steam/Apex/瓦罗兰特）超低延迟节点优化与防丢包 - 梯子推荐网",
    "h1": "外服联机游戏超低延迟与防丢包节点优化教程",
    "desc": "专为外服竞技网游玩家编写：网络抖动排查、UDP转发开启、IEPL直连专线选择与路由跳数精简调校全流程。",
    "platform": "游戏电竞",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>游戏加速要诀：</strong>竞技游戏最怕的不是 Ping 绝对值高 10ms，而是<strong>网络抖动（Jitter）与偶发性丢包</strong>。必须选择支持 UDP 转发且走 IEPL 物理专线的低跳数节点。\n      </div>\n\n      <h2>一、客户端开启 UDP 转发</h2>\n      <p>在客户端节点设置中，必须确认开启 <strong>UDP 转发 (UDP Relay)</strong>。多数游戏语音（Discord）与游戏位置同步协议均基于 UDP 传输，若未开启会导致无法开麦或人物回弹卡顿。</p>\n    "
  },
  {
    "slug": "dns-leak-prevention",
    "title": "防止DNS泄漏与WebRTC真实IP暴露的全方位隐私加固教程 - 梯子推荐网",
    "h1": "防止DNS泄漏与WebRTC真实IP暴露网络隐私加固",
    "desc": "深度网络隐私防护：通过在线测试工具检测DNS泄漏、禁用浏览器WebRTC真实公网IP暴露、配置加密DoH/DoT安全解析。",
    "platform": "网络隐私",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>泄漏风险：</strong>即便开启了代理，如果您的 DNS 查询依然发送给了国内运营商，或者浏览器通过 WebRTC 协议泄露了局域网真实公网 IP，您的地理位置依然会被海外网站一览无余。\n      </div>\n\n      <h2>一、WebRTC 泄露禁用方法</h2>\n      <p>在 Chrome 或 Edge 浏览器中安装 WebRTC Control 扩展插件，或在 Firefox 中进入 <code>about:config</code> 将 <code>media.peerconnection.enabled</code> 设为 <code>false</code>。</p>\n    "
  },
  {
    "slug": "bypass-lan-rules",
    "title": "局域网分流与PAC规则编写：国内直连与海外代理白名单优化 - 梯子推荐网",
    "h1": "局域网分流与PAC规则编写：国内直连与海外代理白名单",
    "desc": "自定义规则分流进阶指南：如何编写自定义DOMAIN-SUFFIX、IP-CIDR规则，实现国内应用毫秒级直连，海外资源自动精准代理。",
    "platform": "分流调优",
    "difficulty": "进阶调优",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>流量减负：</strong>良好的分流规则可以确保国内网站（淘宝、京东、B站、微信）绝不消耗昂贵的机场流量，同时保持本地宽带原速。\n      </div>\n\n      <h2>一、常用规则语法解析</h2>\n      <pre><code>- DOMAIN-SUFFIX,github.com,PROXY\n- DOMAIN-KEYWORD,google,PROXY\n- IP-CIDR,192.168.0.0/16,DIRECT\n- GEOIP,CN,DIRECT\n- MATCH,PROXY</code></pre>\n    "
  },
  {
    "slug": "tls-sni-troubleshooting",
    "title": "解决TLS握手失败与SNI阻断：节点连接常见报错精细排查 - 梯子推荐网",
    "h1": "解决TLS握手失败与SNI阻断：节点连接报错精查教程",
    "desc": "深度解析节点握手报错：SSL/TLS证书过期、SNI阻断拦截、自签名证书不受信任及ALPN协商失败的快速定位与解决之道。",
    "platform": "网络技术",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>报错速查：</strong>当日志出现 <code>tls: handshake failure</code> 时，通常是由于客户端与服务端密码套件不匹配或运营商对 SNI 域名实施了重置（RST）。\n      </div>\n\n      <h2>一、跳过证书验证开关 (Insecure)</h2>\n      <p>如果机场临时更换了域名而证书尚未签发，可在节点参数中临时开启 <code>skip-cert-verify: true</code> 进行应急连通验证。</p>\n    "
  },
  {
    "slug": "speedtest-cli",
    "title": "如何科学客观地测速？使用speedtest-cli与多线程真实压测节点 - 梯子推荐网",
    "h1": "科学客观测速指南：使用speedtest-cli真实压测节点带宽",
    "desc": "告别虚假测速截图：使用命令行speedtest-cli、fast.com与多线程iperf3工具，科学测量节点下行吞吐率、晚高峰延迟与丢包率。",
    "platform": "性能测评",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>真测速 vs 假截图：</strong>很多测速图仅测试了单线程瞬间突发速率。真正决定日常体验的是<strong>多线程持续压测下行带宽</strong>与晚高峰丢包表现。\n      </div>\n\n      <h2>一、使用 fast.com 测量 Netflix 真实吞吐</h2>\n      <p>打开 fast.com 点击“显示更多信息”，重点关注 <strong>已加载延迟 (Loaded Latency)</strong>，该数值直接决定看高清视频时是否会卡顿换缓冲。</p>\n    "
  },
  {
    "slug": "multi-port-rules",
    "title": "多端口分流与团队多设备共享：基于局域网代理服务器配置 - 梯子推荐网",
    "h1": "多端口分流与团队多设备共享配置指南",
    "desc": "适合工作室与小型团队的局域网加速方案：通过单台主机搭建多端口代理网关，为不同设备分配不同国家IP线路。",
    "platform": "团队协作",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>团队高效协作：</strong>通过一台常开主机，为运营团队分配独立的美国端口、日本端口，避免每台设备单独安装客户端和配置重复订阅。\n      </div>\n\n      <h2>一、配置多个 Mixed Inbounds 监听端口</h2>\n      <p>在配置文件中声明端口 7891 指向美国策略组，端口 7892 指向日本策略组，局域网设备按需填入代理端口即可自动固定出口国家。</p>\n    "
  },
  {
    "slug": "docker-clash",
    "title": "在NAS与软路由上使用Docker容器化部署Clash/Mihomo无感加速 - 梯子推荐网",
    "h1": "在群晖NAS与Docker中容器化部署Clash旁路网关教程",
    "desc": "群晖Synology/威联通/Unraid使用Docker部署Mihomo透明网关教程：macvlan网络配置、全屋无感翻墙与极低资源占用。",
    "platform": "NAS/容器",
    "difficulty": "极客专属",
    "date": "2026-11-18",
    "readTime": "9 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>NAS 潜能释放：</strong>无需专门购置软路由硬件，利用家中已有的群晖或 QNAP NAS 运行轻量 Docker 镜像，即可轻松打造千兆透明网关。\n      </div>\n\n      <h2>一、创建 macvlan 虚拟网络</h2>\n      <pre><code>docker network create -d macvlan   --subnet=192.168.1.0/24   --gateway=192.168.1.1   -o parent=eth0 macnet</code></pre>\n    "
  },
  {
    "slug": "chain-proxy",
    "title": "链式代理与多跳中继（Chain Proxy）高阶配置保障匿名与安全 - 梯子推荐网",
    "h1": "链式代理与多跳中继配置：打造双重匿名跳板网络",
    "desc": "极致匿名安全方案：如何在Clash或Sing-box中配置多跳中继（前置代理 + 落地代理），彻底隐藏个人客户端IP与保护敏感通信。",
    "platform": "高级网络",
    "difficulty": "极客专属",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>多重跳板：</strong>通过将高速 IPLC 专线作为前置中继，串联海外住宅代理作为落地出口，既享受了内网专线的低延迟，又实现了最终目标的绝对匿名。\n      </div>\n\n      <h2>一、Clash Relay 策略组配置语法</h2>\n      <pre><code>proxy-groups:\n  - name: \"双跳匿名链\"\n    type: relay\n    proxies:\n      - \"国内专线入口-香港01\"\n      - \"海外住宅落地-美国01\"</code></pre>\n    "
  },
  {
    "slug": "security-audit",
    "title": "机场节点安全性审查：如何验证节点是否嗅探明文HTTP与DNS日志 - 梯子推荐网",
    "h1": "机场节点安全性自测与审查：防范流量嗅探与中间人攻击",
    "desc": "用户如何自测节点安全：使用Wireshark抓包、验证HTTPS证书链完整性、检测中间人劫持与DNS篡改的实用安全审计指南。",
    "platform": "安全合规",
    "difficulty": "高级进阶",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>安全防线：</strong>在网络世界中，防人之心不可无。通过学习本篇安全自测技巧，您可以随时验证所使用的代理节点是否存在恶意嗅探或证书伪造行为。\n      </div>\n\n      <h2>一、核心安全检查步骤</h2>\n      <ol>\n        <li><strong>核验 HTTPS 证书签发者：</strong>访问 Google 时点击地址栏小锁，检查证书是由 GTS CA 签发而非某个未知的根证书。</li>\n        <li><strong>测试 DNS 干净度：</strong>使用 <code>dnsleaktest.com</code> 检查返回的 DNS 服务器归属地是否与节点所在地区吻合。</li>\n      </ol>\n    "
  }
];
