// eslint-disable-next-line
import { tagline } from '../../theme.config'

const MainTitle = () => (
  <>
    <h1 className="_mt-2 _text-4xl _font-bold _tracking-tight" style={{ textAlign: 'center' }}>
      Web Game Dev
    </h1>
    <h2 style={{ textAlign: 'center', opacity: 0.65, fontStyle: 'italic' }}>{tagline}</h2>
  </>
)

export default MainTitle
