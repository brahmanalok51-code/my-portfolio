import React from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Code2, Server, Database, Brain, ArrowRight, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "MERN Stack Architecture",
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    description: "End-to-end full-stack engineering. I build robust, high-performance web applications where frontend elegance meets backend stability.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    progress: 94,
    color: "cyan",
  },
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-8 h-8 text-indigo-400" />,
    description: "Crafting immersive user experiences with modern frameworks. My focus is on micro-interactions, accessibility, and pixel-perfect responsiveness.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    progress: 88,
    color: "indigo",
  },
  {
    title: "Database Design & Scalability",
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    description: "Architecting data models optimized for speed and integrity. Whether it's NoSQL or Relational, I ensure your data layer is built to scale.",
    tools: ["MySQL", "Redis", "Mongoose", "Indexing"],
    progress: 82,
    color: "emerald",
  },
  {
    title: "Logic & Algorithm Design",
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    description: "Deep-rooted expertise in Java and DSA. I solve complex business logic problems with mathematically optimized algorithmic solutions.",
    tools: ["Java", "System Design", "Complexity Analysis"],
    progress: 96,
    color: "purple",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "circOut" } 
  },
};

export default function Services() {
  return (
    <div className="bg-[#000000] min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Navbar />

      
      <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <section className="relative pt-32 pb-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
         
          <div className="max-w-3xl mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-indigo-500 mb-6"
            >
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Capabilities</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8"
            >
              SOLUTIONS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400">WITHOUT LIMITS</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
            >
              I bridge the gap between abstract ideas and scalable digital infrastructure using the MERN ecosystem and advanced algorithmic logic.
            </motion.p>
          </div>

     
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-[#080808] border border-white/5 rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:border-indigo-500/40"
              >
                
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-500/5 blur-[80px] group-hover:bg-${service.color}-500/20 transition-all duration-700`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-10">
                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors">0{index + 1}</span>
                      <div className="flex gap-1 mt-2">
                         {[...Array(3)].map((_, i) => (
                           <div key={i} className={`h-1 w-1 rounded-full bg-${service.color}-500/40`} />
                         ))}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h2>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-8 group-hover:text-slate-400 transition-colors">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 border border-white/5 px-3 py-1 rounded-lg">
                          {tool}
                        </span>
                      ))}
                    </div>

                   
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase">
                        <span className="text-slate-500">Proficiency Level</span>
                        <span className={`text-${service.color}-400`}>{service.progress}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${service.progress}%` }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className={`h-full bg-gradient-to-r from-indigo-500 to-${service.color}-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 lg:p-20 text-center group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
            
            <Layers className="w-12 h-12 text-indigo-500 mx-auto mb-8 animate-bounce" />
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              READY TO <span className="italic font-serif">SCALE?</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
              I am currently accepting new project inquiries for 2026. Let's turn your technical vision into a market-ready reality.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Discussion <ArrowRight size={14} />
                </span>
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>
      <Footer />
    </div>
  );
}