# Bing Webmaster Tools (必应站长平台) 完整配置与日常运营指南

> 适用域名：`https://tizituijian.vip`  
> 核心目标：加速 Bing 爬虫抓取、建立高权重索引、监控搜索流量与关键词排名

---

## 一、必须手动完成的人工操作步骤

Bing Webmaster Tools 涉及微软账号所有权验证，以下步骤需要网站管理员手动登录完成：

### 1. 登录与添加站点
1. 使用浏览器访问 [Bing Webmaster Tools 官网](https://www.bing.com/webmasters)。
2. 使用 Microsoft 账号、Google 账号或 GitHub 账号登录。
3. 在左上角选择 **“添加网站 (Add a Site)”**。
4. 输入您的正式域名：`https://tizituijian.vip`。

### 2. 网站所有权验证 (推荐两种方式之一)
- **方式 A（最简快捷）：通过 CNAME / TXT DNS 记录验证**
  - 在 Cloudflare DNS 控制台中，添加一条 Bing 提供的 TXT 记录或 CNAME 记录。
- **方式 B：HTML 标记验证 (Meta Tag)**
  - Bing 会提供一段形如 `<meta name="msvalidate.01" content="XXXX..." />` 的标记。
  - 将该 Content 字符串填入首页 `index.html` 的 `<head>` 区域后重新提交验证。

---

## 二、提交 Sitemap 站点地图

1. 登录 Bing Webmaster 后台，在左侧导航菜单点击 **Sitemaps (站点地图)**。
2. 在右上角点击 **“提交站点地图 (Submit Sitemap)”**。
3. 输入完整的 XML 路径：
   ```text
   https://tizituijian.vip/sitemap.xml
   ```
4. 点击“提交”。系统通常在 24 至 48 小时内处理并显示抓取状态、成功解析的 URL 数量（共 43 个正式页面）。

---

## 三、IndexNow 自动化推送配置与验证

本站已经内建了完整的 IndexNow 协议支持：
- API Key：`8f4b23c91d8e40f7b9c6543210abcdef`
- Key 验证文件路径：`https://tizituijian.vip/8f4b23c91d8e40f7b9c6543210abcdef.txt`

### 在 Bing 后台查看 IndexNow 状态：
1. 导航到 **IndexNow** 菜单。
2. Bing 会自动检测根目录下的 Key 验证文件。
3. 在该页面中可以实时查看最近通过 `npm run indexnow` 提交的 URL 数量、提交时间戳及 Bing 抓取机器人的接收日志。

### 日常维护推送命令：
每次发布新文章或调整套餐数据后，在本地终端运行：
```bash
# 自动检测新增与更新页面并推送
npm run indexnow

# 或者指定推送单个落地页
node scripts/indexnow.js https://tizituijian.vip/recommend/budget.html
```

---

## 四、核心监控模块使用手册

### 1. URL Inspection (网址检查)
- 当您发布了一篇极其重要的评测或更新了核心专题后，可在顶部搜索框输入目标完整 URL（如 `https://tizituijian.vip/recommend/budget.html`）。
- 点击 **“实时测试 (Live Test)”**：检查 Bing 爬虫能否顺畅读取 HTML、CSS、以及 Schema 结构化数据。
- 确认无误后点击 **“请求索引 (Request Indexing)”** 加速排队。

### 2. Search Performance (搜索表现)
- 重点关注以下本次指定的 Bing 主攻关键词的点击量（Clicks）、展示量（Impressions）及平均排名（Average Position）：
  - `机场推荐`
  - `梯子推荐`
  - `性价比机场`
  - `机场节点`
  - `vpn`
  - `vpn推荐`
  - `vpn机场`
  - `vpn节点`
- 若发现展示量很高但点击率（CTR）低于 3%，可针对性优化该页面的 `<title>` 和 `meta description` 吸引力。

### 3. Index Coverage (索引覆盖率)
- 查看“已编入索引 (Indexed)”与“已排除 (Excluded)”页面分布。
- 确保 `404.html` 处于排除或未抓取状态，确保所有推荐、排行榜与文章页面正常处于“已索引”状态。

### 4. Crawl Issues (抓取问题监控)
- 定期检查是否有“服务器错误 (5xx)”、“找不到 (404)”或“因 robots.txt 屏蔽”的警告。
- 本站全部资源已配置为标准相对路径，且 robots.txt 允许搜索引擎读取 CSS 与 JS，可确保爬虫渲染零报错。
