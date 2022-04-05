import React from 'react'


/**
 *  creates a plane to cast shadows on 
 * @returns {React.FC} plane component
 */
const Plane: React.FC = () => {

  return (
    <group>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}>
        <planeBufferGeometry
          attach='geometry'
          args={[100, 100]}
        />
        <shadowMaterial attach='material' opacity={.3} />
      </mesh>
    </group>
  )
}

export default Plane
