import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const BoxOne: React.FC = ({ position }) => {
  const Mesh = useRef(null);
  useFrame(() => { Mesh.current.rotation.x = Mesh.current.rotation.y += 0.01 });
  return (
    <mesh position={position} ref={Mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="lightBlue" />
    </mesh>
  )
}

export default BoxOne;
