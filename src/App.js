import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Divider from './components/Divider';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="bg-blue-200 dark:bg-gray-900 dark:text-white transition-all">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Divider />
                <HeroSection />
                <Divider />
                <Contact />
                <footer className="w-full bg-[#0f0f0f] text-center py-6 text-sm text-white font-semibold dark:text-white font-montserrat">
                  © {new Date().getFullYear()} Gaurang Rameshbhai Dhanani. All rights reserved.
                </footer>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
