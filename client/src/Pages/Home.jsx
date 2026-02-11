import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar /><br/><br/>

      <section className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="grid max-w-screen-xl px-6 sm:px-8 md:px-10 py-16 mx-auto gap-10 lg:grid-cols-12">
  
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <h1 className="max-w-2xl mb-4 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I’m Alok Kumar Mishra
            </h1>

            <p className="max-w-2xl mb-8 font-medium text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
               Passionate <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN Stack Developer</span> & Problem Solver
              turning ideas into <span className="text-pink-600 dark:text-pink-400 font-semibold">scalable, modern</span> web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                 About Me
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full border-2 border-purple-400 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition hover:scale-105"
              >
                ✉️ Contact
              </Link>
            </div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img
                src={profile}
                alt="mockup"
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-sm object-contain rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
