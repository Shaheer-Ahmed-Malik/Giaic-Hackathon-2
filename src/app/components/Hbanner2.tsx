import React from "react";
import Image from "next/image";

const Hbanner2 = () => {
  return (
    <div>
      <div className="hidden md:block">
      <div className="flex px-10 h-screen bg-bancolor2 items-center justify-between">
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
            className="w-full h-screen"/>
        </div>
      </div>
      </div>
      
      <div className="block md:hidden">
        <div className="h-screen text-center font-semibold bg-bancolor2 text-white flex flex-col p- justify-between">
          <div className="flex flex-col items-center w-72 space-y-6 m-auto">
            <h3>SUMMER 2020</h3>
            <h1 className="text-4xl md:text-6xl font-bold">
              Vita Classic Product
            </h1>
            <p className="text-sm md:text-base">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex space-x-10 items-center">
            <h2>$16.48</h2>
            <button className="w-44 h-12 bg-buttoncolor text-lg rounded-lg hover:bg-green-700 transition duration-300">
              ADD TO CART
            </button>
          </div>
              
            </div>
          </div>
          <div>
            <Image
              src="/banner/banner2.svg"
              alt=""
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hbanner2;
