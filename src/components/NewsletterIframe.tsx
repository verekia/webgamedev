import Link from 'next/link'

import A from 'components/A'

const NewsletterIframe = () => (
  <div
    style={{
      margin: '16px auto',
      borderRadius: 5,
      maxWidth: 338,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <iframe
      className="newsletter-iframe"
      scrolling="no"
      src="https://buttondown.email/webgamedev?as_embed=true"
    />
  </div>
)

export const HomeLabel = () => (
  <p style={{ textAlign: 'center' }}>
    You can also <b>subscribe</b> to the 💌{' '}
    <Link
      href="/newsletter"
      className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
    >
      <b>newsletter</b>
    </Link>{' '}
    to keep up with the web game dev world!
  </p>
)

export const NewsletterFooter = ({ tweetId }: { tweetId?: string }) => (
  <>
    <p style={{ textAlign: 'center', marginTop: 30, marginBottom: 0 }}>
      Liked this issue? 🐦{' '}
      <A
        href={`https://twitter.com/intent/retweet?tweet_id=${tweetId}`}
        target="_blank"
        rel="noopener"
      >
        <b>Retweet it</b>
      </A>
      , join our{' '}
      <A href="https://webgamedev.com/discord">
        <b>Discord</b>
      </A>
      , and <b>Subscribe</b> below!
    </p>
    <NewsletterIframe />
  </>
)

/*
<p style={{ textAlign: 'left', marginTop: 30, marginBottom: 0 }}>
It takes me <b>~10 hours</b> to make an issue like this! Please consider ❤️{' '}
<A href="https://github.com/sponsors/verekia" target="_blank" rel="noopener">
  <b>sponsoring my work</b>
</A>{' '}
like these lovely folks:
</p>
<Sponsors />
*/

export const RSSLabel = () => (
  <p style={{ textAlign: 'center' }}>
    Alternatively, there is an <A href="https://buttondown.email/webgamedev/rss">RSS feed</A>.
  </p>
)

export const Discord = () => (
  <A href="https://webgamedev.com/discord" target="_blank" rel="noopener">
    <b>Discord</b>
  </A>
)

export default NewsletterIframe
