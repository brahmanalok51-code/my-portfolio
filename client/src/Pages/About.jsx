import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <Navbar /><br/><br/>
      <section className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
           
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
          
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ABOUT ME
              </h1>

              <p className="mt-6 text-gray-800 dark:text-gray-200 text-lg sm:text-xl leading-relaxed">
                Hi, I’m{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  Alok Kumar Mishra
                </span>
                , a passionate{" "}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  MERN Stack Developer
                </span>{" "}
                and real-world problem solver. I love turning complex challenges
                into{" "}
                <span className="text-pink-600 dark:text-pink-400 font-medium">
                  beautiful, scalable, and efficient
                </span>{" "}
                web applications.
              </p>

            
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                I focus on writing clean code, optimizing performance, and
                building delightful user experiences. When I’m not coding, I
                solve DSA problems, explore ML integration, and work on
                side-projects.
              </p>

           
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
                >
                   View Projects
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full border-2 border-purple-400 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition font-medium"
                >
                  ✉️ Contact Me
                </Link>
              </div>

            
              <div className="mt-10 space-y-6">
                
                <InfoCard title="🎓 Education">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Matriculation: 71%</li>
                    <li>Intermediate: 67%</li>
                    <li>Graduation: 7.2 CGPA</li>
                  </ul>
                </InfoCard>

             
                <InfoCard title=" Languages Known">
                  Hindi, English, Bhojpuri
                </InfoCard>

             
                <InfoCard title=" Technical Skills">
                  <ProgressBar name="Java" level={80} />
                  <ProgressBar name="JavaScript" level={85} />
                  <ProgressBar name="React.js" level={80} />
                  <ProgressBar name="Node.js & Express" level={75} />
                  <ProgressBar name="MongoDB" level={70} />
                  <ProgressBar name="SQL" level={65} />
                </InfoCard>

                {/* Hobbies */}
                <InfoCard title=" Hobbies">
                  <div className="flex flex-wrap gap-3">
                    <Badge label="🎵 Music" />
                    <Badge label="⚽ Football" />
                    <Badge label="✏️ Drawing" />
                  </div>
                </InfoCard>
              </div>
            </motion.div>

   
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full sm:w-3/4 lg:w-1/3"
            >
              <div className="relative rounded-3xl overflow-hidden border border-purple-200 dark:border-purple-800 shadow-2xl p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg animate-pulse">
                    AK
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
                      Alok Kumar Mishra
                    </h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      MERN Stack Developer · Problem Solver
                    </p>
                    <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">
                      Building performant & maintainable web apps
                    </p>
                  </div>
                </div>

                <hr className="my-4 border-purple-200 dark:border-purple-700" />

                <div className="text-sm text-gray-800 dark:text-gray-200">
                  <strong className="text-purple-600 dark:text-purple-400">
                    Highlights:
                  </strong>
                  <ul className="mt-2 list-disc ml-5 space-y-1">
                    <li> Full-stack apps with React + Node/Express</li>
                    <li> RESTful APIs & real-time features</li>
                    <li> Clean code & performance focused</li>
                  </ul>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <span className="text-xs text-purple-700 dark:text-purple-300">
                     Open to freelance & collaborations
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Alok-mishra-123"
                      className="hover:underline text-indigo-700 dark:text-indigo-300"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alok-mishra-46aa7429b"
                      className="hover:underline text-pink-600 dark:text-pink-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}


function InfoCard({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all">
      <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300 text-sm">{children}</div>
    </div>
  );
}

function ProgressBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.7 }}
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
        />
      </div>
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 shadow-sm text-sm">
      {label}
    </span>
  );
}
