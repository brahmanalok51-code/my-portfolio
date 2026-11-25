import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowUp,
  Code2,
  Github,
  Heart,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/brahmanalok51-code",
    icon: <Github size={18} aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alok-mishra-46aa7429b",
    icon: <Linkedin size={18} aria-hidden="true" />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/brahmanalok51/",
    icon: <Code2 size={18} aria-hidden="true" />,
  },
  {
    label: "Email",
    href: "mailto:brahmanalok51@gmail.com",
    icon: <Mail size={18} aria-hidden="true" />,
  },
];

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/Projects" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact" },
];

const footerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, staggerChildren: 0.12 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={footerVariants}
      className="relative mt-20 overflow-hidden border-t border-[var(--theme-border)] bg-[var(--theme-page-raised)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[var(--theme-glow-indigo)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-[var(--theme-glow-emerald)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--theme-border)] pb-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          <Motion.section
            variants={sectionVariants}
            className="md:col-span-5"
          >
            <Motion.h2
              variants={itemVariants}
              className="theme-primary mb-4 font-editorial text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Alok Kumar Mishra<span className="theme-accent">.</span>
            </Motion.h2>
            <Motion.p
              variants={itemVariants}
              className="theme-secondary mb-6 max-w-md text-sm leading-7"
            >
              Software Engineer building reliable, scalable software across
              full-stack web, cloud, and intelligent systems.
            </Motion.p>

            <Motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map(({ label, href, icon }) => (
                <Motion.a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                  title={label}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: "0 10px 24px var(--theme-glow-emerald)",
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="theme-secondary flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-soft)] transition-colors hover:text-[var(--theme-accent)]"
                >
                  {icon}
                </Motion.a>
              ))}
            </Motion.div>
          </Motion.section>

          <Motion.nav
            variants={sectionVariants}
            aria-label="Footer navigation"
            className="md:col-span-3"
          >
            <Motion.h3
              variants={itemVariants}
              className="theme-primary mb-5 text-xs font-black uppercase tracking-[0.2em]"
            >
              Explore
            </Motion.h3>
            <Motion.ul variants={sectionVariants} className="space-y-3">
              {footerLinks.map(({ label, to }) => (
                <Motion.li
                  key={label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={to}
                    className="theme-secondary inline-flex py-1 text-sm font-medium transition-colors hover:text-[var(--theme-accent)]"
                  >
                    {label}
                  </Link>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.nav>

          <Motion.section
            variants={sectionVariants}
            className="md:col-span-4"
          >
            <Motion.h3
              variants={itemVariants}
              className="theme-primary mb-5 text-xs font-black uppercase tracking-[0.2em]"
            >
              Current Status
            </Motion.h3>
            <Motion.div
              variants={itemVariants}
              className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 shadow-[0_12px_35px_var(--theme-shadow)]"
            >
              <div className="mb-3 flex items-start gap-3">
                <Motion.span
                  aria-hidden="true"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
                />
                <p className="theme-primary text-sm font-semibold leading-6">
                  Available for Software Engineering Opportunities
                </p>
              </div>
              <p className="theme-secondary text-xs leading-6">
                Open to building thoughtful products and solving real-world
                engineering challenges.
              </p>
            </Motion.div>

            <Motion.button
              variants={itemVariants}
              type="button"
              onClick={handleBackToTop}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="theme-button-secondary mt-4 min-h-0 rounded-xl px-4 py-2.5 text-xs font-bold"
            >
              Back to Top
              <ArrowUp size={15} aria-hidden="true" />
            </Motion.button>
          </Motion.section>
        </div>

        <Motion.div
          variants={sectionVariants}
          className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left"
        >
          <p className="theme-secondary flex items-center gap-2 text-xs">
            <span>© {currentYear}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Made with</span>
            <Heart
              size={12}
              aria-label="love"
              className="fill-rose-500 text-rose-500"
            />
            <span>in India</span>
          </p>
          <p className="theme-secondary flex items-center gap-2 text-xs">
            <Code2 size={14} aria-hidden="true" />
            <span>Software Engineer · Alok</span>
          </p>
        </Motion.div>
      </div>
    </Motion.footer>
  );
}
