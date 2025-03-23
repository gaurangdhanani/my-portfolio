import React, { useState } from 'react';
import nature1 from '../assets/image1.JPG';         // your original image
import nature2 from '../assets/image2.JPG';          // your second uploaded image
// import more images as needed

const HeroSection = () => {
  const images = [nature1, nature2]; // Add more here if needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="about" className="w-full py-[7vw] bg-neutral-50 text-[#0f0f0f]">
      <div className="flex flex-col md:flex-row items-center justify-between px-[4vw] gap-10">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h1 className="text-[8vw] leading-[0.9em] font-semibold font-neuemontreal">
            Hey, I'm <span className="text-blue-600">Gaurang</span>
          </h1>

          <div className="mt-[2vw] space-y-[1vw] max-w-[40vw] text-[#0f0f0f] font-neuemontreal leading-snug">
            <h2 className="text-[1vw]">
              I'm a Computer Science student at the University of Texas at Dallas, exploring everything from front-end development to backend systems. 
              I enjoy building smooth user experiences, solving logic problems, and learning new things along the way. I'm comfortable working with 
              C++, Java, React.js, SQL, and always curious to pick up new tools. When I'm not coding, you’ll probably find me watching animes, 
              catching the latest F1 race, or gaming.
            </h2>
            <a
            href="#contact"
            className="inline-block mt-[2vw] bg-blue-200 text-black px-6 py-3 rounded-lg hover:bg-blue-600 transition font-neuemontreal text-[1vw]"
            >
                Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side - Clickable Nature Gallery */}
        <div className="flex-1 flex justify-center w-full">
          <div
            onClick={handleImageClick}
            className="cursor-pointer w-full max-w-[1300px] aspect-video rounded-xl overflow-hidden shadow-lg transition duration-300"
            title="Click to change image"
          >
            <img
              src={images[currentIndex]}
              alt="Nature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
