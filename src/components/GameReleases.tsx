import { PokiLogo } from './PokiSponsor'
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

export default GameReleases
