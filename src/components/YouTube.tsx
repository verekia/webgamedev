const YouTube = ({ id, isPlaylist }) => (
  <iframe
    style={{
      aspectRatio: '560/315',
      width: '100%',
      maxWidth: '600px',
      margin: '32px auto',
      borderRadius: 12,
    }}
    src={`https://www.youtube-nocookie.com/embed/${isPlaylist ? 'videoseries?list=' : ''}${id}`}
    allowFullScreen
  />
)

export const Streamable = ({ id, style = {} }) => (
  <iframe
    src={`https://streamable.com/e/${id}`}
    allowFullScreen
    style={{
      width: '100%',
      maxWidth: '600px',
      margin: '32px auto',
      borderRadius: 12,
      ...style,
    }}
  />
)

export default YouTube
