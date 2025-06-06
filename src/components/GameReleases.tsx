import A from './A'
import { CGIcon } from './CGSponsor'
import { PokiLogo, PokiIcon } from './PokiSponsor'
import { WebGamerIcon, WebGamerText } from './WebGamer'

const GameReleases = ({ portal }) => (
  <div className="mt-5 -mb-4">
    Games released on
    {portal === 'poki' && (
      <a
        href="https://poki.com/?utm_source=webgamedev&utm_content=newsletter"
        target="_blank"
        rel="noopener"
        className="ml-2"
      >
        <PokiLogo className="inline-block w-[70px]" />
      </a>
    )}
    {portal === 'webgamer' && (
      <a href="https://webgamer.io" target="_blank" rel="noopener" className="ml-2">
        <div className="inline-flex gap-2 align-middle text-nowrap flex-nowrap">
          <WebGamerIcon className="w-[28px] aspect-square" />
          <WebGamerText className="w-[170px]" />
        </div>
      </a>
    )}
  </div>
)

export const GameRelease = ({ title, url, description, developer, developerUrl, EngineIcon }) => (
  <span>
    {url.startsWith('https://poki.com') ? (
      <a
        href="https://poki.com/?utm_source=webgamedev&utm_content=newsletter"
        target="_blank"
        rel="noopener"
      >
        <PokiIcon className="size-5 inline-block mr-2" />
      </a>
    ) : url.startsWith('https://www.crazygames.com') ? (
      <a
        href="https://www.crazygames.com/?utm_source=webgamedev&utm_content=newsletter"
        target="_blank"
        rel="noopener"
      >
        <CGIcon className="size-5 inline-block mr-2" />
      </a>
    ) : url.startsWith('https://webgamer.io') ? (
      <WebGamerIcon className="size-5 inline-block mr-2" />
    ) : null}
    <EngineIcon />
    <A
      href={
        url.startsWith('https://poki.com')
          ? `${url}?utm_source=webgamedev&utm_content=newsletter`
          : url.startsWith('https://www.crazygames.com')
          ? `${url}?utm_source=webgamedev&utm_content=newsletter`
          : url
      }
      target="_blank"
      rel="noopener"
      className="font-bold ml-1.5"
    >
      {title}
    </A>{' '}
    {developer && (
      <>
        by{' '}
        {developerUrl ? (
          <A
            href={`${developerUrl}?utm_source=webgamedev&utm_content=newsletter`}
            target="_blank"
            rel="noopener"
          >
            {developer}
          </A>
        ) : (
          developer
        )}{' '}
      </>
    )}
    – {description}
  </span>
)

export default GameReleases
