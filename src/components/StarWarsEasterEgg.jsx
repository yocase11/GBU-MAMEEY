import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';

export default function StarWarsEasterEgg() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
        <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={1.5} />
        <Float speed={3} rotationIntensity={2} floatIntensity={3}>
          <Text
            fontSize={0.7}
            color="#ffe81f"
            maxWidth={10}
            lineHeight={1.4}
            textAlign="center"
            position={[0, 0, 0]}
          >
            🎉 You Found the Secret!
            {'\n'}This is a magical place just for curious minds like yours 🪄✨
          </Text>
        </Float>
      </Canvas>
    </div>
  );
}
