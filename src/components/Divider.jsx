"use client"
import { motion } from "framer-motion"

const Divider = () => {
  return (
    <motion.div
      className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-8"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  )
}

export default Divider
