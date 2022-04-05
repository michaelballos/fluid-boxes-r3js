import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IPosition, IArgs } from '../../types'

/**
 *  creates a box 
 * @param {IPosition} position - position of the box
 * @param {IArgs} args - width, height, depth
 * @returns {React.FC} box component
 */
const BoxOne: React.FC<{ position: IPosition, args: IArgs, color: string }> = ({ position, args, color }) => {
  const Mesh = useRef(null);
  useFrame(() => { Mesh.current.rotation.x = Mesh.current.rotation.y += 0.01 });
  return (
    <mesh
      castShadow
      position={position}
      ref={Mesh}
    >
      <boxBufferGeometry
        attach="geometry"
        args={args}
      />
      <meshStandardMaterial
        attach="material"
        color={color}
      />
    </mesh>
  )
}

export default BoxOne;
