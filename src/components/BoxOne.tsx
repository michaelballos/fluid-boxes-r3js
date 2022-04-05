import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IPosition } from '../../types'

const BoxOne: React.FC<{ position: IPosition, arge: IArgs }> = ({ position, args }) => {
  const Mesh = useRef(null);
  useFrame(() => { Mesh.current.rotation.x = Mesh.current.rotation.y += 0.01 });
  return (
    <mesh position={position} ref={Mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshLambertMaterial attach="material" color="lightBlue" />
    </mesh>
  )
}

export default BoxOne;
