import A from 'components/A'

const StarHistory = ({ repos }: { repos: string[] }) => (
  <>
    <A href={`https://star-history.com/#${repos.join('&')}&Date`}>Star History</A>{' '}
    <span style={{ fontSize: 14, color: '#777' }}>(requires a GH token)</span>
  </>
)

export default StarHistory
