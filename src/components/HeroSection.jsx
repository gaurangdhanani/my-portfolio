"use client"

import { useRef, useState, useEffect } from "react"
import { useMotionValue, motion, useScroll, useTransform, useSpring} from "framer-motion"
import { FaPlay, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import MyImage from "./MyImage"

const HeroSection = () => {
  const [particles, setParticles] = useState([])
  const containerRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: contactScrollProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start center", "center center"],
  })

  const { scrollYProgress: fadeInScroll } = useScroll({
  target: projectsRef,
  offset: ["start end", "center center"],
})

  const { scrollYProgress: fadeOutScroll } = useScroll({
    target: projectsRef,
    offset: ["center center", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const smoothProjectsScroll = useSpring(projectsScrollProgress, {
  stiffness: 80,
  damping: 20,
  restDelta: 0.001,
})  

  // Multiple parallax directions
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"])
  const backgroundX = useTransform(smoothProgress, [0, 1], ["0%", "-20%"])
  const leftToRight = useTransform(smoothProgress, [0, 1], ["-100%", "100%"])
  const rightToLeft = useTransform(smoothProgress, [0, 1], ["100%", "-100%"])
  const diagonalTL = useTransform(smoothProgress, [0, 1], ["-50%", "50%"])
  const diagonalTR = useTransform(smoothProgress, [0, 1], ["50%", "-50%"])

  // Section-specific parallax
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"])

  // About section animations
  const aboutBackgroundX = useTransform(aboutScrollProgress, [0, 1], ["0%", "10%"])
  const aboutBackgroundY = useTransform(aboutScrollProgress, [0, 1], ["0%", "20%"])
  const aboutTextX = useTransform(aboutScrollProgress, [0, 0.5], ["-50%", "0%"])
  const aboutImageScale = useTransform(aboutScrollProgress, [0, 0.5], [0.8, 1])
  const aboutImageRotate = useTransform(aboutScrollProgress, [0, 0.5], [10, 0])

  // Projects parallax
  const projectsX = useTransform(smoothProjectsScroll, [0, 0.5], ["50%", "0%"])
  const fadeIn = useTransform(fadeInScroll, [0, 1], [0, 1])
  const fadeInSmooth = useSpring(fadeIn, {
    stiffness: 60,
    damping: 20,
  })
  const fadeOut = useTransform(fadeOutScroll, [0, 1], [1, 0])
  const fadeOutSmooth = useSpring(fadeOut, {
    stiffness: 60,
    damping: 20,
  })
  const slideRight = useTransform(fadeOutScroll, [0, 1], ["0%", "20%"])
  const slideRightSmooth = useSpring(slideRight, {
    stiffness: 25,
    damping: 35,
  })

  const finalOpacity = useMotionValue(0)

  // Update final opacity based on whichever is active
  useEffect(() => {
    const unsubFadeIn = fadeInSmooth.on("change", (v) => finalOpacity.set(v))
    const unsubFadeOut = fadeOutSmooth.on("change", (v) => finalOpacity.set(v))
    return () => {
      unsubFadeIn()
      unsubFadeOut()
    }
  }, [fadeInSmooth, fadeOutSmooth, finalOpacity])


  // Contact section parallax - Fixed
  const contactBackgroundY = useTransform(contactScrollProgress, [0, 1], ["0%", "30%"])
  const contactScale = useTransform(contactScrollProgress, [0, 0.8], [0.8, 1])
  const contactOpacity = useTransform(contactScrollProgress, [0, 0.5], [0, 1])

  // Project data - No images
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website with parallax effects and smooth animations built with React and Framer Motion.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "NrveNest Wellness App",
      description:
        "NrveNest is a wellness platform built with React Native, Expo, Firebase, and FastAPI to help users find calmness with meditation, gratitude journaling, and AI-powered emotional insights.",
      tags: ["React Native", "Expo", "Firebase", "FastAPI", "OpenAI"],
    },
    {
      title: "Disk-Based B-Tree Index System",
      description: "Implements a B-Tree stored on disk in fixed 512-byte blocks with big-endian serialization. Supports insert/search/print/load/extract via a CLI (Main.java), uses degree=10 (max 19 keys/node), enforces ≤3 nodes in memory, CSV I/O, and duplicate-key detection.",
      tags: ["Java", "B-Tree", "Disk I/O", "Algorithms", "CSV"],
    },
    {
      title: "Phosphorus Library Management System",
      description:
        "Phosphorus is a full-stack desktop and web application designed to streamline library operations such as borrower management, book tracking, and fine enforcement. Built with React, Vite, Electron, a custom Python backend, and MySQL, it offers efficient check-ins, checkouts, and real-time fine tracking with session-based access control.",
      tags: ["React", "Vite", "Electron", "Python", "MySQL", "Tailwind CSS"],
    },
  ]

  // Initialize particles with much higher density
  useEffect(() => {
    const newParticles = Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5, // Smaller sizes for more realistic stars
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2, // Varying opacity
      twinkle: Math.random() > 0.7, // Some stars twinkle
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden font-neuemontreal"
      style={{
        background: "#000000",
        backgroundImage: "none",
        backgroundColor: "#000000",
      }}
    >
      {/* Force Black Background - No Images */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          background: "#000000",
          backgroundImage: "none",
          backgroundColor: "#000000",
        }}
      />

      {/* Clean Parallax Background - No Images */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          y: backgroundY,
          x: backgroundX,
          background: "#000000",
          backgroundImage: "none",
        }}
      >
        {/* Pure gradient background with no image references */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d1b1b 100%)",
            backgroundImage: "none",
          }}
        />
      </motion.div>

      {/* Floating Elements with Different Directions */}
      <motion.div
        className="fixed top-20 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 z-1"
        style={{ x: leftToRight }}
      />
      <motion.div
        className="fixed top-40 right-0 w-80 h-1 bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-40 z-1"
        style={{ x: rightToLeft }}
      />
      <motion.div
        className="fixed bottom-20 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 z-1"
        style={{ x: leftToRight }}
      />
      <motion.div
        className="fixed bottom-40 right-0 w-80 h-1 bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-40 z-1"
        style={{ x: rightToLeft }}
      />

      <motion.div
        className="fixed bottom-32 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl z-1"
        style={{ x: diagonalTL, y: diagonalTR }}
      />
      <motion.div
        className="fixed top-32 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl z-1"
        style={{ x: diagonalTR, y: diagonalTL }}
      />

      {/* Dense Animated Star Field */}
      <div className="fixed inset-0 z-1" style={{ y: backgroundY }}>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={
              particle.twinkle
                ? {
                    opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
                    scale: [1, 1.5, 1],
                  }
                : {
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                  }
            }
            transition={{
              duration: particle.twinkle ? 2 + Math.random() * 2 : 8 + particle.speed * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: particle.twinkle ? "easeInOut" : "linear",
            }}
          />
        ))}
      </div>

      {/* Additional Star Layers for Extra Density */}
      <div className="fixed inset-0 z-1">
        {Array.from({ length: 100 }, (_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-px h-px bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.6, 0.1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Hero Section with Parallax */}
        <motion.section
          id="hero"
          className="relative min-h-screen flex items-center justify-center"
          style={{ scale: heroScale, opacity: heroOpacity, x: heroX }}
        >
          <div className="text-center text-white max-w-6xl mx-auto px-6">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 font-neuemontreal">
                <motion.span
                  className="inline-block text-red-600"
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  GAURANG
                </motion.span>
              </h1>
              <motion.h2
                className="text-2xl md:text-4xl font-light tracking-widest text-gray-300 uppercase font-neuemontreal"
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Student & Gamer
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-neuemontreal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              "Computer science is no more about computers than astronomy is about telescopes."
              <span className="block mt-2 text-sm text-gray-500">- Edsger W. Dijkstra</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <motion.a
                href="#about"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-neuemontreal"
                whileHover={{ x: 10 }}
              >
                <FaPlay className="text-xs group-hover:translate-x-1 transition-transform" />
                Explore Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="border border-white/30 hover:border-white text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-white hover:text-black font-neuemontreal"
                whileHover={{ x: -10 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll indicator with parallax */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            style={{ x: useTransform(scrollYProgress, [0, 0.1], [0, 50]) }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section with Enhanced Animations */}
        <section id="about" ref={aboutRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
          {/* Clean animated background elements */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              x: aboutBackgroundX,
              y: aboutBackgroundY,
              background: "transparent",
            }}
          >
            <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-full"
                  style={{ top: `${i * 10}%` }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 15 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i + 10}
                  className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent h-full"
                  style={{ left: `${i * 10}%` }}
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 20 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ))}
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              className="text-white"
              style={{ x: aboutTextX }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-8 relative"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter font-neuemontreal">
                  ABOUT<span className="text-red-500">.</span>
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-red-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <div className="space-y-6 text-gray-300 leading-relaxed font-neuemontreal">
                {[
                  "I'm a sophomore Computer Science student at the University of Texas at Dallas, exploring the intersection of technology and creativity.",
                  "From front-end interfaces to backend systems, I build experiences that matter. My toolkit includes React, Node.js, TypeScript, Java, C++, and SQL.",
                  "When I'm not coding, you'll find me watching anime, following F1 races, or diving into the latest games.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {["React", "Node.js", "TypeScript", "Java", "C++", "SQL"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-white/5 border border-white/10 p-4 text-center text-sm tracking-widest uppercase font-medium font-neuemontreal relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      borderColor: "rgba(239, 68, 68, 0.3)",
                      y: -5,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              style={{ scale: aboutImageScale, rotate: aboutImageRotate }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full max-w-md aspect-video overflow-hidden border-4 border-white/10"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <MyImage />

                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 w-full h-10 bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
                  initial={{ top: "-10%" }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Corner accents */}
                <motion.div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-red-500" />
                <motion.div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-red-500" />
                <motion.div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-red-500" />
                <motion.div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-red-500" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section with Right-to-Left Parallax */}
        <motion.section id="projects" ref={projectsRef} className="relative min-h-screen flex items-center py-20 overflow-hidden"   style={{
            opacity: finalOpacity,
            x: slideRightSmooth,
          }}>
          {/* Animated background layers already handled globally, so no duplicates here */}
          <motion.div
            style={{ x: projectsX }}
            className="max-w-7xl mx-auto px-4 md:px-6 relative z-10"
          >
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter font-neuemontreal inline-block relative">
                PROJECTS<span className="text-red-500">.</span>
                <motion.div
                  className="absolute -bottom-2 md:-bottom-4 left-0 h-0.5 md:h-1 bg-red-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </h2>
            </motion.div>

            {/* Projects Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#000000] border border-white/10 hover:border-red-500/50 transition-all duration-500 p-6 flex flex-col justify-between cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-xl font-bold mb-4 text-center"> {project.title} </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/5 border border-white/10 px-3 py-1 text-xs tracking-widest uppercase text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          </motion.div>
        </motion.section>

        {/* Contact Section with Fixed Parallax */}
        <motion.section
          id="contact"
          ref={contactRef}
          className="relative min-h-screen flex items-center py-20"
          style={{ scale: contactScale, opacity: contactOpacity }}
        >
          {/* Clean contact background parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              y: contactBackgroundY,
              background: "transparent",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "linear-gradient(180deg, #000000 0%, #1a1a1a 30%, #000000 100%)",
                backgroundImage: "none",
              }}
            />
            <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
                className="inline-block mb-8 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-neuemontreal">
                  CONNECT<span className="text-red-500">.</span>
                </h2>

                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-red-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>

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
      </div>
    </div>
  )
}

export default HeroSection
