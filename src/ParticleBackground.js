import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#cfe8fc", // Light blue background
          },
        },
        particles: {
          number: {
            value: 60,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          color: {
            value: "#00bfff",
          },
          links: {
            enable: true,
            color: "#87ceeb",
            distance: 150,
          },
        },
      }}
    />
  );
}
