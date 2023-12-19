import A from './A'
import Callout from './Callout'

const Author = ({ name, bio, twitter, mastodon, picture, website }) => (
  <Callout style={{ marginTop: 32 }}>
    {picture && (
      <img
        alt={name}
        src={`/blog/authors/${picture}`}
        style={{ width: 80, height: 80, float: 'right', marginLeft: 16, borderRadius: 10 }}
      />
    )}
    <div>
      <div style={{ marginBottom: 8 }}>
        Article written by <b>{name}</b>:{' '}
        <div style={{ display: 'inline-flex', flexDirection: 'row', gap: 8 }}>
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
