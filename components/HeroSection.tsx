"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Code,
  Cpu,
  Zap,
  Database,
  Cog,
  Server,
  Terminal,
  Cloud
} from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    icon: <Cpu className="h-4 w-4 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-500"
  },
  {
    name: "Java",
    icon: <Code className="h-4 w-4 text-red-500" />,
    color: "bg-red-100 dark:bg-red-900/30 text-red-500"
  },
  {
    name: "CSS",
    icon: (
      <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"
        />
      </svg>
    ),
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-400"
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14zM6.6 7.2h3.1v8.6H8.6v-2H6.6v2H5V7.2h1.6v5.1h2V7.2zm5.4 0h3.1v1.6h-1.6v7h-1.5V7.2zm5.4 0h1.5v8.6h-1.5v-2.1h-2.2v2.1h-1.5V7.2h1.5v5.1h2.2V7.2z"
        />
      </svg>
    ),
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500"
  },
  {
    name: "Node.js",
    icon: <Server className="h-4 w-4 text-green-500" />,
    color: "bg-green-100 dark:bg-green-900/30 text-green-500"
  },
  {
    name: "PHP",
    icon: (
      <svg className="h-4 w-4 text-purple-500" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        />
      </svg>
    ),
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-500"
  },
  {
    name: "MongoDB",
    icon: <Database className="h-4 w-4 text-green-400" />,
    color: "bg-green-50 dark:bg-green-900/20 text-green-400"
  },
  {
    name: "SQL",
    icon: <Cog className="h-4 w-4 text-blue-300" />,
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-300"
  },
  {
    name: "Express",
    icon: <Terminal className="h-4 w-4 text-gray-500" />,
    color: "bg-gray-100 dark:bg-gray-800 text-gray-500"
  },
  {
    name: "AWS",
    icon: <Cloud className="h-4 w-4 text-orange-500" />,
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-500"
  }
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Navbar with Glass Effect */}
      <nav className="px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="relative h-10 w-10"
          >
            <Image
              src="/UHLHE0654.JPG"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover shadow-md"
            />
          </motion.div>
          <span className="font-medium bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Alinafe M.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Contact
          </motion.a>
          <div className="hidden md:flex gap-4">
            {[
              {
                icon: <Github className="h-5 w-5" />,
                url: "https://github.com"
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                url: "https://linkedin.com"
              }
            ].map((social, index) =>
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#3b82f6" }}
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                {social.icon}
              </motion.a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 max-w-6xl mx-auto py-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full shadow-inner">
              <Zap className="h-4 w-4 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-500">
                Full-Stack Architect
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-500 dark:text-gray-400">
              Hey! I&apos;m
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Alinafe
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-lg leading-relaxed">
            I{" "}
            <span className="font-medium text-blue-500">
              design &amp; build
            </span>{" "}
            robust systems that scale from
            <span className="font-medium text-blue-500">
              {" "}pixel-perfect UIs
            </span>{" "}
            to
            <span className="font-medium text-blue-500">
              {" "}high-performance backends
            </span>.
          </p>

          {/* Animated Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {techStack.map((tech, index) =>
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-1 ${tech.color} rounded-full shadow-sm cursor-default`}
              >
                {tech.icon}
                <span className="text-sm font-medium">
                  {tech.name}
                </span>
              </motion.div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              Explore My Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(243, 244, 246, 1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border-2 border-blue-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-medium">
                Let&apos;s Build Together
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[400px] relative"
        >
          {/* Floating Images with Depth */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-gray-800"
          >
            <Image
              src="/IMG_E3831.JPG"
              alt="Development Workflow"
              width={500}
              height={600}
              className="object-cover"
              style={{ objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-gray-800 mt-8"
          >
            <Image
              src="/IMG_1063.PNG"
              alt="Project Showcase"
              width={500}
              height={600}
              className="object-cover"
              style={{ objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl top-1/4 -left-10" />
          <div className="absolute -z-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl bottom-1/4 -right-10" />
        </motion.div>
      </div>
    </section>
  );
}
