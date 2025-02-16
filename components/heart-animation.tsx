"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function HeartShape() {
  const shape = useMemo(() => {
    const x = -0.5,
      y = -0.5
    const heartShape = new THREE.Shape()
    heartShape.moveTo(x + 0.5, y + 0.5)
    heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y)
    heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7)
    heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9)
    heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7)
    heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y)
    heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5)
    return heartShape
  }, [])

  return (
    <mesh>
      <extrudeGeometry
        args={[
          shape,
          { depth: 0.2, bevelEnabled: true, bevelSegments: 5, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 },
        ]}
      />
      <meshPhongMaterial color="#ff4136" shininess={100} />
    </mesh>
  )
}

function RotatingHeart() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]} rotation={[0, 0, Math.PI]}>
      <HeartShape />
    </mesh>
  )
}

export function HeartAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, 0.5, 0]}>
          <RotatingHeart />
        </group>
      </Canvas>
    </div>
  )
}

