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

export const PokiLogo = props => (
  <svg viewBox="0 0 579 274" {...props}>
    <defs></defs>
    <g id="Logo-Crop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="logo_main">
        <path
          d="M541.13,85.77 C561.94,85.77 578.88,68.42 578.88,47.1 C578.88,26.63 561.59,9.35 541.13,9.35 C520.67,9.35 503.38,26.64 503.38,47.1 C503.38,68.42 520.31,85.77 541.13,85.77 L541.13,85.77 Z"
          fill="#112C4F"
          className="dark:fill-[white] fill-[#002B50]"
        />
        <path
          d="M504.06,99.34 L504.06,209.79 L470.06,135.95 C485.43,116.72 491.69,89.59 492.39,70.08 L492.39,54.08 L432.16,54.08 L432.16,69.48 C431.32,89.12 424.94,98.28 407.38,103.99 L407.38,-0.01 L346.11,0.05 L346.11,44.36 C323.78,21.58 292.97,9.58 256.55,9.58 C216.68,9.58 183.65,23.39 161.05,49.49 C154.196106,57.4649955 148.438498,66.3200074 143.93,75.82 C129.12,60.61 108.51,54.12 84.04,54.12 L0.04,54.12 L0.04,273.16 L56.04,273.16 L56.04,220.88 L84.04,220.88 C108.43,220.88 129.04,212.74 143.92,197.34 C148.531041,207.154811 154.492113,216.276497 161.63,224.44 C184.25,250.07 217.07,263.58 256.55,263.58 C295.19,263.58 327.55,250.08 350.16,224.52 C351.73,222.75 353.22,220.9 354.67,219.04 L407.38,219.04 L407.38,164.69 L415.46,162.83 L441.46,219.07 L578.2,219.07 L578.2,99.34 L504.06,99.34 L504.06,99.34 Z M86.06,163.15 L55.98,163.15 L55.98,110.43 L85.23,110.43 C92.81,110.43 105.46,115.54 105.46,135.75 C105.51,148.76 100.13,163.15 86.1,163.15 L86.06,163.15 Z M255.98,223.29 C208.75,223.29 170.33,183.92 170.33,135.54 C170.33,89.12 209.54,49.89 255.98,49.89 C302.42,49.89 341.63,89.12 341.63,135.54 C341.63,183.92 303.21,223.29 255.98,223.29 L255.98,223.29 Z"
          className="dark:fill-[white] fill-[#002B50]"
        />
        <path
          d="M255.97,141.88 C218.09,141.88 198.97,148.53 191.04,150.57 C197.66,181.06 224.25,203.93 255.97,203.93 C287.69,203.93 314.29,181.06 320.9,150.57 C313.01,148.53 293.85,141.88 255.97,141.88 L255.97,141.88 Z"
          fill="#009CFF"
        />
      </g>
    </g>
  </svg>
)

export default PokiSponsor
