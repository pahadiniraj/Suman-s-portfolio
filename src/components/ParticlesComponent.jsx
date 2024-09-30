import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useSelector } from "react-redux";

const ParticlesComponent = (props) => {
  const isDarkMode = useSelector((state) => state.darkMode);

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        number: {
          value: 120, // Adjust particle count for performance and visibility
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#979797",
        },
        links: {
          color: "#737373",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1, // Reduced speed for clearer visualization of blink
          straight: false,
        },

        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff",
          },
        },
        size: {
          value: { min: 2, max: 4 }, // Particle size range
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={init} options={options} />;
};

export default ParticlesComponent;
