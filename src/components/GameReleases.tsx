import A from './A'
import { CGIcon } from './CGSponsor'
import { PokiIcon } from './PokiSponsor'
import { ViverseIcon } from './ViverseSponsor'
import { WebGamerIcon } from './WebGamer'

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
    ) : url.startsWith('https://worlds.viverse.com') ? (
      <ViverseIcon className="size-5 inline-block mr-2 scale-110" />
    ) : null}
    <EngineIcon />
    <A
      href={
        url.startsWith('https://poki.com')
          ? `${url}?utm_source=webgamedev&utm_content=newsletter`
          : url.startsWith('https://www.crazygames.com')
          ? `${url}?utm_source=webgamedev&utm_content=newsletter`
          : url.startsWith('https://worlds.viverse.com')
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
