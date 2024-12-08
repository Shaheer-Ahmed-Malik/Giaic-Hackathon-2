import React from 'react'

const Hbanner3 = () => {
    return (
    //   <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 w-full h-[400px] flex justify-center items-center">
        <div>
    {/* Image */}
        <div className='relative'>
          <img
            src="/banner/banner3.svg" // Replace with your image path
            alt="Banner Image"
            className="w-full h-full"
          />
        </div>
  
        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center text-white font-semibold h-[1000] pl-44">
            <div className='space-y-6'>
                <p >SUMMER 2020</p>
                <h1 className="text-6xl font-bold">NEW COLLECTION</h1>
                <div className="font-normal">
                    <p>We know how large objects will act, but things on a small scale.</p>
                    <p>but things on a small scale.</p>
                </div>
                
                <button className='h-[62] w-[221] bg-green-600 text-lg rounded-md '>SHOP NOW</button>
            </div>
            
        </div>
      </div>
    );
  };
  
  export default Hbanner3;
  