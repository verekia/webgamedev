import A from 'components/A'

const url = 'https://hathora.dev/?utm_source=webgamedev&utm_content=homepage'

const HathoraSponsor = () => (
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
          width: 170px;
        }
        .hathora-white {
          display: none;
        }
        .hathora-black {
          display: inline-block;
        }
        .dark .hathora-white {
          display: inline-block;
        }
        .dark .hathora-black {
          display: none;
        }
      `}
    </style>
    <div className="img-block">
      <a href={url} target="_blank" rel="noopener">
        <img alt="Hathora logo" className="hathora-black" src="/partnerships/hathora-black.png" />
        <img alt="Hathora logo" className="hathora-white" src="/partnerships/hathora-white.png" />
      </a>
    </div>
    <div>
      <div>
        Sponsored by{' '}
        <A href={url} rel="noopener">
          <b>Hathora</b>
        </A>
        , a serverless cloud hosting platform for multiplayer games. Seamlessly build, launch, and
        scale your game servers globally.{' '}
        <A href={url} rel="noopener">
          <b>Learn more</b>
        </A>
        .
      </div>
    </div>
  </div>
)

export default HathoraSponsor
