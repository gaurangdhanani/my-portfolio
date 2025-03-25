import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import your images
import img1 from "../assets/image1.JPG";
import img2 from "../assets/image2.JPG";
import img3 from "../assets/image3.JPG";
import img4 from "../assets/image4.JPG";


const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-[1300px] max-md:max-w-full aspect-video overflow-hidden bg-white border-[4px] border-black">
      <AnimatePresence mode="wait">
  <motion.img
    key={index}
    src={images[index]}
    alt="Nature"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 1,
      ease: 'easeInOut'
    }}
    className="w-full h-full object-cover"
  />
</AnimatePresence>


      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
