"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Data Systems Maturity Assessment Tool",
    description:
      "A platform for assessing water supply and sanitation data systems maturity at national and organization levels across the data value pipeline (from data collection, data ownership, data flow, data quality, and data use) to support decisions in key sector areas of urban and rural WSS coverage, finance, regulation, and utility operations.",
    tags: ["Next.js", "Node.js", "MongoDB", "Typescript"],
    image: "/assets/projects/ecommerce.jpg"
  },
  {
    title: "Kuala Tech: Vehicle Data Overview",
    description:
      "A web interface that gets information from 3 different endpoints and shows a card for eachendpoint with the count of the number of objects received in the data array.",
    tags: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    image: "/assets/projects/12.jpg"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) =>
                    <span
                      key={j}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
                    <Code className="w-4 h-4" /> Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
