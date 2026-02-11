import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-30 top-0 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
    
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            AK
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Alok</span>
        </NavLink>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

       
        <div
          className={`flex-1 justify-end md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-gray-900 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

 <li>
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-gray-900 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-gray-900 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-gray-900 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition transform hover:-translate-y-0.5 shadow-md"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
