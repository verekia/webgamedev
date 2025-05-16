import A from 'components/A'
import { PokiLogo, pokiDevelopersUrl, pokiMainUrl } from './PokiSponsor'
import { CGLogo, cgDevelopersUrl, cgMainUrl } from './CGSponsor'

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-neutral-900 py-10 text-center">
    <div className="flex flex-col-reverse sm:flex-row-reverse gap-8 justify-around mb-8 items-center">
      <div className="flex flex-col items-center">
        <a href={cgMainUrl('footer')} target="_blank" rel="noopener">
          <CGLogo className="h-[56px]" />
        </a>
        <div className="mt-3">
          Sponsored by{' '}
          <A href={cgDevelopersUrl('footer')} rel="noopener">
            <b>CrazyGames</b>
          </A>
        </div>
        <div>The next generation of web games</div>
      </div>
      <div className="flex flex-col items-center">
        <a href={pokiMainUrl('footer')} target="_blank">
          <PokiLogo className="h-[56px] scale-[0.95]" />
        </a>
        <div className="mt-3">
          Sponsored by{' '}
          <A href={pokiDevelopersUrl('footer')} rel="noopener">
            <b>Poki</b>
          </A>
        </div>
        <div>The market leader on Web</div>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      Written by{' '}
      <A href="https://x.com/verekia" target="_blank" rel="noopener">
        🐦 Verekia
      </A>
      <br />
      <A href="https://bsky.app/profile/verekia.com" target="_blank" rel="noopener">
        🦋 Bluesky
      </A>{' '}
      •{' '}
      <A href="https://mastodon.gamedev.place/@verekia" target="_blank" rel="noopener">
        🐘 Mastodon
      </A>{' '}
      •{' '}
      <A href="https://github.com/verekia" target="_blank" rel="noopener">
        🐙 GitHub
      </A>
    </div>
  </footer>
)

export default Footer
