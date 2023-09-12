import { Sandpack, SandpackFiles } from '@codesandbox/sandpack-react'
import { monokaiPro } from '@codesandbox/sandpack-themes'

import { r3fFiles } from 'components/snippets'

export const R3FSandpack = ({ files = {} }: { files: SandpackFiles }) => (
  <Sandpack
    template="react"
    options={{ showTabs: false, editorHeight: '100%', editorWidthPercentage: 55 }}
    theme={monokaiPro}
    files={{ ...r3fFiles, ...files }}
    customSetup={{
      dependencies: {
        '@react-three/drei': '9.56.25',
        '@react-three/fiber': '8.11.2',
        three: '0.149.0',
      },
      devDependencies: {
        '@types/three': '0.149.0',
      },
    }}
  />
)
