import A from 'components/A'

// TODO: confirm the final Xsolla landing pages before launch
export const xsollaMainUrl = content =>
  `https://xsolla.com/for/web-games/?utm_source=webgamedev&utm_medium=sponsorship&utm_campaign=webgamedev-sponsorship-2026&utm_content=${content}`
export const xsollaNewsletterUrl = () =>
  `https://xsolla.com/for/web-games/?utm_source=webgamedev&utm_medium=newsletter&utm_campaign=webgamedev-sponsorship-2026&utm_content=issue-block`

const XsollaSponsor = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-100 dark:bg-neutral-900 px-5 py-4 rounded-lg">
    <div className="w-[140px] shrink-0 flex items-center justify-center">
      <a href={xsollaMainUrl('homepage-banner')} target="_blank" rel="noopener">
        <XsollaLogo className="w-full scale-[0.95]" />
      </a>
    </div>
    <div>
      Sponsored by{' '}
      <A href={xsollaMainUrl('homepage-banner')} rel="noopener">
        <b>Xsolla</b>
      </A>
      . Own your storefront and monetize your web game your way. Keep up to 95% with 1,000+ payment
      methods worldwide.{' '}
      <A href={xsollaMainUrl('homepage-banner')} rel="noopener">
        <b>Learn more</b>
      </A>
      .
    </div>
  </div>
)

export const XsollaStandaloneSection = ({
  variant,
}: {
  variant: 'sponsored-section-1' | 'sponsored-section-2'
}) => (
  <div className="flex flex-col gap-5 mt-5 bg-gray-100 dark:bg-neutral-900 px-5 py-4 rounded-lg">
    <div className="flex flex-col-reverse gap-5 lg:flex-row items-center">
      <div className="mx-auto w-full max-w-[130px] h-full max-h-[110px] flex items-center justify-center">
        <a href={xsollaMainUrl(variant)} target="_blank" rel="noopener">
          <XsollaLogo className="w-full scale-[0.9]" />
        </a>
      </div>
      <p className="leading-7">
        Sponsored by{' '}
        <A href={xsollaMainUrl(variant)}>
          <b>Xsolla</b>
        </A>
        .{' '}
        {variant === 'sponsored-section-1' ? (
          <>
            Xsolla is monetization infrastructure built for the way web games ship. Integrate Web
            Shop and payments in hours with a drop-in SDK and API, on any engine or stack. Login,
            subscriptions, anti-fraud, and global tax handling are included- Enable them as you
            grow. Trusted by studios and solo devs worldwide to power in-game purchases at scale.
          </>
        ) : (
          <>
            Xsolla gives web game developers a complete way to monetize outside the portals. Launch
            a branded Web Shop and sell in-game currency, items, and bundles on your own site.
            Accept 1,000+ payment methods in 200+ countries, with local pricing. Keep up to 95% of
            every sale. Transparent pricing, no portal revenue split.
          </>
        )}{' '}
        <A href={xsollaMainUrl(variant)}>
          <b>{variant === 'sponsored-section-1' ? 'Start building' : 'Explore Web Games'}</b>
        </A>
        .
      </p>
    </div>
  </div>
)

// Light mode: "Positive" logo (black). Dark mode: "Reverse" logo (brand cyan).
// The two brand files have slightly different icon geometry, so both paths are kept.
export const XsollaLogo = props => (
  <svg viewBox="0 0 430.5 91.21" {...props}>
    <title>Xsolla</title>
    <path
      className="fill-black dark:hidden"
      d="M78,25.4c-6.4-1.6-8.4-3.3-10.2-8.9C64.4,5.7,57.5,0,47.8,0s-16.6,5.7-20,16.5c-1.8,5.6-3.8,7.3-10.2,8.9C6.7,28.1,0,35.6,0,45.6s6.7,17.5,17.6,20.2c6.4,1.6,8.4,3.3,10.2,8.9,3.4,10.8,10.3,16.5,20,16.5s16.6-5.7,20-16.5c1.8-5.6,3.8-7.3,10.2-8.9,10.9-2.7,17.6-10.2,17.6-20.2s-6.7-17.5-17.6-20.2ZM63.5,60.5c-6.5,0-11.9-4.5-13.4-10.6h-4.4c-1.5,6-7,10.6-13.5,10.6-7.6,0-13.8-6.3-13.8-13.9s6.2-13.8,13.8-13.8c6.5,0,12,4.5,13.5,10.5h4.4c1.5-6.1,6.9-10.5,13.4-10.5,7.6,0,13.9,6.2,13.9,13.8s-6.3,13.9-13.9,13.9ZM57.3,40.4h12.5v12.5h-12.5v-12.5ZM26,40.4h12.5v12.5h-12.5v-12.5ZM137.72,44.17l27.28,36.44h-18.1l-18.1-24.43-17.9,24.43h-17.3l26.88-35.62-25.68-34.39h18l16.6,22.4,16.4-22.4h17.2l-25.28,33.57ZM192.6,48c3,3.8,4.4,7.4,4.4,11.3s-1.4,7.5-4.4,11.3l-7.9,10h-17.8l16.1-20.6-13.7-17.2c-2.9-3.6-4.3-7.1-4.3-10.8s1.4-7.3,4.3-10.8l9-10.6h17.4l-16.9,20.1,13.8,17.3ZM239.6,9c-20.5,0-36.6,16.1-36.6,36.6s16.1,36.6,36.6,36.6,36.6-16.1,36.6-36.6-16.1-36.6-36.6-36.6ZM239.6,68.2c-12.3,0-21.6-9.7-21.6-22.6s9.3-22.6,21.6-22.6,21.6,9.7,21.6,22.6-9.3,22.6-21.6,22.6ZM290.6,10.6l37.6,70h-17.6l-37.6-70h17.6ZM394.2,10.6h-10.5l-28.64,55.22-29.66-55.22h-17.6l37.6,70h85.1l-36.3-70ZM388.62,30.02l18.86,37.58h-37.75l18.89-37.58Z"
    />
    <path
      className="hidden dark:block fill-[#80eaff]"
      d="M78.01,25.4c-6.4-1.6-8.4-3.3-10.2-8.9C64.4,5.7,57.5,0,47.8,0s-16.6,5.7-20,16.5c-1.8,5.6-3.8,7.3-10.2,8.9C6.7,28.1,0,35.6,0,45.6s6.7,17.5,17.6,20.2c6.4,1.6,8.4,3.3,10.2,8.9,3.4,10.8,10.3,16.5,20,16.5s16.6-5.7,20-16.5c1.8-5.6,3.8-7.3,10.2-8.9,10.9-2.7,17.6-10.2,17.6-20.2s-6.7-17.5-17.6-20.2ZM63.5,61c-6.6,0-12.4-4.8-13.8-10.7h-3.6c-1.5,5.8-7.3,10.7-13.9,10.7-7.9,0-14.3-6.5-14.3-14.4s6.4-14.3,14.3-14.3c6.5,0,12.4,4.8,13.9,10.6h3.6c1.5-5.9,7.3-10.6,13.8-10.6,7.9,0,14.4,6.4,14.4,14.3s-6.5,14.4-14.4,14.4ZM57.8,40.9h11.5v11.5h-11.5v-11.5ZM26.5,40.9h11.5v11.5h-11.5v-11.5ZM137.72,44.17l27.28,36.44h-18.1l-18.1-24.43-17.9,24.43h-17.3l26.88-35.62-25.68-34.39h18l16.6,22.4,16.4-22.4h17.2l-25.28,33.57ZM192.6,48c3,3.8,4.4,7.4,4.4,11.3s-1.4,7.5-4.4,11.3l-7.9,10h-17.8l16.1-20.6-13.7-17.2c-2.9-3.6-4.3-7.1-4.3-10.8s1.4-7.3,4.3-10.8l9-10.6h17.4l-16.9,20.1,13.8,17.3ZM239.6,9c-20.5,0-36.6,16.1-36.6,36.6s16.1,36.6,36.6,36.6,36.6-16.1,36.6-36.6-16.1-36.6-36.6-36.6ZM239.6,68.2c-12.3,0-21.6-9.7-21.6-22.6s9.3-22.6,21.6-22.6,21.6,9.7,21.6,22.6-9.3,22.6-21.6,22.6ZM290.6,10.6l37.6,70h-17.6l-37.6-70h17.6ZM394.2,10.6h-10.5l-28.64,55.22-29.66-55.22h-17.6l37.6,70h85.1l-36.3-70ZM388.62,30.02l18.86,37.58h-37.75l18.89-37.58Z"
    />
  </svg>
)

export default XsollaSponsor
