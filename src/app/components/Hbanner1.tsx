import React from "react";
import Image from "next/image";

const Hbanner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image */}
      <div className="hidden md:block">
        <Image
        src="/banner/mainbanner.jpg" // Replace with your image path
        alt="Banner Image"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Maintains aspect ratio and fills the container
        quality={100} // High-quality rendering
        priority // Ensures this image is loaded early
      />
      </div>
      <div className="block md:hidden">
        <Image
        src="/banner/mainbannerm.jpg" // Replace with your image path
        alt="Banner Image"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Maintains aspect ratio and fills the container
        quality={100} // High-quality rendering
        priority // Ensures this image is loaded early
      />
      </div>
      
      

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white font-semibold p-6 md:p-24 space-y-6">
        <p className="text-lg">SUMMER 2020</p>
        <h1 className="text-4xl md:text-6xl font-bold">NEW COLLECTION</h1>
        <div className="text-sm md:text-base font-normal space-y-1">
          <p>We know how large objects will act, but things on a small scale.</p>
          <p>But things on a small scale.</p>
        </div>
        <button className="px-8 py-3 bg-buttoncolor text-lg rounded-md hover:bg-green-700 transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hbanner;
