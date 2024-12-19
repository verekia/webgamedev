import A from 'components/A'

const pokiMainUrl = 'https://poki.com/?utm_source=webgamedev&utm_content=footer'
const pokiLearnMoreUrl = 'https://developers.poki.com/?utm_source=webgamedev&utm_content=footer'

const Footer = () => (
  <footer className="_bg-gray-100 dark:_bg-neutral-900 _py-12 _text-gray-600">
    <style>
      {`
          footer {
            color: rgb(55, 65, 81);
          }
          .dark footer {
            color: rgb(226, 232, 240);
          }
          .footer-promo-block {
            text-align: center;  
            margin-bottom: 24px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 24px;
          }
          @media (max-width: 600px) {
            .footer-promo-block {
              flex-direction: column;
            }
          }

            .footer-promo-block img {
              width: 170px;
              margin-bottom: 10px;
            }
            .poki-white {
              display: none;
            }
            .poki-black {
              display: inline-block;
            }
            .dark .poki-white {
              display: inline-block;
            }
            .dark .poki-black {
              display: none;
            }
          `}
    </style>
    <div className="footer-promo-block">
      <div>
        <div>
          <a href={pokiMainUrl} target="_blank" rel="noopener">
            <img
              alt="Poki logo"
              className="poki-black"
              src="/partnerships/poki-black.webp"
              style={{ width: 150, marginTop: -24, marginBottom: -8 }}
            />
            <img
              alt="Poki logo"
              className="poki-white"
              src="/partnerships/poki-white.webp"
              style={{ width: 150, marginTop: -24, marginBottom: -8 }}
            />
          </a>
        </div>
        <div>
          <div>
            Sponsored by{' '}
            <A href={pokiLearnMoreUrl} rel="noopener">
              <b>Poki</b>
            </A>
          </div>
          <div>The market leader on Web</div>
        </div>
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
