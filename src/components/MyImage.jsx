import React from "react";
import img1 from "../assets/image1.JPG";

const MyImage = () => {
  return (
    <div
      className="w-full max-w-[1300px] max-md:max-w-full aspect-video overflow-hidden border-4 border-black bg-white"
      role="img"
      aria-label="my image"
    >
      <img
        src={img1}
        alt="image1"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MyImage;
