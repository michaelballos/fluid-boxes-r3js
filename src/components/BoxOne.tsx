import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IPosition, IArgs } from '../../types'
import { MeshWobbleMaterial } from '@react-three/drei'

/**
 *  creates a box 
 * @param {IPosition} position - position of the box
 * @param {IArgs} args - width, height, depth
 * @returns {React.FC} box component
 */
const BoxOne: React.FC<{
  position: IPosition,
  args: IArgs,
  color: string,
  speed: number
}> = ({
  position,
  args,
  color,
  speed
}) => {
    const Mesh = useRef(null);
    useFrame(() => { Mesh.current.rotation.x = Mesh.current.rotation.y += 0.01 })

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
        <MeshWobbleMaterial
          attach="material"
          color={color}
          speed={speed}
          factor={.6}
        />
      </mesh>
    )
  }

export default BoxOne;
