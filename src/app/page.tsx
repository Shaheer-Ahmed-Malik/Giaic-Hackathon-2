import Image from "next/image";
import Hbanner from "./components/Hbanner1";
import React from 'react'


export default function Home() {
  return (
    <div>
      <Hbanner />
      <div className="text-center p-20 text-ter font-bold text-2xl">
        <div>
          <h1>EDITORS PICK</h1>
          <p className="font-sm text-sm p-6 text-fcolor">Problems trying to resolve the conflict between </p>
        </div>
        {/* editors pick */}
        <div>
           <div className="grid grid-cols-4 grid-rows-2 p-24 h-screen gap-4 text-sm font-semibold">
             <div className="relative col-span-2 row-span-2 bg-slate-600">
                <Image src="/home/filter.svg" alt="" height={0} width={0} 
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-10 w-32">MENS</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-2 bg-slate-600">
                <Image src="/home/filter (1).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-10 w-32">WOMEN</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-1 bg-slate-600">
                <Image src="/home/filter (2).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-10 w-32">ACCESSORIES</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-1 bg-slate-600">
                <Image src="/home/filter (3).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-10 w-32">KIDS</button>
                </div>
             </div>
          </div>
        </div>
      </div>
       {/* feature product */}
       <div>
        <div className="text-center p-20 text-fcolor font-bold">
          <h2 className="font-sm text-lg p-6 text-fcolor ">Featured Products</h2>
          <h1 className="text-ter text-2xl">BESTSELLER PRODUCTS</h1>
          <p className="font-sm text-sm p-6 text-fcolor">Problems trying to resolve the conflict between </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-10 p-32 font-bold">
          {/* 1 */}
          <div>
            <Image src="/home/cover1.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div>
            <Image src="/home/cover2.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <Image src="/home/cover3.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div>
            <Image src="/home/cover4.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div>
            <Image src="/home/cover5.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div>
            <Image src="/home/cover6.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div>
            <Image src="/home/cover7.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          {/* 8 */}
          <div>
            <Image src="/home/cover8.svg" alt="" height={100} width={1000} />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
              <p className="font-sm">English Department</p>
              <p className="font-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
              <div className="flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                <div className="h-4 w-4 rounded-full bg-green-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>

        </div>
       </div>
       {/* banner2 */}
       
       
       



    </div>
  )
}
