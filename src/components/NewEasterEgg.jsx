import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function GlowingCube() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.8} />
      </mesh>
    </Float>
  );
}

export default function NewEasterEgg({ onClose }) {
  return (
    <div className="easter-egg-container">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GlowingCube />  {/* ✅ inside Canvas */}
        <OrbitControls />
      </Canvas>

      <button className="exit-btn" onClick={onClose}>
        Exit 3D
      </button>
    </div>
  );
}
