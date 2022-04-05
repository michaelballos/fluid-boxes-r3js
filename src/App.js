import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import BoxOne from './components/BoxOne.tsx'
import Plane from './components/Plane.tsx'
import { softShadows } from '@react-three/drei'

softShadows()

const App = () => {

  return (
      <Canvas 
        shadows
        colorManagement
        camera={{position: [-5, 2, 10], fov: 60}}
      > 
        <ambientLight intensity={0.3} />
        <directionalLight 
          castShadow
          position={[0, 10, 0]} 
          intensity={.3}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          />
        <pointLight
          position={[-10, 0, -20]}
          intensity={.5} 
          />
        <pointLight 
          position={[0, -10, 0]} 
          intensity={1.5} 
          />
        <Plane />
        <BoxOne 
          position={[0, 1, 0]}
          args={[3, 2, 1]}
          color={'#52FAD3'}
          speed={2}
          />
        <BoxOne 
          position={[-2, 1, -5]} 
          color={'pink'}
          speed={6}
          />
        <BoxOne 
          position={[5, 1, -2]} 
          color={'pink'}
          speed={6}
          />
      </Canvas>

  )
}

export default App
