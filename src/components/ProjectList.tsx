import A from 'components/A'
import { DownloadIcon, StarIcon } from 'lib/icons'
import { DTLogo, TypescriptLogo, JavascriptLogo } from 'lib/logos'
import { ReactNode } from 'react'
import styles from './ProjectList.module.css'

const black = 'black-text'
const red = 'red-text'
const orange = 'orange-text'
const green = 'green-text'

type Repository = {
  name: string
  url?: string
  description?: ReactNode
  logo?: ReactNode
  ts?: 'ts' | 'dt' | 'js'
  // stats
  stars?: number
  downloads?: number
  crateDownloads?: number
  lastCommitDate?: string
}

type Props = {
  projects: Array<Repository>
  rust?: boolean
}

const ProjectList = ({ projects, rust }: Props) => {
  const hasLogos = projects.some(project => project.logo)

  return (
    <ul className={styles.table} style={{ '--columns': rust ? 3 : 4 } as React.CSSProperties}>
      <li className={`${styles.row} ${styles.header}`}>
        <div>Project</div>
        <div>
          Stars <StarIcon />
        </div>
        <div>
          {rust ? 'Crate' : 'NPM'} <DownloadIcon />
        </div>
        {!rust && <div>TS</div>}
      </li>

      {projects.map(project => {
        const lastCommit = project.lastCommitDate
          ? Math.round(
              (Date.now() - new Date(project.lastCommitDate).getTime()) / 1000 / 60 / 60 / 24 / 365,
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

        return (
          <li key={project.name} className={styles.row}>
            <div className={styles.project}>
              <span>
                {hasLogos ? project.logo || <span className={styles.noLogo} /> : <></>}{' '}
                {project.url ? (
                  <A href={project.url} isExternal>
                    {project.name}
                  </A>
                ) : (
                  <span>{project.name}</span>
                )}
              </span>

              <div className={styles.mobileStats}>
                <div className={stars === null ? styles.empty : starsColor}>
                  <StarIcon /> {stars}
                </div>
                <div className={downloads === null ? styles.empty : downloadsColor}>
                  <DownloadIcon /> {downloads}/w
                </div>
                <div>
                  {/* @ts-expect-error  */}
                  {project.ts === 'ts' && <TypescriptLogo />}
                  {/* @ts-expect-error  */}
                  {project.ts === 'js' && <JavascriptLogo />}
                  {/* @ts-expect-error  */}
                  {project.ts === 'dt' && <DTLogo />}
                </div>
              </div>

              {(project.description || lastCommit) && (
                <span className={styles.description}>
                  {<span className={styles.mobileHidden}> – </span>}
                  {project.description ? <span>{project.description}.</span> : <></>}
                  {lastCommit ? (
                    <span className={lastCommitColor}> Last commit {lastCommit} years ago.</span>
                  ) : (
                    <></>
                  )}
                </span>
              )}
            </div>

            <div className={stars === null ? styles.empty : starsColor}>
              {stars !== null ? stars : 'N/A'}
            </div>
            <div className={downloads === null ? styles.empty : downloadsColor}>
              {downloads !== null ? `${downloads}/w` : 'N/A'}
            </div>
            {!rust && (
              <div>
                {/* @ts-expect-error  */}
                {project.ts === 'ts' && <TypescriptLogo />}
                {/* @ts-expect-error  */}
                {project.ts === 'js' && <JavascriptLogo />}
                {/* @ts-expect-error  */}
                {project.ts === 'dt' && <DTLogo />}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectList
