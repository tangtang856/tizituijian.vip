/**
 * 全站构建总脚本
 */

const { generateHomePage } = require('./build-home');
const { generateAllRecommend } = require('./build-recommend');
const { generateRankings } = require('./build-ranking');
const { generateAirportsAndReviews } = require('./build-airports-reviews');
const { generateComparePage } = require('./build-compare');
const { generateGuides } = require('./build-guides');
const { generateBlogArticles } = require('./build-blog');
const { generateGlossaryPages } = require('./build-glossary');
const { generatePages } = require('./build-pages');
const { generateSeoFiles } = require('./build-seo');

console.log('=== 开始构建 梯子推荐网 (tizituijian.vip) 静态页面 ===\n');

generateHomePage();
generateAllRecommend();
generateRankings();
generateAirportsAndReviews();
generateComparePage();
generateGuides();
generateBlogArticles();
generateGlossaryPages();
generatePages();
generateSeoFiles();

console.log('\n=== 全站静态构建完成！100% 相对路径与纯 HTML/CSS 秒开架构 ===');

// 同步生成 dist 目录，满足 Cloudflare Pages 默认配置需求
const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
  const files = fs.readdirSync(source);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'scripts' || file === 'src') continue;
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.statSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  }
}

copyFolderRecursiveSync(ROOT_DIR, DIST_DIR);
console.log('✓ 已同步输出部署目录至 dist/ (适用于 Cloudflare Pages / Vercel)');
