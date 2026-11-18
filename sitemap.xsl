<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title>XML 站点地图 (Sitemap) - 梯子推荐网 (tizituijian.vip)</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
            margin: 0;
            padding: 30px 20px;
            line-height: 1.6;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .header {
            border-bottom: 2px solid #eff6ff;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          h1 {
            font-size: 1.75rem;
            font-weight: 800;
            color: #1e293b;
            margin: 0 0 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .desc {
            font-size: 0.95rem;
            color: #64748b;
            margin: 0 0 12px 0;
          }
          .stats-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background-color: #eff6ff;
            color: #2563eb;
            border: 1px solid #bfdbfe;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.88rem;
            margin-top: 16px;
          }
          th {
            background-color: #f1f5f9;
            color: #334155;
            text-align: left;
            padding: 12px 14px;
            font-weight: 700;
            border-bottom: 1px solid #cbd5e1;
          }
          td {
            padding: 10px 14px;
            border-bottom: 1px solid #f1f5f9;
            color: #475569;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }
          .priority-pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 700;
            background: #f1f5f9;
            color: #475569;
          }
          .priority-high {
            background: #dcfce7;
            color: #15803d;
          }
          .footer {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 0.8rem;
            color: #94a3b8;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📑 梯子推荐网 (tizituijian.vip) XML 站点地图</h1>
            <p class="desc">
              本 XML Sitemap 由系统自动生成，专为 Bing、Google 等搜索引擎抓取与索引编制。已配置 XSLT 样式以提供直观的人类可读视图。
            </p>
            <div class="stats-badge">
              <span>✓ 收录状态：有效正常</span> · 
              <span>总链接数：<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> 个页面</span>
            </div>
          </div>

          <!-- URL 列表表格 -->
          <xsl:if test="sitemap:urlset">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">#</th>
                  <th>网页链接 (URL)</th>
                  <th style="width: 90px; text-align: center;">优先级</th>
                  <th style="width: 110px; text-align: center;">更新频率</th>
                  <th style="width: 120px; text-align: center;">最后修改</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="text-align: center;">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.9">
                          <span class="priority-pill priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-pill"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td style="text-align: center; color: #64748b;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td style="text-align: center; color: #64748b;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <!-- Sitemap Index (如果存在) -->
          <xsl:if test="sitemap:sitemapindex">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">#</th>
                  <th>Sitemap 索引地址</th>
                  <th style="width: 140px; text-align: center;">最后修改</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="sitemapURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="text-align: center; color: #64748b;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <div class="footer">
            <div>© 2026 梯子推荐网 (tizituijian.vip) · 保留所有权利</div>
            <div>遵循 Sitemaps XML 0.9 规范协议</div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
