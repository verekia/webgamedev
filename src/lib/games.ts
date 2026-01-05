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
    externalPlayUrl: 'https://poki.com/en/g/venge-io',
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
    id: 'traffic-rider',
    name: 'Traffic Rider',
    externalPlayUrl: 'https://www.crazygames.com/game/traffic-rider-vvq',
    images: makeStandardImages('traffic-rider'),
    engine: UNITY,
    genres: [RACING],
    players: [SINGLEPLAYER],
    author: 'Skgames Yazilim Muhendislik',
    authorUrl: 'https://www.crazygames.com/game/traffic-rider-vvq',
    size: 10,
  },
  {
    id: 'in-tirol',
    name: 'In Tirol',
    externalPlayUrl: 'https://worlds.viverse.com/qj4Fjpg',
    images: makeStandardImages('in-tirol'),
    engine: PLAYCANVAS,
    genres: [ADVENTURE, PUZZLE],
    players: [SINGLEPLAYER],
    author: 'James C. Kane',
    authorUrl: 'https://jamesckane.com/',
    size: 10,
  },

  {
    id: 'narrow-one',
    name: 'Narrow One',
    externalPlayUrl: 'https://poki.com/en/g/narrow-one',
    img: 'narrowone.jpg',
    media: 'narrowone-1.jpg',
    engine: THREE,
    author: 'Pelican Party',
    authorUrl: 'https://x.com/pelican_party',
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
    id: 'wizard-masters',
    name: 'Wizard Masters',
    externalPlayUrl: 'https://www.crazygames.com/game/wizard-masters',
    images: makeStandardImages('wizard-masters'),
    engine: BABYLON,
    genres: [SHOOTING],
    author: 'Ertuğrul Çetin',
    authorUrl: 'https://github.com/ertugrulcetin',
    size: 10,
    players: [MULTIPLAYER],
    mobile: 2,
    graphics: 10,
    performance: 10,
    gameplay: 10,
    lowFriction: 9,
  },
  {
    id: 'ship-happens',
    name: 'Ship Happens VR',
    externalPlayUrl: 'https://worlds.viverse.com/LJxPNPP',
    images: makeStandardImages('ship-happens'),
    engine: PLAYCANVAS,
    genres: [ADVENTURE, PUZZLE],
    players: [MULTIPLAYER],
    author: 'Cause + Christi',
    authorUrl: 'https://causechristi.com/',
    size: 10,
  },
  {
    id: 'tribals',
    name: 'Tribals',
    externalPlayUrl: 'https://poki.com/en/g/tribals-io',
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
    id: 'cubes-2048-io',
    name: 'Cubes 2048.io',
    externalPlayUrl: 'https://www.crazygames.com/game/cubes-2048-io',
    images: makeStandardImages('cubes-2048-io'),
    engine: CUSTOM,
    author: 'Playmost Games',
    authorUrl: 'https://www.crazygames.com/game/cubes-2048-io',
    genres: [CASUAL],
    mobile: 2,
    description: '',
    size: 0,
    players: [MULTIPLAYER],
  },
  {
    id: 'to-the-limbs',
    name: 'to the Limbs',
    externalPlayUrl: 'https://worlds.viverse.com/jtrJ9az',
    images: makeStandardImages('to-the-limbs'),
    engine: THREE,
    genres: [MUSIC],
    players: [SINGLEPLAYER],
    author: 'A Number From the Ghost',
    authorUrl: 'https://www.anumberfromtheghost.com/',
    size: 10,
  },
  {
    id: 'crossy-road',
    name: 'Crossy Road',
    externalPlayUrl: 'https://poki.com/en/g/crossy-road',
    img: 'crossyroad.jpg',
    engine: THREE,
    genres: [CASUAL],
    author: 'Hipster Whale',
    authorUrl: 'https://x.com/hipsterwhaledev',
    mobile: 0,
    size: 5,
    players: [SINGLEPLAYER],
  },
  {
    id: 'cut-in-half-please',
    name: 'Cut in Half, Please!',
    externalPlayUrl: 'https://www.crazygames.com/game/cut-in-half-please',
    images: makeStandardImages('cut-in-half-please'),
    engine: BABYLON,
    genres: [CASUAL],
    players: [SINGLEPLAYER],
    author: 'Shubidumdu Studio ',
    authorUrl: 'https://studio.shubidumdu.com/',
    size: 10,
  },
  {
    id: 'alfi-s-adventures',
    name: "Alfi's Adventures",
    externalPlayUrl: 'https://worlds.viverse.com/EcxNxwe',
    images: makeStandardImages('alfis-adventures'),
    engine: THREE,
    genres: [PLATFORMER],
    players: [SINGLEPLAYER],
    author: 'Brian Breiholz',
    authorUrl: 'https://x.com/BrianBreiholz',
    size: 10,
  },
  {
    id: 'wheat-farming',
    name: 'Wheat Farming',
    externalPlayUrl: 'https://poki.com/en/g/wheat-farming',
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
    id: 'bloxd-io',
    name: 'Bloxd.io',
    externalPlayUrl: 'https://www.crazygames.com/game/bloxdhop-io',
    images: makeStandardImages('bloxd-io'),
    engine: THREE,
    genres: [SHOOTING],
    mobile: 2,
    size: 0,
    players: [MULTIPLAYER],
  },
  {
    id: 'the-art-collector',
    name: 'The Art Collector',
    externalPlayUrl: 'https://worlds.viverse.com/KG6XZmH',
    images: makeStandardImages('the-art-collector'),
    author: 'Alastair Low',
    authorUrl: 'https://x.com/Wallmasterr',
    players: [MULTIPLAYER],
    engine: PLAYCANVAS,
    genres: [ADVENTURE],
    size: 10,
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
    id: 'gridpunk',
    name: 'Gridpunk',
    externalPlayUrl: 'https://www.crazygames.com/game/gridpunk---3v3-battle-royale',
    images: makeStandardImages('gridpunk'),
    engine: UNITY,
    genres: [SHOOTING],
    mobile: 2,
    size: 95,
    players: [MULTIPLAYER],
  },
  {
    id: 'mutiny-and-meetings',
    name: 'Mutiny & Meetings',
    externalPlayUrl: 'https://worlds.viverse.com/3EKMHXt',
    images: makeStandardImages('mutiny-and-meetings'),
    author: 'Raildo',
    authorUrl: 'https://x.com/RaildoGameart',
    size: 10,
    players: [MULTIPLAYER],
    engine: PLAYCANVAS,
    genres: [ADVENTURE, CASUAL],
  },
  // {
  //   id: 'temple-run-2',
  //   name: 'Temple Run 2',
  //   externalPlayUrl: 'https://poki.com/en/g/temple-run-2',
  //   img: 'templerun2.jpg',
  //   genres: [ADVENTURE],
  //   engine: BABYLON,
  //   author: 'Imangi Studios',
  //   authorUrl: 'https://imangistudios.com/',
  //   mobile: 2,
  //   size: 15,
  //   players: [SINGLEPLAYER],
  //   wgdOnly: true,
  // },
  {
    id: 'mana-blade',
    name: 'Mana Blade',
    externalPlayUrl: 'https://webgamer.io/en/g/mana-blade',
    images: makeStandardImages('mana-blade'),
    engine: R3F,
    author: 'V1V2',
    authorUrl: 'https://manablade.com/',
    genres: [ADVENTURE, RPG],
    mobile: 2,
    size: 8,
    graphics: 10,
    performance: 10,
    gameplay: 10,
    lowFriction: 9,
    players: [MMO],
  },
  {
    id: 'eonfall',
    name: 'Eonfall',
    externalPlayUrl: 'https://webgamer.io/en/g/eonfall',
    images: makeStandardImages('eonfall'),
    engine: UNITY,
    genres: [ADVENTURE],
    author: 'NeoRelm',
    authorUrl: 'https://x.com/PlayEonfall',
    size: 10,
    players: [MULTIPLAYER],
    mobile: 2,
    graphics: 10,
    performance: 10,
    gameplay: 10,
    lowFriction: 9,
  },
  {
    id: 'summoners',
    name: 'Summoners',
    externalPlayUrl: 'https://webgamer.io/en/g/summoners-io',
    description:
      "Summoners is a strategic card game you can play for free! It's a blend of Magic, Hearthstone, Slay the Spire, and new ideas that make for deep tactical gameplay. Choose as one of five powerful factions or build your own deck and conquer the map. Every run is unique, so you had better bring your skills. Come play!",
    images: makeStandardImages('summoners'),
    engine: BABYLON,
    genres: [STRATEGY, CARDS],
    author: 'Stephen Haney',
    authorUrl: 'https://x.com/sdothaney',
    mobile: 1,
    size: 15,
    allowIframe: true,
    cta: { type: PREORDER, url: '' },
    players: [SINGLEPLAYER],
  },
  {
    id: 'bubbits',
    name: 'Bubbits',
    externalPlayUrl: 'https://webgamer.io/en/g/bubbits',
    images: makeStandardImages('bubbits'),
    engine: PHASER,
    genres: [CASUAL],
    mobile: 2,
    size: 10,
    players: [MULTIPLAYER],
  },
  {
    id: 'jamir',
    name: 'Jamir',
    externalPlayUrl: 'https://webgamer.io/en/g/jamir',
    img: 'jamir.jpg',
    engine: THREE,
    author: 'Mert Öztürk',
    authorUrl: 'https://x.com/jamir_io',
    genres: [SHOOTING],
    wgdOnly: true,
    size: 76,
    players: [MULTIPLAYER],
  },
  {
    id: 'edelweiss',
    name: 'Edelweiss',
    externalPlayUrl: 'https://webgamer.io/en/g/edelweiss',
    img: 'edelweiss.jpg',
    engine: THREE,
    genres: [ADVENTURE, PLATFORMER],
    author: 'Félix Mariotto',
    authorUrl: 'https://x.com/felix_mariotto',
    sourceUrl: 'https://github.com/felixmariotto/Edelweiss',
    mobile: 2,
    size: 9,
    players: [SINGLEPLAYER],
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
    authorUrl: 'https://x.com/shatterspine',
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
    id: 'polytrack',
    name: 'PolyTrack',
    externalPlayUrl: 'https://www.kodub.com/apps/polytrack',
    engine: THREE,
    genres: [RACING],
    img: 'polytrack.jpg',
    author: 'Kodub',
    authorUrl: 'https://x.com/KodubDev',
    mobile: 0,
    size: 3,
    players: [SINGLEPLAYER],
  },
  {
    id: 'double-dodgers',
    externalPlayUrl: 'https://doubledodgers.com/',
    name: 'Double Dodgers',
    engine: THREE,
    genres: [CASUAL],
    players: [SINGLEPLAYER],
    author: 'Pelican Party',
    authorUrl: 'https://x.com/pelican_party',
    description:
      "While walking home, you are playing a game on your phone. But don't get too fixated on the game or you'll end up in the sewers... The ultimate multitasking game!",
    size: 11,
    mobile: 2,
    allowIframe: true,
    fullscreenPositionTop: '42px',
    images: makeStandardImages('double-dodgers'),
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
    authorUrl: 'https://x.com/anslogen',
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
    id: 'ducklings',
    name: 'Ducklings',
    externalPlayUrl: 'https://ducklings.io/',
    engine: THREE,
    img: 'ducklings.jpg',
    media: 'ducklings-1.jpg',
    author: 'Pelican Party',
    authorUrl: 'https://x.com/pelican_party',
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
    authorUrl: 'https://x.com/vlucendo',
    img: 'summerafternoon.jpg',
    engine: THREE,
    genres: [CASUAL],
    mobile: 2,
    size: 13,
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
    authorUrl: 'https://x.com/guycalledfrank',
    mobile: 0,
    size: 8,
    players: [MULTIPLAYER],
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
    authorUrl: 'https://x.com/Console_buche',
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
    authorUrl: 'https://x.com/poncle_soft',
    mobile: 2,
    size: 5,
    players: [SINGLEPLAYER],
    wgdOnly: true,
  },
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
  //   id: 'poimandres-racing-game',
  //   name: 'Racing Game',
  //   externalPlayUrl: 'https://racing.pmnd.rs/',
  //   img: 'racinggame.jpg',
  //   engine: R3F,
  //   genres: [RACING],
  //   author: 'Poimandres',
  //   authorUrl: 'https://pmnd.rs/',
  //   sourceUrl: 'https://github.com/pmndrs/racing-game',
  //   wgdOnly: true,
  //   size: 5,
  //   players: [SINGLEPLAYER],
  // },
]

// Create a new list of the same games, but move the ones with mobile=0 to the end on the array

export const mobileGames = [
  ...games.filter(g => g.mobile !== 0),
  ...games.filter(g => g.mobile === 0),
]

// <R3FLogo /> [**Sougen**](https://sougen.co/)

// Wasm games: https://x.com/MartinMagni in C
// Drive Mad
// https://www.fancade.com/

export default games
