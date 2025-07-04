import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBackground() {
  const ref = React.useRef();

  useFrame((state) => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={ref} scale={5}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color={'#2c3e50'}
        wireframe
        emissive="#00ffff"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function StarWarsScene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Animated geometric object */}
        <AnimatedBackground />

        {/* Starry sky */}
        <Stars radius={100} depth={50} count={3000} factor={5} fade speed={2} />

        {/* Glowing Text */}
        <Text
          position={[0, 2, 0]}
          fontSize={0.8}
          color="#ffe81f"
          anchorX="center"
          anchorY="middle"
        >
          🎉 You Found the Secret!
        </Text>

        <Text
          position={[0, 0.8, 0]}
          fontSize={0.4}
          color="#ff66cc"
          anchorX="center"
          anchorY="middle"
        >
          This is a magical place 🦤✨
        </Text>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
