"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      {/* Navbar */}
      <nav className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/UHLHE0654.JPG"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full h-10 w-10 object-cover"
            />
            <span className="font-medium">Alinafe M.</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#work" className="text-sm hover:text-blue-500">
              Work
            </a>
            <a href="#contact" className="text-sm hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 max-w-6xl mx-auto py-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I am Alinafe
          </h1>
          <p className="text-xl text-blue-500 mb-2">Full-Stack Developer</p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            I build clean, efficient web applications.
          </p>
          <a
            href="#work"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-64 md:h-80 lg:h-96"
        >
          <Image
            src="/IMG_E3831.JPG" // or project-ui.png
            alt="Alinafe M."
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
