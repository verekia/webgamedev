// eslint-disable-next-line
import { tagline } from '../../theme.config'

const MainTitle = () => (
  <>
    <h1
      className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight"
      style={{ textAlign: 'center' }}
    >
      Web Game Dev
    </h1>
    <h2 style={{ textAlign: 'center', opacity: 0.65, fontStyle: 'italic' }}>{tagline}</h2>
  </>
)

export default MainTitle
