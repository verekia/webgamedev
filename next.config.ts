import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = withNextra({
  assetPrefix: process.env.NEXT_PUBLIC_CDN ?? '',
  output: 'export',
  images: { unoptimized: true },
})

export default config
