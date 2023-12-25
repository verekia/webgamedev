import A from './A'
import Callout from './Callout'

const Author = ({ name, bio, twitter, mastodon, picture, website }) => (
  <Callout style={{ marginTop: 32 }} className="blog-author">
    {picture && <img alt={name} src={`/blog/authors/${picture}`} />}
    <div className="author-text">
      <div style={{ marginBottom: 8 }}>
        Article written by <b>{name}</b>:{' '}
        <div className="author-socials">
          {website && (
            <A isExternal href={website}>
              🌐 Website
            </A>
          )}
          {twitter && (
            <A isExternal href={`https://twitter.com/${twitter}`}>
              🐦 Twitter
            </A>
          )}
          {mastodon && (
            <A isExternal href={mastodon}>
              🐘 Mastodon
            </A>
          )}
        </div>
      </div>
      {bio}
    </div>
  </Callout>
)

export default Author
