import Image, { ImageProps } from 'next/image'

/* eslint-disable no-restricted-imports */

import AframeSrc from '../../public/logos/aframe.png'
import AngularThreeSrc from '../../public/logos/angular-three.png'
import BabylonSrc from '../../public/logos/babylon.png'
import CocosSrc from '../../public/logos/cocos.png'
import Colyseus from '../../public/logos/colyseus.png'
import ConstructSrc from '../../public/logos/construct.png'
import CssSrc from '../../public/logos/css.png'
import DefoldSrc from '../../public/logos/defold.png'
import EaselSrc from '../../public/logos/easel2.png'
import EtherealSrc from '../../public/logos/ethereal.png'
import FilamentSrc from '../../public/logos/filament.png'
import GDevelopSrc from '../../public/logos/gdevelop.png'
import GltfSrc from '../../public/logos/gltf-letter.png'
import GodotSrc from '../../public/logos/godot.png'
import ImpactSrc from '../../public/logos/impact.png'
import JavascriptSrc from '../../public/logos/javascript.png'
import KaboomSrc from '../../public/logos/kaboom.png'
import NeedleSrc from '../../public/logos/needle.png'
import OglSrc from '../../public/logos/ogl.png'
import PhaserSrc from '../../public/logos/phaser.png'
import PixiSrc from '../../public/logos/pixi.png'
import PlayCanvasSrc from '../../public/logos/playcanvas.png'
import R3FSrc from '../../public/logos/r3f.png'
import ReactSrc from '../../public/logos/react.png'
import RogueSrc from '../../public/logos/rogue.png'
import SplineSrc from '../../public/logos/spline.png'
import SvelteSrc from '../../public/logos/svelte.png'
import ThreeSrc from '../../public/logos/three.png'
import ThrelteSrc from '../../public/logos/threlte.png'
import TresSrc from '../../public/logos/tres.png'
import TwoSrc from '../../public/logos/two.png'
import TypescriptSrc from '../../public/logos/typescript.png'
import UnitySrc from '../../public/logos/unity.png'
import UnrealSrc from '../../public/logos/unreal.png'
import VueSrc from '../../public/logos/vue.png'
import WasmSrc from '../../public/logos/wasm.png'
import WebGLSrc from '../../public/logos/webgl-letter.png'
import WebGPUSrc from '../../public/logos/webgpu.png'
import WebXRSrc from '../../public/logos/webxr.png'
import WonderlandSrc from '../../public/logos/wonderland.png'
import DTSrc from '../../public/logos/dt.svg'

const defaultStyle = { width: 20, height: 20, display: 'inline-block' }

export const WGDLogo = style => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 170 170"
    style={{ ...defaultStyle, display: 'inline-block', ...style }}
  >
    <path d="M159 84.86a74.14 74.14 0 1 1-148.29 0 74.14 74.14 0 0 1 148.29 0Z" fill="#333" />
    <path d="M120 84.86a35.14 35.14 0 1 1-70.29 0 35.14 35.14 0 0 1 70.29 0Z" fill="#fff" />
    <path
      d="M106 36.5C106 51.14 96.47 63 84.7 63c-11.76 0-21.3-11.86-21.3-26.5S72.95 10 84.7 10C96.47 10 106 21.86 106 36.5Z"
      fill="#f54444"
    />
    <path
      d="M106 132.5c0 14.64-9.53 26.5-21.3 26.5-11.76 0-21.3-11.86-21.3-26.5S72.95 106 84.7 106c11.77 0 21.3 11.86 21.3 26.5Z"
      fill="#418eff"
    />
    <path
      d="M63 84.5C63 99.14 51.9 111 38.2 111c-13.7 0-24.8-11.86-24.8-26.5S24.5 58 38.2 58C51.9 58 63 69.86 63 84.5Z"
      fill="#ffc31c"
    />
    <path
      d="M156 84.5c0 14.64-11.1 26.5-24.8 26.5-13.7 0-24.8-11.86-24.8-26.5S117.5 58 131.2 58c13.7 0 24.8 11.86 24.8 26.5Z"
      fill="#5ed346"
    />
    <g fill="#fff">
      <path d="M84.97 168.61c-46.43 0-84.2-37.76-84.2-84.19C.78 38 38.55.23 84.98.23c46.42 0 84.19 37.77 84.19 84.2 0 46.41-37.77 84.18-84.2 84.18Zm0-154.33a70.22 70.22 0 0 0-70.14 70.14 70.22 70.22 0 0 0 70.14 70.14 70.22 70.22 0 0 0 70.14-70.14 70.22 70.22 0 0 0-70.14-70.14Z" />
      <path d="M84.97 168.61c-22.64 0-34.48-42.35-34.48-84.19C50.49 42.6 62.33.23 84.97.23c22.63 0 34.47 42.36 34.47 84.2 0 41.83-11.84 84.18-34.47 84.18Zm0-154.33c-6.94 0-20.43 24.76-20.43 70.14 0 45.39 13.5 70.14 20.43 70.14s20.42-24.76 20.42-70.14c0-45.38-13.49-70.14-20.42-70.14Z" />
      <path d="M84.97 118.9c-41.84 0-84.2-11.84-84.2-34.48 0-22.63 42.36-34.48 84.2-34.48 41.83 0 84.19 11.85 84.19 34.48 0 22.64-42.36 34.48-84.2 34.48Zm0-54.9c-45.38 0-70.14 13.49-70.14 20.42 0 6.93 24.76 20.43 70.14 20.43 45.38 0 70.14-13.5 70.14-20.43S130.35 64 84.97 64Z" />
    </g>
  </svg>
)

export const ThreeLogo = (props: ImageProps) => (
  <a href="https://threejs.org/" target="_blank" rel="noopener">
    <Image
      alt="Three.js"
      title="Three.js"
      src={ThreeSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const R3FLogo = (props: ImageProps) => (
  <a href="https://docs.pmnd.rs/react-three-fiber/" target="_blank" rel="noopener">
    <Image
      alt="React Three Fiber"
      title="React Three Fiber"
      src={R3FSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const ImpactLogo = (props: ImageProps) => (
  <a href="https://impactjs.com/" target="_blank" rel="noopener">
    <Image
      alt="Impact.js"
      title="Impact.js"
      src={ImpactSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const WasmLogo = (props: ImageProps) => (
  <a href="https://webassembly.org/" target="_blank" rel="noopener">
    <Image
      alt="WebAssembly"
      title="WebAssembly"
      src={WasmSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const AframeLogo = (props: ImageProps) => (
  <a href="https://aframe.io/" target="_blank" rel="noopener">
    <Image
      alt="A-Frame"
      title="A-Frame"
      src={AframeSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const EaselLogo = (props: ImageProps) => (
  <a href="https://createjs.com/easeljs" target="_blank" rel="noopener">
    <Image
      alt="Easel.js"
      title="Easel.js"
      src={EaselSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const PlayCanvasLogo = (props: ImageProps) => (
  <a href="https://playcanvas.com/" target="_blank" rel="noopener">
    <Image
      alt="PlayCanvas"
      title="PlayCanvas"
      src={PlayCanvasSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const BabylonLogo = (props: ImageProps) => (
  <a href="https://www.babylonjs.com/" target="_blank" rel="noopener">
    <Image
      alt="Babylon.js"
      title="Babylon.js"
      src={BabylonSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const WebXRLogo = (props: ImageProps) => (
  <a href="https://immersiveweb.dev/" target="_blank" rel="noopener">
    <Image
      alt="WebXR"
      title="WebXR"
      src={WebXRSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const ThrelteLogo = (props: ImageProps) => (
  <a href="https://threlte.xyz/" target="_blank" rel="noopener">
    <Image
      alt="Threlte"
      title="Threlte"
      src={ThrelteSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const PixiLogo = (props: ImageProps) => (
  <a href="https://pixijs.com/" target="_blank" rel="noopener">
    <Image
      alt="Pixi.js"
      title="Pixi.js"
      src={PixiSrc}
      style={{ ...defaultStyle, position: 'relative', top: -1, ...props.style }}
      {...props}
    />
  </a>
)

export const OglLogo = (props: ImageProps) => (
  <a href="https://github.com/oframe/ogl" target="_blank" rel="noopener">
    <Image
      alt="OGL"
      title="OGL"
      src={OglSrc}
      className="dark-invert-filter"
      style={{ ...defaultStyle, opacity: 0.8, ...props.style }}
      {...props}
    />
  </a>
)

export const PhaserLogo = (props: ImageProps) => (
  <a href="https://phaser.io/" target="_blank" rel="noopener">
    <Image
      alt="Phaser"
      title="Phaser"
      src={PhaserSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const KaboomLogo = (props: ImageProps) => (
  <a href="https://kaboomjs.com/" target="_blank" rel="noopener">
    <Image
      alt="Kaboom"
      title="Kaboom"
      src={KaboomSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const RogueLogo = (props: ImageProps) => (
  <a href="https://rogueengine.io/" target="_blank" rel="noopener">
    <Image
      alt="Rogue Engine"
      title="Rogue Engine"
      src={RogueSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const WonderlandLogo = (props: ImageProps) => (
  <a href="https://wonderlandengine.com/" target="_blank" rel="noopener">
    <Image
      alt="Wonderland Engine"
      title="Wonderland Engine"
      src={WonderlandSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const AngularThreeLogo = (props: ImageProps) => (
  <a href="https://angular-three.netlify.app/" target="_blank" rel="noopener">
    <Image
      alt="Angular Three"
      title="Angular Three"
      src={AngularThreeSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const VueLogo = (props: ImageProps) => (
  <a href="https://vuejs.org/" target="_blank" rel="noopener">
    <Image
      alt="Trois"
      title="Trois"
      src={VueSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const ReactLogo = (props: ImageProps) => (
  <a href="https://reactjs.org/" target="_blank" rel="noopener">
    <Image
      alt="React"
      title="React"
      src={ReactSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const SvelteLogo = (props: ImageProps) => (
  <a href="https://svelte.dev/" target="_blank" rel="noopener">
    <Image
      alt="Svelte"
      title="Svelte"
      src={SvelteSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const CocosLogo = (props: ImageProps) => (
  <a href="https://www.cocos.com/en" target="_blank" rel="noopener">
    <Image
      alt="Cocos"
      title="Cocos"
      src={CocosSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const ConstructLogo = (props: ImageProps) => (
  <a href="https://www.construct.net/en" target="_blank" rel="noopener">
    <Image
      alt="Construct"
      title="Construct"
      src={ConstructSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const NeedleLogo = (props: ImageProps) => (
  <a href="https://needle.tools/" target="_blank" rel="noopener">
    <Image
      alt="Needle"
      title="Needle"
      src={NeedleSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const UnityLogo = (props: ImageProps) => (
  <a href="https://unity.com/" target="_blank" rel="noopener">
    <Image
      alt="Unity"
      title="Unity"
      src={UnitySrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const EtherealLogo = (props: ImageProps) => (
  <a href="https://www.etherealengine.com/" target="_blank" rel="noopener">
    <Image
      alt="Ethereal Engine"
      title="Ethereal Engine"
      src={EtherealSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const TwoLogo = (props: ImageProps) => (
  <a href="https://two.js.org/" target="_blank" rel="noopener">
    <Image
      alt="Two.js"
      title="Two.js"
      src={TwoSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const FilamentLogo = (props: ImageProps) => (
  <a href="https://google.github.io/filament/" target="_blank" rel="noopener">
    <Image
      alt="Filament"
      title="Filament"
      src={FilamentSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const GDevelopLogo = (props: ImageProps) => (
  <a href="https://gdevelop.io/" target="_blank" rel="noopener">
    <Image
      alt="GDevelop"
      title="GDevelop"
      src={GDevelopSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const GodotLogo = (props: ImageProps) => (
  <a href="https://godotengine.org/" target="_blank" rel="noopener">
    <Image
      alt="Godot"
      title="Godot"
      src={GodotSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const UnrealLogo = (props: ImageProps) => (
  <a href="https://www.unrealengine.com/" target="_blank" rel="noopener">
    <Image
      alt="Unreal Engine"
      title="Unreal Engine"
      src={UnrealSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const TresLogo = (props: ImageProps) => (
  <a href="https://tresjs.org/" target="_blank" rel="noopener">
    <Image
      alt="TresJS"
      title="TresJS"
      src={TresSrc}
      style={{ ...defaultStyle, position: 'relative', top: -1, ...props.style }}
      {...props}
    />
  </a>
)

export const JavascriptLogo = (props: ImageProps) => (
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener">
    <Image
      alt="JavaScript"
      title="JavaScript"
      src={JavascriptSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const TypescriptLogo = (props: ImageProps) => (
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
    <Image
      alt="TypeScript"
      title="TypeScript"
      src={TypescriptSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const WebGLLogo = (props: ImageProps) => (
  <a href="https://en.wikipedia.org/wiki/WebGL" target="_blank" rel="noopener">
    <Image
      alt="WebGL"
      title="WebGL"
      src={WebGLSrc}
      style={{ ...defaultStyle, position: 'relative', top: -2, ...props.style }}
      {...props}
    />
  </a>
)

export const WebGPULogo = (props: ImageProps) => (
  <a href="https://en.wikipedia.org/wiki/WebGPU" target="_blank" rel="noopener">
    <Image
      alt="WebGPU"
      title="WebGPU"
      src={WebGPUSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const GltfLogo = (props: ImageProps) => (
  <a href="https://en.wikipedia.org/wiki/GlTF" target="_blank" rel="noopener">
    <Image
      alt="glTF"
      title="glTF"
      src={GltfSrc}
      style={{ ...defaultStyle, position: 'relative', top: -2, ...props.style }}
      {...props}
    />
  </a>
)

export const CssLogo = (props: ImageProps) => (
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener">
    <Image
      alt="CSS"
      title="CSS"
      src={CssSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const SplineLogo = (props: ImageProps) => (
  <a href="https://spline.design/" target="_blank" rel="noopener">
    <Image
      alt="Spline"
      title="Spline"
      src={SplineSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const ColyseusLogo = (props: ImageProps) => (
  <a href="https://colyseus.io/" target="_blank" rel="noopener">
    <Image
      alt="Colyseus"
      title="Colyseus"
      src={Colyseus}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const DefoldLogo = (props: ImageProps) => (
  <a href="https://defold.com/" target="_blank" rel="noopener">
    <Image
      alt="Defold"
      title="Defold"
      src={DefoldSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)

export const DTLogo = (props: ImageProps) => (
  <a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" rel="noopener">
    <Image
      alt="Definitely Typed"
      title="Definitely Typed"
      src={DTSrc}
      style={{ ...defaultStyle, ...props.style }}
      {...props}
    />
  </a>
)
