import A from 'components/A'
import { DeadIcon, DownloadIcon, NewIcon, SleepIcon, StarIcon } from 'lib/icons'
import { DTLogo, TypescriptLogo, JavascriptLogo } from 'lib/logos'

const black = 'black-text'
const red = 'red-text'
const orange = 'orange-text'
const green = 'green-text'

type Props = {
  name: string
  url?: string
  repo: string
  stars: number
  npm?: string
  downloads?: number
  lastCommitDate?: string
  description?: string
  shortenYears?: boolean
  withNewlineDescription?: boolean
  isNew?: boolean
  hide?: boolean
  ts?: 'ts' | 'dt' | 'js'
  crateDownloads?: number
  crate?: string
}

const separatorSpacing = 8

const Project = ({
  name,
  url,
  repo,
  stars,
  npm,
  downloads,
  lastCommitDate,
  description,
  shortenYears = true,
  withNewlineDescription = true,
  isNew,
  crate,
  crateDownloads,
  ts,
  hide = false,
  ...props
}: Props) => {
  const repoUrl = `https://github.com/${repo}`
  const npmUrl = `https://www.npmjs.com/package/${npm}`
  const crateUrl = `https://crates.io/crates/${crate}`
  const lastCommitYearsAgo =
    lastCommitDate &&
    Math.round((Date.now() - new Date(lastCommitDate).getTime()) / 1000 / 60 / 60 / 24 / 365)
  // Format star using decimal if more than 1000
  const starsStr = stars >= 1000 ? `${Math.round(stars / 1000)}k` : stars
  const starsColorClassName =
    stars >= 10_000 ? green : stars < 100 ? red : stars < 1000 ? orange : black
  const lastCommitColorClassName = lastCommitYearsAgo >= 2 ? red : orange
  const downloadsStr =
    downloads >= 1_000_000
      ? `${Math.round(downloads / 1_000_000)}M`
      : downloads >= 1000
      ? `${Math.round(downloads / 1000)}k`
      : downloads
  const crateDownloadsStr = crateDownloads
    ? crateDownloads >= 1_000_000
      ? `${Math.round(crateDownloads / 1_000_000)}M`
      : crateDownloads >= 1000
      ? `${Math.round(crateDownloads / 1000)}k`
      : crateDownloads
    : ''
  const downloadsColorClassName =
    downloads >= 100_000 ? green : downloads < 1000 ? red : downloads < 10000 ? orange : black
  const crateDownloadsColorClassName = crateDownloads
    ? crateDownloads >= 1_000_000
      ? green
      : crateDownloads < 10000
      ? red
      : crateDownloads < 100_000
      ? orange
      : black
    : ''

  return (
    <span style={{ opacity: hide ? '0.6' : '1' }} {...props}>
      <A href={url ?? repoUrl} style={{ fontWeight: 'bold' }}>
        {name}
      </A>
      {(repo || npm || description || isNew || lastCommitDate || ts) && (
        <>
          {ts === 'ts' && (
            <span style={{ marginLeft: 5, position: 'relative', top: -2 }}>
              {/* @ts-ignore */}
              <TypescriptLogo />
            </span>
          )}
          {ts === 'js' && (
            <span style={{ marginLeft: 5, position: 'relative', top: -2 }}>
              {/* @ts-ignore */}
              <JavascriptLogo />
            </span>
          )}
          {ts === 'dt' && (
            <span style={{ marginLeft: 5, position: 'relative', top: -2 }}>
              {/* @ts-ignore */}
              <DTLogo />
            </span>
          )}
          {isNew && (
            <span style={{ marginLeft: 6 }}>
              <NewIcon
                style={{
                  opacity: 1,
                  display: 'inline-block',
                  width: 24,
                  height: 24,
                  position: 'relative',
                  top: -1,
                  color: '#00b300',
                  marginRight: -3,
                }}
              />
            </span>
          )}
          {stars && (
            <A
              href={repoUrl}
              className={starsColorClassName}
              style={{ marginLeft: 8, whiteSpace: 'nowrap' }}
            >
              {starsStr}
              <StarIcon
                style={{
                  opacity: 0.8,
                  display: 'inline-block',
                  marginLeft: 4,
                  width: 15,
                  position: 'relative',
                  top: -2,
                }}
              />
            </A>
          )}
          {downloads && npm && (
            <A
              href={npmUrl}
              className={downloadsColorClassName}
              style={{ marginLeft: separatorSpacing, whiteSpace: 'nowrap' }}
            >
              {downloadsStr}/w
              <DownloadIcon
                style={{
                  opacity: 0.8,
                  display: 'inline-block',
                  marginLeft: 4,
                  width: 16,
                  position: 'relative',
                  top: -1,
                }}
              />
            </A>
          )}
          {crateDownloads && crate && (
            <A
              href={crateUrl}
              className={crateDownloadsColorClassName}
              style={{ marginLeft: separatorSpacing, whiteSpace: 'nowrap' }}
            >
              {crateDownloadsStr} total
              <DownloadIcon
                style={{
                  opacity: 0.8,
                  display: 'inline-block',
                  marginLeft: 4,
                  width: 16,
                  position: 'relative',
                  top: -1,
                }}
              />
            </A>
          )}
          {lastCommitDate && (
            <>
              <A
                href={`${repoUrl}/commits`}
                className={lastCommitColorClassName}
                style={{ marginLeft: separatorSpacing, whiteSpace: 'nowrap' }}
              >
                {lastCommitYearsAgo}
                {shortenYears && <span className="short-years">y</span>}
                <span className={shortenYears ? 'long-years' : ''}>
                  {' '}
                  year{lastCommitYearsAgo === 1 ? '' : 's'}
                </span>
                {lastCommitYearsAgo >= 2 ? (
                  <DeadIcon
                    style={{
                      opacity: 0.8,
                      display: 'inline-block',
                      marginLeft: 4,
                      width: 16,
                      position: 'relative',
                      top: -1,
                    }}
                  />
                ) : (
                  <SleepIcon
                    style={{
                      opacity: 0.8,
                      display: 'inline-block',
                      marginLeft: 3,
                      width: 16,
                      position: 'relative',
                      top: -1,
                    }}
                  />
                )}
              </A>
            </>
          )}
          {description && (
            <>
              <span style={{ marginLeft: 2 }} className="project-description-desktop">
                {' '}
                – {description}
              </span>
              {withNewlineDescription && (
                <div className="project-description-mobile">{description}</div>
              )}
            </>
          )}
        </>
      )}
    </span>
  )
}

export default Project
