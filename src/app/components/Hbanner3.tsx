import React from 'react'
import Image from 'next/image'

const Hbanner3 = () => {
  return (
    <div>
      <div>
        <div className='relative flex items-center h-screen bg-white'>
            <Image
            src="/banner/banner3.svg"
            alt=""
            width={0}
            height={0}
            className="absolute bottom-0 right-80 w-full h-full" />
            <div className="flex flex-col absolute right-20 text-black space-y-10 font-semibold">
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
        
        </div>
        
      </div>
    </div>
  )
}

export default Hbanner3
