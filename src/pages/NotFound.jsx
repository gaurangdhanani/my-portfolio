import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-center px-4 font-oswald overflow-hidden">
      <h1 className="text-[10vw] font-bold text-blue-600">404</h1>
      <p className="text-[2vw] mb-4 text-[#0f0f0f]">Oops! This page doesn't exist... yet 😉</p>
      <Link
        to="/"
        className="mt-2 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
