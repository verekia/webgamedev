import A from 'components/A'

export const pokiMainUrl = content =>
  `https://poki.com/?utm_source=webgamedev&utm_content=${content}`
export const pokiDevelopersUrl = content =>
  `https://developers.poki.com/?utm_source=webgamedev&utm_content=${content}`

const PokiSponsor = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-100 dark:bg-neutral-900 px-5 py-4 rounded-lg">
    <div className="w-[140px] shrink-0 flex items-center justify-center">
      <a href={pokiMainUrl('homepage')} target="_blank">
        <PokiLogo className="h-[50px] scale-[0.85]" />
      </a>
    </div>
    <div>
      Sponsored by{' '}
      <A href={pokiMainUrl('homepage')}>
        <b>Poki</b>
      </A>
      . Reaching 90 million monthly users, Poki is on a mission to create the ultimate playground
      for both players and developers on Web!{' '}
      <A href={pokiDevelopersUrl('homepage')}>
        <b>Learn more</b>
      </A>
      .
    </div>
  </div>
)

export const PokiStandaloneSection = ({ content }: { content: string }) => (
  <div className="flex flex-col gap-5 mt-5 bg-gray-100 dark:bg-neutral-900 px-5 py-4 rounded-lg">
    <div className="flex flex-col-reverse gap-5 lg:flex-row items-center">
      <div className="mx-auto w-full max-w-[130px] h-full max-h-[110px] flex items-center justify-center">
        <a href={pokiMainUrl(content)} target="_blank" rel="noopener">
          <PokiLogo className="w-full scale-[0.80]" />
        </a>
      </div>
      <p className="leading-7">
        Sponsored by{' '}
        <A href={pokiMainUrl(content)}>
          <b>Poki</b>
        </A>
        . Poki is on a mission to create the ultimate online playground – where players and
        developers come together to play and create! Together with a growing 400+ game developer
        community and 90 million players each month, we're creating a new standard for web games.
        Interested in working together?{' '}
        <A href={pokiDevelopersUrl(content)}>
          <b>Share your game with us</b>
        </A>
        !
      </p>
    </div>
  </div>
)

export const PokiLogo = props => (
  <svg viewBox="0 0 579 274" {...props}>
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

export const PokiIcon = props => (
  <svg baseProfile="tiny" viewBox="0.00 0.00 420.00 420.00" {...props}>
    <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
      <path
        stroke="#8095a8"
        vectorEffect="non-scaling-stroke"
        d="
  M 334.91 139.80
  C 303.57 85.79 240.08 55.49 177.67 70.54
  C 133.18 81.27 95.85 112.53 77.74 154.25
  C 43.89 232.22 89.26 324.08 169.90 347.45
  C 205.14 357.66 242.55 354.37 275.26 337.35
  C 346.36 300.34 375.79 210.25 334.91 139.80"
      />
      <path
        stroke="#80ceff"
        vectorEffect="non-scaling-stroke"
        d="
  M 193.00 320.44
  C 250.35 328.89 304.49 290.76 317.21 234.19
  Q 317.33 233.67 316.82 233.53
  Q 286.82 224.83 258.26 221.85
  Q 221.18 217.98 181.95 220.09
  Q 137.94 222.45 101.25 233.57
  Q 100.69 233.74 100.83 234.30
  Q 109.26 268.94 133.89 291.67
  Q 159.73 315.54 193.00 320.44"
      />
    </g>
    <path
      fill="#002b50"
      d="
  M 420.00 208.87
  L 420.00 213.01
  Q 419.81 214.58 419.72 218.49
  C 418.43 271.59 398.66 324.72 361.00 362.45
  Q 330.79 392.70 289.50 407.17
  Q 262.60 416.60 232.74 418.97
  Q 190.85 422.31 152.25 413.31
  C 110.59 403.60 73.43 381.83 46.77 349.09
  Q 22.19 318.90 10.57 280.47
  Q 0.41 246.89 0.00 211.62
  L 0.00 207.21
  Q 0.25 197.82 0.99 188.51
  C 3.98 150.90 16.53 112.62 38.52 81.83
  Q 77.50 27.24 143.39 8.88
  C 172.46 0.78 203.71 -1.38 233.82 1.09
  C 253.86 2.74 274.13 6.85 292.91 13.97
  Q 359.68 39.27 393.74 102.00
  C 408.15 128.54 416.46 158.92 418.92 189.01
  Q 419.73 198.90 420.00 208.87
  Z
  M 334.91 139.80
  C 303.57 85.79 240.08 55.49 177.67 70.54
  C 133.18 81.27 95.85 112.53 77.74 154.25
  C 43.89 232.22 89.26 324.08 169.90 347.45
  C 205.14 357.66 242.55 354.37 275.26 337.35
  C 346.36 300.34 375.79 210.25 334.91 139.80
  Z"
    />
    <path
      fill="#ffffff"
      d="
  M 177.67 70.54
  C 240.08 55.49 303.57 85.79 334.91 139.80
  C 375.79 210.25 346.36 300.34 275.26 337.35
  C 242.55 354.37 205.14 357.66 169.90 347.45
  C 89.26 324.08 43.89 232.22 77.74 154.25
  C 95.85 112.53 133.18 81.27 177.67 70.54
  Z
  M 193.00 320.44
  C 250.35 328.89 304.49 290.76 317.21 234.19
  Q 317.33 233.67 316.82 233.53
  Q 286.82 224.83 258.26 221.85
  Q 221.18 217.98 181.95 220.09
  Q 137.94 222.45 101.25 233.57
  Q 100.69 233.74 100.83 234.30
  Q 109.26 268.94 133.89 291.67
  Q 159.73 315.54 193.00 320.44
  Z"
    />
    <path
      fill="#009cff"
      d="
  M 317.21 234.19
  C 304.49 290.76 250.35 328.89 193.00 320.44
  Q 159.73 315.54 133.89 291.67
  Q 109.26 268.94 100.83 234.30
  Q 100.69 233.74 101.25 233.57
  Q 137.94 222.45 181.95 220.09
  Q 221.18 217.98 258.26 221.85
  Q 286.82 224.83 316.82 233.53
  Q 317.33 233.67 317.21 234.19
  Z"
    />
  </svg>
)

export default PokiSponsor
