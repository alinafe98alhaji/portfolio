"use client";
import { motion } from "framer-motion";
import { Cpu, Database, Cloud, Code2, Server, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Software Engineering",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 88 },
      { name: "Java", level: 85 },
      { name: "C++", level: 82 },
      { name: "Data Structures", level: 90 }
    ]
  },
  {
    category: "Systems & Architecture",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: "System Design", level: 85 },
      { name: "Microservices", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Algorithms", level: 88 },
      { name: "OS Concepts", level: 83 },
      { name: "Computer Networks", level: 80 }
    ]
  },
  {
    category: "Data & Backend",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Data Modeling", level: 80 },
      { name: "API Design", level: 87 }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { name: "Docker", level: 83 },
      { name: "AWS", level: 75 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Linux/Unix", level: 85 },
      { name: "Git", level: 92 },
      { name: "System Administration", level: 76 }
    ]
  },
  {
    category: "Engineering Fundamentals",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "OOP Principles", level: 90 },
      { name: "Design Patterns", level: 82 },
      { name: "Testing & QA", level: 85 },
      { name: "Agile Methodology", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Technical Documentation", level: 84 }
    ]
  },
  {
    category: "Emerging Technologies",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Machine Learning", level: 75 },
      { name: "IoT Systems", level: 72 },
      { name: "Cloud Native", level: 78 },
      { name: "Mobile Development", level: 70 },
      { name: "Cybersecurity", level: 74 },
      { name: "Distributed Systems", level: 76 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  show: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3
    }
  })
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            Computer Engineering Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive skillset spanning software development, systems
            architecture, and engineering principles from my Computer
            Engineering background.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillCategory, i) =>
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skillCategory.items.map((skill, j) =>
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden"
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 1, duration: 0.8 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Engineering Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Engineering Mindset
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              As a Computer Engineer from CBU, I approach software development
              with a systems-thinking perspective, combining theoretical
              knowledge with practical implementation. My focus is on building
              scalable, efficient, and maintainable systems that solve
              real-world problems through elegant engineering solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                "Systems Design",
                "Algorithmic Thinking",
                "Performance Optimization",
                "Scalable Architecture"
              ].map(principle =>
                <span
                  key={principle}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  {principle}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
