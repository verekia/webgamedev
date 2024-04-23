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
    {
      source: '/webxr-vr-ar',
      destination: '/engines-libraries/webxr-vr-ar',
      permanent: true,
    },
    {
      source: '/engines-libraries/hybrid-approaches',
      destination: '/engines-libraries/web-game-engines-libraries',
      permanent: true,
    },
  ],
})

module.exports = withPlausibleProxy({ scriptName: 'pl', customDomain: 'https://pl.v1v2.io' })(
  config,
)
