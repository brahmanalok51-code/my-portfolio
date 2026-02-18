import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiLayers, FiCode, FiCpu, FiGithub } from "react-icons/fi";

function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    
    <div className="min-h-screen flex flex-col bg-[#030303] text-white selection:bg-indigo-500/40 overflow-x-hidden">
      <Navbar />
      
      <section className="relative flex-grow flex items-center pt-28 pb-20 lg:pt-40 lg:pb-32">
        
     
        <div className="absolute inset-0 overflow-hidden -z-10">
         
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
         
          <motion.div 
            animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-indigo-500/20 rounded-full blur-[140px]" 
          />
          <motion.div 
            animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-purple-600/20 rounded-full blur-[140px]" 
          />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
           
            <div className="lg:col-span-7 text-left">
             
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-2xl"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  Open for new opportunities
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight text-white mb-6 leading-[0.95]"
              >
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 italic font-serif pr-4">
                  Digital Flow
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-normal"
              >
                I'm <span className="text-white font-semibold underline underline-offset-4 decoration-indigo-500/50">Alok Kumar Mishra</span>. 
                I bridge the gap between complex backend logic and pixel-perfect interfaces using the 
                <span className="text-indigo-400"> MERN Stack</span>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="group relative px-8 py-4 bg-white text-[#030303] font-bold rounded-2xl overflow-hidden transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Let's Talk
                </Link>
              </motion.div>
              
              {/* Tech stack: Adjusted opacity for Dark Mode */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="mt-16 flex items-center gap-8 text-slate-400"
              >
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em]"><FiLayers size={18}/> REACT</div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em]"><FiCpu size={18}/> NODE</div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em]"><FiCode size={18}/> MONGO</div>
              </motion.div>
            </div>

           
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div 
                style={{ y: y1 }}
                className="relative"
              >
               
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-20" />
                
             
                <div className="relative z-10 p-3 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] shadow-2xl">
                  <div className="w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-[2.5rem] bg-slate-900">
                    <img
                      src={profile}
                      alt="Alok"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-700 grayscale-[20%] hover:grayscale-0"
                    />
                  </div>

                  
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -right-8 top-1/4 bg-[#0a0a0a] p-4 rounded-2xl shadow-2xl border border-white/10"
                  >
                    <FiGithub className="text-indigo-400" size={24} />
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1 }}
                    className="absolute -bottom-6 -left-10 bg-indigo-600 text-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(79,70,229,0.4)]"
                  >
                    <p className="text-3xl font-black leading-none">01+</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Years Exp.</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;