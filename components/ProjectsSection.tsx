"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink, Eye, Calendar } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  codeUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    title: "Data Systems Maturity Assessment Tool",
    description:
      "A platform for assessing water supply and sanitation data systems maturity at national and organization levels across the data value pipeline to support decisions in key sector areas.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Typescript",
      "API Integration",
      "Data Visualization"
    ],
    image: "/images.png",
    codeUrl: "",
    demoUrl: "",
    featured: true,
    year: 2025,
    status: "completed"
  },
  {
    title: "Kuala Tech: Vehicle Data Overview",
    description:
      "A web interface that fetches data from 3 different endpoints and displays summary cards with real-time object counts for each endpoint.",
    tags: ["React", "Next.js", "Tailwind CSS", "Typescript", "API Integration"],
    image: "/assets/projects/12.jpg",
    demoUrl: "https://kuala-tech.vercel.app/",
    year: 2025,
    status: "completed"
  },
  {
    title: "Seraphy Dental Clinic Website",
    description:
      "A modern dental clinic website designed to enhance patient experience and streamline clinic operations with online appointment booking and admin panel.",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "Healthcare"],
    image: "/logo.png",
    demoUrl: "https://seraphy-dental.vercel.app/",
    year: 2025,
    status: "completed"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80, damping: 15 }
  })
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = ["all", "next.js", "react", "typescript", "node.js"];

  const filteredProjects = projects.filter(
    project =>
      activeFilter === "all" ||
      project.tags.some(tag =>
        tag.toLowerCase().includes(activeFilter.toLowerCase())
      )
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in modern web
            development, user experience design, and problem-solving
            capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(filter =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${activeFilter ===
              filter
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"}`}
            >
              {filter.replace("-", " ")}
            </button>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) =>
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                <motion.img
                  variants={imageVariants}
                  whileHover="hover"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay with gradient and status badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${project.status ===
                    "completed"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : project.status === "in-progress"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"}`}
                  >
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 text-white/90">
                  <Calendar className="w-3 h-3" />
                  <span className="text-sm font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured &&
                  <div className="absolute top-12 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium text-white border border-white/20">
                      Featured
                    </span>
                  </div>}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) =>
                    <span
                      key={j}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tag}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.codeUrl &&
                    <a
                      href={project.codeUrl}
                      onClick={e => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group/code"
                    >
                      <Code className="w-4 h-4 group-hover/code:rotate-12 transition-transform" />
                      Code
                    </a>}

                  {project.demoUrl
                    ? <a
                        href={project.demoUrl}
                        onClick={e => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-500/25 group/demo"
                      >
                        <Eye className="w-4 h-4 group-hover/demo:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    : <button
                        disabled
                        className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-medium cursor-not-allowed"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Private Demo
                      </button>}
                </div>
              </div>
            </motion.article>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 dark:text-gray-500 text-lg mb-4">
              No projects found for this filter.
            </div>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
            >
              View all projects
            </button>
          </motion.div>}
      </div>
    </section>
  );
}
