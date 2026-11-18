/**
 * 自动化 SEO 质量核查脚本 (scripts/audit-seo.js)
 * 检查：Title、Meta Description、H1唯一性、Canonical、Robots、Schema、Sitemap
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = 'https://tizituijian.vip';

// 递归查找所有 HTML 文件
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runSeoAudit() {
  console.log('=== 开始执行 SEO 完整合规性审计 (audit-seo.js) ===\n');
  const htmlFiles = getHtmlFiles(ROOT_DIR);
  let totalErrors = 0;
  let totalWarnings = 0;

  const titles = new Map();
  const descriptions = new Map();

  for (const file of htmlFiles) {
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 1. 检查 Title
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      console.error(`[FAIL] ${relFile}: 缺失 <title> 标签`);
      totalErrors++;
    } else {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        console.error(`[FAIL] ${relFile}: 与 ${titles.get(title)} 具有完全重复的 Title ("${title}")`);
        totalErrors++;
      } else {
        titles.set(title, relFile);
      }
    }

    // 2. 检查 Description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (!descMatch || !descMatch[1].trim()) {
      console.error(`[FAIL] ${relFile}: 缺失 meta description 描述`);
      totalErrors++;
    } else {
      const desc = descMatch[1].trim();
      if (descriptions.has(desc)) {
        console.warn(`[WARN] ${relFile}: 与 ${descriptions.get(desc)} 描述重复`);
        totalWarnings++;
      } else {
        descriptions.set(desc, relFile);
      }
    }

    // 3. 检查 H1 标签唯一性 (每个页面必须且仅有1个 H1)
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    if (!h1Matches || h1Matches.length === 0) {
      console.error(`[FAIL] ${relFile}: 缺失 <h1> 标签`);
      totalErrors++;
    } else if (h1Matches.length > 1) {
      console.error(`[FAIL] ${relFile}: 存在多个 <h1> 标签 (${h1Matches.length}个)`);
      totalErrors++;
    }

    // 4. 检查 Canonical
    const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (!canonicalMatch) {
      console.error(`[FAIL] ${relFile}: 缺失 canonical 规范网址`);
      totalErrors++;
    } else {
      const canonical = canonicalMatch[1];
      if (!canonical.startsWith(DOMAIN)) {
        console.error(`[FAIL] ${relFile}: Canonical 不是以指定域名 ${DOMAIN} 开头: ${canonical}`);
        totalErrors++;
      }
    }

    // 5. 检查 Schema.org JSON-LD 语法
    const schemaMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
    if (schemaMatches) {
      for (const sm of schemaMatches) {
        const rawJson = sm.replace(/<script[^>]*>|<\/script>/gi, '').trim();
        try {
          JSON.parse(rawJson);
        } catch (e) {
          console.error(`[FAIL] ${relFile}: Schema.org JSON-LD 存在语法错误: ${e.message}`);
          totalErrors++;
        }
      }
    }
  }

  // 6. 检查 robots.txt
  const robotsPath = path.join(ROOT_DIR, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    console.error('[FAIL] 根目录下缺失 robots.txt');
    totalErrors++;
  } else {
    const robots = fs.readFileSync(robotsPath, 'utf8');
    if (!robots.includes(`Sitemap: ${DOMAIN}/sitemap.xml`)) {
      console.error('[FAIL] robots.txt 中未正确声明 Sitemap URL');
      totalErrors++;
    }
  }

  // 7. 检查 sitemap.xml
  const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('[FAIL] 根目录下缺失 sitemap.xml');
    totalErrors++;
  } else {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    if (!sitemap.includes('<urlset') || !sitemap.includes(DOMAIN)) {
      console.error('[FAIL] sitemap.xml 格式异常或未包含正式域名');
      totalErrors++;
    }
  }

  console.log(`\nSEO 审计完成: 共扫描 ${htmlFiles.length} 个 HTML 页面`);
  console.log(`错误 (FAIL): ${totalErrors}，警告 (WARN): ${totalWarnings}`);

  if (totalErrors > 0) {
    console.error('\n❌ SEO 审计未通过，请修复以上错误！');
    process.exit(1);
  } else {
    console.log('\n✅ PASS: 所有页面 SEO 元素与结构化数据全部符合规范！');
  }
}

if (require.main === module) {
  runSeoAudit();
}

module.exports = { runSeoAudit };
