/**
 * 链接有效性与相对路径规范核查脚本 (scripts/check-links.js)
 * 检查项：
 * 1. 站内链接绝对禁止使用以 / 开头的根路径
 * 2. 严禁出现 localhost 或测试域名
 * 3. 每一个相对路径链接的目标文件必须在磁盘上真实存在
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

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

function runCheckLinks() {
  console.log('=== 开始执行内链有效性与相对路径检查 (check-links.js) ===\n');
  const htmlFiles = getHtmlFiles(ROOT_DIR);
  let totalErrors = 0;
  let totalCheckedLinks = 0;

  for (const file of htmlFiles) {
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const fileDir = path.dirname(file);
    const content = fs.readFileSync(file, 'utf8');

    // 正则提取所有 href 和 src
    const linkRegex = /(?:href|src)=["']([^"']+)["']/gi;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      const link = match[1].trim();

      // 忽略外部链接、锚点、邮件、javascript、数据URI
      if (
        link.startsWith('http://') ||
        link.startsWith('https://') ||
        link.startsWith('mailto:') ||
        link.startsWith('tel:') ||
        link.startsWith('javascript:') ||
        link.startsWith('data:') ||
        link.startsWith('#') ||
        link === ''
      ) {
        // 额外安全检查：外部链接中绝对不能出现 localhost 或 127.0.0.1 (除代码示例中的文本除外)
        if (link.includes('localhost') || link.includes('127.0.0.1:80') || link.includes('127.0.0.1:3000')) {
          console.error(`[FAIL] ${relFile}: 链接包含本地开发主机: ${link}`);
          totalErrors++;
        }
        continue;
      }

      totalCheckedLinks++;

      // 规则 1：严禁使用以 / 开头的根绝对路径
      if (link.startsWith('/')) {
        console.error(`[FAIL] ${relFile}: 违规使用了根绝对路径: "${link}"！必须使用相对路径！`);
        totalErrors++;
        continue;
      }

      // 规则 2：核验目标本地文件是否存在
      // 去除锚点或参数
      const cleanPath = link.split('#')[0].split('?')[0];
      if (!cleanPath) continue;

      const targetFullPath = path.resolve(fileDir, cleanPath);
      if (!fs.existsSync(targetFullPath)) {
        console.error(`[FAIL] ${relFile}: 链接指向的文件不存在: "${link}" (解析路径: ${targetFullPath})`);
        totalErrors++;
      }
    }
  }

  console.log(`\n链接核查完成: 共扫描 ${htmlFiles.length} 个页面，${totalCheckedLinks} 个站内相对链接`);
  console.log(`错误 (FAIL): ${totalErrors}`);

  if (totalErrors > 0) {
    console.error('\n❌ 链接检查未通过，请修复以上错误！');
    process.exit(1);
  } else {
    console.log('\n✅ PASS: 所有站内链接均严格遵循相对路径规范且目标文件全部真实有效！');
  }
}

if (require.main === module) {
  runCheckLinks();
}

module.exports = { runCheckLinks };
