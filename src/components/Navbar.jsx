import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-blue-200/80 backdrop-blur shadow-sm" aria-label="Main navigation">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-[#0f0f0f] font-neuemontreal">
          Gaurang
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-[#0f0f0f] font-neuemontreal text-lg">
          <li>
            <a href="#about" className="hover:text-[#0f0f0f] transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#0f0f0f] transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
