import A from 'components/A'
import { DownloadIcon, StarIcon } from 'lib/icons'
import { DTLogo, TypescriptLogo, JavascriptLogo } from 'lib/logos'
import { ReactNode, useState } from 'react'
import styles from './ProjectList.module.css'

const black = 'black-text'
const red = 'red-text'
const orange = 'orange-text'
const green = 'green-text'

type Repository = {
  name: string
  url?: string
  repo?: string
  description?: ReactNode
  logo?: ReactNode
  ts?: 'ts' | 'dt' | 'js'
  npm?: string
  crate?: string
  // stats
  stars?: number
  downloads?: number
  crateDownloads?: number
  lastCommitDate?: string
  collapsed?: boolean
}

type Props = {
  projects: Array<Repository>
  rust?: boolean
}

const ProjectList = ({ projects, rust }: Props) => {
  const hasLogos = projects.some(project => project.logo)
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleProjects = isExpanded ? projects : projects.filter(project => !project.collapsed)
  const hasSomeCollapsedProjects = visibleProjects.length !== projects.length

  return (
    <>
      <ul className={styles.table} style={{ '--columns': rust ? 4 : 5 } as React.CSSProperties}>
        <li className={`${styles.row} ${styles.header}`}>
          <div></div>
          <div>
            Stars <StarIcon />
          </div>
          <div>
            {rust ? 'Crate' : 'NPM'} <DownloadIcon />
          </div>
          {!rust && <div>TS</div>}
          <div>Maintained</div>
        </li>

        {visibleProjects.map(project => {
          const lastCommit = project.lastCommitDate
            ? Math.round(
                (Date.now() - new Date(project.lastCommitDate).getTime()) /
                  1000 /
                  60 /
                  60 /
                  24 /
                  365,
              )
            : null
          const lastCommitColor = lastCommit >= 2 ? red : orange

          const downloadCount = rust ? project.crateDownloads : project.downloads

          const downloads = downloadCount
            ? downloadCount >= 1_000_000
              ? `${Math.round(downloadCount / 1_000_000)}M`
              : downloadCount >= 1000
              ? `${Math.round(downloadCount / 1000)}k`
              : downloadCount
            : null
          const downloadsColor =
            downloadCount >= 100_000
              ? green
              : downloadCount < 1000
              ? red
              : downloadCount < 10000
              ? orange
              : black

          const stars = project.stars
            ? project.stars >= 1000
              ? `${Math.round(project.stars / 1000)}k`
              : project.stars
            : null
          const starsColor =
            project.stars >= 10_000
              ? green
              : project.stars < 100
              ? red
              : project.stars < 1000
              ? orange
              : black

          const repoUrl = `https://github.com/${project.repo}`
          const npmUrl = `https://www.npmjs.com/package/${project.npm}`
          const crateUrl = `https://crates.io/crates/${project.crate}`

          const url = project.url ?? repoUrl ?? crateUrl

          return (
            <li key={project.name} className={styles.row}>
              <div className={styles.project}>
                <span>
                  {hasLogos ? project.logo || <span className={styles.noLogo} /> : <></>}{' '}
                  <A href={url} isExternal>
                    <b>{project.name}</b>
                  </A>
                </span>

                <div className={styles.mobileStats}>
                  <div className={stars === null ? styles.empty : starsColor}>
                    <StarIcon /> {stars}
                  </div>
                  <div className={downloads === null ? styles.empty : downloadsColor}>
                    <DownloadIcon /> {downloads}/w
                  </div>
                  <div style={{ lineHeight: 0 }}>
                    {/* @ts-expect-error  */}
                    {project.ts === 'ts' && <TypescriptLogo />}
                    {/* @ts-expect-error  */}
                    {project.ts === 'js' && <JavascriptLogo />}
                    {/* @ts-expect-error  */}
                    {project.ts === 'dt' && <DTLogo />}
                  </div>
                </div>

                {project.description && (
                  <span className={styles.description}>
                    {<span className={styles.mobileHidden}> – </span>}
                    {project.description ? <span>{project.description}</span> : <></>}
                  </span>
                )}
              </div>

              <a
                href={repoUrl}
                target="_blank"
                rel="noopener"
                className={stars === null ? styles.empty : starsColor}
              >
                {stars !== null ? stars : 'N/A'}
              </a>
              <a
                href={project.npm ? npmUrl : project.crate ? crateUrl : ''}
                target="_blank"
                rel="noopener"
                className={downloads === null ? styles.empty : downloadsColor}
              >
                {downloads !== null ? `${downloads}/w` : 'N/A'}
              </a>
              {!rust && (
                <div>
                  <div style={{ position: 'relative', bottom: '2px' }}>
                    {/* @ts-expect-error  */}
                    {project.ts === 'ts' && <TypescriptLogo />}
                    {/* @ts-expect-error  */}
                    {project.ts === 'js' && <JavascriptLogo />}
                    {/* @ts-expect-error  */}
                    {project.ts === 'dt' && <DTLogo />}
                  </div>
                </div>
              )}
              <a
                style={{ textAlign: 'center' }}
                href={`${repoUrl}/commits`}
                target="_blank"
                rel="noopener"
              >
                {lastCommit ? (
                  <span className={lastCommitColor}>
                    {lastCommit} year{lastCommit === 1 ? '' : 's'}
                  </span>
                ) : (
                  <span className={styles.empty}>
                    <svg
                      style={{ width: 20, display: 'inline-block' }}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                )}
              </a>
            </li>
          )
        })}
      </ul>
      {!isExpanded && hasSomeCollapsedProjects && (
        <div>
          <button className={styles.showMore} onClick={() => setIsExpanded(true)}>
            <span>Show more</span>
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectList
