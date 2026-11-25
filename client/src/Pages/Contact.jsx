import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="theme-page theme-contact-page min-h-screen overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar />

      <div
        aria-hidden="true"
        className="theme-contact-background pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <Motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, 25, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="theme-contact-glow theme-contact-glow-a absolute -left-20 top-0 h-96 w-96 rounded-full blur-[120px]"
        />
        <Motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="theme-contact-glow theme-contact-glow-b absolute bottom-0 right-0 h-96 w-96 rounded-full blur-[125px]"
        />
        <div className="theme-contact-grid absolute inset-0" />
      </div>

      <section className="relative z-10 px-6 pb-20 pt-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
            <div className="space-y-8 lg:w-2/5 lg:space-y-9">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <div className="theme-contact-eyebrow flex items-center gap-2 font-bold uppercase tracking-[0.22em]">
                  <span className="h-1 w-8 rounded-full bg-[var(--theme-accent)]" />
                  Availability: Open for Projects
                </div>
                <h1 className="theme-primary font-editorial text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
                  LET&apos;S
                  <br />
                  <span className="theme-name-accent italic">CONNECT</span>
                </h1>
                <p className="theme-secondary max-w-md text-base leading-relaxed sm:text-[17px]">
                  Have a vision? I have the code. Whether it&apos;s a full-stack
                  system or a quick technical consult, I&apos;m just a message
                  away.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="theme-contact-links space-y-4 border-l pl-5 sm:pl-6"
              >
                <ContactLink
                  icon={<Mail size={17} />}
                  title="Email Me"
                  detail="brahmanalok51@gmail.com"
                  href="mailto:brahmanalok51@gmail.com"
                />
                <ContactLink
                  icon={<Phone size={17} />}
                  title="Call Me"
                  detail="+91 9142316341"
                  href="tel:+919142316341"
                />
                <ContactLink
                  icon={<MapPin size={17} />}
                  title="Location"
                  detail="India, Remote"
                  href="#"
                />
              </Motion.div>

              <div className="flex gap-3 pt-1">
                <SocialIcon
                  icon={<Github size={18} />}
                  href="https://github.com/brahmanalok51-code"
                  label="GitHub"
                />
                <SocialIcon
                  icon={<Linkedin size={18} />}
                  href="https://www.linkedin.com/in/alok-mishra-46aa7429b"
                  label="LinkedIn"
                />
              </div>
            </div>

            <Motion.div
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="group relative w-full lg:w-3/5"
            >
              <div className="theme-contact-card-glow absolute -inset-1 rounded-[2rem] blur transition duration-700 group-hover:opacity-90" />
              <div className="theme-contact-card relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="theme-contact-input peer w-full border-b-2 bg-transparent py-3 text-sm outline-none transition-all placeholder-transparent focus:border-[var(--theme-accent)]"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="name"
                        className="theme-contact-label absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[var(--theme-secondary)] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--theme-accent)]"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="theme-contact-input peer w-full border-b-2 bg-transparent py-3 text-sm outline-none transition-all placeholder-transparent focus:border-[var(--theme-accent)]"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="theme-contact-label absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[var(--theme-secondary)] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--theme-accent)]"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="theme-contact-input peer w-full resize-none border-b-2 bg-transparent py-3 text-sm outline-none transition-all placeholder-transparent focus:border-[var(--theme-accent)]"
                      placeholder="Message"
                    />
                    <label
                      htmlFor="message"
                      className="theme-contact-label absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[var(--theme-secondary)] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--theme-accent)]"
                    >
                      How can I help?
                    </label>
                  </div>

                  <Motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="theme-contact-submit group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl py-4 font-black transition-all disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="theme-contact-submit-wash absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover/btn:w-full" />
                    <span className="relative z-10 flex items-center gap-2 text-[11px] uppercase tracking-widest transition-colors group-hover/btn:text-white">
                      {isSubmitting ? "Transmitting..." : "Send Message"}
                      {!isSubmitting && <Send size={15} />}
                    </span>
                  </Motion.button>
                </form>

                <div className="theme-contact-decoration pointer-events-none absolute -bottom-5 -right-5">
                  <Sparkles size={170} />
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactLink({ icon, title, detail, href }) {
  return (
    <a href={href} className="theme-contact-link group flex items-center gap-3.5">
      <span className="theme-contact-link-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="theme-contact-link-title block text-[9px] font-black uppercase tracking-widest">
          {title}
        </span>
        <span className="theme-contact-link-detail mt-0.5 block break-all text-sm font-medium transition-colors">
          {detail}
        </span>
      </span>
    </a>
  );
}

function SocialIcon({ icon, href, label }) {
  return (
    <Motion.a
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="theme-contact-social flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-200"
    >
      {icon}
    </Motion.a>
  );
}
