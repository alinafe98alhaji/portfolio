"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions } from "tsparticles-engine";

interface ParticlesBgProps {
  particleDensity?: number;
  particleSize?: number;
  speed?: number;
  particleOpacity?: number;
}

export default function ParticlesBg({ 
  particleDensity = 80,
  particleSize = 3,
  speed = 1.5,
  particleOpacity = 300
}: ParticlesBgProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: { 
      enable: false,
      zIndex: -1 // Ensure it stays behind content
    },
    background: {
      color: "", // Explicit transparent background
    },
    fpsLimit: 60,
    particles: {
      number: { 
        value: particleDensity,
        density: { enable: true, area: 1000 }
      },
      color: { 
        value: ["#3b82f6", "#ec4899", "#10b981"]
      },
      shape: { 
        type: "circle"
      },
      opacity: {
        value: { min: 100, max: particleOpacity }, // Adjusted for light mode
        animation: { enable: true, speed: 0.5, sync: false }
      },
      size: {
        value: { min: 1, max: particleSize },
        random: true
      },
      move: {
        enable: true,
        speed: { min: speed * 0.3, max: speed * 0.8 },
        direction: "none",
        outModes: "out"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#94a3b8",
        opacity: 0.2,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 30, smooth: 10 }
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  return (
    <div className="absolute inset-0 -z-10 bg-transparent">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
}