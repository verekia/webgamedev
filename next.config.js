const { withPlausibleProxy } = require('next-plausible')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = withNextra({
  redirects: () => [
    {
      source: '/discord',
      destination: 'https://discord.gg/5Z28wjTeyh',
      permanent: false,
    },
  ],
})

module.exports = withPlausibleProxy({ scriptName: 'pl' })(config)
