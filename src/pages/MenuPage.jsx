import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import waveAnimation from '../assets/wave.json';


const menuItems = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const MenuPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelected(id);
    setTimeout(() => {
      navigate(`/#${id}`);
    }, 1200);
  };

  return (
    <div className="flex h-screen bg-black text-white font-oswald overflow-hidden">
      
      <div className="relative z-[1] text-center w-auto px-[2vw] flex flex-col justify-center gap-10">
      {menuItems.map(({ id, label }) => (
          <motion.div
            key={id}
            onClick={() => handleClick(id)}
            whileHover={{ scale: 1.1, textShadow: '0 0 10px white' }}
            animate={
                selected === id
                ? {
                    scale: 1.3,
                    y: -30,
                    backgroundColor: '#00f0ff',
                    color: '#0f0f0f',
                    zIndex: 10,
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                  }
                : selected
                ? { opacity: 0 }
                : {}
            }
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-[3vw] max-md:text-[7vw] cursor-pointer transition-all whitespace-nowrap"
            >
            {label}
          </motion.div>
        ))}
      </div>

      <div className="flex-grow h-full relative">
        <Player
          autoplay
          loop
          src={waveAnimation}
          className="absolute"
          style={{
            top: '33%',
            left: '50.5%',
            transform: 'translate(-50%, -50%)',
            width: '120vw',
            height: '100vh',
            maxWidth: 'none',
            maxHeight: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

    </div>
  );
};

export default MenuPage;
