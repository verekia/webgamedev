import type { SandpackFiles } from '@codesandbox/sandpack-react'

export const r3fFiles: SandpackFiles = {
  'App.js': {
    code: `import { useRef, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((_, dt) => {
    ref.current.rotation.x += dt
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const App = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
)

export default App`,
  },
  'styles.css': {
    code: `body {
  margin: 0;
}
`,
  },
}
