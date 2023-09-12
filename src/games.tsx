import { useState } from 'react'

import games, {
  ADVENTURE,
  AFRAME,
  BABYLON,
  CASUAL,
  COCOS,
  EASEL,
  Genre,
  IMPACT,
  OGL,
  PHASER,
  PIXI,
  PLAYCANVAS,
  R3F,
  RACING,
  SHOOTING,
  STRATEGY,
  Game as TGame,
  THREE,
  THRELTE,
} from 'lib/games'

import {
  AframeLogo,
  BabylonLogo,
  CocosLogo,
  EaselLogo,
  ImpactLogo,
  OglLogo,
  PhaserLogo,
  PixiLogo,
  PlayCanvasLogo,
  R3FLogo,
  ThreeLogo,
  ThrelteLogo,
  // WasmLogo,
} from 'lib/logos'

const Game = ({
  name,
  img,
  images,
  engine,
  author,
  authorUrl,
  infoUrl,
  sourceUrl,
  websiteUrl,
  externalPlayUrl,
  size,
}: TGame) => (
  <>
    <div
      style={{
        backgroundImage: images?.[0]?.thumbnail
          ? `url("/games/${images?.[0].thumbnail}`
          : `url("/games-logos/${img}")`,
      }}
    >
      {size && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 27,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            textShadow: '0 0 3px black, 0 0 5px black',
            borderTopLeftRadius: 4,
            padding: '2px 4px 0',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12,
          }}
        >
          {size}MB
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderBottomRightRadius: 4,
          padding: '4px 6px',
        }}
      >
        <span style={{ position: 'relative', top: -2 }}>
          {engine === THREE ? (
            // @ts-ignore
            <ThreeLogo />
          ) : engine === PLAYCANVAS ? (
            // @ts-ignore
            <PlayCanvasLogo />
          ) : engine === BABYLON ? (
            // @ts-ignore
            <BabylonLogo />
          ) : engine === PHASER ? (
            // @ts-ignore
            <PhaserLogo />
          ) : engine === PIXI ? (
            // @ts-ignore
            <PixiLogo />
          ) : engine === AFRAME ? (
            // @ts-ignore
            <AframeLogo />
          ) : engine === IMPACT ? (
            // @ts-ignore
            <ImpactLogo />
          ) : engine === THRELTE ? (
            // @ts-ignore
            <ThrelteLogo />
          ) : engine === R3F ? (
            // @ts-ignore
            <R3FLogo />
          ) : engine === EASEL ? (
            // @ts-ignore
            <EaselLogo />
          ) : engine === COCOS ? (
            // @ts-ignore
            <CocosLogo />
          ) : engine === OGL ? (
            // @ts-ignore
            <OglLogo />
          ) : null}
        </span>
      </div>
      {(sourceUrl || infoUrl) && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderBottomLeftRadius: 4,
            padding: '6px 6px',
            color: 'white',
            filter: 'drop-shadow(0 0 1px black)',
            display: 'flex',
            gap: 9,
          }}
        >
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noopener">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 98 96"
                width="18px"
                height="18px"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.9 0a49.2 49.2 0 0 0-15.4 96c2.3.4 3.2-1.2 3.2-2.5v-9c-13.6 2.9-16.5-6-16.5-6-2.2-5.7-5.4-7.1-5.4-7.1-4.4-3 .3-3 .3-3 5 .3 7.5 5 7.5 5 4.4 7.5 11.5 5.4 14.3 4 .4-3 1.7-5.3 3-6.5-10.8-1.1-22.2-5.4-22.2-24.3 0-5.4 2-9.8 5-13.2-.5-1.2-2.2-6.3.5-13 0 0 4.1-1.3 13.4 5A47 47 0 0 1 49 23.8c4 0 8.3.6 12.2 1.6 9.3-6.3 13.4-5 13.4-5 2.7 6.7 1 11.8.5 13 3.1 3.4 5 7.8 5 13.2 0 19-11.4 23-22.3 24.3 1.7 1.5 3.3 4.5 3.3 9.1v13.5c0 1.3.8 2.9 3.2 2.4a49.2 49.2 0 0 0 33.4-46.7A49 49 0 0 0 49 0z"
                  fill="#fff"
                />
              </svg>
            </a>
          )}
          {infoUrl && (
            <a href={infoUrl} target="_blank" rel="noopener">
              <svg fill="#fff" width="18px" height="18px" viewBox="0 0 490.318 490.318">
                <g>
                  <g>
                    <g>
                      <path
                        d="M245.148,0C109.967,0,0.009,109.98,0.009,245.162c0,135.182,109.958,245.156,245.139,245.156
				c135.186,0,245.162-109.978,245.162-245.156C490.31,109.98,380.333,0,245.148,0z M245.148,438.415
				c-106.555,0-193.234-86.698-193.234-193.253c0-106.555,86.68-193.258,193.234-193.258c106.559,0,193.258,86.703,193.258,193.258
				C438.406,351.717,351.706,438.415,245.148,438.415z"
                      />
                      <path
                        d="M270.036,221.352h-49.771c-8.351,0-15.131,6.78-15.131,15.118v147.566c0,8.352,6.78,15.119,15.131,15.119h49.771
				c8.351,0,15.131-6.77,15.131-15.119V236.471C285.167,228.133,278.387,221.352,270.036,221.352z"
                      />
                      <path
                        d="M245.148,91.168c-24.48,0-44.336,19.855-44.336,44.336c0,24.484,19.855,44.34,44.336,44.34
				c24.485,0,44.342-19.855,44.342-44.34C289.489,111.023,269.634,91.168,245.148,91.168z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          )}
        </div>
      )}
      <div className="plate">
        <a
          href={websiteUrl ?? externalPlayUrl}
          target="_blank"
          rel="noopener"
          style={{ fontWeight: 'bold' }}
        >
          {name}
        </a>{' '}
        {author && authorUrl && (
          <>
            by{' '}
            <a
              className="game-author"
              target="_blank"
              rel="noopener"
              href={authorUrl}
              style={{ fontWeight: 'bold' }}
            >
              {author}
            </a>
          </>
        )}
        {/* <button
            style={{ position: 'absolute', right: 6, top: 6 }}
            onClick={() => setAreDetailsOpen(true)}
          >
            i
          </button>
          <dialog open={areDetailsOpen}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
              <button>OK</button>
            </form>
          </dialog> */}
      </div>
      <a href={websiteUrl ?? externalPlayUrl} target="_blank" rel="noopener" />
    </div>
  </>
)

export const Games = () => {
  const [libFilter, setLibFilter] = useState('')
  const [genre, setGenre] = useState('')

  const filteredGames = games
    .filter(
      g =>
        (!libFilter ||
          (libFilter === 'others' &&
            g.engine !== THREE &&
            g.engine !== BABYLON &&
            g.engine !== R3F &&
            g.engine !== THRELTE &&
            g.engine !== PLAYCANVAS) ||
          (libFilter === THREE &&
            (g.engine === R3F || g.engine === THREE || g.engine === THRELTE)) ||
          g.engine === libFilter) &&
        (!genre ||
          (genre === 'others' &&
            !g.genres.includes(SHOOTING) &&
            !g.genres.includes(ADVENTURE) &&
            !g.genres.includes(CASUAL) &&
            !g.genres.includes(STRATEGY) &&
            !g.genres.includes(RACING)) ||
          g.genres.includes(genre as Genre)),
    )
    .filter(g => !g.gamerOnly)

  return (
    <>
      <style jsx global>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto auto;
          column-gap: 20px;
          row-gap: 20px;
          margin: 0 auto;
        }
        .grid-container > div {
          background-color: #eee;
          height: 130px;
          border-radius: 4px;
          text-align: center;
          background-position: center center;
          background-size: cover;
          overflow: hidden;
          position: relative;
          /* aspect-ratio: 16 / 9; */
        }
        .grid-container > div > a {
          width: 100%;
          height: 100%;
          display: block;
        }
        .grid-container .plate {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          color: white;
          padding: 3px 6px;
          width: 100%;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow:
            0 0 3px black,
            0 0 5px black;
        }
        @media (max-width: 900px) {
          .grid-container {
            grid-template-columns: auto auto;
          }
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: auto auto auto;
          }
        }
        @media (max-width: 650px) {
          .grid-container {
            grid-template-columns: auto auto;
          }
        }
        @media (max-width: 342px) {
          .grid-container {
            grid-template-columns: auto;
            max-width: 380px;
          }
        }
      `}</style>
      <select
        value={libFilter}
        onChange={e => setLibFilter(e.target.value)}
        style={{ marginBottom: 20, padding: '3px 6px', marginRight: 12 }}
      >
        <option value="">All engines</option>
        <option value={THREE}>Three.js</option>
        <option value={PLAYCANVAS}>PlayCanvas</option>
        <option value={BABYLON}>Babylon.js</option>
        {/* <option value={R3F}>React Three Fiber</option> */}
        {/* <option value={PHASER}>Phaser</option> */}
        {/* <option value={IMPACT}>Impact.js</option> */}
        <option value="others">Others</option>
        {/* <option value={PIXI}>Pixi.js</option> */}
        {/* <option value={AFRAME}>A-Frame</option> */}
      </select>
      <select
        value={genre}
        onChange={e => setGenre(e.target.value)}
        style={{ marginBottom: 20, padding: '3px 6px' }}
      >
        <option value="">All genres</option>
        <option value={SHOOTING}>Shooting</option>
        <option value={ADVENTURE}>Adventure</option>
        <option value={STRATEGY}>Strategy</option>
        <option value={RACING}>Racing</option>
        <option value={CASUAL}>Casual</option>
        <option value="others">Others</option>
      </select>

      {filteredGames.length === 0 ? (
        <div>No games found for these filters.</div>
      ) : (
        <div className="grid-container">
          {filteredGames.map(g => (
            <Game key={g.id} {...g} />
          ))}
        </div>
      )}
    </>
  )
}

export default games
