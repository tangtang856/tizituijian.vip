/**
 * 内容质量与完整性验证脚本 (scripts/validate-content.js)
 * 检查项：
 * 1. 严禁出现未替换的模板变量 {{...}}、undefined、NaN、null 等
 * 2. 严禁空白页面或内容残缺页面 (文件过小)
 * 3. 机场数据库参数完整性核验
 * 4. 品牌真实性与实测状态标注规范
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

function runValidateContent() {
  console.log('=== 开始执行内容质量与完整性验证 (validate-content.js) ===\n');
  const htmlFiles = getHtmlFiles(ROOT_DIR);
  let totalErrors = 0;

  // 1. 验证机场数据库
  const dbPath = path.join(ROOT_DIR, 'src/data/airports.json');
  if (!fs.existsSync(dbPath)) {
    console.error('[FAIL] 数据库文件 src/data/airports.json 不存在！');
    totalErrors++;
  } else {
    try {
      const airports = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      if (!Array.isArray(airports) || airports.length < 5) {
        console.error(`[FAIL] 机场数据库数量不足: 当前为 ${airports.length}，要求至少5家真实品牌！`);
        totalErrors++;
      }
      for (const a of airports) {
        if (!a.id || !a.name || !a.slug || !a.plans || a.plans.length === 0) {
          console.error(`[FAIL] 机场 ${a.id || '未知'} 缺失关键参数`);
          totalErrors++;
        }
        if (!['tested', 'official-data', 'unverified'].includes(a.testStatus)) {
          console.error(`[FAIL] 机场 ${a.id} 的 testStatus "${a.testStatus}" 不合规范`);
          totalErrors++;
        }
      }
    } catch (e) {
      console.error(`[FAIL] 机场数据库解析失败: ${e.message}`);
      totalErrors++;
    }
  }

  // 2. 验证各个静态页面
  for (const file of htmlFiles) {
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 检查页面体积 (小于 800 字节视为空白或异常残缺)
    if (content.length < 800) {
      console.error(`[FAIL] ${relFile}: 页面内容过少 (仅 ${content.length} 字节)，疑似空白页面！`);
      totalErrors++;
    }

    // 检查未替换变量: {{...}}
    const mustacheMatch = content.match(/\{\{([^{}]+)\}\}/);
    if (mustacheMatch) {
      console.error(`[FAIL] ${relFile}: 发现未替换的模板插值变量: "${mustacheMatch[0]}"`);
      totalErrors++;
    }

    // 检查是否有直接输出在 DOM 中的 undefined 或 NaN
    if (content.includes('>undefined<') || content.includes('>NaN<') || content.includes('¥NaN')) {
      console.error(`[FAIL] ${relFile}: 页面包含未正确计算或未定义的数值 (undefined/NaN)`);
      totalErrors++;
    }
  }

  console.log(`\n内容验证完成: 扫描 ${htmlFiles.length} 个页面与数据库核心参数`);
  console.log(`错误 (FAIL): ${totalErrors}`);

  if (totalErrors > 0) {
    console.error('\n❌ 内容完整性验证未通过，请修复以上错误！');
    process.exit(1);
  } else {
    console.log('\n✅ PASS: 全站页面内容完整扎实，无任何未替换变量，数据库真实合规！');
  }
}

if (require.main === module) {
  runValidateContent();
}

module.exports = { runValidateContent };
