import Link from 'next/link'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

import Footer from 'components/Footer'

export const tagline = 'Learn how to make games in JavaScript'

const description =
  'A guide, collection of resources, and newsletter about building games in JavaScript: learn how to create next-gen HTML5 games with WebGL, Three.js, React, and more!'

const config: DocsThemeConfig = {
  project: { link: 'https://github.com/verekia/webgamedev' },
  navbar: {
    // extraContent: (
    //   <a
    //     href="https://github.com/sponsors/verekia"
    //     target="_blank"
    //     rel="noopener"
    //     className="support-btn"
    //   >
    //     <svg
    //       aria-hidden="true"
    //       height="18"
    //       viewBox="0 0 16 16"
    //       version="1.1"
    //       width="18"
    //       data-view-component="true"
    //       className="support-img"
    //     >
    //       <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>
    //     </svg>
    //     <span className="support">
    //       Support <span className="this-project">this project</span>
    //     </span>
    //   </a>
    // ),
  },
  toc: {
    extraContent: () => (
      <p style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '1.5rem', position: 'relative', top: '4px' }}>💌</span> Check out
        the{' '}
        <Link
          href="/newsletter"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
        >
          <b>newsletter</b>
        </Link>
        !
      </p>
    ),
  },
  chat: { link: 'https://webgamedev.com/discord' },
  sidebar: { defaultMenuCollapseLevel: 1 },
  useNextSeoProps: () => {
    const { route, asPath } = useRouter()
    const { frontMatter } = useConfig()

    return {
      ...(route === '/' && { title: '', description }),
      defaultTitle: `Web Game Dev | ${tagline}`,
      titleTemplate: '%s | Web Game Dev',
      ...(frontMatter.description && { description: frontMatter.description }),
      openGraph: { url: `https://www.webgamedev.com${asPath}`, siteName: 'Web Game Dev' },
      twitter: {
        handle: '@verekia',
        site: '@webgamedevs',
        // cardType: 'summary_large_image',
      },
    }
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  editLink: {
    component: () => null,
  },
  feedback: {
    content: null,
  },
  // Doesn't seem to work, setting them in _meta.json files
  navigation: { next: true, prev: true },
  search: { placeholder: 'Search' },
  darkMode: true,
  // This breaks the website
  // nextThemes: {
  //   defaultTheme: 'light',
  // },
  footer: { component: Footer },
  // footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img
        alt="Web Game Dev logo"
        src="/icon.svg"
        className="logo"
        width="35"
        style={{
          display: 'inline-block',
          marginRight: '8px',
          borderRadius: 999,
          // boxShadow: '0 0 1px 1px #333',
        }}
      />
      <div className="title-container">
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontWeight: 'bold' }} className="title">
            Web Game Dev
          </h2>
        </div>
        {/* <div style={{ fontSize: 13, lineHeight: '13px', position: 'relative', top: -2 }}>
          🚧 Early preview
        </div> */}
      </div>
      <span className="tagline" style={{ opacity: 0.65 }}>
        {tagline}
      </span>
    </>
  ),
  gitTimestamp: null,
  head: null,
  // head: () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const { route, asPath } = useRouter()
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const { frontMatter } = useConfig()
  //   console.log(frontMatter)

  //   return (
  //     <>
  //       {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
  //       {route === '/' && <meta name="description" content={description} />}
  //       {route === '/' && <meta property="og:description" content={description} />}
  //       {frontMatter.description && <meta name="description" content={frontMatter.description} />}
  //       {frontMatter.description && (
  //         <meta property="og:description" content={frontMatter.description} />
  //       )}
  //       <meta property="og:url" content={`https://www.webgamedev.com${asPath}`} />
  //     </>
  //   )
  // },
}

export default config
