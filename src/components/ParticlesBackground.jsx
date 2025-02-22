import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; // ✅ Use `loadSlim`
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log("Initializing tsparticles...");
    await loadSlim(engine); // ✅ Use `loadSlim`, avoids `checkVersion` error
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 40, density: { enable: false, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: false },
          size: { value: 12, random: false },
          move: { enable: true, speed: 2, direction: "none", outModes: "out" },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
