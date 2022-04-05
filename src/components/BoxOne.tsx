import React from 'react';

const BoxOne: React.FC = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  )
}

export default BoxOne;
