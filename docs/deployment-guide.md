# 网站上线与 Cloudflare Pages 部署完整指南

> 适用域名：`https://tizituijian.vip`  
> GitHub 仓库：`https://github.com/tangtang856/tizituijian.vip`  
> 构建架构：纯原生静态 HTML/CSS（秒开无依赖）

---

## 一、方案选择：为什么推荐 Cloudflare Pages？

1. **全球 CDN 加速**：依托 Cloudflare 全球数百个数据中心，无论访客在境内还是境外均能实现秒开。
2. **免费 SSL 证书**：自动签发并自动续期 HTTPS 泛域名证书。
3. **自动化持续集成 (CI/CD)**：只要将代码推送至 GitHub `main` 分支，Cloudflare Pages 会自动触发构建并秒级上线。
4. **零服务器维护**：不需要购买 VPS、不需要配置 Nginx，永久零运维成本。

---

## 二、Cloudflare Pages 绑定部署步骤

### 步骤 1：登录 Cloudflare 并关联 GitHub
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 在左侧菜单点击 **“Workers 和 Pages (Workers & Pages)”**。
3. 点击 **“创建应用程序 (Create application)”** → 切换到 **“Pages”** 选项卡。
4. 点击 **“连接到 Git (Connect to Git)”**。
5. 授权访问您的 GitHub 账号，并选择仓库：`tangtang856/tizituijian.vip`。

### 步骤 2：配置构建与输出参数
在项目设置页面中填写如下参数：
- **项目名称 (Project name)**：`tizituijian-vip`（可自定义）
- **生产分支 (Production branch)**：`main`
- **框架预设 (Framework preset)**：选择 `None` (或者保持默认)
- **构建命令 (Build command)**：
  ```bash
  npm run build
  ```
- **构建输出目录 (Build output directory)**：
  ```bash
  dist
  ```
  *(注：设置 `dist` 或根目录 `.` 均支持，本站已双重适配)*

### 步骤 3：保存并部署
点击 **“保存并部署 (Save and Deploy)”**。
构建日志将在数十秒内显示绿色对勾并提示：`Success: Your site is deployed!`。
此时会分配一个类似 `tizituijian-vip.pages.dev` 的临时测试域名。

---

## 三、绑定正式自定义域名 (tizituijian.vip)

1. 在 Pages 项目概览页面，点击顶部的 **“自定义域 (Custom domains)”** 选项卡。
2. 点击 **“设置自定义域 (Set up a custom domain)”**。
3. 输入您的正式域名：`tizituijian.vip`（以及建议绑定的 `www.tizituijian.vip`）。
4. 点击“继续”：
   - 如果您的域名已在 Cloudflare 解析，系统会自动添加 CNAME 记录，数秒内即完成生效。
   - 如果域名在其他注册商（如腾讯云、阿里云、Namecheap），请在域名提供商处添加一条 CNAME 解析记录，将 `tizituijian.vip` 指向分配的 `<project>.pages.dev`。
5. 等待 SSL 证书完成签发（通常只需 2 至 5 分钟），即可通过 `https://tizituijian.vip` 正常访问！

---

## 四、本地直接双击预览测试说明

得益于本站严格执行的纯相对路径与无依赖架构：
- 您可以直接在本地电脑上打开文件夹：`c:\Users\USER\Desktop\博客\tizituijian.vip`
- 双击任意 `.html` 文件（如 `index.html`、`recommend/budget.html`、`ranking/overall.html`）
- 浏览器在 `file:///` 协议下即可完美加载原生 CSS、字体、排版与多层级页面互相跳转！
