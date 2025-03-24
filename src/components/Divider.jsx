// components/Divider.jsx
import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      className="w-full h-[2px] bg-[#0f0f0f] my-[vw]"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  );
};

export default Divider;
