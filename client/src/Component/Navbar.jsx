import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/Projects" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "pt-4 px-4 lg:px-10" 
          : "pt-0 px-0"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          scrolled 
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          
         
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm transition-transform group-hover:rotate-12">
              AK
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
              Alok<span className="text-indigo-500">.</span>
            </span>
          </NavLink>

        
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-2 mr-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {link.name}
                   
                    <NavLink to={link.path}>
                      {({ isActive }) => isActive && (
                        <motion.div 
                          layoutId="nav-underline"
                          className="h-[2px] bg-indigo-500 mt-0.5 mx-auto w-4 rounded-full" 
                        />
                      )}
                    </NavLink>
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-lg shadow-white/5"
            >
              Hire Me
            </NavLink>
          </div>

        
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 backdrop-blur-2xl rounded-2xl p-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-bold text-slate-300 hover:text-white px-2"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-indigo-600 rounded-xl text-white font-black"
                >
                  CONTACT ME
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;