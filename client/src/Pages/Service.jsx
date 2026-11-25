import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  Cloud,
  Code2,
  Network,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Engineering",
    icon: <Code2 size={24} strokeWidth={1.8} />,
    description:
      "I design and build fast, scalable web applications with clean, responsive interfaces and reliable database architectures.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Tailwind CSS",
    ],
    highlights: [
      "Responsive UI/UX",
      "Secure authentication",
      "Multi-tenant SaaS architecture",
      "SEO-ready production builds",
    ],
  },
  {
    number: "02",
    title: "Salesforce Cloud & CRM Architecture",
    icon: <Cloud size={24} strokeWidth={1.8} />,
    description:
      "I develop custom Salesforce solutions and automated workflows that streamline business operations and connect with external platforms.",
    technologies: [
      "Apex Triggers",
      "Lightning Web Components (LWC)",
      "Flows",
      "SOQL/SOSL",
      "REST API",
      "OAuth 2.0",
    ],
    highlights: [
      "Custom LWC dashboards",
      "Bulkified backend logic",
      "Declarative admin setup",
      "Third-party integrations",
    ],
  },
  {
    number: "03",
    title: "Backend API & System Integration",
    icon: <Network size={24} strokeWidth={1.8} />,
    description:
      "I engineer high-performance microservices, secure REST APIs, payment gateways, and real-time IoT communication pipelines.",
    technologies: [
      "Node.js",
      "Java",
      "Python",
      "REST APIs",
      "MQTT",
      "Linux VPS",
      "Nginx",
      "PM2",
    ],
    highlights: [
      "Scalable API architecture",
      "Role-based access control",
      "Razorpay / Stripe payments",
      "Reliable cloud deployment",
    ],
  },
  {
    number: "04",
    title: "AI-Powered Web Solutions",
    icon: <Brain size={24} strokeWidth={1.8} />,
    description:
      "I bring modern language models, voice interactions, and intelligent automation into practical web applications.",
    technologies: [
      "Groq / LLM APIs",
      "Web Speech API (TTS/STT)",
      "Python",
      "TensorFlow",
      "React.js",
    ],
    highlights: [
      "Conversational voice tutors",
      "Automated grammar engines",
      "Intelligent content tools",
      "Interactive user workflows",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Architecture & Planning",
    description: "Clarify goals, users, and technical foundations.",
  },
  {
    number: "02",
    title: "Clean Development",
    description: "Build reliable features with maintainable code.",
  },
  {
    number: "03",
    title: "Testing & Optimization",
    description: "Improve quality, performance, and user experience.",
  },
  {
    number: "04",
    title: "Cloud Deployment",
    description: "Ship securely and prepare the system to scale.",
  },
];

const revealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 95, damping: 18 },
  },
};

export default function Services() {
  return (
    <div className="theme-page relative min-h-screen overflow-hidden">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--theme-glow-indigo)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="theme-grid pointer-events-none absolute inset-x-0 top-0 h-[48rem] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <main className="relative">
        <section className="px-6 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-10 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <Motion.div
              variants={revealContainer}
              initial="hidden"
              animate="visible"
              className="mb-14 max-w-4xl sm:mb-16"
            >
              <Motion.div
                variants={revealItem}
                className="theme-badge mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              >
                <Sparkles
                  size={15}
                  className="theme-accent"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Software Engineering Capabilities
                </span>
              </Motion.div>

              <Motion.h1
                variants={revealItem}
                className="theme-primary mb-6 font-editorial text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Software Engineering{" "}
                <span className="theme-name-accent">Capabilities &amp; Solutions</span>
              </Motion.h1>

              <Motion.p
                variants={revealItem}
                className="theme-secondary max-w-3xl text-base leading-7 sm:text-lg sm:leading-8"
              >
                I turn product goals into reliable software—from responsive
                full-stack applications and Salesforce systems to connected
                services and practical AI experiences.
              </Motion.p>
            </Motion.div>

            <Motion.div
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:gap-7"
            >
              {services.map((service) => (
                <Motion.article
                  key={service.number}
                  variants={cardReveal}
                  whileHover={{
                    y: -7,
                    transition: { type: "spring", stiffness: 320, damping: 22 },
                  }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative h-full rounded-[1.65rem] bg-gradient-to-br from-emerald-500/35 via-indigo-500/10 to-cyan-500/30 p-px"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.65rem-1px)] border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-[0_16px_45px_var(--theme-shadow)] transition-colors duration-300 sm:p-8">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-[var(--theme-glow-emerald)] opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                    />

                    <div className="relative mb-6 flex items-start justify-between gap-4">
                      <Motion.div
                        whileHover={{ rotate: 7, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300, damping: 16 }}
                        className="theme-accent flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-soft)]"
                      >
                        {service.icon}
                      </Motion.div>
                      <span className="theme-secondary font-editorial text-3xl font-bold opacity-60 transition-opacity group-hover:opacity-100">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="theme-primary relative mb-3 font-editorial text-2xl font-bold leading-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="theme-secondary relative mb-6 text-sm leading-7 sm:text-base">
                      {service.description}
                    </p>

                    <div className="relative mb-6">
                      <h3 className="theme-primary mb-3 text-[10px] font-black uppercase tracking-[0.17em]">
                        Key deliverables &amp; technology
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((technology) => (
                          <Motion.span
                            key={technology}
                            whileHover={{ y: -2, scale: 1.03 }}
                            className="theme-secondary rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface-soft)] px-2.5 py-1.5 text-[11px] font-semibold"
                          >
                            {technology}
                          </Motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-auto border-t border-[var(--theme-border)] pt-5">
                      <h3 className="theme-primary mb-3 text-[10px] font-black uppercase tracking-[0.17em]">
                        What you can expect
                      </h3>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="theme-secondary flex items-start gap-2 text-xs leading-5"
                          >
                            <Check
                              size={14}
                              className="theme-accent mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>

            <Motion.section
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              className="mt-24 sm:mt-28"
            >
              <Motion.div variants={revealItem} className="mb-8 max-w-2xl">
                <p className="theme-accent mb-3 text-[11px] font-black uppercase tracking-[0.2em]">
                  A clear path from idea to launch
                </p>
                <h2 className="theme-primary font-editorial text-3xl font-bold sm:text-4xl">
                  How I work
                </h2>
              </Motion.div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {workflow.map((step) => (
                  <Motion.div
                    key={step.number}
                    variants={revealItem}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 transition-shadow hover:shadow-[0_12px_30px_var(--theme-shadow)] sm:p-6"
                  >
                    <span className="theme-accent mb-4 block font-editorial text-2xl font-bold">
                      {step.number}
                    </span>
                    <h3 className="theme-primary mb-2 text-sm font-bold">
                      {step.title}
                    </h3>
                    <p className="theme-secondary text-xs leading-6">
                      {step.description}
                    </p>
                  </Motion.div>
                ))}
              </div>
            </Motion.section>

            <Motion.section
              variants={revealItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              className="relative mt-20 overflow-hidden rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-surface)] px-6 py-10 shadow-[0_18px_55px_var(--theme-shadow)] sm:mt-24 sm:px-10 sm:py-14 lg:px-16"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[var(--theme-glow-indigo)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-36 left-1/4 h-64 w-64 rounded-full bg-[var(--theme-glow-emerald)] blur-3xl"
              />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="theme-accent mb-3 text-[11px] font-black uppercase tracking-[0.2em]">
                    Have a challenge in mind?
                  </p>
                  <h2 className="theme-primary mb-4 font-editorial text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Let&apos;s build something that works—and lasts.
                  </h2>
                  <p className="theme-secondary text-sm leading-7 sm:text-base">
                    Tell me what you are planning. We can shape the right
                    solution, agree on the next steps, and get started.
                  </p>
                </div>

                <Motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="shrink-0"
                >
                  <Link
                    to="/contact"
                    className="theme-button-primary rounded-xl px-5 py-3 text-sm font-bold"
                  >
                    Contact / Hire Me
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Motion.div>
              </div>
            </Motion.section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
