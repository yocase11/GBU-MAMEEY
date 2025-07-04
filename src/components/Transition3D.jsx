// src/components/Transition3D.jsx
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

export default function Transition3D() {
  const navigate = useNavigate();

  // Navigate after animation finishes (e.g., 2.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/secret');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ height: '100vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="hotpink"
            emissive="purple"
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '40%',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        animation: 'fadeIn 1s ease-in-out'
      }}>
        🚀 Entering the 3D Universe...
      </div>
    </div>
  );
}
