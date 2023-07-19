import { useCallback } from "react";
import "../Header/Header.css";
import type { Container, Engine } from "tsparticles-engine";
import { Particles as Particle } from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Particles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particle
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      width={"100"}
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        style: {
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: "0",
          opacity: ".6",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "left",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
          width: {
            value: 0,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particles;
