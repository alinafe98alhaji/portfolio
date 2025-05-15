"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBg from "./ParticlesBg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <ParticlesBg
        particleDensity={45}
        particleSize={2}
        speed={0.5}
        particleOpacity={0.2}
      />

      <div className="relative z-10 h-full flex flex-col">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-950/10 border-b border-gray-200/10 dark:border-gray-800/10 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">ALI</span>
            </div>
            <span className="font-medium">Alinafe M.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Work
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Skills
            </a>
            <div className="flex gap-4">
              {[
                { icon: Github, url: "https://github.com/yourusername" },
                { icon: Linkedin, url: "https://linkedin.com/in/yourprofile" },
                { icon: Mail, url: "mailto:your@email.com" }
              ].map((social, index) =>
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </motion.nav>

        <div className="flex-grow flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-500">Full-Stack Developer</span>
              <br />
              <TypeAnimation
                sequence={[
                  "React & Next.js Specialist",
                  2000,
                  "Node.js Backend Expert",
                  2000,
                  "UI/UX Enthusiast",
                  2000
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                cursor={true}
                repeat={Infinity}
                className="block min-h-[4rem]"
              />
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I build performant, accessible web applications with modern
              technologies and clean code practices.
            </p>

            <div className="flex gap-4 justify-center">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
