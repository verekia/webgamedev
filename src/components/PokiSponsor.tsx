import A from 'components/A'

const mainUrl = 'https://poki.com/?utm_source=webgamedev&utm_content=homepage'
const learnMoreUrl = 'https://developers.poki.com/?utm_source=webgamedev&utm_content=homepage'

const PokiSponsor = () => (
  <div className="homepage-promo-block">
    <style>
      {`
      .homepage-promo-block {
        margin: 40px 0 12px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 510px) {
        .homepage-promo-block {
          flex-direction: column;
        }
        .homepage-promo-block .img-block {
          margin-right: 0;
          margin-bottom: 16px;
        }
      }
      .homepage-promo-block .img-block {
        margin-right: 16px;
        flex-shrink: 0;
      }
        .homepage-promo-block img {
          width: 162px;
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
    <div className="img-block">
      <a href={mainUrl} target="_blank" rel="noopener">
        <img alt="Poki logo" className="poki-black" src="/partnerships/poki-black.webp" />
        <img alt="Poki logo" className="poki-white" src="/partnerships/poki-white.webp" />
      </a>
    </div>
    <div>
      <div>
        Sponsored by{' '}
        <A href={mainUrl} rel="noopener">
          <b>Poki</b>
        </A>
        . Reaching 50 million monthly users, Poki is on a mission to create the ultimate playground
        for both players and developers on Web!{' '}
        <A href={learnMoreUrl} rel="noopener">
          <b>Learn more</b>
        </A>
        .
      </div>
    </div>
  </div>
)

export default PokiSponsor
