import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  const themeToggle = (
    <Motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className="theme-toggle relative flex h-8 w-[3.25rem] shrink-0 items-center rounded-full border p-1"
    >
      <Motion.span
        animate={{ x: theme === "light" ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="theme-toggle-thumb absolute left-1 flex h-6 w-6 items-center justify-center rounded-full shadow-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <Motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -35, scale: 0.65 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 35, scale: 0.65 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            {theme === "dark" ? <Moon size={13} /> : <Sun size={13} />}
          </Motion.span>
        </AnimatePresence>
      </Motion.span>
      <span className="sr-only">Toggle color theme</span>
    </Motion.button>
  );

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "px-4 pt-3 sm:px-6 lg:px-10" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? "theme-header-surface rounded-2xl border shadow-xl backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-5 sm:px-7 lg:h-20 lg:px-10">
          <NavLink to="/" className="group flex items-center gap-3">
            <Motion.span
              whileHover={{ rotate: 12, scale: 1.07 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 text-sm font-black text-white shadow-lg shadow-emerald-500/20"
            >
              AK
            </Motion.span>
            <span className="theme-primary font-editorial text-xl font-bold tracking-wide">
              Alok<span className="text-emerald-500">.</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `theme-nav-link relative rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-0.5 sm:px-4 ${
                        isActive ? "theme-nav-link-active" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <Motion.span
                            layoutId="nav-indicator"
                            className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-emerald-500"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            {themeToggle}
            <NavLink
              to="/contact"
              className="theme-header-cta rounded-xl px-5 py-3 text-xs font-black uppercase tracking-[0.16em] shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Hire Me
            </NavLink>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {themeToggle}
            <Motion.button
              type="button"
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="theme-primary rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </Motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="theme-mobile-menu absolute left-4 right-4 top-[4.75rem] rounded-2xl border p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `theme-mobile-link block rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
                        isActive ? "theme-nav-link-active" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-[var(--theme-border)] pt-3">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="theme-header-cta block rounded-xl py-3.5 text-center text-[13px] font-black uppercase tracking-[0.16em] transition-transform active:scale-95"
                >
                  Hire Me
                </NavLink>
              </li>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
