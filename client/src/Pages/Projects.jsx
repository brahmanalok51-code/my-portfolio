import React from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer"
import { Code2, Cpu, Globe, Brain, Rocket } from "lucide-react";
import Navbar from "../Component/Navbar";

export default function Projects() {

  const projects = [
    {
      title: "Payment Gateway Integration (Stripe)",
      description:
        "Secure online payment system integrated using Stripe API with order creation, checkout session, and payment verification.",
      icon: <Rocket className="w-10 h-10 text-blue-400" />,
      tech: ["React", "Node.js", "Stripe", "Express"],
      link: "https://github.com/brahmanalok51-code/payment_gateway_integration_stripe",
    },
    {
      title: "CRUD Task Manager",
      description:
        "Task management application implementing full CRUD functionality with modern UI and persistent storage.",
      icon: <Code2 className="w-10 h-10 text-cyan-400" />,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/brahmanalok51-code/CRUD-task",
    },
    {
      title: "Pagination System",
      description:
        "Dynamic pagination feature to efficiently display large datasets with optimized page navigation.",
      icon: <Cpu className="w-10 h-10 text-yellow-400" />,
      tech: ["React", "JavaScript", "API", "mongoDB"],
      link: "https://github.com/brahmanalok51-code/pagination",
    },
    {
      title: "My Portfolio",
      description:
        "Personal portfolio website showcasing skills, projects, and achievements using modern UI animations.",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/brahmanalok51-code/my-portfolio",
    },
    {
      title: "Learning Tutorial Website",
      description:
        "Educational platform providing structured tutorials and learning resources with responsive UI.",
      icon: <Code2 className="w-10 h-10 text-indigo-400" />,
      tech: ["React", "Node.js", "MongoDB", "tailwind"],
      link: "https://github.com/brahmanalok51-code/learning-tutorial-website",
    },
    {
      title: "Smart Skin Cancer Detection",
      description:
        "AI-powered deep learning web app that predicts skin cancer using image classification models.",
      icon: <Brain className="w-10 h-10 text-pink-400" />,
      tech: ["Python", "Keras", "Streamlit", "NumPy"],
      link: "https://github.com/brahmanalok51-code/smart_skin_cancer_detection",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-cyan-400"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-3 text-lg"
          >
            A showcase of some of my best work and learning projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}
