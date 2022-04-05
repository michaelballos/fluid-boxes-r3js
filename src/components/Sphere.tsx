import React from 'react';

const SphereOne: React.FC = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  )
}

export default SphereOne;
