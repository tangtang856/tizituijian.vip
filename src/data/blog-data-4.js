/**
 * 博客文章数据第四组 (61-80: 客户端评测、规则分流与进阶玩法)
 */

module.exports = [
  {
    "slug": "clash-verge-rev-vs-nyanpasu-comparison",
    "title": "Clash系桌面客户端双雄横评：Clash Verge Rev与Clash Nyanpasu功能优劣对比 - 梯子推荐网",
    "h1": "Clash系桌面客户端双雄横评：Clash Verge Rev与Clash Nyanpasu深度对比",
    "desc": "Windows/macOS主流Clash替代工具横向对比：UI交互美观度、Mihomo内核调教、内存资源开销、TUN模式稳定性全面PK。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "Clash Verge Rev",
      "Clash Nyanpasu",
      "客户端评测"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>后 CFW 时代的王者之争：</strong>在老牌 Clash for Windows 隐退后，基于 Tauri 框架打造的 <strong>Clash Verge Rev</strong> 与 <strong>Clash Nyanpasu</strong> 成为了桌面端最耀眼的两大开源神器。\n      </div>\n\n      <h2>一、两大客户端核心维度对比</h2>\n      <div class=\"table-responsive\">\n        <table class=\"data-table\">\n          <thead>\n            <tr>\n              <th>对比维度</th>\n              <th>Clash Verge Rev</th>\n              <th>Clash Nyanpasu</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>底层架构</strong></td>\n              <td>Tauri (Rust) + React</td>\n              <td>Tauri (Rust) + Next.js</td>\n            </tr>\n            <tr>\n              <td><strong>内核支持</strong></td>\n              <td>深度整合 Mihomo (Meta)，更新极快</td>\n              <td>支持 Clash Meta 与原生 Clash 核心</td>\n            </tr>\n            <tr>\n              <td><strong>内存常驻占用</strong></td>\n              <td>约 40MB - 65MB（极其轻量）</td>\n              <td>约 60MB - 90MB</td>\n            </tr>\n            <tr>\n              <td><strong>TUN 模式体验</strong></td>\n              <td>极度丝滑，自带一键网卡驱动修复</td>\n              <td>良好，支持自定义网卡堆栈</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <h2>二、终极选型建议</h2>\n      <p>绝大多数日常用户我们强烈推荐 <strong>Clash Verge Rev</strong>，其界面简洁，中文汉化彻底，驱动兼容性极佳。详细图文教程可查阅<a href=\"../guides/windows.html\">Windows配置指南</a>与<a href=\"../guides/clash-verge-rev.html\">TUN调优指南</a>。</p>\n    "
  },
  {
    "slug": "sing-box-next-gen-client-review",
    "title": "为什么Sing-box被称为下一代全能网络工具？内存占用与性能深度测评 - 梯子推荐网",
    "h1": "为什么Sing-box被称为下一代全能网络工具？内存占用与性能深度测评",
    "desc": "全平台网络核心Sing-box硬核测评：为什么它的吞吐转发速率能提升40%？内存消耗仅需原版Clash的三分之一？全协议支持优势解析。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "tags": [
      "Sing-box",
      "网络核心",
      "极客首选"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>底层性能重构：</strong>Sing-box 由知名开源开发者 Nekoray 团队发起，彻底摆脱了历史历史技术包袱，采用 Go 语言原生高效协程池重写了全套路由管道。\n      </div>\n\n      <h2>一、实测性能数据震撼对比</h2>\n      <p>在千兆宽带下行压测中：</p>\n      <ul>\n        <li><strong>CPU 占用率：</strong>Sing-box 仅占用 3%-5%，而传统客户端往往飙升至 12%-18%。</li>\n        <li><strong>内存消耗：</strong>Sing-box 常驻内存仅 <strong>18MB</strong>，在配置较低的安卓手机或老旧电视盒子上表现尤为亮眼。</li>\n        <li><strong>原生协议覆盖：</strong>原生支持 Shadowsocks、Vmess、Trojan、VLESS、Hysteria 2、TUIC、ShadowTLS、WireGuard 等几乎所有已知协议。</li>\n      </ul>\n      <p>更多高级配置细节详见<a href=\"../guides/sing-box-config.html\">Sing-box配置与订阅导入教程</a>。</p>\n    "
  },
  {
    "slug": "shadowrocket-ruleset-and-rewrite-guide",
    "title": "iOS小火箭Shadowrocket进阶玩法：外部规则集引用、HTTPS解密与URL重写 - 梯子推荐网",
    "h1": "Shadowrocket小火箭进阶指南：外部规则集引用与重写模块配置",
    "desc": "玩转iOS小火箭高级功能：一键引用GitHub开源ACL4SSR规则集、开启MITM抓包证书解密、URL Rewrite去广告与重定向进阶技巧。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "Shadowrocket",
      "规则集",
      "小火箭进阶"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>不止于简单翻墙：</strong>Shadowrocket（小火箭）不仅是一个代理客户端，更是一个完整的本地网络流量审计与请求重写引擎。\n      </div>\n\n      <h2>一、引入外部神级规则集（ACL4SSR）</h2>\n      <ol>\n        <li>在小火箭底部进入 <strong>配置 (Config)</strong> 页面。</li>\n        <li>点击右上角 <strong>+</strong> 号，粘贴知名开源分流规则集链接（如 ACL4SSR 精简版）。</li>\n        <li>点击规则集卡片，选择 <strong>使用配置</strong>，即可享受极其精细的自动分流。</li>\n      </ol>\n\n      <h2>二、开启 HTTPS 解密 (MITM)</h2>\n      <p>若需要实现特定网页的脚本重写或广告过滤，需在小火箭中生成专属 CA 证书，并进入 iPhone <em>设置 → 通用 → 关于本机 → 证书信任设置</em> 中开启完全信任。</p>\n    "
  },
  {
    "slug": "surge-vs-quantumult-x-ios-review",
    "title": "Surge 5与Quantumult X顶级工具横评：iOS高端翻墙玩家该如何选择？ - 梯子推荐网",
    "h1": "Surge 5与Quantumult X顶级工具横评：iOS高端翻墙利器选型指南",
    "desc": "iOS两大殿堂级网络调试软件全面对决：定价策略（$49 vs $7.99）、脚本自动化、设备抓包、网关接管与日常使用心智负担深度对比。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "tags": [
      "Surge 5",
      "Quantumult X",
      "iOS神器"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>高端决战：</strong>对于愿意付费追求极致网络掌控力的 iOS/Mac 玩家，<strong>Surge 5</strong> 与 <strong>Quantumult X（圈X）</strong> 是无法绕过的两座高峰。\n      </div>\n\n      <h2>一、核心选购考量</h2>\n      <ul>\n        <li><strong>Surge 5 (售价 $49.99 起)：</strong>业界标杆，苹果生态设计典范。支持独一无二的 Enhanced Mode 网关增强接管全屋设备，网络调试信息极其详尽，贵但物有所值。</li>\n        <li><strong>Quantumult X (售价 $7.99)：</strong>性价比极高的高端利器，图表可视化美观，对 JavaScript 脚本重写支持极其丰富，适合喜欢折腾签到脚本的高阶玩家。</li>\n      </ul>\n      <p>如果是新手用户，我们依然建议首选入门门槛更低的小火箭，详见<a href=\"../guides/ios.html\">iOS小火箭配置教程</a>。</p>\n    "
  },
  {
    "slug": "v2rayn-and-v2rayng-common-mistakes",
    "title": "v2rayN（电脑）与v2rayNG（手机）新手最常犯的5个配置错误与纠正方法 - 梯子推荐网",
    "h1": "v2rayN与v2rayNG新手最常犯的5个配置错误与纠正方法",
    "desc": "避开常见操作误区：核心版本未下载、路由模式误设全局、分流规则更新失败、本地系统时间不同步导致TLS报错的快速修复指南。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "v2rayN",
      "v2rayNG",
      "常见错误"
    ],
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>新手避坑：</strong>很多新手在使用经典客户端 v2rayN 或手机端 v2rayNG 时，常常因为一两个微小的设置疏忽导致整机断网。\n      </div>\n\n      <h2>一、5大典型配置错误与快速解法</h2>\n      <ol>\n        <li><strong>错误 1：解压缺少 Xray 核心：</strong>下载了纯客户端壳子未下载 Core 核心文件。解法：在顶部菜单点击 <em>检查更新 → Xray-core</em> 自动拉取完整二进制。</li>\n        <li><strong>错误 2：路由设置误选“全局 (Global)”：</strong>导致国内网站全被强制送出境。解法：路由模式必须切换为 <strong>绕过大陆 (Bypass mainland)</strong>。</li>\n        <li><strong>错误 3：系统时间与互联网时间不同步：</strong>相差超过 90 秒直接握手失败。解法：在 Windows 设置中立即同步时间。</li>\n        <li><strong>错误 4：端口 10808 / 10809 被其他杀毒软件占用：</strong>解法：进入设置将本地监听端口改为 20808。</li>\n        <li><strong>错误 5：更新订阅时勾选了“不通过代理更新”：</strong>导致订阅分发域名被拦截。解法：在订阅设置中切换更新路由。</li>\n      </ol>\n    "
  },
  {
    "slug": "tun-mode-virtual-network-adapter",
    "title": "什么是TUN模式虚拟网卡？为什么开启TUN能让电脑终端和游戏全部走代理？ - 梯子推荐网",
    "h1": "什么是TUN模式虚拟网卡？为什么开启TUN能让电脑全流量走代理？",
    "desc": "操作系统网络层级原理解析：系统代理（HTTP Proxy）的局限性、TUN虚拟网卡（Wintun）工作机制与全流量接管实现。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "TUN模式",
      "虚拟网卡",
      "网络底层"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>打破限制：</strong>为什么你开了梯子，Chrome 浏览器能打开 Google，但电脑上的 <strong>CMD 终端、Git clone、以及各类外服客户端</strong> 依然提示网络连接超时？答案在于代理层级的不同。\n      </div>\n\n      <h2>一、系统代理 vs TUN 虚拟网卡</h2>\n      <ul>\n        <li><strong>系统代理 (System Proxy)：</strong>只在应用层（Application Layer）声明一个 HTTP/SOCKS 端口。只有主动读取系统代理设置的软件（如浏览器）才会走代理。</li>\n        <li><strong>TUN 虚拟网卡模式：</strong>在操作系统内核层（Network Layer）虚拟出一张真实的网卡，将整机所有的 IP 数据包在底层无差别劫持重定向，不论软件是否支持代理设置，全部强制走分流！</li>\n      </ul>\n\n      <h2>二、如何正确使用 TUN 模式？</h2>\n      <p>在 Clash Verge Rev 中点击“设置”开启“TUN 模式”即可，教程详见<a href=\"../guides/clash-verge-rev.html\">TUN调优全指南</a>。</p>\n    "
  },
  {
    "slug": "rule-routing-geoip-traffic-saving",
    "title": "掌握规则分流（GEOIP与规则集）：让你的每月梯子流量节省50%以上 - 梯子推荐网",
    "h1": "掌握规则分流（GEOIP与规则集）：让你的每月梯子流量节省50%以上",
    "desc": "科学省流量指南：为什么很多人每月200GB流量不够用？详解国内IP库GEOIP分流逻辑，杜绝百度网盘、B站和国内应用跑境外节点流量。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "规则分流",
      "GEOIP",
      "流量节省"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>流量刺客排查：</strong>“我明明没看几部电影，为什么 200GB 机场流量几天就见底了？”排查发现，大部分是被国内后台运行的百度网盘、微信视频号或优酷偷偷跑光的！\n      </div>\n\n      <h2>一、规则分流的三层过滤链条</h2>\n      <ol>\n        <li><strong>第一层（域名白名单）：</strong>匹配 <code>DOMAIN-SUFFIX,cn</code> 或国内常见网站，直接判定为 <code>DIRECT (直连)</code>，毫秒级走本地光纤。</li>\n        <li><strong>第二层（IP 地理库 GEOIP）：</strong>如果域名未命中规则，客户端通过 DNS 解析出目标 IP；若目标 IP 属于中国大陆 IP 段（GEOIP, CN），强制判定为直连。</li>\n        <li><strong>第三层（兜底代理 MATCH）：</strong>只有真正属于境外受限的目标流量，才会送入海外节点。</li>\n      </ol>\n      <p>只要保持规则分流开启，国内巨额下载完全不消耗机场配额。可选购<a href=\"../ranking/value.html\">性价比品牌</a>充分享受大流量。</p>\n    "
  },
  {
    "slug": "allow-lan-proxy-sharing-home-office",
    "title": "局域网共享代理（Allow LAN）：一台电脑连上梯子，全家设备共享翻墙 - 梯子推荐网",
    "h1": "局域网共享代理（Allow LAN）：一台电脑连上梯子，全家设备共享翻墙",
    "desc": "无需软路由的极简全家翻墙方案：开启Clash允许局域网连接、查找本地局域网IP、电视与备用机配置HTTP代理无缝出海。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "Allow LAN",
      "局域网共享",
      "多设备协同"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>零成本方案：</strong>家里有台旧笔记本或常开台式机？只需勾选一个开关，就能让家里的智能电视、平板、游戏机无需安装客户端直接翻墙！\n      </div>\n\n      <h2>一、电脑端两步设置</h2>\n      <ol>\n        <li>在 Clash 客户端设置中，将 <strong>允许局域网连接 (Allow LAN)</strong> 开关打开。</li>\n        <li>按 <code>Win + R</code> 输入 <code>cmd</code>，输入 <code>ipconfig</code>，记下电脑的 IPv4 地址（如 <code>192.168.31.50</code>），默认端口通常为 <code>7890</code>。</li>\n      </ol>\n\n      <h2>二、其他设备连接配置</h2>\n      <p>在同 Wi-Fi 下的 iPad 或电视上，进入 Wi-Fi 详情 → HTTP 代理选择“手动” → 服务器填写 <code>192.168.31.50</code>，端口填写 <code>7890</code>，即可实现全家共享加速。详细步骤见<a href=\"../guides/ps5-switch-xbox.html\">主机加速教程</a>。</p>\n    "
  },
  {
    "slug": "speedtest-single-vs-multi-thread-gap",
    "title": "为什么节点测速跑出500M，实际下载只有2MB/s？单线程与多线程差异真相 - 梯子推荐网",
    "h1": "为什么节点测速跑出500M，实际下载只有2MB/s？单线程与多线程差异真相",
    "desc": "揭秘机场测速背后的水分：Speedtest多线程并发与真实浏览器单线程下载本质区别、TCP窗口大小与丢包率放大效应。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "测速真相",
      "单线程带宽",
      "网络性能"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>巨大落差：</strong>测速图上跑出 500Mbps 绿色大柱子，但在 GitHub 下载一个 100MB 安装包时，下载速度却卡在 1.5MB/s。这绝非偶然，而是<strong>单线程吞吐能力严重不足</strong>的体现。\n      </div>\n\n      <h2>一、多线程并发的美化效应</h2>\n      <p>Speedtest 测速工具默认开启 8 到 16 个并发线程同时发包，哪怕每个线程因为轻微丢包只能跑 30M，加总起来依然能得到 500M 的亮眼截图。而我们在浏览器中直接点击下载文件时，通常是<strong>单线程传输</strong>。一旦线路存在 3% 丢包，单线程 TCP 速率就会受到指数级抑制。</p>\n\n      <h2>二、如何检验真实的单线程质量？</h2>\n      <p>使用 fast.com 在设置中将并发连接数设为 1 进行测速，或直接测试实际视频加载速度。推荐关注具备极高物理专线 SLA 的服务商，如<a href=\"../review/muguang.html\">暮光网络</a>与<a href=\"../review/wuyou.html\">无忧</a>。</p>\n    "
  },
  {
    "slug": "mobile-proxy-battery-optimization-tips",
    "title": "手机开启梯子后掉电飞快？四大核心设置彻底优化代理客户端后台能耗 - 梯子推荐网",
    "h1": "手机开启梯子后掉电飞快？四大核心设置彻底优化代理客户端后台能耗",
    "desc": "移动端省电保活宝典：高频Ping测速停用、内存唤醒抑制、唤醒锁优化与Sing-box轻量化替换方案，续航提升30%。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "手机省电",
      "电池优化",
      "后台保活"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>续航焦虑：</strong>开着代理客户端出门，手机发热严重、半天就掉电一大半？掌握这 4 个设置，让你全天后台常驻无需频繁开关。\n      </div>\n\n      <h2>一、四大省电优化绝招</h2>\n      <ol>\n        <li><strong>关闭自动测速 URL-Test 定时器：</strong>很多配置预设了每 30 秒对几十个节点发送一次测速心跳，这会阻止手机 CPU 进入深睡眠。将测速间隔改为 600 秒或改为纯手动选择。</li>\n        <li><strong>改用轻量客户端 Sing-box：</strong>Sing-box 的 Go 语言内存管理极其出色，功耗比老版客户端降低近 40%。</li>\n        <li><strong>开启系统代理而非全局 VPN 抓包：</strong>避免对国内流量进行不必要的本地重解密计算。</li>\n        <li><strong>设置合理的规则集缓存周期。</strong></li>\n      </ol>\n      <p>教程详见<a href=\"../guides/android.html\">Android配置教程</a>与<a href=\"../guides/ios.html\">iOS省电设置</a>。</p>\n    "
  },
  {
    "slug": "subscription-update-error-troubleshooting",
    "title": "机场订阅更新失败报Error怎么办？五大根因排查与紧急离线恢复方案 - 梯子推荐网",
    "h1": "机场订阅更新失败报Error怎么办？五大根因排查与紧急离线恢复方案",
    "desc": "订阅更新红字报错急救手册：DNS污染拦截订阅分发地址、节点全部过期、SSL证书握手异常、Base64解析错误的快速定位流程。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "订阅更新失败",
      "排障急救",
      "错误解决"
    ],
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>最常见故障：</strong>点击“更新订阅”，软件右下角弹出一串醒目的红字 <code>Fetch Failed / Network Error / Invalid YAML</code>。此时请按以下顺序排查：\n      </div>\n\n      <h2>一、五大根因快速排查表</h2>\n      <div class=\"table-responsive\">\n        <table class=\"data-table\">\n          <thead>\n            <tr>\n              <th>故障现象</th>\n              <th>根本原因</th>\n              <th>标准解决方案</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>Fetch Failed</code></td>\n              <td>订阅分发域名被 GFW 拦截阻断</td>\n              <td>先连上已有的旧节点，或在机场后台获取免翻墙备用订阅链接</td>\n            </tr>\n            <tr>\n              <td><code>Invalid YAML / Empty</code></td>\n              <td>套餐已欠费到期，或流量被耗尽</td>\n              <td>登录机场官网后台检查账户可用配额与有效天数</td>\n            </tr>\n            <tr>\n              <td><code>Certificate Expired</code></td>\n              <td>本地电脑系统时间误差超过 90 秒</td>\n              <td>在系统设置中点击立即同步时间</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <h2>二、终极恢复手段</h2>\n      <p>如果订阅链接始终无法拉取，可在机场后台下载离线 <code>config.yaml</code> 配置文件，直接在客户端中选择“本地文件导入”。详细排障可见<a href=\"../guides/troubleshooting.html\">节点排障指南</a>。</p>\n    "
  },
  {
    "slug": "auto-speedtest-fallback-group-setup",
    "title": "机场节点自动故障转移（Fallback与Url-test）：手把手教你配置永不断线 - 梯子推荐网",
    "h1": "机场节点自动故障转移（Fallback与Url-test）：配置永不断线策略组",
    "desc": "打造高可用网络矩阵：利用Clash策略组的Fallback（主备故障自动转移）与Url-test（自动优选延迟最低）特性，实现全天候无感续连。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "故障转移",
      "Fallback",
      "高可用策略"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>网络永动机：</strong>工作正在关键时刻，当前节点突然断网？通过配置 <strong>Fallback 策略组</strong>，系统会在 1 秒内无感切换至备用节点，用户端毫无断线感知。\n      </div>\n\n      <h2>一、Fallback 与 Url-test 语法实战</h2>\n      <pre><code>proxy-groups:\n  - name: \"自动容灾备选\"\n    type: fallback\n    url: http://www.gstatic.com/generate_204\n    interval: 300\n    proxies:\n      - \"主线-香港01\"\n      - \"备线-香港02\"\n      - \"冷备-日本01\"</code></pre>\n      <p>当首选的“主线-香港01”出现网络中断时，策略组自动瞬间降级至“备线-香港02”；待主线恢复健康后又会自动无感切回。建议配置<a href=\"../ranking/overall.html\">双优质机场</a>作为多重保障。</p>\n    "
  },
  {
    "slug": "wechat-domestic-message-delay-fix",
    "title": "为什么挂了梯子后微信国内消息有延迟？正确配置Direct直连白名单指南 - 梯子推荐网",
    "h1": "为什么挂了梯子后微信国内消息有延迟？正确配置Direct直连白名单",
    "desc": "解决翻墙后的国内通讯痛点：微信消息转圈延迟、公众号图片打不开、朋友圈刷新慢，详解国内IP白名单与域名规则优化。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "微信延迟",
      "国内直连",
      "分流优化"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>典型痛点：</strong>开启梯子后，发现微信收发文字消息经常要转圈 2-3 秒，微信语音通话甚至频繁断断续续。这表明微信数据包被错误地路由去了海外节点！\n      </div>\n\n      <h2>一、微信国内服务器直连规则设置</h2>\n      <p>微信的通信协议使用了长连接 Socket 端口与腾讯在国内的多省私有机房直连。一旦被代理包裹，数据必须先绕去海外再回国，延迟成倍上升。在规则中必须追加：</p>\n      <pre><code>- DOMAIN-SUFFIX,weixin.qq.com,DIRECT\n- DOMAIN-SUFFIX,wechat.com,DIRECT\n- DOMAIN-SUFFIX,tenpay.com,DIRECT\n- IP-CIDR,183.0.0.0/8,DIRECT</code></pre>\n      <p>配置完成后，微信流量 100% 走本地运营商直连通道，消息瞬间秒回。</p>\n    "
  },
  {
    "slug": "reading-client-error-logs-guide",
    "title": "零基础看懂客户端Error日志：手把手教你根据日志代码秒查连接故障 - 梯子推荐网",
    "h1": "零基础看懂客户端Error日志：手把手教你根据日志代码秒查连接故障",
    "desc": "从小白到排障达人：看懂Clash/Sing-box控制台日志代码，解读connection reset by peer、dial timeout、handshake failure具体含义与对应解法。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "日志分析",
      "错误排查",
      "技术进阶"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>授人以渔：</strong>遇到网络问题不要慌张，打开客户端的 <strong>日志 (Logs)</strong> 面板，错误原因清清楚楚写在控制台里。\n      </div>\n\n      <h2>一、三大经典日志代码大揭秘</h2>\n      <ol>\n        <li><strong><code>dial tcp: i/o timeout</code>：</strong>客户端在规定时间内未能与节点服务器建立 TCP 握手。通常表示该节点入口 IP 已被防火墙阻断或服务器机房断网。</li>\n        <li><strong><code>remote error: tls: bad record MAC</code>：</strong>TLS 握手解密失败，95% 是本地系统时间与网络标准时间偏差过大导致。</li>\n        <li><strong><code>connection reset by peer</code>：</strong>连接被对端或中间审查设备强制重置（发送了 RST 包），说明流量伪装特征暴露，需更换节点协议。</li>\n      </ol>\n      <p>更多调试技巧请参考<a href=\"../guides/troubleshooting.html\">全平台故障排查手册</a>。</p>\n    "
  },
  {
    "slug": "writing-custom-routing-rules",
    "title": "自定义分流规则编写教程：把指定境外网站或特定APP流量分配给指定节点 - 梯子推荐网",
    "h1": "自定义分流规则编写教程：把指定境外网站或特定APP流量分配给指定节点",
    "desc": "掌控你的网络流量：手把手教你编写Clash/Sing-box个性化分流规则，实现“访问OpenAI走美国01”、“访问奈飞走日本02”、“国内直连”。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "自定义规则",
      "精准分流",
      "策略组分配"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>随心所欲：</strong>想让 ChatGPT 永远走最纯净的美国住宅节点，而看 Netflix 永远走中文字幕最全的香港节点？只需学会编写这几条规则。\n      </div>\n\n      <h2>一、分流规则编写三步法</h2>\n      <p>打开配置文件中的 <code>rules:</code> 列表，按照优先级从上到下添加：</p>\n      <pre><code># 1. AI 专用分流\n- DOMAIN-SUFFIX,openai.com,美国住宅节点\n- DOMAIN-SUFFIX,anthropic.com,美国住宅节点\n\n# 2. 流媒体专用分流\n- DOMAIN-SUFFIX,netflix.com,香港流媒体解锁\n- DOMAIN-SUFFIX,disneyplus.com,新加坡解锁\n\n# 3. 广告拦截\n- DOMAIN-KEYWORD,adservice,REJECT\n\n# 4. 国内直连与全网兜底\n- GEOIP,CN,DIRECT\n- MATCH,PROXY</code></pre>\n      <p>规则从上至下匹配，一旦命中立即执行相应策略组出海。搭配<a href=\"../ranking/overall.html\">优质多线路机场</a>体验更佳。</p>\n    "
  },
  {
    "slug": "openclash-vs-passwall-router-review",
    "title": "软路由固件插件对决：OpenClash与PassWall谁更适合跑满千兆宽带？ - 梯子推荐网",
    "h1": "软路由固件插件对决：OpenClash与PassWall千兆宽带跑满实测",
    "desc": "家庭网关终极对决：OpenWrt两大神级插件在千兆宽带环境下的吞吐测试、CPU负载、Fake-IP稳定性与日常维护难易度横评。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "8 分钟阅读",
    "tags": [
      "OpenClash",
      "PassWall",
      "软路由实测"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>千兆极限：</strong>在家庭千兆物理光纤普及的今天，软路由网关是否能轻松跑满 1000Mbps 下行，极大考验着代理插件的转发效率与内核调度。\n      </div>\n\n      <h2>一、实机压测数据汇总</h2>\n      <p>在 Intel N100 软路由平台（双 2.5G 网卡）上进行真实压测：</p>\n      <ul>\n        <li><strong>OpenClash (Mihomo内核)：</strong>跑满 940Mbps 千兆带宽时，CPU 占用率稳定在 22%-28%，Fake-IP 模式下网页首屏加载极快，多策略组切换极其灵活。</li>\n        <li><strong>PassWall (Xray核心)：</strong>跑满千兆带宽时 CPU 占用更低（约 15%-18%），分流逻辑更偏向轻量白名单，适合内存较小的入门级路由器。</li>\n      </ul>\n\n      <h2>二、选择建议</h2>\n      <p>软路由硬件性能强劲首选 <strong>OpenClash</strong>，规则管理更现代；硬件配置较低首选 <strong>PassWall</strong>。详细教程参见<a href=\"../guides/router-openwrt.html\">软路由配置全攻略</a>。</p>\n    "
  },
  {
    "slug": "windows-autostart-silent-proxy-guide",
    "title": "Windows开机自启与静默运行配置：打造无感启动的丝滑科学上网体验 - 梯子推荐网",
    "h1": "Windows开机自启与静默运行配置：打造无感启动的丝滑科学上网体验",
    "desc": "打造极简体验：彻底摆脱每次开机手动打开软件的繁琐，教你设置系统启动服务、静默最小化到托盘、开机自动连通系统代理。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "开机自启",
      "静默运行",
      "Windows技巧"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>极致无感：</strong>电脑开机按下电源键，进入桌面后无需点击任何软件，直接打开浏览器即可秒速上外网，这才是最优雅的使用姿态。\n      </div>\n\n      <h2>一、Clash Verge Rev 静默自启动设置</h2>\n      <ol>\n        <li>在左侧菜单进入 <strong>设置 (Settings)</strong>。</li>\n        <li>勾选 <strong>开机自启 (Auto Launch)</strong>。</li>\n        <li>勾选 <strong>静默启动 (Silent Start)</strong>（软件启动时不弹出主窗口，直接最小化在系统右下角托盘区）。</li>\n        <li>确保 <strong>系统代理 (System Proxy)</strong> 开关保持开启。</li>\n      </ol>\n      <p>简单四步，往后每次开启电脑无需任何人工介入，详见<a href=\"../guides/windows.html\">Windows完整配置教程</a>。</p>\n    "
  },
  {
    "slug": "mac-terminal-proxy-environment-vars",
    "title": "Mac与Linux终端命令行走代理教程：优雅配置export http_proxy环境变量 - 梯子推荐网",
    "h1": "Mac与Linux终端命令行走代理教程：优雅配置http_proxy环境变量",
    "desc": "终端极客必修课：为什么开着代理终端依然报Could not resolve host？手把手教你配置zsh/bash别名一键开关终端网络加速。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "终端代理",
      "macOS",
      "环境变量"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>命令行孤岛：</strong>macOS 和 Linux 的终端命令行出于安全设计，默认绝不读取系统的 GUI 代理设置。这就是为什么必须在终端手动注入环境变量。\n      </div>\n\n      <h2>一、配置快速开关 Alias 别名</h2>\n      <p>编辑用户目录下的配置文件 <code>~/.zshrc</code>（如果使用 bash 则编辑 <code>~/.bash_profile</code>）：</p>\n      <pre><code># 开启代理别名\nalias proxy=\"export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; export all_proxy=socks5://127.0.0.1:7890; echo '终端代理已成功启动'\"\n# 关闭代理别名\nalias unproxy=\"unset http_proxy; unset https_proxy; unset all_proxy; echo '终端代理已注销关闭'\"</code></pre>\n      <p>执行 <code>source ~/.zshrc</code> 生效。此后只需在终端敲入 <code>proxy</code> 即可秒速给命令行插上翅膀！教程详见<a href=\"../guides/macos.html\">macOS指南</a>。</p>\n    "
  },
  {
    "slug": "proxy-port-occupied-conflict-resolve",
    "title": "客户端提示端口被占用（Port 7890 in Use）？三招快速释放与端口变更 - 梯子推荐网",
    "h1": "客户端提示端口被占用（Port 7890 in Use）？三招快速释放与端口变更",
    "desc": "排查端口冲突报错：netstat命令快速定位占用7890端口的冲突进程、彻底杀掉僵死进程或在客户端中更换备用监听端口全流程。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "6 分钟阅读",
    "tags": [
      "端口占用",
      "Port Conflict",
      "网络排障"
    ],
    "content": "\n      <div class=\"callout callout-warning\">\n        <strong>启动报错：</strong>打开客户端时弹窗提示 <code>listen tcp 127.0.0.1:7890: bind: address already in use</code>，导致代理服务无法启动。\n      </div>\n\n      <h2>一、三步快速解决端口冲突</h2>\n      <ol>\n        <li><strong>查出元凶进程：</strong>在 CMD 终端执行 <code>netstat -ano | findstr :7890</code>，最后一列数字即为占用该端口的进程 PID。</li>\n        <li><strong>一键终结进程：</strong>执行 <code>taskkill /F /PID 占用PID</code> 强制释放端口。</li>\n        <li><strong>终极彻底防冲突手段：</strong>在客户端设置中，将默认的 Mixed Port 从 <code>7890</code> 更改为一个冷门端口，如 <code>17890</code> 或 <code>27890</code>，往后永远不再发生冲突。</li>\n      </ol>\n    "
  },
  {
    "slug": "keep-alive-background-ios-android",
    "title": "手机锁屏后梯子频繁断连？彻底解决iOS系统墓碑机制与安卓杀后台难题 - 梯子推荐网",
    "h1": "手机锁屏后梯子频繁断连？彻底解决iOS系统墓碑机制与安卓杀后台",
    "desc": "移动端后台保活全攻略：iOS系统网络唤醒机制、安卓省电策略白名单设置、解决手机黑屏休眠后外网消息断联的终极解法。",
    "category": "客户端与分流",
    "date": "2026-11-18",
    "readTime": "7 分钟阅读",
    "tags": [
      "后台保活",
      "防掉线",
      "手机系统"
    ],
    "content": "\n      <div class=\"callout callout-info\">\n        <strong>断连痛点：</strong>手机亮屏时连接正常，一旦锁屏装进口袋，过几分钟海外消息就收不到了，必须重新亮屏解锁才开始弹消息。这是系统在后台“杀掉了”代理进程。\n      </div>\n\n      <h2>一、安卓系统的三道保活金牌</h2>\n      <ol>\n        <li><strong>电池策略无限制：</strong>在应用信息中，将电池优化从“智能推荐”强制改为 <strong>“无限制”</strong>。</li>\n        <li><strong>多任务加锁：</strong>在最近任务栏中长按代理客户端卡片，点击小锁图标锁定后台常驻。</li>\n        <li><strong>开启常驻通知栏通知：</strong>允许客户端在前台保留常驻通知，提升进程优先级。</li>\n      </ol>\n\n      <h2>二、iOS 系统的优化策略</h2>\n      <p>iOS 使用的是 NetworkExtension 虚拟网卡框架。在 Shadowrocket 中开启“按需连接 (On Demand)”，即使客户端被系统深度休眠，一旦产生网络出海请求，系统级守护进程会自动瞬间重新唤醒代理隧道。</p>\n    "
  }
];
