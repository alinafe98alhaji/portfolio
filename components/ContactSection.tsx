"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 rounded-xl shadow-xl bg-gray-300 dark:bg-gray-800"
    >
      <div className="max-w-4xl  mx-auto px-6 py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss opportunities? Reach out
              directly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">
                    emmanueldicksonmapulanga@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
