"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  //const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const techIcons = [
    { src: "/React_.svg", name: "React", color: "from-cyan-400 to-blue-500" },
    { src: "/Bash_Logo.svg", name: "Bash", color: "from-gray-400 to-gray-600" },
    { src: "/C++-Logo.svg", name: "C++", color: "from-blue-600 to-purple-600" },
    {
      src: "/CURL-Logo.svg",
      name: "cURL",
      color: "from-green-500 to-emerald-600"
    },
    {
      src: "/Docker_Logo.svg",
      name: "Docker",
      color: "from-blue-400 to-cyan-500"
    },
    { src: "/next.svg", name: "Next.js", color: "from-gray-700 to-gray-900" },
    {
      src: "/GitHub-Logo.svg",
      name: "GitHub",
      color: "from-gray-600 to-gray-800"
    },
    {
      src: "/Java_Logo.svg",
      name: "Java",
      color: "from-red-500 to-orange-500"
    },
    {
      src: "/Kotlin_Logo.svg",
      name: "Kotlin",
      color: "from-purple-500 to-indigo-600"
    },
    {
      src: "/Linux-Logo.svg",
      name: "Linux",
      color: "from-yellow-500 to-orange-500"
    },
    {
      src: "/MongoDB-Logo.svg",
      name: "MongoDB",
      color: "from-green-500 to-emerald-600"
    },
    {
      src: "/MySQL-Logo.svg",
      name: "MySQL",
      color: "from-blue-500 to-cyan-600"
    },
    {
      src: "/Node.js-Logo.svg",
      name: "Node.js",
      color: "from-green-500 to-lime-500"
    },
    {
      src: "/PHP-Logo.svg",
      name: "PHP",
      color: "from-purple-500 to-indigo-500"
    },
    {
      src: "/PostgreSQL-Logo.svg",
      name: "PostgreSQL",
      color: "from-blue-600 to-indigo-600"
    },
    {
      src: "/Python_Log.svg",
      name: "Python",
      color: "from-blue-500 to-yellow-500"
    },
    {
      src: "/Spring_Framework-Logo.svg",
      name: "Spring",
      color: "from-green-500 to-emerald-500"
    },
    {
      src: "/SQLite-Logo.svg",
      name: "SQLite",
      color: "from-blue-400 to-cyan-500"
    },
    {
      src: "/TypeScript-Logo.svg",
      name: "TypeScript",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedIcons = [...techIcons, ...techIcons];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10 mb-16">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Available for new opportunities
            </span>
          </div>

          {/* Add this below your badge */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Available Immediately</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Alinafe
            </span>
          </h1>

          {/* Typewriter */}
          {mounted &&
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 min-h-[2.5rem]">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "System Architect",
                  "Cloud Engineer",
                  "Problem Solver"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </h2>}

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I help businesses build{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              scalable applications
            </span>{" "}
            that drive{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              revenue growth
            </span>{" "}
            and
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}enhance user engagement
            </span>. Specializing in full-stack development with proven results.
          </p>

          {/* Add this section below your main description */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">💡</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Solving complex business challenges through technology
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  Let&apos;s discuss how I can help scale your platform, reduce
                  costs, or build your MVP
                </p>
              </div>
            </div>
          </div>
          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-2">
                🚀 See Case Studies
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#contact"
              className="group px-6 py-3 rounded-xl border border-blue-500 text-blue-500 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              💼 Start Project
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                Free Consultation
              </span>
            </a>
          </div>

          {/* Add this near social links */}
          <div className="flex gap-6 mt-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                99%
              </div>
              <div className="text-xs text-gray-500">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                48h
              </div>
              <div className="text-xs text-gray-500">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                24/7
              </div>
              <div className="text-xs text-gray-500">Support Available</div>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-mapulanga-72a468158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU0ZWYfKBSoK6c1ag12Csng%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
            </a>
            <a
              href="mailto:emmanueldicksonmapulanga@gmail.com"
              className="group p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-500" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            {/* Profile Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-64 h-80 sm:w-72 sm:h-96 z-10 border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/IMG_E3831.JPG"
                alt="Alinafe - Full Stack Developer"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tech Carousel */}
      <div className="w-full mt-8 mb-12 z-10">
        {/* Section Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
              TECHNOLOGIES I WORK WITH
            </span>
            <div
              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-gray-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-gray-950 to-transparent z-20 pointer-events-none" />

          {/* Carousel Track */}
          <div className="flex space-x-6 py-4 carousel-track">
            {duplicatedIcons.map((icon, idx) =>
              <div
                key={idx}
                className="carousel-item flex-shrink-0 group"
                style={{ "--delay": `${idx * 0.1}s` } as React.CSSProperties}
              >
                <div
                  className={`
                  relative w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center 
                  rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                  border border-gray-200/50 dark:border-gray-700/50 
                  shadow-lg hover:shadow-2xl 
                  transform transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:-translate-y-2
                  carousel-card
                `}
                >
                  {/* Animated Gradient Border */}
                  <div
                    className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${icon.color} 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    -z-10 blur-sm group-hover:blur-md
                  `}
                  />

                  {/* Icon Container */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={56}
                      height={56}
                      className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      // onError={e => {
                      //   console.warn(`Failed to load: ${icon.src}`);
                      // }}
                    />
                  </div>

                  {/* Tooltip Name */}
                  <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap">
                      {icon.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className=" mb-4 bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 9.5));
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .carousel-track {
          animation: scroll 40s linear infinite;
          width: calc(250px * 19);
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item {
          animation: float 3s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .carousel-card {
          position: relative;
          overflow: hidden;
        }

        .carousel-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s;
        }

        .carousel-card:hover::before {
          left: 100%;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .carousel-track {
            animation: none;
          }
          .carousel-item {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
