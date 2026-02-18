import React from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Code2, Cpu, Globe, Brain, Rocket, Github, ExternalLink, Terminal } from "lucide-react";

const projects = [
  {
    title: "Secure Payment Gateway",
    description: "Architected a full-cycle financial transaction flow using Stripe API, featuring webhooks and session validation.",
    icon: <Rocket className="w-8 h-8 text-indigo-500" />,
    tech: ["React", "Node.js", "Stripe", "Express"],
    link: "https://github.com/brahmanalok51-code/payment_gateway_integration_stripe",
    category: "FINTECH"
  },
  {
    title: "Smart Cancer Detection",
    description: "AI-driven diagnostic tool utilizing deep learning models for high-accuracy skin lesion classification.",
    icon: <Brain className="w-8 h-8 text-pink-500" />,
    tech: ["Python", "Keras", "Streamlit", "CNN"],
    link: "https://github.com/brahmanalok51-code/smart_skin_cancer_detection",
    category: "AI / ML"
  },
  {
    title: "Enterprise CRUD System",
    description: "High-performance task orchestration engine with real-time state synchronization and persistent storage.",
    icon: <Terminal className="w-8 h-8 text-emerald-500" />,
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    link: "https://github.com/brahmanalok51-code/CRUD-task",
    category: "SYSTEMS"
  },
  {
    title: "Optimized Data Pagination",
    description: "Custom algorithm for handling massive dataset navigation with O(1) page switching efficiency.",
    icon: <Cpu className="w-8 h-8 text-amber-500" />,
    tech: ["JavaScript", "Express", "API Design"],
    link: "https://github.com/brahmanalok51-code/pagination",
    category: "ALGORITHMS"
  },
  {
    title: "Nexus Portfolio v2",
    description: "Professional developer showcase featuring bento-grid architecture and high-fidelity motion design.",
    icon: <Globe className="w-8 h-8 text-cyan-500" />,
    tech: ["Framer Motion", "Tailwind", "React"],
    link: "https://github.com/brahmanalok51-code/my-portfolio",
    category: "FRONTEND"
  },
  {
    title: "Tutorial Ecosystem",
    description: "A structured educational platform designed for seamless resource discovery and responsive learning.",
    icon: <Code2 className="w-8 h-8 text-purple-500" />,
    tech: ["MERN Stack", "Tailwind", "Auth0"],
    link: "https://github.com/brahmanalok51-code/learning-tutorial-website",
    category: "ED-TECH"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <div className="bg-[#000000] min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <section className="pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-indigo-500 mb-4 justify-center lg:justify-start"
              >
                <span className="h-[1px] w-8 bg-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Project Archive</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
              >
                SELECTED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">WORKS</span>
              </motion.h2>
            </div>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-slate-500 text-sm md:text-base font-medium max-w-sm lg:text-right"
            >
              A deep dive into my architectural approach to full-stack engineering.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-[#080808] border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-600 tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full group-hover:text-indigo-400 transition-colors">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold bg-white/5 text-slate-400 border border-white/5 px-3 py-1 rounded-lg uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-white transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                    <ExternalLink size={16} className="text-slate-700 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center p-12 bg-white/[0.02] border border-white/5 rounded-[3rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Have a custom requirement?</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto italic">"Every great project starts with an even better conversation."</p>
            <a 
              href="mailto:your-email@example.com"
              className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 hover:text-white transition-all inline-block"
            >
              Start a Project
            </a>
          </motion.div>

        </div>
      </section>
      <Footer />
    </div>
  );
}