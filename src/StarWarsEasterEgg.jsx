// src/components/StarWarsEasterEgg.jsx
import { Canvas } from "@react-three/fiber";
import "./styles.css";

function ProceduralLightsaber() {
  const glowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
  const handleMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

  return (
    <>
      {/* Handle */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
        <primitive object={handleMaterial} attach="material" />
      </mesh>

      {/* Blade */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3, 32]} />
        <primitive object={glowMaterial} attach="material" />
      </mesh>
    </>
  );
}

export default function StarWarsEasterEgg({ onClose }) {
  return (
    <div className="starwars-overlay">
      <h2 className="starwars-text">The Force is strong with you, young Padawan.</h2>
      <div className="canvas-container">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ProceduralLightsaber />
          <OrbitControls />
        </Canvas>
      </div>
      <button className="exit-btn" onClick={onClose}>Close</button>
    </div>
  );
}
