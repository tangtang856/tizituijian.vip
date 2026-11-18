/**
 * 梯子推荐网 (tizituijian.vip) - IndexNow 自动化提交工具
 * 支持单 URL 提交、批量新增/更新提交、重试与详细 HTTP 响应日志
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'tizituijian.vip';
const KEY = '8f4b23c91d8e40f7b9c6543210abcdef';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const CACHE_FILE = path.join(__dirname, '.indexnow-cache.json');

// 读取或初始化已提交历史记录，避免无差别频繁提交全站 URL
function getSubmittedCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function saveSubmittedCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

// 执行 HTTP POST 请求，支持自动重试
function postToIndexNow(urlList, retryCount = 2) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(`\n[IndexNow] 正在向 api.indexnow.org 提交 ${urlList.length} 个 URL...`);

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        console.log(`[IndexNow] HTTP 状态码: ${res.statusCode} (${res.statusMessage})`);
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`[IndexNow] ✓ 提交成功！请求已被 Bing / IndexNow 引擎接受。`);
          console.log(`[IndexNow] 提示：提交成功仅代表搜索引擎已收到抓取通知，并不代表网页已瞬时建入索引。实际收录需等待 Bing 爬虫调度与质量审核。`);
          resolve({ success: true, statusCode: res.statusCode });
        } else {
          console.warn(`[IndexNow] 响应内容: ${data}`);
          if (retryCount > 0) {
            console.log(`[IndexNow] 尝试重新提交... 剩余重试次数: ${retryCount}`);
            setTimeout(() => {
              postToIndexNow(urlList, retryCount - 1).then(resolve).catch(reject);
            }, 2000);
          } else {
            reject(new Error(`IndexNow 提交失败，状态码: ${res.statusCode}`));
          }
        }
      });
    });

    req.on('error', (e) => {
      console.error(`[IndexNow] 请求发生网络错误: ${e.message}`);
      if (retryCount > 0) {
        console.log(`[IndexNow] 2秒后重试...`);
        setTimeout(() => {
          postToIndexNow(urlList, retryCount - 1).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(e);
      }
    });

    req.write(postData);
    req.end();
  });
}

async function runIndexNow() {
  const args = process.argv.slice(2);
  let targetUrls = [];

  // 1. 如果命令行指定了单 URL：node scripts/indexnow.js https://tizituijian.vip/recommend/budget.html
  if (args.length > 0 && args[0].startsWith('http')) {
    targetUrls = [args[0]];
    console.log(`[IndexNow] 模式：单 URL 专属提交 -> ${args[0]}`);
  } else {
    // 2. 检查 sitemap.xml 中新增或更新的 URL
    const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      console.error('[IndexNow] 错误：未找到 sitemap.xml，请先运行构建生成站点！');
      process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const regex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
    let match;
    const allUrls = [];
    while ((match = regex.exec(sitemapContent)) !== null) {
      allUrls.push(match[1]);
    }

    const cache = getSubmittedCache();
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    // 筛选未提交过或距离上次提交超过 7 天的 URL，避免无差别滥用
    targetUrls = allUrls.filter(u => {
      if (!cache[u] || (now - cache[u]) > 7 * oneDay) {
        return true;
      }
      return false;
    });

    // 如果全都在缓存期内且用户传入了 --force，才强制提交核心页面
    if (targetUrls.length === 0 && args.includes('--force')) {
      console.log('[IndexNow] 检测到 --force 参数，强制提取核心落地页提交...');
      targetUrls = allUrls.slice(0, 10);
    } else if (targetUrls.length === 0) {
      console.log('[IndexNow] 提示：全站近期已全部提交过，无新增或更新页面。无需重复提交。如需强制提交可追加 --force 参数。');
      return;
    }
  }

  try {
    await postToIndexNow(targetUrls);
    const cache = getSubmittedCache();
    const now = Date.now();
    targetUrls.forEach(u => { cache[u] = now; });
    saveSubmittedCache(cache);
    console.log(`[IndexNow] 已更新本地提交记录缓存文件 (.indexnow-cache.json)`);
  } catch (err) {
    console.error(`[IndexNow] 执行异常: ${err.message}`);
  }
}

if (require.main === module) {
  runIndexNow();
}

module.exports = { postToIndexNow, runIndexNow };
