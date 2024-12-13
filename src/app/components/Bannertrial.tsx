import Image from "next/image";

import React from 'react'

const Bannertrial = () => {
  return (
    <div>
      <div className="flex px-10 bg-bancolor2 items-center justify-between">
      <div className="flex flex-col pl-20 text-white space-y-10 font-semibold">
          <h3>SUMMER 2020</h3>
          <h1 className="w-96 text-4xl md:text-6xl font-bold">
            Vita Classic Product
          </h1>
          <p className="text-sm md:text-base font-normal w-96">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex space-x-10 items-center">
            <h2>$16.48</h2>
            <button className="w-44 h-12 bg-buttoncolor text-lg rounded-sm hover:bg-green-700 transition duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
        <div>
            <Image src="/banner/banner2.svg" alt="" width={0} height={0} 
            className="bottom-0 w-full h-full"/>
        </div>
      </div>



    <div className="flex items-center justify-between bg-gray-100 px-8 py-16">
      {/* Left Section */}
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Heading</h1>
        <p className="text-gray-600 mb-6">
          This is a sample paragraph. You can write something about your banner here to attract users.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Right Section */}
      <div>
        <Image
          src="/banner/banner2.svg" // Replace with your image path
          alt="Banner Image"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}

    </div>
  )
}

export default Bannertrial
