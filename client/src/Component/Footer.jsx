import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 relative">
      
      
      <div className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-14 border-t border-purple-200 dark:border-gray-700">
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

      
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MyPortfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
              Building modern web applications using MERN stack and AI-powered
              intelligent solutions with premium UI experience.
            </p>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition font-medium"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect
            </h3>

            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com/brahmanalok51-code"
                className="p-3 rounded-full bg-white/60 dark:bg-gray-800 shadow-md hover:scale-110 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/alok-mishra-46aa7429b"
                className="p-3 rounded-full bg-white/60 dark:bg-gray-800 shadow-md hover:scale-110 transition"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:brahmanalok51@gmail.com"
                className="p-3 rounded-full bg-white/60 dark:bg-gray-800 shadow-md hover:scale-110 transition"
              >
                <Mail />
              </a>
            </div>
          </motion.div>
        </div>

      
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 border-t border-purple-200 dark:border-gray-700 pt-6">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
