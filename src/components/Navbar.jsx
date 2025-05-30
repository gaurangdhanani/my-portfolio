"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-white tracking-wider font-neuemontreal"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          GAURANG
        </motion.a>

        <button onClick={toggleMenu} className="text-white text-2xl md:hidden hover:text-red-500 transition-colors">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <motion.ul
          className="hidden md:flex space-x-8 text-white text-sm tracking-widest uppercase font-medium font-neuemontreal"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <li>
            <a href="#hero" className="hover:text-red-500 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-500 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-500 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 transition-colors duration-300">
              Contact
            </a>
          </li>
        </motion.ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 p-6 text-white text-sm tracking-widest uppercase font-medium font-neuemontreal">
            <motion.li initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.1 }}>
              <a href="#hero" onClick={toggleMenu} className="hover:text-red-500 transition-colors">
                Home
              </a>
            </motion.li>
            <motion.li initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.2 }}>
              <a href="#about" onClick={toggleMenu} className="hover:text-red-500 transition-colors">
                About
              </a>
            </motion.li>
            <motion.li initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.3 }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                  setTimeout(() => toggleMenu(), 300)
                }}
                className="hover:text-red-500 transition-colors"
              >
                Projects
              </a>
            </motion.li>
            <motion.li initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.4 }}>
              <a href="#contact" onClick={toggleMenu} className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
