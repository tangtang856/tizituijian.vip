# 梯子推荐网 (tizituijian.vip) · Bing SEO 专业建站系统

> 专为 Bing 搜索引擎优化定制的中文机场评测与网络加速技术资讯平台。  
> 纯 HTML5 + 原生 CSS 秒开架构，零外部重型依赖，100% 相对路径规范，支持本地 `file://` 直接双击与 Cloudflare Pages 静态部署。

---

## 一、主攻关键词与项目参数

- **Bing 主攻关键词**：`机场推荐` `机场节点` `性价比机场` `梯子推荐` `vpn` `vpn机场` `vpn节点` `vpn推荐`
- **正式域名**：`https://tizituijian.vip`
- **GitHub 远程仓库**：`https://github.com/tangtang856/tizituijian.vip`

---

## 二、网站核心模块与信息架构 (44个页面)

- **首页 (`index.html`)**：主打 8 大核心搜索意图，具备快速解答卡片、精选推荐卡片、综合榜单摘要、6大场景入口、FAQ手风琴与全套 Schema.org 结构化数据。
- **推荐专题 (`recommend/`)**：
  - `index.html`：推荐中心枢纽
  - `budget.html`：性价比平价机场推荐（每GB单价算力优化）
  - `premium.html`：高端 IPLC/IEPL 专线 VPN 机场精选
  - `beginner.html`：新手入门首选一键开箱即用梯子
  - `stable.html`：稳定高可用多线 BGP 抗封锁节点
  - `ai.html`：ChatGPT 4o / Claude 3.5 原生住宅 IP 专用节点
  - `streaming.html`：4K 奈飞/油管/Disney+ 流媒体解锁专用通道
- **排行榜系统 (`ranking/`)**：
  - `overall.html`：2026综合实力排行榜
  - `value.html`：性价比排行榜（每GB单价扣减倍率科学排序）
  - `budget.html`：低预算平价排行榜
  - `stable.html`：长期高稳定性 SLA 排行榜
- **横向对比工具 (`compare/index.html`)**：交互式 2-5 家机场价格、流量、协议、设备数并排对比矩阵。
- **机场资料与评测 (`airport/` & `review/`)**：
  - 泡泡狗 (Paopaodog)、闪电猫 (SpeedyCat)、桔子云 (OrangeCloud)、飞鸟云 (Feiniaoyun)、贝贝云 (Beibeiyun)
- **客户端教程中心 (`guides/`)**：Windows、Android、iOS 小火箭、macOS 及节点排查指南。
- **选购指南与行业分析 (`blog/`)**：新手挑选黄金准则、一元机场跑路风险剖析、IPLC与BGP中转区别评测、海外AI解锁避坑、传统VPN与现代机场代理对比。
- **专业技术百科 (`glossary/`)**：IPLC/IEPL专线、节点倍率机制、常用协议对比、订阅链接工作原理、原生与住宅IP。
- **信任与合规体系**：`about.html`、`contact.html`、`editorial-policy.html`、`privacy-policy.html`、`disclaimer.html`、`404.html`。
- **SEO 与自动化体系**：`robots.txt`、`sitemap.xml`、IndexNow 密钥文件与推送脚本。

---

## 三、常用维护命令

```bash
# 1. 重新构建全站静态页面与 dist 输出目录
npm run build

# 2. 执行完整自动化 QA 与 SEO/内链/内容质量核查
npm run test
# 或者分别执行：
npm run audit:seo
npm run audit:links
npm run audit:content

# 3. 推送更新页面至 Bing (IndexNow 接口)
npm run indexnow
```

---

## 四、部署与上线

详细部署说明请参阅文档：[Cloudflare Pages 部署完整指南](docs/deployment-guide.md)。
- **构建命令**：`npm run build`
- **输出目录**：`dist` (或直接使用根目录 `.`)
- **DNS 绑定**：在 Cloudflare Pages 添加自定义域 `tizituijian.vip` 即可自动完成 SSL 证书签发与全球 CDN 加速。
