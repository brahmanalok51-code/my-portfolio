import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Mail, Phone, Github, Linkedin, Send, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      alert("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />

      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      <section className="relative z-10 pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            
            <div className="lg:w-2/5 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 text-indigo-400 font-bold tracking-[0.3em] text-xs uppercase">
                  <div className="h-1 w-8 bg-indigo-500 rounded-full" />
                  Availability: Open for Projects
                </div>
                <h1 className="text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                  LET'S <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">CONNECT</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Have a vision? I have the code. Whether it's a full-stack system or a quick technical consult, I'm just a message away.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6 border-l border-white/10 pl-8"
              >
                <ContactLink icon={<Mail size={18} />} title="Email Me" detail="brahmanalok51@gmail.com" href="mailto:brahmanalok51@gmail.com" />
                <ContactLink icon={<Phone size={18} />} title="Call Me" detail="+91 9142316341" href="tel:+919142316341" />
                <ContactLink icon={<MapPin size={18} />} title="Location" detail="India, Remote" href="#" />
              </motion.div>

              <div className="flex gap-4 pt-4">
                <SocialIcon icon={<Github size={20} />} href="https://github.com/brahmanalok51-code" color="hover:text-white" />
                <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/alok-mishra-46aa7429b" color="hover:text-blue-400" />
              </div>
            </div>

          
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5 w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl">
          
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <input
                        type="text" id="name" required value={formData.name} onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 outline-none focus:border-indigo-500 transition-all text-white placeholder-transparent"
                        placeholder="Name"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-5 text-indigo-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-indigo-400 peer-focus:text-xs">
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email" id="email" required value={formData.email} onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 outline-none focus:border-purple-500 transition-all text-white placeholder-transparent"
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-5 text-purple-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-purple-400 peer-focus:text-xs">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message" required rows="4" value={formData.message} onChange={handleChange}
                      className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 outline-none focus:border-pink-500 transition-all text-white placeholder-transparent resize-none"
                      placeholder="Message"
                    />
                    <label htmlFor="message" className="absolute left-0 -top-5 text-pink-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-pink-400 peer-focus:text-xs">
                      How can I help?
                    </label>
                  </div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full overflow-hidden group/btn bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all"
                  >
                    <div className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-500 ease-out group-hover/btn:w-full"></div>
                    <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-white transition-colors uppercase tracking-widest text-xs">
                      {isSubmitting ? "Transmitting..." : "Send Message"} 
                      {!isSubmitting && <Send size={16} />}
                    </span>
                  </motion.button>
                </form>

                
                <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                  <Sparkles size={200} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


function ContactLink({ icon, title, detail, href }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{title}</p>
        <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">{detail}</p>
      </div>
    </a>
  );
}

function SocialIcon({ icon, href, color }) {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={href}
      target="_blank"
      className={`p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-500 ${color} transition-all duration-300 backdrop-blur-md`}
    >
      {icon}
    </motion.a>
  );
}