import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';

export default function StarWarsScene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.7}
          color="#ffe81f"
          anchorX="center"
          anchorY="middle"
        >
          🎉 You Found the Secret!
        </Text>
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.4}
          color="#ff66cc"
          anchorX="center"
          anchorY="middle"
        >
          This is a magical place 🪄✨
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
