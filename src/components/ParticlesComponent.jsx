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
          value: 150, // Adjust particle count for performance and visibility
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#777777",
        },
        links: {
          color: "#737373",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2, // Reduced speed for clearer visualization of blink
          straight: false,
        },
        opacity: {
          value: 1, // Initial opacity
          animation: {
            enable: true, // Enable the blinking effect
            speed: 1, // Speed of opacity changes
            minimumValue: 0.2, // Lowest opacity value before blinking back
            startValue: "random", // Start from random opacity for each particle
            sync: false, // Each particle blinks independently
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
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
