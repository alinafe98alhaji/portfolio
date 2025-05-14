"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 70 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-300 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="space-y-5">
                {skillCategory.items.map((skill, j) =>
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: j * 0.05 + i * 0.1,
                          duration: 0.8
                        }}
                        className="h-2.5 rounded-full bg-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
