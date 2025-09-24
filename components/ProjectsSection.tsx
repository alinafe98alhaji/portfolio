"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Data Systems Maturity Assessment Tool",
    description:
      "A platform for assessing water supply and sanitation data systems maturity at national and organization levels across the data value pipeline (data collection, ownership, flow, quality, and use) to support decisions in key sector areas like urban/rural WSS coverage, finance, regulation, and utility operations.",
    tags: ["Next.js", "Node.js", "MongoDB", "Typescript"],
    image: "/images.png",
    codeUrl: "",
    demoUrl: ""
  },
  {
    title: "Kuala Tech: Vehicle Data Overview",
    description:
      "A web interface that fetches data from 3 different endpoints and displays summary cards with real-time object counts for each endpoint.",
    tags: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "/assets/projects/12.jpg",
    demoUrl: "https://kuala-tech.vercel.app/"
  },
  {
    title: "Seraphy Dental Clinic Website",
    description:
      "A modern and user-friendly dental clinic website designed to enhance patient experience and streamline clinic operations. Features include responsive UI, online appointment booking, a services showcase, and an admin panel for managing patients, appointments, and billing.",
    tags: ["Next.js", "Tailwind CSS", "Typescript"],
    image: "/logo.png",
    demoUrl: "https://seraphy-dental.vercel.app/"
  }
];

// Motion variants for staggered card animations
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 60 }
  })
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) =>
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() =>
                project.demoUrl && window.open(project.demoUrl, "_blank")}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) =>
                    <span
                      key={j}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.codeUrl &&
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Code className="w-4 h-4" /> Code
                    </a>}
                  {project.demoUrl &&
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm sm:text-base font-medium hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
