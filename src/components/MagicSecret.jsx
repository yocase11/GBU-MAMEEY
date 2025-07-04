import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Text, OrbitControls } from '@react-three/drei';

export default function MagicSecret({ onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
        {/* Starry sky */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Glowing 3D Text */}
        <Text
          position={[0, 1, 0]}
          fontSize={0.7}
          color="#ffe81f"
          font="/fonts/Roboto-Bold.woff"
          anchorX="center"
          anchorY="middle"
        >
          🎉 You Found the Secret!
        </Text>
        
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.4}
          color="#ff66cc"
          anchorX="center"
          anchorY="middle"
        >
          This is a magical place 🪄✨
        </Text>

        {/* Camera control */}
        <OrbitControls />
      </Canvas>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: '#222',
          color: '#ffe81f',
          border: '2px solid #ffe81f',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  );
}
