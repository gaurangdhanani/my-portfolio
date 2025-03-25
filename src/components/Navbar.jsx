import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="w-full sticky top-0 z-50 backdrop-blur shadow-sm"
      style={{ backgroundColor: '#0f0f0f' }}
      aria-label="Main navigation"
    >
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold text-white font-oswald">
          Gaurang
        </a>

        {/* Hamburger Icon (mobile only) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links for medium+ */}
        <ul className="hidden md:flex space-x-8 text-white font-oswald text-lg">
          <li>
            <a href="#about" className="hover:text-white transition">About me</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-2 text-white font-oswald text-[5vw]">
            <li>
              <a href="#about" className="hover:text-white transition" onClick={toggleMenu}>About me</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
