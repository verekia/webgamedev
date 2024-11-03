/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://www.webgamedev.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  generateIndexSitemap: false,
  exclude: ['*/_meta'],
}

export default config
