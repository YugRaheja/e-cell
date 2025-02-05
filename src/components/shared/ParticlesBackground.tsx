import React, { useCallback, useEffect, useState, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesContainerRef = useRef<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to check if dark mode is enabled
  const checkDarkMode = () => {
    // Check if dark mode class exists on html element
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    return isDark;
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Function to get random neon color
  const getRandomNeonColor = () => {
    const neonColors = [
      '#ff1177', // Neon pink
      '#00ffff', // Neon cyan
      '#ff9933', // Neon orange
      '#00ff00', // Neon green
      '#ff00ff', // Neon purple
      '#ffff00', // Neon yellow
      '#00ffcc', // Neon turquoise
      '#ff3366', // Neon rose
      '#33ffcc', // Neon mint
      '#ff6600'  // Neon coral
    ];
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  };

  // Update colors based on theme
  useEffect(() => {
    // Initial theme check
    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Update colors every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (particlesContainerRef.current) {
        const container = particlesContainerRef.current;
        const newParticleColor = getRandomNeonColor();
        const newLinkColor = getRandomNeonColor();
        
        container.options.particles.color.value = newParticleColor;
        container.options.particles.links.color = newLinkColor;
        
        // Update existing particles
        container.particles.forEach((particle: any) => {
          particle.color.value = newParticleColor;
          if (particle.links) {
            particle.links.forEach((link: any) => {
              link.color = newLinkColor;
            });
          }
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      container={particlesContainerRef}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: isDarkMode ? '#7c4dff' : '#4a3aff',
            animation: {
              enable: true,
              speed: 50,
            }
          },
          links: {
            color: isDarkMode ? '#7c4dff' : '#4a3aff',
            distance: 200,
            enable: true,
            opacity: isDarkMode ? 0.5 : 0.7,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: isDarkMode ? 0.5 : 0.7,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;