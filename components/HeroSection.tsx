"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const techIcons = [
    "/React_.svg",
    "/Bash_Logo.svg",
    "/C++-Logo.svg",
    "/CURL-Logo.svg",
    "/Docker_Logo.svg",
    "/next.svg",
    "/GitHub-Logo.svg",
    "/Java_Logo.svg",
    "/Kotlin_Logo.svg",
    "/Linux-Logo.svg",
    "/MongoDB-Logo.svg",
    "/MySQL-Logo.svg",
    "/Node.js-Logo.svg",
    "/PHP-Logo.svg",
    "/PostgreSQL-Logo.svg",
    "/Python_Log.svg",
    "/Spring_Framework-Logo.svg",
    "/SQLite-Logo.svg",
    "/TypeScript-Logo.svg",
    "/curiosity-brain-bro-1-1024x1024.png"
  ];

  const topIcons = techIcons.slice(0, techIcons.length / 2);
  const bottomIcons = techIcons.slice(techIcons.length / 2);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pt-12 sm:pt-16">
      {/* Main Content */}
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Alinafe
            </span>
          </h1>

          {mounted &&
            <h2 className="text-xl sm:text-2xl mt-2 text-gray-600 dark:text-gray-300">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "System Architect",
                  "Cloud Engineer"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>}

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I build{" "}
            <span className="font-medium text-blue-500">
              scalable systems
            </span>{" "}
            and craft{" "}
            <span className="font-medium text-blue-500">
              pixel-perfect UIs
            </span>{" "}
            powered by{" "}
            <span className="font-medium text-blue-500">
              modern cloud tech
            </span>.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 font-medium hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Let’s Connect
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-500 hover:text-blue-500"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-500 hover:text-blue-500"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center items-center w-full">
          <div className="relative rounded-full overflow-hidden shadow-xl w-64 h-80 sm:w-72 sm:h-88 z-10 border-2 border-teal-500 dark:border-gray-800">
            <Image
              src="/IMG_E3831.JPG"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tech Logos Section */}
      {mounted &&
        <div className="mt-12 w-full flex flex-col gap-4 items-center px-4">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {topIcons.map((icon, idx) => {
              const offsetX = Math.random() * 12 - 6;
              const offsetY = Math.random() * 6 - 3;
              return (
                <div
                  key={`top-${idx}`}
                  className="w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center rounded-full"
                  style={{
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    filter: "drop-shadow(0 0 25px rgba(59,130,246,0.7))"
                  }}
                >
                  <Image src={icon} alt="tech" width={64} height={64} />
                </div>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2">
            {bottomIcons.map((icon, idx) => {
              const offsetX = Math.random() * 12 - 6;
              const offsetY = Math.random() * 6 - 3;
              return (
                <div
                  key={`bottom-${idx}`}
                  className="w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center rounded-full"
                  style={{
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    filter: "drop-shadow(0 0 25px rgba(168,85,247,0.7))"
                  }}
                >
                  <Image src={icon} alt="tech" width={64} height={64} />
                </div>
              );
            })}
          </div>
        </div>}
    </section>
  );
}
