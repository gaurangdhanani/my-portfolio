"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Contact = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const contactScale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1])
  const contactOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])

  return (
    <motion.section
      ref={containerRef}
      id="contact"
      className="relative min-h-screen flex items-center py-20"
      style={{ scale: contactScale, opacity: contactOpacity }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter font-neuemontreal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          CONNECT<span className="text-red-500">.</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-8 tracking-wide font-neuemontreal"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to build something amazing together?
        </motion.p>

        <motion.a
          href="mailto:gaurang.r.dhanani@gmail.com"
          className="inline-block text-2xl md:text-3xl font-bold text-red-500 hover:text-white transition-colors mb-12 tracking-wide font-neuemontreal"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, x: 10 }}
        >
          gaurang.r.dhanani@gmail.com
        </motion.a>

        <motion.div
          className="flex justify-center space-x-8 text-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/gaurangdhanani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 360, x: -10 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gaurang-rameshbhai-dhanani-06859b321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: -360, y: -10 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://instagram.com/dhanani.gaurang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 360, x: 10 }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
