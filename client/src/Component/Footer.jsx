import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#050505]">
  
      <div className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            
         
            <div className="md:col-span-5">
              <h2 className="text-2xl font-black tracking-tighter text-white mb-8">
                ALOK<span className="text-indigo-500"> </span>MISHRA
              </h2>
              <p className="text-slate-500 leading-relaxed max-w-sm mb-8">
                Merging technical precision with creative vision to build the next generation of web experiences. 
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/brahmanalok51-code" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/alok-mishra-46aa7429b" },
                  { icon: <Mail size={20} />, href: "mailto:brahmanalok51@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="p-4 rounded-xl bg-white/5 text-slate-300 border border-white/5 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

        
            <div className="md:col-span-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">
                Sitemap
              </h3>
              <ul className="space-y-4">
                {["Home", "About", "Projects", "Service", "Contact"].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                      className="text-slate-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

        
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">
                Current Status
              </h3>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-bold text-slate-200">Available for Work</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  I'm currently looking for new challenges in the MERN ecosystem. If you have a project, let's connect.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <span>© {currentYear}</span>
              <div className="h-1 w-1 rounded-full bg-slate-700" />
              <span>Made with</span>
              <Heart size={12} className="text-rose-500 fill-rose-500" />
              <span>in India</span>
            </div>
            
            <div className="flex gap-8">
              <button className="text-[10px] font-black text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Privacy</button>
              <button className="text-[10px] font-black text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Terms</button>
              <button className="text-[10px] font-black text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}