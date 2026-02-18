import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { 
  FiGithub, FiLinkedin, FiMusic, FiEdit3, 
  FiLayout, FiServer, FiSettings, FiActivity, FiArrowUpRight 
} from "react-icons/fi";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function AboutMe() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
       
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600 rounded-full blur-[140px] -z-10" 
        />

        <div className="max-w-7xl mx-auto">
         
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-indigo-500 mb-4"
            >
              <span className="h-[1px] w-8 bg-indigo-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Identity Profile</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
            >
              ALOK <span className="text-slate-700">KUMAR</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-300">
                MISHRA.
              </span>
            </motion.h1>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            
            {/* Bio Tile */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiArrowUpRight size={24} className="text-indigo-500" />
              </div>
              <div>
                <div className="flex gap-2 mb-8">
                  <div className="h-3 w-3 rounded-full bg-red-500/40" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/40" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/40" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 italic font-serif leading-tight">
                  "Architecting logic, <br/> perfecting pixels."
                </h3>
                <p className="text-slate-400 leading-relaxed text-base">
                  Full-stack developer with a core focus on the <span className="text-indigo-400 font-medium">MERN ecosystem</span>. 
                  Specializing in turning complex requirements into seamless, high-performance 
                  digital experiences.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                {[
                  { icon: <FiGithub />, href: "https://github.com/brahmanalok51-code" },
                  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/alok-mishra-46aa7429b" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    href={social.href} 
                    target="_blank" 
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-colors text-indigo-400"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

           
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center group">
              <div className="relative">
                 <FiActivity className="text-emerald-500 mb-4" size={24} />
                 <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-full"
                 />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Status</p>
              <p className="text-white font-bold uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">Available for Work</p>
            </motion.div>

         
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Location / IST</p>
              <p className="text-2xl font-mono text-indigo-400 font-bold tracking-tighter">{time}</p>
            </motion.div>

         
            <motion.div variants={itemVariants} className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 flex items-center gap-2">
                <FiServer /> Backend Engineering
              </h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon icon={<SiNodedotjs />} label="Node" color="hover:text-emerald-500" />
                <TechIcon icon={<SiMongodb />} label="MongoDB" color="hover:text-green-500" />
                <TechIcon icon={<SiMysql />} label="SQL" color="hover:text-blue-400" />
                <TechIcon icon={<FiSettings />} label="OS" color="hover:text-slate-400" />
              </div>
            </motion.div>

           
            <motion.div variants={itemVariants} className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 flex items-center gap-2">
                <FiLayout /> Interface Stack
              </h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon icon={<SiHtml5 />} label="HTML" color="hover:text-orange-500" />
                <TechIcon icon={<SiCss3 />} label="CSS" color="hover:text-blue-500" />
                <TechIcon icon={<SiJavascript />} label="JS" color="hover:text-yellow-400" />
                <TechIcon icon={<SiReact />} label="React" color="hover:text-cyan-400" />
              </div>
            </motion.div>

           
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -5 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-2">Primary Language</h3>
              <p className="text-white font-black text-3xl tracking-tighter mb-4 group-hover:text-indigo-400 transition-colors">JAVA</p>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full" 
                />
              </div>
              <p className="text-[9px] text-slate-500 mt-4 font-bold uppercase tracking-widest">Logic & Problem Solving</p>
            </motion.div>

           
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Interests</h3>
              <div className="space-y-5">
                {[
                  { icon: <FiMusic className="text-pink-500" />, label: "MUSIC" },
                  { icon: <FiEdit3 className="text-amber-500" />, label: "PAINTING" }
                ].map((hobby, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                    <span className="group-hover:rotate-12 transition-transform">{hobby.icon}</span>
                    <span className="text-xs font-black tracking-widest group-hover:text-white transition-colors">{hobby.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TechIcon({ icon, label, color }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, y: -2 }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className={`p-5 bg-white/[0.03] border border-white/5 rounded-3xl group-hover:bg-white/10 group-hover:border-indigo-500/50 transition-all duration-300 ${color}`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{label}</span>
    </motion.div>
  );
}