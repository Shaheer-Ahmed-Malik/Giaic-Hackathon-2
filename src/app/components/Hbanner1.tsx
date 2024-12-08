import React from 'react';
import Image from 'next/image';

const Hbanner = () => {
  return (
    <div className="relative w-full h-[800px]">
      {/* Image */}
      <Image
        src="/banner/banner1.svg" // Replace with your image path
        alt="Banner Image"
        height={0}
        width={0}
        className="w-full h-full object-cover" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white font-semibold p-24 space-y-6">
        <p className="text-lg">SUMMER 2020</p>
        <h1 className="text-4xl md:text-6xl font-bold">NEW COLLECTION</h1>
        <div className="text-sm md:text-base font-normal space-y-1">
          <p>We know how large objects will act, but things on a small scale.</p>
          <p>But things on a small scale.</p>
        </div>
        <button className="px-8 py-3 bg-green-600 text-lg rounded-md hover:bg-green-700 transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hbanner;
