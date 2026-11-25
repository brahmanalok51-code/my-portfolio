import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import {
  motion as Motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const expertise = [
  {
    number: "01",
    icon: Braces,
    title: "Full-stack applications",
    description:
      "I build connected web experiences with React, Node.js, Java, and Python—from the first screen to the services behind it.",
    tags: ["React", "Node.js", "Java", "Python"],
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud CRM architecture",
    description:
      "I shape useful business workflows with Salesforce, Apex, and Lightning Web Components.",
    tags: ["Salesforce", "Apex", "LWC"],
  },
  {
    number: "03",
    icon: Database,
    title: "Data systems",
    description:
      "I work across relational and document databases to keep application data reliable, clear, and ready to grow.",
    tags: ["SQL", "PostgreSQL", "MongoDB"],
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI & IoT integrations",
    description:
      "I connect intelligent services and real-world devices to solve practical problems beyond the browser.",
    tags: ["AI", "IoT", "Integrations"],
  },
];

const principles = [
  {
    icon: Lightbulb,
    title: "Understand the problem",
    description:
      "Good engineering starts with listening. I clarify the real need before choosing a tool or writing code.",
  },
  {
    icon: Network,
    title: "Design the whole system",
    description:
      "I consider the interface, services, data, and cloud together so each part works as one product.",
  },
  {
    icon: ShieldCheck,
    title: "Build for the long run",
    description:
      "I value readable code, thoughtful testing, and small decisions that make software easier to maintain.",
  },
];

const credentials = [
  {
    icon: GraduationCap,
    eyebrow: "Education",
    title: "B.Tech in Computer Science",
    detail: "Sharda University",
  },
  {
    icon: BadgeCheck,
    eyebrow: "Certifications",
    title: "Oracle Java, React & Node.js",
    detail: "Certified across software and web technologies",
  },
  {
    icon: Rocket,
    eyebrow: "Production systems",
    title: "Smart Event · LingoAI · HexaWash",
    detail: "Real-world projects across connected product experiences",
  },
];

const stack = [
  "React",
  "Node.js",
  "Java",
  "Python",
  "Salesforce",
  "Apex",
  "LWC",
  "PostgreSQL",
  "MongoDB",
  "AI",
  "IoT",
];

function Home() {
  const { scrollY } = useScroll();
  const photoParallax = useTransform(scrollY, [0, 900], [0, -55]);
  const glowParallax = useTransform(scrollY, [0, 1000], [0, 120]);

  return (
    <div className="theme-page min-h-screen overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar />

      <main>
        <section className="theme-hero relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-28 sm:pt-32 lg:min-h-[850px] lg:pb-24 lg:pt-36">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Motion.div
              style={{ y: glowParallax }}
              animate={{ x: [0, 42, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="theme-glow theme-glow-emerald absolute -left-40 -top-32 h-[28rem] w-[28rem] rounded-full blur-[130px]"
            />
            <Motion.div
              animate={{ x: [0, -45, 0], y: [0, 35, 0] }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="theme-glow theme-glow-indigo absolute -bottom-40 -right-36 h-[34rem] w-[34rem] rounded-full blur-[140px]"
            />
            <div className="theme-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_25%,transparent_100%)]" />
          </div>

          <div className="container relative z-10 mx-auto px-6 lg:px-14">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
              <Motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.13 } },
                }}
                className="lg:col-span-7"
              >
                <Motion.div
                  variants={reveal}
                  className="theme-badge mb-7 inline-flex flex-wrap items-center gap-2.5 rounded-full border px-4 py-2.5"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.16em]">
                    Software Engineer
                    {" "}
                    <span className="theme-accent px-2">·</span>
                    {" "}
                    B.Tech CSE, Sharda University
                  </span>
                </Motion.div>

                <Motion.p
                  variants={reveal}
                  className="theme-muted mb-3 text-xs font-bold uppercase tracking-[0.24em] sm:text-sm"
                >
                  Thoughtful software. Built end to end.
                </Motion.p>

                <Motion.h1
                  variants={reveal}
                  className="theme-primary font-editorial mb-6 max-w-3xl text-[3.4rem] font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.8rem]"
                >
                  Alok Kumar
                  <br />
                  <span className="theme-name-accent italic">Mishra.</span>
                </Motion.h1>

                <Motion.h2
                  variants={reveal}
                  className="theme-primary mb-4 max-w-2xl text-lg font-semibold leading-relaxed sm:text-xl"
                >
                  Software Engineer building scalable end-to-end software
                  systems.
                </Motion.h2>

                <Motion.p
                  variants={reveal}
                  className="theme-secondary mb-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
                >
                  I design and engineer full-stack web applications with React,
                  Node.js, Java, and Python; cloud CRM architecture with
                  Salesforce, Apex, and LWC; and data systems with SQL,
                  PostgreSQL, and MongoDB. I also bring AI and IoT integrations
                  together to solve real-world problems.
                </Motion.p>

                <Motion.div
                  variants={reveal}
                  className="mb-9 flex flex-wrap gap-3"
                >
                  <Motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/projects" className="theme-button-primary group">
                      View Projects
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </Motion.div>
                  <Motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/contact" className="theme-button-secondary group">
                      Let&apos;s Talk
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </Motion.div>
                </Motion.div>

                <Motion.div
                  variants={reveal}
                  className="flex flex-wrap gap-2"
                >
                  {["Full-Stack & Cloud", "Oracle Java Certified", "Real-World Systems"].map(
                    (highlight) => (
                      <span key={highlight} className="theme-highlight-chip">
                        <Sparkles size={13} className="text-emerald-500" />
                        {highlight}
                      </span>
                    ),
                  )}
                </Motion.div>
              </Motion.div>

              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <Motion.div
                  style={{ y: photoParallax }}
                  initial={{ opacity: 0, scale: 0.94, x: 24 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                  className="relative w-full max-w-[25rem] px-4 pb-8 pt-5 sm:px-8"
                >
                  <Motion.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="theme-photo-frame relative rounded-[2rem] border p-2.5 shadow-2xl"
                  >
                    <div className="theme-photo-glow absolute -inset-1 -z-10 rounded-[2.1rem] blur-xl" />
                    <div className="relative h-[27rem] overflow-hidden rounded-[1.55rem] sm:h-[31rem]">
                      <Motion.img
                        src={profile}
                        alt="Alok Kumar Mishra, Software Engineer"
                        whileHover={{ scale: 1.045 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="theme-photo-shade absolute inset-0" />
                      <div className="absolute inset-x-5 bottom-5">
                        <p className="font-editorial text-2xl font-bold text-white sm:text-3xl">
                          Alok Kumar Mishra
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </Motion.div>

                  <Motion.div
                    initial={{ opacity: 0, x: 22, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ delay: 0.85, type: "spring", stiffness: 160 }}
                    whileHover={{ y: -4, rotate: 2 }}
                    className="theme-float-card absolute -right-1 top-10 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl sm:-right-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                      <Code2 size={20} />
                    </span>
                    <span>
                      <span className="theme-primary block text-xs font-bold">
                        Full-Stack & Cloud
                      </span>
                      <span className="theme-secondary mt-1 block text-[10px]">
                        React · Node · Salesforce
                      </span>
                    </span>
                  </Motion.div>

                  <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 150 }}
                    whileHover={{ y: -4 }}
                    className="theme-float-card absolute -bottom-1 left-0 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl sm:-left-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-500">
                      <BadgeCheck size={20} />
                    </span>
                    <span>
                      <span className="theme-primary block text-xs font-bold">
                        Certified foundations
                      </span>
                      <span className="theme-secondary mt-1 block text-[10px]">
                        Oracle Java · React · Node.js
                      </span>
                    </span>
                  </Motion.div>
                </Motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section-border border-y py-5">
          <div className="theme-marquee relative overflow-hidden">
            <Motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max items-center gap-3"
            >
              {[...stack, ...stack].map((technology, index) => (
                <React.Fragment key={`${technology}-${index}`}>
                  <span className="theme-marquee-item">{technology}</span>
                  <span className="text-emerald-500/70">✳</span>
                </React.Fragment>
              ))}
            </Motion.div>
          </div>
        </section>

        <section className="theme-section py-24 sm:py-28 lg:py-32">
          <div className="container mx-auto px-6 lg:px-14">
            <Motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-12 max-w-3xl sm:mb-16"
            >
              <p className="theme-eyebrow mb-4">What I bring to the table</p>
              <h2 className="theme-primary font-editorial text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Engineering across{" "}
                <span className="theme-name-accent italic">the whole stack.</span>
              </h2>
              <p className="theme-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg">
                From the first user interaction to the data and services behind
                it, I connect the pieces that make software useful and ready to
                grow.
              </p>
            </Motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Motion.article
                    key={item.number}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -7, scale: 1.01 }}
                    className="theme-card group rounded-2xl border p-6 sm:p-7"
                  >
                    <div className="mb-9 flex items-start justify-between">
                      <span className="theme-icon-box">
                        <Icon size={22} />
                      </span>
                      <span className="theme-secondary font-editorial text-sm italic">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="theme-primary font-editorial text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="theme-secondary mt-3 min-h-[7rem] text-sm leading-6">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="theme-mini-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="theme-approach-section relative overflow-hidden py-24 sm:py-28 lg:py-32">
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="theme-orbit pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border"
          />
          <div className="container relative z-10 mx-auto px-6 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="lg:col-span-5"
              >
                <p className="theme-eyebrow mb-4">How I think about engineering</p>
                <h2 className="theme-primary font-editorial text-4xl font-bold leading-tight sm:text-5xl">
                  Good software solves the{" "}
                  <span className="theme-name-accent italic">right problem.</span>
                </h2>
                <p className="theme-secondary mt-5 text-base leading-7 sm:text-lg">
                  Tools change. Clear thinking and care for the people using
                  what we build matter every time. I bring both to the work.
                </p>
                <Link to="/about" className="theme-text-link mt-7">
                  More about my approach <ArrowUpRight size={17} />
                </Link>
              </Motion.div>

              <div className="space-y-3 lg:col-span-7">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Motion.article
                      key={principle.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: index * 0.12, duration: 0.55 }}
                      whileHover={{ x: 5 }}
                      className="theme-principle flex gap-4 rounded-2xl border p-5 sm:gap-5 sm:p-6"
                    >
                      <span className="theme-icon-box mt-0.5 shrink-0">
                        <Icon size={21} />
                      </span>
                      <span>
                        <span className="theme-primary font-editorial block text-xl font-bold sm:text-2xl">
                          {principle.title}
                        </span>
                        <span className="theme-secondary mt-2 block text-sm leading-6 sm:text-base">
                          {principle.description}
                        </span>
                      </span>
                    </Motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section py-24 sm:py-28 lg:py-32">
          <div className="container mx-auto px-6 lg:px-14">
            <Motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-12 max-w-3xl"
            >
              <p className="theme-eyebrow mb-4">Grounded in learning, focused on impact</p>
              <h2 className="theme-primary font-editorial text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                A foundation for{" "}
                <span className="theme-name-accent italic">real-world work.</span>
              </h2>
            </Motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <Motion.article
                    key={credential.eyebrow}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="theme-credential-card rounded-2xl border p-6 sm:p-8"
                  >
                    <Icon size={22} className="mb-8 text-emerald-500" />
                    <p className="theme-eyebrow mb-2">{credential.eyebrow}</p>
                    <h3 className="theme-primary font-editorial text-2xl font-bold leading-snug">
                      {credential.title}
                    </h3>
                    <p className="theme-secondary mt-3 text-sm leading-6">
                      {credential.detail}
                    </p>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="theme-last-call px-6 py-20 sm:py-24">
          <Motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 rounded-3xl border p-7 sm:p-10 md:flex-row md:items-center lg:p-14"
          >
            <div>
              <p className="theme-eyebrow mb-3">Have a meaningful problem to solve?</p>
              <h2 className="theme-primary font-editorial max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
                Let&apos;s build something{" "}
                <span className="theme-name-accent italic">that matters.</span>
              </h2>
            </div>
            <Motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="theme-button-primary shrink-0">
                Get in touch <ArrowRight size={17} />
              </Link>
            </Motion.div>
          </Motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
