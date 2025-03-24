import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from "./ImageSlider";
// import more images as needed

const HeroSection = () => {

  return (
    <section id="about" 
    className="w-full py-[7vw] bg-neutral-50 text-[#0f0f0f] bg-repeat bg-[length:200px_200px] bg-center"
    style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="flex flex-col md:flex-row items-center justify-between px-[4vw] gap-10">
        {/* Left Side - Text */}
        <div className="flex-1">
        <h1 className="text-[8vw] max-md:text-[12vw] leading-[0.9em] font-semibold font-oswald flex flex-wrap gap-2">
        <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            Hey, I'm
        </motion.span>

        <motion.span
            className="inline-block text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            Gaurang
        </motion.span>
        </h1>


        <div className="mt-[2vw] max-md:mt-[4vw] space-y-[1vw] max-md:space-y-[4vw] max-w-[40vw] max-md:max-w-full text-[#0f0f0f] font-semibold font-oswald leading-snug px-2">
            <motion.h2
                className="text-[1vw] max-md:text-[4.5vw]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                I'm a Computer Science student at the University of Texas at Dallas, exploring everything from front-end development to backend systems. 
                I enjoy building smooth user experiences, solving logic problems, and learning new things along the way. I'm comfortable working with 
                C++, Java, React.js, SQL, and always curious to pick up new tools. When I'm not coding, you’ll probably find me watching animes, 
                catching the latest F1 race, or gaming.
            </motion.h2>

            <motion.a
                href="#contact"
                className="inline-block mt-[2vw] max-md:mt-[5vw] bg-[#0f0f0f] text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-oswald text-[1vw] max-md:text-[4vw]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Let’s Connect
            </motion.a>
        </div>

        </div>

        {/* Right Side - Clickable Nature Gallery */}
        <div className="flex-1 flex justify-center w-full">
        <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
