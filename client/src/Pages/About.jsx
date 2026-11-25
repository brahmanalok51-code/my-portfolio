import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BookOpen,
  BriefcaseBusiness,
  Brush,
  CalendarDays,
  Check,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Headphones,
  Heart,
  Languages,
  Lightbulb,
  Linkedin,
  MapPin,
  Monitor,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const experience = [
  {
    role: "Full Stack Developer",
    organization: "LunarCode",
    link: "https://lunarcode.tech",
    period: "March 2026 – September 2026",
    type: "Professional experience",
    icon: BriefcaseBusiness,
    highlights: [
      "Architected modular full-stack applications and backend microservices with React, Node.js, Express, MongoDB, and Tailwind CSS.",
      "Built reusable, responsive UI components for the LunarCode corporate platform and custom Blog CMS, improving performance and automating client workflows.",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "Aplus IT · Delhi",
    link: "",
    period: "2 Months",
    type: "Internship",
    icon: Monitor,
    highlights: [
      "Designed, developed, and deployed the official company website, delivering a responsive, modern web presence with clean UI/UX and optimized performance.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sharda University · Greater Noida",
    period: "2022 – 2026",
    result: "CGPA · 7.5 / 10",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary · Class 12th / Intermediate",
    institution: "Foundation School · Buxar",
    period: "2019 – 2021",
    result: "Percentage · 67%",
    icon: BookOpen,
  },
  {
    degree: "Secondary School · Class 10th / Matriculation",
    institution: "Foundation School · Buxar",
    period: "2018 – 2019",
    result: "Percentage · 71%",
    icon: Award,
  },
];

const skillGroups = [
  {
    name: "Programming & Core",
    icon: Code2,
    skills: [
      "Java",
      "Python",
      "JavaScript (ES6+)",
      "Apex",
      "Data Structures & Algorithms (DSA)",
      "OOP",
      "DBMS",
    ],
  },
  {
    name: "Frontend & Mobile",
    icon: Monitor,
    skills: [
      "React.js",
      "Lightning Web Components (LWC)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Web Speech API (TTS/STT)",
    ],
  },
  {
    name: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Web APIs",
      "OAuth 2.0",
      "Microservices",
    ],
  },
  {
    name: "Cloud & Salesforce",
    icon: Cloud,
    skills: [
      "Salesforce Administration",
      "SOQL",
      "SOSL",
      "Apex Triggers",
      "Asynchronous Apex",
      "Flows",
      "Lightning Message Service (LMS)",
    ],
  },
  {
    name: "Databases & Deployment",
    icon: Database,
    skills: [
      "SQL",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Linux VPS",
      "Nginx",
      "PM2",
    ],
  },
  {
    name: "Soft Skills",
    icon: Heart,
    skills: [
      "Problem-Solving",
      "Analytical Thinking",
      "Critical Thinking",
      "Communication",
      "Adaptability",
      "Time Management",
      "Leadership & Work Ethics",
      "Creativity",
    ],
  },
];

const certifications = [
  {
    title: "Salesforce Platform Developer I",
    short: "PD-1",
    description:
      "Certified expertise in custom Apex logic, Lightning Web Components, and declarative Salesforce architecture.",
    icon: Cloud,
  },
  {
    title: "Oracle Certified",
    short: "Java & SQL",
    description:
      "A strong foundation in enterprise Java programming and relational database querying.",
    icon: Award,
  },
  {
    title: "React Developer",
    short: "& Node.js Backend",
    description:
      "Certifications supporting practical full-stack application and backend engineering skills.",
    icon: Code2,
  },
];

const hobbies = [
  {
    title: "Painting",
    description:
      "A creative outlet that helps me notice color, balance, and the details that make interfaces feel clear.",
    icon: Brush,
  },
  {
    title: "Music",
    description:
      "A steady soundtrack for focus, fresh ideas, and getting into a good flow state.",
    icon: Headphones,
  },
  {
    title: "Side projects & new tech",
    description:
      "I like building small experiments and learning how new tools can solve useful problems.",
    icon: Lightbulb,
  },
];

export default function AboutMe() {
  const [activeSkillGroup, setActiveSkillGroup] = useState(skillGroups[0].name);
  const currentSkillGroup = skillGroups.find(
    (group) => group.name === activeSkillGroup,
  );
  const CurrentSkillIcon = currentSkillGroup.icon;

  return (
    <div className="theme-page theme-about-page min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Motion.div
          animate={{ x: [0, 40, 0], y: [0, 28, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="theme-about-glow theme-about-glow-a absolute -left-40 -top-32 h-[32rem] w-[32rem] rounded-full blur-[135px]"
        />
        <Motion.div
          animate={{ x: [0, -32, 0], y: [0, -24, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="theme-about-glow theme-about-glow-b absolute -bottom-40 -right-36 h-[34rem] w-[34rem] rounded-full blur-[145px]"
        />
        <div className="theme-about-grid absolute inset-0" />
      </div>

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-32 sm:pt-36 lg:px-14 lg:pb-24 lg:pt-30">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="theme-about-eyebrow mb-5 flex items-center justify-center gap-2.5 lg:justify-start">
                  <Sparkles size={15} />
                  A little about me
                </p>
                <h1 className="theme-primary font-editorial text-center text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-left lg:text-8xl">
                  Alok Kumar
                  <br />
                  <span className="theme-name-accent italic">Mishra.</span>
                </h1>
                <p className="theme-primary mx-auto mt-7 max-w-2xl text-center text-xl font-semibold leading-relaxed sm:text-2xl lg:mx-0 lg:text-left">
                  Software Engineer turning complex ideas into clean, scalable
                  web, cloud, and AI-powered software.
                </p>
                <p className="theme-secondary mx-auto mt-5 max-w-2xl text-center text-base leading-7 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left">
                  I&apos;m Alok Kumar Mishra, based in Greater Noida, India. I
                  enjoy taking a product from a rough idea to a working
                  experience people can rely on. I adapt quickly, stay curious,
                  and care about solving the real problem—not just choosing the
                  newest tool. I bring an engineering mindset to every part of
                  the work, from the first sketch to the last detail.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="theme-about-location">
                    <MapPin size={15} />
                    Greater Noida, India
                  </span>
                  <span className="theme-about-identity">
                    <Code2 size={15} />
                    Software Engineer
                  </span>
                </div>

                <div className="mt-7 flex justify-center gap-3 lg:justify-start">
                  <Motion.a
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/brahmanalok51-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Alok on GitHub"
                    className="theme-about-social"
                  >
                    <Github size={18} />
                  </Motion.a>
                  <Motion.a
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/alok-mishra-46aa7429b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Alok on LinkedIn"
                    className="theme-about-social"
                  >
                    <Linkedin size={18} />
                  </Motion.a>
                </div>
              </Motion.div>

              <Motion.aside
                initial={{ opacity: 0, x: 28, rotate: 1.5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className="theme-about-intro-card relative overflow-hidden rounded-[2rem] border p-6 sm:p-8"
              >
                <Motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="theme-about-orbit pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border"
                />
                <div className="relative">
                  <div className="mb-9 flex items-center justify-between">
                    <span className="theme-about-icon">
                      <BrainCircuit size={22} />
                    </span>
                    <span className="theme-about-live">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                      Open to opportunities
                    </span>
                  </div>
                  <p className="theme-about-label mb-3">My approach</p>
                  <h2 className="theme-primary font-editorial text-3xl font-bold leading-tight sm:text-4xl">
                    Make the complex{" "}
                    <span className="theme-name-accent italic">feel simple.</span>
                  </h2>
                  <p className="theme-secondary mt-4 text-sm leading-6 sm:text-base sm:leading-7">
                    I connect thoughtful interfaces, reliable services, and
                    useful data to turn ideas into complete products.
                  </p>
                  <div className="theme-about-quote mt-7 flex items-center gap-3 rounded-xl border p-4">
                    <Lightbulb
                      size={18}
                      className="shrink-0 text-[var(--theme-accent)]"
                    />
                    <p className="theme-primary text-sm font-semibold">
                      Stay curious. Build with purpose. Keep improving.
                    </p>
                  </div>
                </div>
              </Motion.aside>
            </div>
          </div>
        </section>

        <section className="theme-about-section px-6 py-20 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="mb-11 text-center"
            >
              <p className="theme-about-eyebrow mb-3">The path so far</p>
              <h2 className="theme-primary font-editorial text-4xl font-bold sm:text-5xl">
                Work experience
              </h2>
              <p className="theme-secondary mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base">
                Learning by making, collaborating, and shipping useful
                experiences.
              </p>
            </Motion.div>

            <div className="theme-about-timeline relative space-y-5 pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="theme-about-timeline-line absolute bottom-5 left-[0.7rem] top-5 sm:left-[0.95rem]"
              />
              {experience.map((role, index) => {
                const RoleIcon = role.icon;
                return (
                  <Motion.article
                    key={role.organization}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.12 }}
                    whileHover={{ y: -4 }}
                    className="theme-about-timeline-card relative rounded-2xl border p-5 sm:p-7"
                  >
                    <span className="theme-about-timeline-node absolute -left-[2.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border sm:-left-[2.45rem]">
                      <RoleIcon size={15} />
                    </span>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="theme-about-label mb-2">{role.type}</p>
                        <h3 className="theme-primary font-editorial text-2xl font-bold sm:text-3xl">
                          {role.role}
                        </h3>
                        <p className="theme-about-company mt-1 flex items-center gap-1.5 text-sm font-semibold">
                          {role.organization}
                          {role.link && (
                            <a
                              href={role.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit LunarCode"
                              className="theme-about-inline-link"
                            >
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </p>
                      </div>
                      <span className="theme-about-period inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold">
                        <CalendarDays size={14} />
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="theme-secondary flex gap-2.5 text-sm leading-6 sm:text-base"
                        >
                          <Check
                            size={16}
                            className="mt-1 shrink-0 text-[var(--theme-accent)]"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mb-10"
            >
              <div>
                <p className="theme-about-eyebrow mb-3">Learning by doing</p>
                <h2 className="theme-primary font-editorial text-4xl font-bold sm:text-5xl">
                  Education
                </h2>
              </div>
              <p className="theme-secondary max-w-xl text-sm leading-6 sm:text-right sm:text-base">
                A strong foundation in computer science, built one step at a
                time.
              </p>
            </Motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {education.map((item, index) => {
                const EducationIcon = item.icon;
                return (
                  <Motion.article
                    key={item.degree}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="theme-about-card rounded-2xl border p-4 sm:p-5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="theme-about-icon">
                        <EducationIcon size={20} />
                      </span>
                      <span className="theme-about-period inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold">
                        <CalendarDays size={13} />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="theme-primary font-editorial text-xl font-bold leading-snug sm:text-2xl">
                      {item.degree}
                    </h3>
                    <p className="theme-secondary mt-2 text-sm leading-6">
                      {item.institution}
                    </p>
                    <p className="theme-about-result mt-5 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold">
                      <BadgeCheck size={15} />
                      {item.result}
                    </p>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="theme-about-section px-6 py-20 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mb-9 max-w-3xl"
            >
              <p className="theme-about-eyebrow mb-3">Tools I use. Strengths I bring.</p>
              <h2 className="theme-primary font-editorial text-4xl font-bold sm:text-5xl">
                My skills ecosystem
              </h2>
              <p className="theme-secondary mt-4 text-sm leading-6 sm:text-base">
                Explore the technical foundations and people skills I bring to
                building products.
              </p>
            </Motion.div>

            <div
              role="tablist"
              aria-label="Skill categories"
              className="theme-about-skill-tabs mb-6 flex gap-2 overflow-x-auto rounded-2xl border p-2"
            >
              {skillGroups.map((group) => {
                const GroupIcon = group.icon;
                const isActive = activeSkillGroup === group.name;
                return (
                  <Motion.button
                    key={group.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveSkillGroup(group.name)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`theme-about-skill-tab relative isolate flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-3 text-xs font-bold sm:px-4 ${
                      isActive ? "theme-about-skill-tab-active" : ""
                    }`}
                  >
                    {isActive && (
                      <Motion.span
                        layoutId="about-active-skill-tab"
                        className="theme-about-tab-pill absolute inset-0 -z-10 rounded-xl"
                      />
                    )}
                    <GroupIcon size={15} />
                    {group.name}
                  </Motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={currentSkillGroup.name}
                role="tabpanel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="theme-about-skill-panel rounded-2xl border p-5 sm:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="theme-about-icon">
                    <CurrentSkillIcon size={19} />
                  </span>
                  <h3 className="theme-primary font-editorial text-xl font-bold sm:text-2xl">
                    {currentSkillGroup.name}
                  </h3>
                  <span className="theme-about-skill-count ml-auto rounded-full border px-2.5 py-1 text-[10px] font-bold">
                    {currentSkillGroup.skills.length} skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {currentSkillGroup.skills.map((skill, index) => (
                    <Motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.24, delay: index * 0.035 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="theme-about-skill-pill inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold sm:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />
                      {skill}
                    </Motion.span>
                  ))}
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mb-10 text-center"
            >
              <p className="theme-about-eyebrow mb-3">Learning, verified, applied</p>
              <h2 className="theme-primary font-editorial text-4xl font-bold sm:text-5xl">
                Certifications & achievements
              </h2>
              <p className="theme-secondary mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base">
                A mix of focused study and hands-on work across software,
                Salesforce, and connected products.
              </p>
            </Motion.div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {certifications.map((certification, index) => {
                const CertificationIcon = certification.icon;
                return (
                  <Motion.article
                    key={certification.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, rotateX: 1 }}
                    className="theme-about-card rounded-2xl border p-5 sm:p-6"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="theme-about-icon">
                        <CertificationIcon size={20} />
                      </span>
                      <span className="theme-about-verified inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                        <BadgeCheck size={13} />
                        Certified
                      </span>
                    </div>
                    <h3 className="theme-primary font-editorial text-xl font-bold leading-snug">
                      {certification.title}
                    </h3>
                    <p className="theme-about-cert-short mt-1 text-sm font-bold">
                      {certification.short}
                    </p>
                    <p className="theme-secondary mt-2 text-sm leading-6">
                      {certification.description}
                    </p>
                  </Motion.article>
                );
              })}
              <Motion.article
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6, rotateX: 1 }}
                className="theme-about-card rounded-2xl border p-4 sm:p-5"
              >
                <span className="theme-about-icon mb-5">
                  <Rocket size={20} />
                </span>
                <p className="theme-about-label mb-2">Key engineering achievements</p>
                <h3 className="theme-primary font-editorial text-xl font-bold leading-snug">
                  Built and deployed end-to-end production platforms.
                </h3>
                <p className="theme-secondary mt-3 text-sm leading-6">
                  Highlights include HexaWash, LingoAI, Smart Event, and the
                  LunarCode CMS.
                </p>
              </Motion.article>
            </div>
          </div>
        </section>

        <section className="theme-about-section px-6 py-20 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="theme-about-eyebrow mb-3">The person behind the code</p>
                <h2 className="theme-primary font-editorial text-4xl font-bold sm:text-5xl">
                  Beyond code
                </h2>
              </div>
            </Motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {hobbies.map((hobby, index) => {
                const HobbyIcon = hobby.icon;
                return (
                  <Motion.article
                    key={hobby.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="theme-about-card rounded-2xl border p-6 sm:p-7"
                  >
                    <span className="theme-about-icon mb-7">
                      <HobbyIcon size={21} />
                    </span>
                    <h3 className="theme-primary font-editorial text-2xl font-bold">
                      {hobby.title}
                    </h3>
                    <p className="theme-secondary mt-3 text-sm leading-6">
                      {hobby.description}
                    </p>
                  </Motion.article>
                );
              })}
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="theme-about-languages mx-auto mt-7 flex max-w-3xl flex-col gap-5 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="theme-about-icon">
                  <Languages size={19} />
                </span>
                <span>
                  <span className="theme-primary block font-editorial text-xl font-bold">
                    Languages
                  </span>
                  <span className="theme-secondary mt-1 block text-xs">
                    Communication & collaboration
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["English", "Hindi"].map((language) => (
                  <span key={language} className="theme-about-language">
                    <Check size={13} />
                    {language}
                  </span>
                ))}
              </div>
            </Motion.div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-14">
          <Motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="theme-about-contact mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border p-7 sm:p-10 md:flex-row md:items-center"
          >
            <div>
              <p className="theme-about-eyebrow mb-3">Ready to build something useful?</p>
              <h2 className="theme-primary font-editorial text-3xl font-bold sm:text-4xl">
                Let&apos;s turn an idea into a product.
              </h2>
            </div>
            <Motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:brahmanalok51@gmail.com"
              className="theme-about-contact-link inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold"
            >
              Get in touch <ArrowRight size={16} />
            </Motion.a>
          </Motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
