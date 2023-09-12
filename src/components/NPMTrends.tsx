import A from 'components/A'

const NPMTrends = ({ packages }: { packages: string[] }) => (
  <A href={`https://npmtrends.com/${packages.join('-vs-')}`}>NPMTrends</A>
)

export default NPMTrends
