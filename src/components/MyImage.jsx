"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const MyImage = () => {
  const ref = useRef(null)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative w-full max-w-xl mx-auto h-auto overflow-hidden rounded-lg"
    >
      {/* Image with no zoom (contain instead of cover) */}
      <img
        src="/assets/image1.JPG"
        alt="Profile"
        className="w-full h-auto object-contain transition duration-700 grayscale hover:grayscale-0"
      />

      {/* Neon Corner Borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-red-500 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-red-500 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-red-500 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-red-500 z-10" />
    </motion.div>
  )
}

export default MyImage
