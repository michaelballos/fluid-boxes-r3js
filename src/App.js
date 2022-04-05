import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import BoxOne from './components/BoxOne.tsx';

const App = () => {
  return (
      <Canvas>
        <BoxOne />
      </Canvas>
  );
}

export default App;
