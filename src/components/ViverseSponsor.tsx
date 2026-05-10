import A from 'components/A'
import Image from 'next/image'

import ViverseBlackSrc from '../../public/partnerships/viverse-black.webp'
import ViverseWhiteSrc from '../../public/partnerships/viverse-white.webp'
import ViverseIconSrc from '../../public/partnerships/viverse-icon.png'

export const viverseMainUrl = content => `https://worlds.viverse.com/?utm_source=webgamedev&utm_content=${content}`
export const viverseDevelopersUrl = content =>
  `https://create.viverse.com/creator-program?utm_source=webgamedev&utm_content=${content}`

const ViverseSponsor = () => (
  <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-100 px-5 py-4 dark:bg-neutral-900 sm:flex-row">
    <div className="flex w-[140px] shrink-0 items-center justify-center">
      <a href={viverseMainUrl('homepage')} target="_blank" rel="noopener">
        <ViverseLogo className="h-[50px] scale-[1.2] object-contain" />
      </a>
    </div>
    <div>
      Sponsored by{' '}
      <A href={viverseMainUrl('homepage')} rel="noopener">
        <b>VIVERSE</b>
      </A>
      . We invest in the next generation of creators that are pushing the boundaries of what's possible in the browser.{' '}
      <A href={viverseDevelopersUrl('homepage')} rel="noopener">
        <b>Learn more</b>
      </A>
      .
    </div>
  </div>
)

export const ViverseStandaloneSection = ({ content }: { content: string }) => (
  <div className="mt-5 flex flex-col gap-5 rounded-lg bg-gray-100 px-5 py-4 dark:bg-neutral-900">
    <div className="flex flex-col-reverse items-center gap-5 lg:flex-row">
      <div className="mx-auto flex h-full max-h-[110px] w-full max-w-[130px] items-center justify-center">
        <a href={viverseMainUrl(content)} target="_blank" rel="noopener">
          <ViverseLogo className="w-full" />
        </a>
      </div>
      <p className="leading-7">
        Sponsored by{' '}
        <A href={viverseMainUrl(content)}>
          <b>VIVERSE</b>
        </A>
        . VIVERSE is an open-web platform that empowers developers to build, publish, and scale 3D and XR experiences
        that run instantly in the browser. With free hosting, monetization tools, and multi-engine support, VIVERSE
        bridges technical freedom with creative control. And through our{' '}
        <A href={viverseDevelopersUrl(content)}>
          <b>Creator Program</b>
        </A>
        , we’re investing in the next generation of creators pushing the boundaries of what’s possible in the browser.
      </p>
    </div>
  </div>
)

export const ViverseLogo = props => (
  <>
    <Image
      alt="VIVERSE"
      title="VIVERSE"
      src={ViverseBlackSrc}
      {...props}
      className={`${props.className} inline-block dark:hidden`}
    />
    <Image
      alt="VIVERSE"
      title="VIVERSE"
      src={ViverseWhiteSrc}
      {...props}
      className={`${props.className} hidden dark:inline-block`}
    />
  </>
)

export const ViverseIcon = props => <Image alt="VIVERSE" title="VIVERSE" src={ViverseIconSrc} {...props} />

export default ViverseSponsor
