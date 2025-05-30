"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold font-neuemontreal text-red-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-5xl font-bold font-neuemontreal mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8 font-neuemontreal">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition font-neuemontreal font-semibold"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
