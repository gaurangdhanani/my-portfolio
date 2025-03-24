import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur shadow-sm"   style={{ backgroundColor: '#0f0f0f' }}    aria-label="Main navigation">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold text-white font-oswald">
          Gaurang
        </a>

        {/* Nav Links for medium+ */}
        <ul className="hidden md:flex space-x-8 text-white font-oswald text-lg">
          <li>
            <a href="#about" className="hover:text-white transition">About me</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>

        {/* Nav Links for small screens */}
        <ul className="flex-col items-end space-y-2 text-white font-oswald text-[5vw] md:hidden">
          <li>
            <a href="#about" className="hover:text-white transition">About me</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
