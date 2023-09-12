export const THREE = 'THREE'
export const BABYLON = 'BABYLON'
export const PHASER = 'PHASER'
export const PIXI = 'PIXI'
export const AFRAME = 'AFRAME'
export const OGL = 'OGL'
export const PLAYCANVAS = 'PLAYCANVAS'
export const IMPACT = 'IMPACT'
export const R3F = 'R3F'
export const THRELTE = 'THRELTE'
export const EASEL = 'EASEL'
export const COCOS = 'COCOS'
export const CUSTOM = 'CUSTOM'
export const GODOT = 'GODOT'
export const UNITY = 'UNITY'
export const CSS = 'CSS'

export const SHOOTING = 'SHOOTING'
export const ADVENTURE = 'ADVENTURE'
export const STRATEGY = 'STRATEGY'
export const CASUAL = 'CASUAL'
export const RACING = 'RACING'
export const CARDS = 'CARDS'
export const PLATFORMER = 'PLATFORMER'
export const PUZZLE = 'PUZZLE'
export const MUSIC = 'MUSIC'
export const RPG = 'RPG'

export const STEAM = 'STEAM'
export const PREORDER = 'PREORDER'

export type Cta = typeof STEAM | typeof PREORDER

export type Genre =
  | typeof SHOOTING
  | typeof ADVENTURE
  | typeof STRATEGY
  | typeof CASUAL
  | typeof RACING
  | typeof CARDS
  | typeof PLATFORMER
  | typeof PUZZLE
  | typeof MUSIC
  | typeof RPG

export const SINGLEPLAYER = 'SINGLEPLAYER'
export const MULTIPLAYER = 'MULTIPLAYER'
export const MMO = 'MMO'

type Players = typeof SINGLEPLAYER | typeof MMO | typeof MULTIPLAYER

// Test 2

export type Game = {
  id: string
  name: string
  externalPlayUrl: string
  websiteUrl?: string
  img?: string
  media?: string
  images?: { thumbnail: string; large: string }[]
  engine: string
  sourceUrl?: string
  author?: string
  authorUrl?: string
  infoUrl?: string
  genres: Genre[]
  description?: string
  allowIframe?: boolean
  fullscreenPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  fullscreenPositionTop?: number | string
  cta?: { type: Cta; url: string }
  wgdOnly?: boolean
  gamerOnly?: boolean
  mobile?: 2 | 1 | 0 // 1 = limited or poor performance
  size: number // in MB transferred, no extensions, adblocker
  graphics?: number // 1-10
  performance?: number // 1-10
  gameplay?: number // 1-10 and completeness
  lowFriction?: number // 1-10
  players: Players[]
  landscapePreferred?: boolean
}

const makeStandardImages = (id: string) => [
  {
    thumbnail: `${id}/${id}.640x.85pc.webp`,
    large: `${id}/${id}.1280x.85pc.webp`,
  },
  {
    thumbnail: `${id}/${id}-1.640x.85pc.webp`,
    large: `${id}/${id}-1.1280x.85pc.webp`,
  },
]

const games: Game[] = [
  {
    id: 'venge',
    name: 'Venge',
    externalPlayUrl: 'https://venge.io/',
    images: makeStandardImages('venge'),
    engine: PLAYCANVAS,
    author: 'OnRush Studio',
    authorUrl: 'https://onrush.studio/',
    infoUrl: 'https://medium.com/poki/meet-onrush-studio-3053ba5be600',
    genres: [SHOOTING],
    mobile: 2,
    description:
      'Venge.io is a fast-paced online multiplayer FPS game with capture-the-flag mechanics.',
    size: 30,
    allowIframe: true,
    graphics: 10,
    performance: 10,
    gameplay: 10,
    lowFriction: 9, // Poki SDK ads between matches
    players: [MULTIPLAYER],
    landscapePreferred: true,
  },
  {
    id: 'hordes',
    name: 'Hordes',
    externalPlayUrl: 'https://hordes.io/',
    img: 'hordes.jpg',
    media: 'hordes-1.jpg',
    engine: OGL,
    author: 'dek',
    authorUrl: 'https://twitter.com/shatterspine',
    description:
      'Find your clan, survive large scale open world PVP and arenas, hunt down bosses and fight your way to the top in this group oriented MMORPG. Hordes.io is a free to play 3D Multiplayer Browsergame in Open Beta.',
    genres: [ADVENTURE, RPG],
    mobile: 0,
    size: 8,
    graphics: 10,
    performance: 10,
    gameplay: 10,
    lowFriction: 9,
    players: [MMO],
  },
  {
    id: 'coastal-world',
    name: 'Coastal World',
    externalPlayUrl: 'https://coastalworld.com/',
    img: 'coastalworld.jpg',
    engine: THREE,
    genres: [ADVENTURE],
    author: 'Merci Michel',
    authorUrl: 'https://www.merci-michel.com/projects/',
    infoUrl:
      'https://www.awwwards.com/coastal-world-by-merci-michel-wins-site-of-the-month-august-2022.html',
    wgdOnly: true,
    mobile: 2,
    size: 9,
    graphics: 10,
    performance: 10,
    gameplay: 5,
    lowFriction: 9,
    players: [SINGLEPLAYER],
  },
  {
    id: 'narrow-one',
    name: 'Narrow One',
    externalPlayUrl: 'https://narrow.one/',
    img: 'narrowone.jpg',
    media: 'narrowone-1.jpg',
    engine: THREE,
    author: 'Pelican Party',
    authorUrl: 'https://twitter.com/pelican_party',
    infoUrl: 'https://medium.com/poki/pelican-party-d63fc69bb0f3',
    description: 'Capture the flag medieval style!',
    genres: [SHOOTING],
    allowIframe: true,
    mobile: 2,
    size: 25,
    graphics: 9,
    gameplay: 10,
    performance: 10,
    lowFriction: 9, // Poki SDK ads
    players: [MULTIPLAYER], // '4v4'
    landscapePreferred: true,
  },
  {
    id: 'tribals',
    name: 'Tribals',
    externalPlayUrl: 'https://tribals.io/',
    images: makeStandardImages('tribals'),
    allowIframe: true,
    engine: PLAYCANVAS,
    genres: [ADVENTURE],
    author: 'OnRush Studio',
    authorUrl: 'https://onrush.studio/',
    infoUrl: 'https://medium.com/poki/meet-onrush-studio-3053ba5be600',
    description:
      'Tribals.io is a first-person multiplayer survival game for the browser. Explore land, start clans with friends, and raid bases.',
    mobile: 2,
    size: 44,
    graphics: 9,
    gameplay: 9,
    performance: 10,
    players: [MULTIPLAYER], // maybe mmo? add singleplayer?
    landscapePreferred: true,
  },
  {
    id: 'double-dodgers',
    externalPlayUrl: 'https://doubledodgers.com/',
    name: 'Double Dodgers',
    engine: THREE,
    genres: [CASUAL],
    players: [SINGLEPLAYER],
    author: 'Pelican Party',
    authorUrl: 'https://twitter.com/pelican_party',
    description:
      "While walking home, you are playing a game on your phone. But don't get too fixated on the game or you'll end up in the sewers... The ultimate multitasking game!",
    size: 11,
    mobile: 2,
    allowIframe: true,
    fullscreenPositionTop: '42px',
    images: makeStandardImages('double-dodgers'),
  },
  {
    id: 'ev-io',
    name: 'ev.io',
    externalPlayUrl: 'https://ev.io/',
    media: 'evio-1.jpg',
    img: 'evio.jpg',
    engine: THREE,
    genres: [SHOOTING],
    mobile: 2,
    size: 25,
    graphics: 8,
    gameplay: 10,
    performance: 10,
    players: [MULTIPLAYER],
  },
  {
    id: 'slow-roads',
    name: 'Slow Roads',
    externalPlayUrl: 'https://slowroads.io/',
    img: 'slowroads.jpg',
    media: 'slowroads-1.jpg',
    engine: THREE,
    genres: [RACING],
    author: 'anslo',
    authorUrl: 'https://twitter.com/anslogen',
    infoUrl: 'https://anslo.medium.com/slow-roads-tl-dr-a664ac6bce40',
    description:
      'Slow Roads is a casual, procedurally-generated driving game which lets you disconnect from life for a while and run endlessly toward the distant horizon. Set the scenery to suit your mood, throw on some music, and just drive.',
    mobile: 0,
    size: 6,
    graphics: 8,
    gameplay: 8,
    performance: 8,
    players: [SINGLEPLAYER],
  },
  // {
  //   id: 'mirror',
  //   name: 'Mirror',
  //   externalPlayUrl: 'https://mirrorthegame.io/',
  //   engine: PLAYCANVAS,
  //   genre: CASUAL,
  //   img: 'mirror.jpg',
  //   author: 'Solar Games',
  //   authorUrl: ' https://solargames.io/',
  //   mobile: 2,
  // },
  {
    id: 'shell-shockers',
    name: 'Shell Shockers',
    externalPlayUrl: 'https://shellshock.io/',
    img: 'shellshockers.jpg',
    media: 'shellshockers-1.jpg',
    engine: BABYLON,
    author: 'Blue Wizard',
    authorUrl: 'https://bluewizard.com/',
    genres: [SHOOTING],
    mobile: 2,
    size: 33,
    graphics: 7,
    gameplay: 8,
    performance: 10,
    players: [MULTIPLAYER],
  },
  {
    id: 'krunker',
    name: 'Krunker',
    externalPlayUrl: 'https://krunker.io/',
    img: 'krunker.jpg',
    media: 'krunker-1.jpg',
    engine: THREE,
    author: 'FRVR',
    authorUrl: 'https://frvr.com/',
    genres: [SHOOTING],
    mobile: 2,
    size: 16,
    graphics: 6,
    gameplay: 9,
    performance: 10,
    players: [MULTIPLAYER],
    landscapePreferred: true,
  },
  {
    id: 'minecraft-classic',
    name: 'Minecraft Classic',
    externalPlayUrl: 'https://classic.minecraft.net/',
    img: 'minecraftclassic.jpg',
    media: 'minecraftclassic-1.jpg',
    engine: BABYLON,
    genres: [ADVENTURE],
    author: 'Minecraft',
    authorUrl: 'https://www.minecraft.net/',
    infoUrl: 'https://babylonjs.medium.com/minecraft-classic-a-truly-open-story-85368ffe314b',
    mobile: 0,
    size: 9,
    graphics: 8,
    gameplay: 10,
    performance: 10,
    lowFriction: 10,
    players: [SINGLEPLAYER, MULTIPLAYER], // 10 max?
  },
  {
    id: 'deadshot',
    name: 'Deadshot',
    externalPlayUrl: 'https://deadshot.io/',
    images: makeStandardImages('deadshot'),
    engine: THREE,
    author: 'Mathew',
    authorUrl: 'https://deadshot.io/',
    description:
      "Multiplayer online first-person shooter that's easily accessible. Grab your friends, join a lobby, and eliminate your opponents!",
    allowIframe: true,
    genres: [SHOOTING],
    mobile: 0,
    size: 15,
    graphics: 8,
    gameplay: 9,
    performance: 10,
    players: [MULTIPLAYER],
  },
  {
    id: 'summoners',
    name: 'Summoners',
    externalPlayUrl: 'https://summoners.io/',
    description:
      "Summoners is a strategic card game you can play for free! It's a blend of Magic, Hearthstone, Slay the Spire, and new ideas that make for deep tactical gameplay. Choose as one of five powerful factions or build your own deck and conquer the map. Every run is unique, so you had better bring your skills. Come play!",
    images: makeStandardImages('summoners'),
    engine: BABYLON,
    genres: [STRATEGY, CARDS],
    author: 'Stephen Haney',
    authorUrl: 'https://twitter.com/sdothaney',
    mobile: 1,
    size: 15,
    allowIframe: true,
    cta: { type: PREORDER, url: '' },
    players: [SINGLEPLAYER],
  },
  {
    id: 'might-is-right',
    name: 'Might is Right (demo)',
    externalPlayUrl: 'https://lazykitty.itch.io/ex-nihilo',
    engine: THREE,
    genres: [STRATEGY],
    img: 'mightisright.jpg',
    media: 'mightisright-1.jpg',
    author: 'Usnul',
    authorUrl: 'https://discourse.threejs.org/u/Usnul',
    mobile: 0,
    size: 86,
    graphics: 8,
    gameplay: 9,
    performance: 10,
    players: [SINGLEPLAYER],
  },
  {
    id: 'ducklings',
    name: 'Ducklings',
    externalPlayUrl: 'https://ducklings.io/',
    engine: THREE,
    img: 'ducklings.jpg',
    media: 'ducklings-1.jpg',
    author: 'Pelican Party',
    authorUrl: 'https://twitter.com/pelican_party',
    description:
      "You're a duck now. Swim around and search for lonely lost ducklings. By bringing back ducklings you'll be rewarded with upgrades to your nest and new hats! Relax, swim around and have fun.",
    size: 8,
    allowIframe: true,
    fullscreenPositionTop: '110px',
    genres: [CASUAL],
    mobile: 2,
    gameplay: 7,
    graphics: 7,
    lowFriction: 9,
    performance: 10,
    players: [MULTIPLAYER],
  },
  {
    id: 'smash-karts',
    name: 'Smash Karts',
    externalPlayUrl: 'https://smashkarts.io',
    img: 'smashkarts.jpg',
    media: 'smashkarts-1.jpg',
    engine: UNITY,
    gamerOnly: true,
    genres: [SHOOTING, RACING],
    mobile: 2,
    size: 24,
    author: 'Tall Team',
    authorUrl: 'https://tall.team/',
    gameplay: 10,
    graphics: 6,
    lowFriction: 9, // Display ads
    performance: 6, // A bit long to load, some weird frame drops, but it says 60FPS
    players: [MULTIPLAYER],
    landscapePreferred: true,
  },
  {
    id: 'summer-afternoon',
    name: 'Summer Afternoon',
    externalPlayUrl: 'https://summer-afternoon.vlucendo.com/',
    author: 'Vicente Lucendo',
    authorUrl: 'https://twitter.com/vlucendo',
    img: 'summerafternoon.jpg',
    engine: THREE,
    genres: [CASUAL],
    mobile: 2,
    size: 13,
    players: [MULTIPLAYER],
  },
  {
    id: 'wheat-farming',
    name: 'Wheat Farming',
    externalPlayUrl: 'https://tubular-chaja-494196.netlify.app',
    img: 'wheatfarming.jpg',
    media: 'wheatfarming-1.jpg',
    engine: PLAYCANVAS,
    genres: [CASUAL],
    author: 'Volem Games for Poki',
    websiteUrl: '',
    authorUrl: 'https://poki.com/tr/g/wheat-farming',
    mobile: 2,
    size: 21,
    gameplay: 8,
    performance: 10,
    allowIframe: true,
    graphics: 8,
    lowFriction: 7,
    players: [MULTIPLAYER],
    landscapePreferred: true,
  },
  {
    id: 'candy-riot',
    name: 'Candy Riot',
    externalPlayUrl: 'https://candy-riot-cosmitar.vercel.app/',
    engine: R3F,
    genres: [STRATEGY],
    img: 'candyriot.jpg',
    author: 'Long Story Short Games',
    authorUrl: 'https://twitter.com/LongSto10058277',
    mobile: 2,
    size: 26,
    players: [SINGLEPLAYER],
    allowIframe: true,
    description:
      'Command a gang of skeletons to get as many candy as they can stole from the rival side. Help them with their limited skills by casting powerful spells.',
  },
  {
    id: 'aritelia',
    name: 'Aritelia',
    externalPlayUrl: 'https://aritelia.io/play/',
    img: 'aritelia.jpg',
    media: 'aritelia-1.jpg',
    engine: PLAYCANVAS,
    genres: [ADVENTURE],
    author: 'Solar Games',
    authorUrl: ' https://solargames.io/',
    mobile: 1,
    size: 87,
    graphics: 10,
    gameplay: 5,
    performance: 5,
    players: [MULTIPLAYER],
  },
  {
    id: 'bad-egg',
    name: 'Bad Egg',
    externalPlayUrl: 'https://badegg.io/',
    img: 'badegg.jpg',
    media: 'badegg-1.jpg',
    engine: GODOT,
    author: 'Blue Wizard',
    authorUrl: 'https://bluewizard.com/',
    genres: [SHOOTING],
    gamerOnly: true,
    mobile: 1,
    size: 42,
    graphics: 5,
    gameplay: 10,
    performance: 7, // Slow on mobile
    lowFriction: 10, // No monetization so far?
    players: [SINGLEPLAYER],
  },
  {
    id: 'mini-royale',
    name: 'Mini Royale: Nations',
    externalPlayUrl: 'https://miniroyale.io/',
    img: 'miniroyale.jpg',
    author: 'Faraway',
    authorUrl: 'https://faraway.gg/',
    engine: PLAYCANVAS,
    genres: [SHOOTING],
    mobile: 0,
    size: 75,
    players: [MULTIPLAYER],
  },
  {
    id: 'temple-run-2',
    name: 'Temple Run 2',
    externalPlayUrl: 'https://poki.com/en/g/temple-run-2',
    img: 'templerun2.jpg',
    genres: [ADVENTURE],
    engine: BABYLON,
    author: 'Imangi Studios',
    authorUrl: 'https://imangistudios.com/',
    mobile: 2,
    size: 15,
    players: [SINGLEPLAYER],
    wgdOnly: true,
  },
  {
    id: 'crossy-road',
    name: 'Crossy Road',
    externalPlayUrl: 'https://poki.com/en/g/crossy-road',
    img: 'crossyroad.jpg',
    engine: THREE,
    genres: [CASUAL],
    author: 'Hipster Whale',
    authorUrl: 'https://twitter.com/hipsterwhaledev',
    mobile: 0,
    size: 5,
    players: [SINGLEPLAYER],
  },
  {
    id: 'kingdom-of-pixels',
    name: 'Kingdom of Pixels',
    externalPlayUrl: 'https://leagueofpixels.eu/',
    engine: PIXI,
    genres: [STRATEGY],
    images: makeStandardImages('kingdom-of-pixels'),
    author: 'QTX',
    authorUrl: 'https://www.linkedin.com/in/martin-na%C5%A1%C4%8D%C3%A1k-02246622a/',
    mobile: 0,
    size: 8,
    players: [MULTIPLAYER],
    allowIframe: true,
    fullscreenPositionTop: '64px',
    description: `Kingdom of Pixels is a 2D multiplayer side-scrolling MOBA and platformer game. It is similar to the style of other MOBAs like League of Legends and DOTA 2. The game's theme is pixel-like, bringing a nostalgic and simplistic feel to it.

Choose among a diverse roster of heroes to play as, and win the match by destroying the enemy's crystal! By killing enemy minions and heroes, you gain gold to build and upgrade items and Experience to level up and become stronger. You can utilize map elements such as Runes and Brushes to your advantage and control the match in your favor.
    
With a wide variety of heroes and items to choose from, you'll experience unique and distinct games. Choose between a melee or ranged hero specializing in either Normal or Magic type damage, customize your item build to fit your playstyle, and conquer your enemies with plans and strategies.`,
  },
  {
    id: 'crazy-cars',
    name: 'Crazy Cars',
    engine: PLAYCANVAS,
    genres: [RACING],
    externalPlayUrl: 'https://poki.com/en/g/crazy-cars',
    img: 'crazycars.jpg',
    author: 'No Pressure Studios',
    authorUrl: 'https://www.nopressurestudios.com/',
    mobile: 2,
    size: 7,
    players: [SINGLEPLAYER, MULTIPLAYER], // Can do 2 players split screen
  },
  {
    id: 'caterpillar-cowboy',
    name: 'Caterpillar Cowboy',
    externalPlayUrl: 'https://ld47.fds.im/',
    engine: BABYLON,
    genres: [CASUAL],
    img: 'caterpillarcowboy.jpg',
    author: 'Fodxog Studios',
    authorUrl: 'https://foxdogstudios.com/',
    mobile: 1,
    size: 8,
    players: [SINGLEPLAYER],
  },
  {
    id: 'robostorm',
    name: 'Robostorm',
    externalPlayUrl: 'https://robostorm.io/',
    img: 'robostorm.jpg',
    engine: PLAYCANVAS,
    genres: [SHOOTING],
    author: 'Mr F',
    authorUrl: 'https://twitter.com/guycalledfrank',
    mobile: 0,
    size: 8,
    players: [MULTIPLAYER],
  },
  {
    id: 'rago',
    name: 'Rago',
    externalPlayUrl: 'https://rago.wtlstudio.com/',
    images: [
      {
        thumbnail: 'rago/rago.640x.85pc.webp',
        large: 'rago/rago.1280x.85pc.webp',
      },
      {
        thumbnail: 'rago/rago-1.640x.85pc.webp',
        large: 'rago/rago-1.1280x.85pc.webp',
      },
    ],
    engine: THREE,
    genres: [CASUAL, PUZZLE],
    author: 'mjurczyk',
    authorUrl: 'https://twitter.com/thefrontendcat',
    mobile: 2,
    size: 28,
    players: [SINGLEPLAYER],
  },
  {
    id: 'duelyst',
    name: 'Duelyst',
    externalPlayUrl: 'https://staging.duelyst.org/',
    img: 'duelyst.jpg',
    author: 'Counterplay Games',
    authorUrl: 'https://www.counterplaygames.com/',
    sourceUrl: 'https://github.com/open-duelyst/duelyst',
    engine: COCOS, // cocos2d-js
    genres: [STRATEGY],
    mobile: 0,
    size: 27,
    players: [SINGLEPLAYER, MULTIPLAYER], // 2 players according to wiki
  },
  {
    id: 'keyboard-heroes',
    name: 'Keyboard Heroes',
    externalPlayUrl: 'https://www.keyboard-heroes.com/',
    images: makeStandardImages('keyboard-heroes'),
    engine: R3F,
    genres: [CASUAL, MUSIC],
    author: 'console_buche',
    authorUrl: 'https://twitter.com/Console_buche',
    description: `A tribute to music and rhythm games such as Guitar Hero and Beat Saber: only you're in a browser and your weapon is your keyboard.

## Instructions

Select a song and hit the right keys at the right time!`,
    mobile: 0,
    size: 30,
    players: [SINGLEPLAYER],
    allowIframe: true,
  },
  {
    id: 'space-pirates',
    name: 'Space Pirates',
    externalPlayUrl: 'https://spacepirates.babylonjs.com/',
    img: 'spacepirates.jpg',
    engine: BABYLON,
    genres: [SHOOTING],
    author: 'Babylon.js',
    authorUrl: 'https://www.babylonjs.com/',
    infoUrl: 'https://babylonjs.medium.com/space-pirates-post-mortem-d3940309322f',
    sourceUrl: 'https://github.com/BabylonJS/SpacePirates',
    wgdOnly: true,
    size: 33,
    players: [SINGLEPLAYER],
  },
  {
    id: 'vampire-survivors',
    name: 'Vampire Survivors (demo)',
    externalPlayUrl: 'https://poncle.itch.io/vampire-survivors',
    img: 'vampiresurvivors.jpg',
    engine: PHASER,
    genres: [ADVENTURE],
    author: 'poncle',
    authorUrl: 'https://twitter.com/poncle_soft',
    mobile: 2,
    size: 5,
    players: [SINGLEPLAYER],
    wgdOnly: true,
  },
  {
    id: 'crosscode',
    name: 'CrossCode (demo)',
    externalPlayUrl: 'https://www.cross-code.com/en/start',
    img: 'crosscode.jpg',
    engine: IMPACT,
    genres: [ADVENTURE],
    author: 'Radical Fish Games',
    authorUrl: 'https://www.radicalfishgames.com/',
    infoUrl: 'https://www.radicalfishgames.com/?cat=5',
    mobile: 0,
    wgdOnly: true,
    size: 20,
    players: [SINGLEPLAYER],
  },
  {
    id: 'gucci-pineapple',
    name: 'Gucci Pineapple',
    externalPlayUrl: 'https://guccipineapple.gucci.com/',
    engine: R3F,
    genres: [CASUAL],
    img: 'guccipineapple.jpg',
    author: 'William Manco',
    authorUrl: 'https://twitter.com/williammanco',
    infoUrl: 'https://twitter.com/williammanco/status/1587873321688915970',
    mobile: 2,
    size: 29,
    players: [SINGLEPLAYER],
  },
  {
    id: 'merc-zone',
    name: 'Merc Zone',
    externalPlayUrl: 'https://www.merc.zone/',
    img: 'merczone.jpg',
    engine: THREE,
    author: 'Blue Wizard',
    authorUrl: 'https://bluewizard.com/',
    genres: [SHOOTING],
    mobile: 0,
    size: 15,
    players: [MULTIPLAYER],
  },
  {
    id: 'wayfinder',
    name: 'Wayfinder',
    externalPlayUrl: 'https://wayfinder.nfb.ca/',
    img: 'wayfinder.jpg',
    engine: THREE,
    genres: [ADVENTURE],
    author: 'Matt DesLauriers',
    authorUrl: 'https://twitter.com/mattdesl',
    infoUrl: 'https://www.nfb.ca/interactive/wayfinder',
    mobile: 2,
    size: 11,
    players: [SINGLEPLAYER],
  },
  {
    id: 'edelweiss',
    name: 'Edelweiss',
    externalPlayUrl: 'https://felixmariotto.itch.io/edelweiss',
    img: 'edelweiss.jpg',
    engine: THREE,
    genres: [ADVENTURE, PLATFORMER],
    author: 'Félix Mariotto',
    authorUrl: 'https://twitter.com/felix_mariotto',
    sourceUrl: 'https://github.com/felixmariotto/Edelweiss',
    mobile: 2,
    size: 9,
    players: [SINGLEPLAYER],
    landscapePreferred: true,
  },
  {
    id: 'bubbly-tim',
    name: "Bubbly Tim's Time Bubble Trouble",
    engine: R3F,
    genres: [PUZZLE, PLATFORMER],
    images: makeStandardImages('bubbly-tim'),
    size: 2,
    websiteUrl: 'https://perplexgg.itch.io/bubbly-tims-time-bubble-trouble',
    externalPlayUrl: 'https://games.webgamer.io/bubbly-tim/',
    description: `Bubbly Tim's Time Bubble Trouble is a thrilling puzzle platformer game created by cousins Faisal Kubba and Hamza Kubba in 3 days for Mini-Jam 126. In this game, you play as Bubbly Tim, who has gotten himself into trouble by freezing time. Help him escape through 20+ fun puzzles!
      
## Instructions

Use Bubbly Tim's time bubble to solve puzzles and overcome obstacles. Use the arrow keys to shoot the time bubble in any direction. The time bubble can be redirected once by using the arrow keys again, and a third use brings the bubble back. The A and D keys move Bubbly Tim left and right, and W jumps. If you're stuck, R can be used to restart the current level, and N can be used to skip to the next level.`,
    gameplay: 7,
    graphics: 5,
    lowFriction: 10,
    performance: 10,
    mobile: 0,
    allowIframe: true,
    author: 'perplexgg & fdkubba',
    authorUrl: 'https://itch.io/profile/perplexgg',
    players: [SINGLEPLAYER],
  },
  // {
  //   id: 'train-bandit',
  //   name: 'Train Bandit',
  //   externalPlayUrl: 'http://trainbandit.games.blackmoondev.com/trainbandit/',
  //   engine: PHASER,
  //   genres: [ADVENTURE, PLATFORMER],
  //   img: 'trainbandit.jpg',
  //   media: 'trainbandit-1.jpg',
  //   size: 4,
  //   author: 'BlackMoon Design',
  //   authorUrl: 'http://blackmoondevgames.com/',
  //   gameplay: 7,
  //   graphics: 4,
  //   lowFriction: 10,
  //   performance: 10,
  //   mobile: 2,
  //   players: [SINGLEPLAYER],
  // },
  {
    id: 'match-city',
    name: 'Match City',
    externalPlayUrl: 'https://dennissmuda.github.io/match-city/',
    author: 'Dennis Smuda',
    authorUrl: 'https://dennissmuda.com/',
    allowIframe: true,
    mobile: 2,
    size: 1, //400kb
    images: makeStandardImages('match-city'),
    genres: [CASUAL, PUZZLE],
    engine: CSS,
    players: [SINGLEPLAYER],
    gameplay: 5,
    graphics: 3,
    lowFriction: 10,
    gamerOnly: true,
    description:
      'A chill tile-matching game built by Dennis Smuda. Try to keep your board from filling up and combine tiles of the same colors! Fully customizable theming!',
    performance: 10,
    sourceUrl: 'https://github.com/DennisSmuda/match-city',
  },
  {
    id: 'desert-racing',
    name: 'Desert Racing',
    externalPlayUrl: 'https://pixi3d.org/demo/desert-racing/',
    engine: PIXI,
    genres: [RACING],
    img: 'desertracing.jpg',
    author: 'Pixi3D',
    authorUrl: 'https://pixi3d.org/',
    mobile: 2,
    size: 5,
    players: [SINGLEPLAYER],
  },
  {
    id: 'ouigo-lets-play',
    name: "Ouigo Let's Play",
    externalPlayUrl: 'http://letsplay.ouigo.com/',
    engine: THREE,
    genres: [CASUAL],
    img: 'ouigo.jpg',
    author: 'Merci Michel',
    authorUrl: 'https://www.merci-michel.com/',
    infoUrl: 'https://mercimichel.medium.com/ouigo-lets-play-case-study-b763f69dd89c',
    mobile: 2,
    size: 19,
    players: [SINGLEPLAYER],
  },
  {
    id: 'jamir',
    name: 'Jamir',
    externalPlayUrl: 'https://jamir.io/en',
    img: 'jamir.jpg',
    engine: THREE,
    author: 'Mert Öztürk',
    authorUrl: 'https://twitter.com/jamir_io',
    genres: [SHOOTING],
    wgdOnly: true,
    size: 76,
    players: [MULTIPLAYER],
  },
  {
    id: 'polytrack',
    name: 'PolyTrack',
    externalPlayUrl: 'https://www.kodub.com/apps/polytrack',
    engine: THREE,
    genres: [RACING],
    img: 'polytrack.jpg',
    author: 'Kodub',
    authorUrl: 'https://twitter.com/KodubDev',
    mobile: 0,
    size: 3,
    players: [SINGLEPLAYER],
  },
  {
    id: 'buildroyale',
    name: 'Build Royale',
    externalPlayUrl: 'https://buildroyale.io/',
    img: 'buildroyale.jpg',
    engine: CUSTOM,
    genres: [SHOOTING],
    author: 'LapaMauve',
    authorUrl: 'https://twitter.com/lapamauve',
    mobile: 0,
    size: 4,
    wgdOnly: true,
    players: [MULTIPLAYER],
  },
  {
    id: 'swooop',
    name: 'Swooop',
    externalPlayUrl: 'https://playcanv.as/p/JtL2iqIH',
    engine: PLAYCANVAS,
    genres: [CASUAL],
    img: 'swooop.jpg',
    author: 'PlayCanvas',
    authorUrl: 'https://playcanvas.com/',
    mobile: 1,
    size: 10,
    players: [SINGLEPLAYER],
  },
  // {
  //   id: 'bruno-simon-portfolio',
  //   name: 'Portfolio',
  //   externalPlayUrl: 'https://bruno-simon.com/',
  //   img: 'brunosimon.jpg',
  //   engine: THREE,
  //   author: 'Bruno Simon',
  //   authorUrl: 'https://twitter.com/bruno_simon',
  //   sourceUrl: 'https://bruno-simon.com/blog/2020-04-03-portfolio-2019/',
  //   wgdOnly: true,
  //   size: 4,
  // },
  {
    id: 'threlte-master',
    name: 'Threlte Master',
    externalPlayUrl: 'https://threlte.xyz/arcade-machine',
    img: 'threltearcade.jpg',
    engine: THRELTE,
    genres: [CASUAL],
    author: 'Grischa Erbe',
    authorUrl: 'https://github.com/grischaerbe',
    sourceUrl:
      'https://github.com/threlte/threlte/tree/main/apps/docs/src/examples/core/three-arcade-game',
    wgdOnly: true,
    size: 7,
    players: [SINGLEPLAYER],
  },
  {
    id: 'poimandres-racing-game',
    name: 'Racing Game',
    externalPlayUrl: 'https://racing.pmnd.rs/',
    img: 'racinggame.jpg',
    engine: R3F,
    genres: [RACING],
    author: 'Poimandres',
    authorUrl: 'https://pmnd.rs/',
    sourceUrl: 'https://github.com/pmndrs/racing-game',
    wgdOnly: true,
    size: 5,
    players: [SINGLEPLAYER],
  },
  {
    id: 'gucci-workout',
    name: 'Gucci Workout',
    externalPlayUrl: 'https://gucciworkout.gucci.com/',
    engine: THREE,
    genres: [CASUAL],
    img: 'gucciworkout.jpg',
    author: 'Gucci Games',
    authorUrl: 'https://www.gucci.com/us/en/st/gucci-games',
    mobile: 2,
    size: 52,
    players: [SINGLEPLAYER],
  },
  {
    id: 'gucci-gravity',
    name: 'Gucci Gravity',
    externalPlayUrl: 'https://guccigravity.gucci.com/',
    engine: R3F,
    genres: [CASUAL],
    img: 'guccigravity.jpg',
    author: 'Gucci Games',
    authorUrl: 'https://www.gucci.com/us/en/st/gucci-games',
    mobile: 2,
    size: 45,
    players: [SINGLEPLAYER],
  },
  {
    id: 'gucci-labyrinth',
    name: 'Gucci Labyrinth',
    externalPlayUrl: 'https://guccilabyrinth.gucci.com/',
    engine: THREE,
    genres: [CASUAL],
    img: 'guccilabyrinth.jpg',
    author: 'Gucci Games',
    authorUrl: 'https://www.gucci.com/us/en/st/gucci-games',
    mobile: 2,
    size: 5,
    players: [SINGLEPLAYER],
  },
  // {
  //   id: 'flattlegrounds',
  //   name: 'Flattlegrounds',
  //   externalPlayUrl: 'http://34.250.221.219/flattlegrounds/',
  //   engine: EASEL,
  //   genres: [SHOOTING],
  //   img: 'flattlegrounds.jpg',
  //   author: 'anslo',
  //   authorUrl: 'https://twitter.com/anslogen',
  //   mobile: 0,
  //   wgdOnly: true,
  //   size: 12,
  //   players: [MULTIPLAYER],
  // },
]

// Create a new list of the same games, but move the ones with mobile=0 to the end on the array

export const mobileGames = [
  ...games.filter(g => g.mobile !== 0),
  ...games.filter(g => g.mobile === 0),
]

// <R3FLogo /> [**Sougen**](https://sougen.co/)

// - <ThreeLogo /> [**Ethereal Engine**](https://www.etherealengine.com/explore)
//  ([source](https://github.com/XRFoundation/XREngine))

// Wasm games: https://twitter.com/MartinMagni in C
// Drive Mad
// https://www.fancade.com/

export default games
