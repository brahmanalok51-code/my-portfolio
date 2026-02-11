import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);

      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      console.log(err);
      alert("Error sending message");
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center py-20 px-6 lg:px-20">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10">
          
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Drop me a message!
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-200 py-2"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-900 dark:text-gray-200 py-2"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-500 dark:peer-focus:text-purple-400"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 text-gray-900 dark:text-gray-200 py-2 resize-none"
                  placeholder=""
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-pink-500 dark:peer-focus:text-pink-400"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
              Contact Info
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You can also reach me via email or through my social profiles:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-indigo-500 dark:text-indigo-400 font-bold">📧</span>
                <a
                  href="mailto:alok@example.com"
                  className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                >
                  brahmanalok51@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-500 dark:text-purple-400 font-bold">📞</span>
                <span className="text-gray-800 dark:text-gray-200">+91 9142316341</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-500 dark:text-pink-400 font-bold">🌐</span>
                <div className="flex gap-4">
                  <a href="https://github.com/brahmanalok51-code" className="hover:text-pink-500 dark:hover:text-pink-400 transition">GitHub</a>
                  <a href="https://www.linkedin.com/in/alok-mishra-46aa7429b" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                I’ll respond as soon as possible! Thank you for visiting.
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}
