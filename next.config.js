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
    {
      source: '/graphics/particles',
      destination: '/graphics/vfx-particles',
      permanent: true,
    },
  ],
})

module.exports = withPlausibleProxy({ scriptName: 'pl', customDomain: 'https://pl.v1v2.io' })(
  config,
)
