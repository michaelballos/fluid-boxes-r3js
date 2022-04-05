import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import BoxOne from './components/BoxOne.tsx';

const App = () => {
  
  return (
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}}> 
        <ambientLight intensity={0.3} />
        <BoxOne position={[0, 1, 0]} args={[3, 2, 1]} />
        <BoxOne position={[-2, 1, -5]}/>
        <BoxOne position={[5, 1, -2]}/>
      </Canvas>

  );
}

export default App;
