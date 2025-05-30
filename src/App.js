import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"

import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="bg-black text-white transition-all">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <footer className="relative bg-black/80 border-t border-white/10 py-8">
                  <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-500 text-sm tracking-widest uppercase font-medium font-neuemontreal">
                      © {new Date().getFullYear()} Gaurang Rameshbhai Dhanani. All Rights Reserved.
                    </p>
                  </div>
                </footer>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
