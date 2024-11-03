import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = withNextra({
  assetPrefix: process.env.NEXT_PUBLIC_CDN ?? '',
  redirects: async () => [
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

export default config
