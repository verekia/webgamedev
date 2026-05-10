import A from './A'
import { CGIcon } from './CGSponsor'
import { PokiIcon } from './PokiSponsor'
import { ViverseIcon } from './ViverseSponsor'
import { WebGamerIcon } from './WebGamer'

export const GameRelease = ({ title, url, description, developer, developerUrl, EngineIcon }) => (
  <span>
    {url.startsWith('https://poki.com') ? (
      <a href="https://poki.com/?utm_source=webgamedev&utm_content=newsletter" target="_blank" rel="noopener">
        <PokiIcon className="mr-2 inline-block size-5" />
      </a>
    ) : url.startsWith('https://www.crazygames.com') ? (
      <a href="https://www.crazygames.com/?utm_source=webgamedev&utm_content=newsletter" target="_blank" rel="noopener">
        <CGIcon className="mr-2 inline-block size-5" />
      </a>
    ) : url.startsWith('https://webgamer.io') ? (
      <WebGamerIcon className="mr-2 inline-block size-5" />
    ) : url.startsWith('https://worlds.viverse.com') ? (
      <ViverseIcon className="mr-2 inline-block size-5 scale-110" />
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
      className="ml-1.5 font-bold"
    >
      {title}
    </A>{' '}
    {developer && (
      <>
        by{' '}
        {developerUrl ? (
          <A href={`${developerUrl}?utm_source=webgamedev&utm_content=newsletter`} target="_blank" rel="noopener">
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
