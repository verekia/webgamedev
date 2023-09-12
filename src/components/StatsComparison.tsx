import { useState } from 'react'

import A from 'components/A'
import NPMTrends from 'components/NPMTrends'
import StarHistory from 'components/StarHistory'
import { InfoIcon, StatsIcon } from 'lib/icons'

const StatsComparison = ({ projects }: { projects: { repo: string; npm: string }[] }) => {
  const projectItems = Object.values(projects)
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false)

  return (
    <>
      <p style={{ marginTop: '1rem' }}>
        <StatsIcon
          style={{
            display: 'inline-block',
            position: 'relative',
            top: -2,
            marginRight: 3,
            color: '#777',
          }}
        />{' '}
        Compare on <NPMTrends packages={projectItems.map(p => p.npm)} /> and{' '}
        <StarHistory repos={projectItems.map(p => p.repo)} />
      </p>
      <p style={{ marginTop: '0.25rem' }}>
        <InfoIcon
          style={{
            display: 'inline-block',
            position: 'relative',
            top: -2,
            marginRight: 3,
            color: '#777',
          }}
        />{' '}
        <A
          style={{ cursor: 'pointer', color: '#777' }}
          onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
        >
          About these numbers and colors
        </A>
      </p>
      {isDisclaimerExpanded && (
        <p style={{ marginTop: '0.5rem', fontSize: 14, color: '#777' }}>
          Numbers and colors are here to provide an easily-glanceable overview of the activity and
          traction of each tool. While I think community matters for support, it should not be the
          only decision factor, so pick whatever tool works best for your use case.
        </p>
      )}
    </>
  )
}

export default StatsComparison
