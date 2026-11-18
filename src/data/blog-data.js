/**
 * 汇总 100 篇高质量博客文章数据
 */

const part1 = require('./blog-data-1');
const part2 = require('./blog-data-2');
const part3 = require('./blog-data-3');
const part4 = require('./blog-data-4');
const part5 = require('./blog-data-5');

const allBlogArticles = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5
];

module.exports = allBlogArticles;
