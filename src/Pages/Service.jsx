import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function Services() {
  const services = [
    {
      title: "MERN Stack Development",
      icon: <Server className="w-10 h-10 text-cyan-400" />,
      description:
        "I develop full-stack web applications using the MERN stack — ensuring high performance, scalability, and maintainability. I focus on delivering clean, efficient code.",
      tools: "MongoDB, Express, React, Node.js",
      progress: 90,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="w-10 h-10 text-pink-400" />,
      description:
        "I craft responsive and dynamic frontends that provide smooth user experiences. My designs emphasize clarity and modern trends for better engagement.",
      tools: "React.js, Tailwind CSS, JavaScript",
      progress: 85,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Backend & Database Management",
      icon: <Database className="w-10 h-10 text-green-400" />,
      description:
        "I create efficient APIs, manage databases, and ensure data integrity. My backend logic is optimized for speed, security, and reliability to handle real-world use cases.",
      tools: "Node.js, Express, MongoDB, MySQL",
      progress: 80,
      color: "from-green-500 to-lime-400",
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      description:
        "I consistently solve algorithmic challenges  problem-solving and logical thinking. My understanding of DSA helps in writing optimized and effective code.",
      tools: "Java, Algorithms, Problem Solving",
      progress: 95,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Services
        </h1>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          I’m a passionate <span className="text-cyan-400 font-semibold">MERN Full Stack Developer</span> who enjoys transforming ideas into scalable, efficient, and visually appealing digital solutions.
          From crafting frontends that engage users to architecting strong backends. I bring logic, design, and technology together.
        </p>
        <p className="mt-4 text-gray-400 italic">
          “Building code that not only works but also inspires.”
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative group rounded-2xl p-[2px] bg-gradient-to-br ${service.color} shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            {/* Card Inner */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col justify-between border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
              {/* Icon Animation */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="p-3 bg-gray-800/60 rounded-xl w-fit mb-4"
              >
                {service.icon}
              </motion.div>

              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {service.description}
              </p>

              <p className="text-sm text-gray-400 italic mb-4">
                Tools: {service.tools}
              </p>

              {/* Skill Progress Bar */}
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${service.progress}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                ></motion.div>
              </div>
              <p className="text-right text-xs text-gray-400 mt-1">
                {service.progress}% Expertise
              </p>
            </div>
          </motion.div>
        ))}
      </div>

   
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Let’s Build the Future Together 
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
          I’m currently open for <span className="text-cyan-400">internships</span>,{" "}
          <span className="text-cyan-400">freelance</span> projects, and
          <span className="text-cyan-400"> collaborations</span> that challenge my skills and help create something meaningful.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px #22d3ee" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
        >
            <Link to="/contact">
            Contact Me
            </Link>
          
        </motion.button>
      </motion.div>
    </section>
    </>
  );
}
