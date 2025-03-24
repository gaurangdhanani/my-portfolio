import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-[2vw] px-[1vw] text-[#0f0f0f]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[6vw] max-md:text-[12vw] font-neuemontreal font-semibold mb-6 text-[#0f0f0f]">
          Contact
        </h2>

        <h3 className="text-[1vw] max-md:text-[4vw] font-neuemontreal text-gray-800">
          You can reach me at:
        </h3>
        <h3 className="text-[2vw] max-md:text-[5vw] font-semibold font-neuemontreal text-blue-600 mb-4">
          gaurang.r.dhanani@gmail.com
        </h3>

        <div className="flex justify-center space-x-8 mt-6 text-[2vw] max-md:text-[6vw] text-blue-700">
          <a href="https://github.com/gaurangdhanani" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f0f0f] transition" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gaurang-rameshbhai-dhanani-06859b321" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f0f0f] transition" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/dhanani.gaurang" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f0f0f] transition" title="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
