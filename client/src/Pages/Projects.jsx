import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  MapPin,
  ScanFace,
  Sparkles,
  Ticket,
  WashingMachine,
  X,
} from "lucide-react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const projects = [
  {
    id: "hexawash",
    title: "HexaWash",
    subtitle: "Digital Laundry & IoT Ecosystem",
    categories: ["Full-Stack", "IoT & Hardware"],
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "Supabase",
      "MQTT",
      "IoT Smart Plugs",
      "Tailwind CSS",
    ],
    summary:
      "An end-to-end laundry platform connecting web and mobile experiences with real-time smart-plug telemetry. It supports multi-organization, role-based access, live machine runtime tracking, automated power control, and revenue analytics, and runs on a Linux VPS.",
    liveUrl: "https://hexawash.app/",
    githubUrl: "",
    icon: WashingMachine,
    featured: true,
  },
  {
    id: "multi-tenant-saas",
    title: "Smart Multi-Tenant SaaS",
    subtitle: "Billing & Invoicing System",
    categories: ["Full-Stack", "Enterprise / SaaS"],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase (PostgreSQL)",
      "Nginx",
      "PM2",
      "Tailwind CSS",
    ],
    summary:
      "A multi-tenant billing system that helps businesses manage customers, create GST-ready invoices, and track payments. Row-Level Security keeps each organization’s data isolated.",
    liveUrl: "",
    githubUrl: "https://github.com/brahmanalok51-code/biling_system",
    icon: BriefcaseBusiness,
    featured: true,
  },
  {
    id: "lingoai",
    title: "LingoAI",
    subtitle: "AI English Speaking & Grammar Mentor",
    categories: ["AI & ML", "Full-Stack"],
    tech: [
      "React.js",
      "Node.js",
      "Groq LLM API",
      "Web Speech API (TTS/STT)",
      "MongoDB",
      "Tailwind CSS",
    ],
    summary:
      "A conversational voice tutor for spoken English practice, with speech-to-text, natural audio playback, grammar corrections, and a tiered vocabulary builder.",
    liveUrl: "https://lunarcodetech.netlify.app/",
    githubUrl: "",
    icon: BrainCircuit,
    featured: true,
  },
  {
    id: "smart-event",
    title: "Smart Event",
    subtitle: "Event Management & Ticketing System",
    categories: ["Enterprise / SaaS", "Full-Stack"],
    tech: [
      "Salesforce Apex",
      "Lightning Web Components (LWC)",
      "Node.js",
      "REST API",
      "OAuth 2.0",
      "LMS",
    ],
    summary:
      "A Salesforce and Node.js ticketing platform with LWC dashboards, Apex triggers for seat capacity, QR ticket generation, and OAuth 2.0 verification through a Node.js service.",
    liveUrl: "",
    githubUrl: "",
    icon: Ticket,
    featured: false,
  },
  {
    id: "neardo",
    title: "NearDo",
    subtitle: "Neighborhood Task & Bounty Mobile App",
    categories: ["Full-Stack"],
    tech: [
      "React.js",
      "Capacitor",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "Tailwind CSS",
    ],
    summary:
      "A local task platform where neighbors can post, discover, and complete everyday jobs. It includes cross-platform mobile support, real-time notifications, feedback modals, and secure sign-in.",
    liveUrl: "",
    githubUrl: "",
    icon: MapPin,
    featured: false,
  },
  {
    id: "ytschool",
    title: "YTSchool",
    subtitle: "AI Video Learning Workspace",
    categories: ["AI & ML", "Full-Stack"],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "YouTube API",
      "Mind Maps",
      "Tailwind CSS",
    ],
    summary:
      "A focused study space that turns YouTube lectures into learning modules with mind maps, notes, flashcards, quizzes, and English or Hindi learning controls.",
    liveUrl: "https://ytschool.com/",
    githubUrl: "",
    icon: Globe2,
    featured: false,
  },
  {
    id: "lunarcode",
    title: "LunarCode",
    subtitle: "Corporate Tech Platform & Blog CMS",
    categories: ["Full-Stack"],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SEO Architecture",
      "Linux VPS",
      "Nginx",
    ],
    summary:
      "A corporate website and full-stack blog CMS with a rich article editor, SEO controls, secure admin sign-in, rate-limited APIs, and production deployment on a Linux VPS.",
    liveUrl: "https://lunarcode.tech/",
    githubUrl: "",
    icon: Code2,
    featured: false,
  },
  {
    id: "dermscan-pro",
    title: "DermScan Pro AI",
    subtitle: "Deep Learning Skin Image Analysis",
    categories: ["AI & ML"],
    tech: [
      "Python",
      "TensorFlow / Keras",
      "CNN",
      "Streamlit",
      "Computer Vision",
      "NumPy",
    ],
    summary:
      "A medical image analysis application using the custom skin_cancer_cnn.h5 convolutional neural network to classify skin lesion images and present structured probability reports.",
    liveUrl: "",
    githubUrl:
      "https://github.com/brahmanalok51-code/smart_skin_cancer_detection",
    icon: ScanFace,
    featured: false,
  },
];

const categories = [
  "All",
  "Full-Stack",
  "AI & ML",
  "IoT & Hardware",
  "Enterprise / SaaS",
];

const isConfiguredUrl = (url) =>
  typeof url === "string" && url.startsWith("https://");

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openProjectDetails = (project) => setSelectedProject(project);

  return (
    <div className="theme-page theme-projects-page min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Motion.div
          animate={{ x: [0, 40, 0], y: [0, 35, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="theme-project-glow theme-project-glow-a absolute -left-40 -top-32 h-[32rem] w-[32rem] rounded-full blur-[130px]"
        />
        <Motion.div
          animate={{ x: [0, -35, 0], y: [0, -25, 0] }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="theme-project-glow theme-project-glow-b absolute -bottom-40 -right-36 h-[34rem] w-[34rem] rounded-full blur-[140px]"
        />
        <div className="theme-project-grid absolute inset-0" />
      </div>

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-32 sm:pt-36 lg:px-14 lg:pb-28 lg:pt-30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <Motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                <p className="theme-project-eyebrow mb-5 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="h-px w-8 bg-[var(--theme-accent)]" />
                  Selected work · software engineering
                  <span className="h-px w-8 bg-[var(--theme-accent)] lg:hidden" />
                </p>
                <h1 className="theme-primary font-editorial text-center text-6xl font-bold leading-[0.94] tracking-tight sm:text-7xl lg:text-left lg:text-8xl">
                  Projects
                  <br />
                  <span className="theme-project-title-accent italic">
                    built to matter.
                  </span>
                </h1>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="lg:justify-self-end lg:pb-2"
              >
                <p className="theme-secondary mx-auto max-w-xl text-center text-base leading-7 sm:text-lg lg:mx-0 lg:text-right">
                  A collection of end-to-end products across full-stack
                  engineering, AI, connected devices, and enterprise systems.
                </p>
                <div className="mt-5 flex justify-center gap-3 lg:justify-end">
                  <span className="theme-project-stat">
                    <Sparkles size={14} className="text-[var(--theme-accent)]" />
                    {projects.length} projects
                  </span>
                  <span className="theme-project-stat">
                    <Cpu size={14} className="text-[var(--theme-accent)]" />
                    4 disciplines
                  </span>
                </div>
              </Motion.div>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="theme-project-toolbar mb-8 flex flex-col gap-4 rounded-2xl border p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4"
            >
              <div
                role="group"
                aria-label="Filter projects by category"
                className="flex flex-wrap justify-center gap-2 sm:justify-start"
              >
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <Motion.button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      aria-pressed={isActive}
                      className={`theme-project-filter relative isolate rounded-xl px-3.5 py-2.5 text-xs font-bold transition-colors sm:px-4 ${
                        isActive ? "theme-project-filter-active" : ""
                      }`}
                    >
                      {isActive && (
                        <Motion.span
                          layoutId="active-project-filter"
                          className="theme-project-filter-pill absolute inset-0 -z-10 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      )}
                      {category}
                    </Motion.button>
                  );
                })}
              </div>
              <p
                aria-live="polite"
                className="theme-project-count text-center text-xs font-semibold sm:pr-2 sm:text-right"
              >
                Showing{" "}
                <span className="theme-accent">{filteredProjects.length}</span>{" "}
                of {projects.length}
              </p>
            </Motion.div>

            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project, index) => {
                  const ProjectIcon = project.icon;
                  const hasLiveDemo = isConfiguredUrl(project.liveUrl);
                  const hasSourceCode = isConfiguredUrl(project.githubUrl);
                  const primaryUrl = hasLiveDemo
                    ? project.liveUrl
                    : hasSourceCode
                      ? project.githubUrl
                      : "";

                  return (
                    <Motion.article
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.12 }}
                      exit={{ opacity: 0, y: 14, scale: 0.96 }}
                      transition={{
                        layout: { type: "spring", stiffness: 360, damping: 32 },
                        opacity: { duration: 0.32, delay: (index % 3) * 0.07 },
                        y: { duration: 0.42, delay: (index % 3) * 0.07 },
                      }}
                      whileHover={{
                        y: -8,
                        rotateX: 1.5,
                        rotateY: -1.5,
                        transition: { duration: 0.2 },
                      }}
                      style={{ transformPerspective: 1000 }}
                      className="theme-project-card group relative flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border p-4 sm:p-5"
                    >
                      <Motion.div
                        aria-hidden="true"
                        className="theme-project-card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <Motion.div
                            whileHover={{ rotate: -7, scale: 1.06 }}
                            className="theme-project-icon flex h-12 w-12 items-center justify-center rounded-2xl border"
                          >
                            <ProjectIcon size={22} />
                          </Motion.div>
                          <div className="flex flex-wrap justify-end gap-2">
                            {project.featured && (
                              <span className="theme-project-status theme-project-status-featured">
                                <Sparkles size={12} />
                                Featured
                              </span>
                            )}
                            {hasLiveDemo && (
                              <span className="theme-project-status theme-project-status-live">
                                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                Live
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="mb-2 flex flex-wrap gap-1.5">
                            {project.categories.map((category) => (
                              <span
                                key={category}
                                className="theme-project-category"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                          <h2 className="theme-primary font-editorial text-2xl font-bold leading-tight tracking-tight sm:text-[1.65rem]">
                            {project.title}
                          </h2>
                          <p className="theme-project-subtitle mt-1 text-sm font-semibold">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="theme-secondary theme-project-summary mb-4 text-sm leading-5">
                          {project.summary}
                        </p>

                        <div className="mb-4">
                          <p className="theme-project-label mb-2">
                            Built with
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((technology, techIndex) => (
                              <Motion.span
                                key={technology}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.25,
                                  delay: Math.min(techIndex * 0.035, 0.2),
                                }}
                                whileHover={{ y: -2 }}
                                className="theme-project-tech rounded-lg border px-2.5 py-1.5 text-[10px] font-semibold sm:text-[11px]"
                              >
                                {technology}
                              </Motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="theme-project-actions mt-auto flex items-center gap-2 border-t pt-4">
                          {primaryUrl ? (
                            <a
                              href={primaryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-project-action theme-project-action-primary"
                            >
                              {hasLiveDemo ? "Live Demo" : "View Source"}{" "}
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={() => openProjectDetails(project)}
                              className="theme-project-action theme-project-action-primary"
                            >
                              Quick View <ArrowUpRight size={15} />
                            </button>
                          )}
                          {hasSourceCode && hasLiveDemo ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-project-action theme-project-action-secondary"
                            >
                              <Github size={14} /> Source
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={() => openProjectDetails(project)}
                              className="theme-project-action theme-project-action-secondary"
                            >
                              Details <ArrowRight size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </Motion.article>
                  );
                })}
              </AnimatePresence>
            </div>

            <Motion.section
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="theme-project-cta mt-16 rounded-[2rem] border px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14"
            >
              <p className="theme-project-eyebrow mb-3">Have a challenge in mind?</p>
              <h2 className="theme-primary font-editorial text-3xl font-bold sm:text-4xl">
                Let&apos;s make it work.
              </h2>
              <p className="theme-secondary mx-auto mb-7 mt-3 max-w-lg text-sm leading-6 sm:text-base">
                I enjoy turning complex ideas into clear, reliable software.
                Tell me what you are working on.
              </p>
              <Motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="theme-project-contact">
                  Start a conversation <ArrowRight size={16} />
                </Link>
              </Motion.div>
            </Motion.section>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            key="project-quick-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="theme-project-modal-backdrop fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <Motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="theme-project-modal relative my-auto w-full max-w-2xl rounded-3xl border p-6 shadow-2xl sm:p-9"
            >
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
                className="theme-project-modal-close absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border transition-transform hover:rotate-90 sm:right-6 sm:top-6"
              >
                <X size={18} />
              </button>

              <p className="theme-project-eyebrow mb-3 pr-12">
                Project details
              </p>
              <h2
                id="project-dialog-title"
                className="theme-primary font-editorial pr-10 text-3xl font-bold sm:text-4xl"
              >
                {selectedProject.title}
              </h2>
              <p className="theme-project-subtitle mt-2 text-sm font-semibold sm:text-base">
                {selectedProject.subtitle}
              </p>
              <p className="theme-secondary mt-6 text-sm leading-7 sm:text-base">
                {selectedProject.summary}
              </p>

              <div className="mt-7">
                <p className="theme-project-label mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.categories.map((category) => (
                    <span key={category} className="theme-project-category">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="theme-project-label mb-3">Technology stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((technology) => (
                    <span key={technology} className="theme-project-tech">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--theme-border)] pt-6">
                {isConfiguredUrl(selectedProject.liveUrl) && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-project-action theme-project-action-primary"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {isConfiguredUrl(selectedProject.githubUrl) && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-project-action theme-project-action-secondary"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
                {!isConfiguredUrl(selectedProject.liveUrl) &&
                  !isConfiguredUrl(selectedProject.githubUrl) && (
                    <span className="theme-project-detail-note inline-flex items-center gap-2 text-sm">
                      <Check size={15} />
                      Project links will be available soon.
                    </span>
                  )}
              </div>
            </Motion.section>
          </Motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Projects;
