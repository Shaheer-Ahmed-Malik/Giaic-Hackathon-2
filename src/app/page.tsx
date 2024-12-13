import Image from "next/image";
import Hbanner from "./components/Hbanner1";
import Hbanner2 from "./components/Hbanner2";
import Hbanner3 from "./components/Hbanner3";
import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { GoGraph } from "react-icons/go";





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
        <div className="hidden md:block">
           <div className="grid grid-cols-4 grid-rows-2 p-24 h-screen gap-4 text-sm font-semibold">
             <div className="relative col-span-2 row-span-2 bg-slate-600">
                <Image src="/home/filter.svg" alt="" height={0} width={0} 
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-5 lg:h-10 w-16 lg:w-32 text-sm lg:text-base">MENS</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-2 bg-slate-600">
                <Image src="/home/filter (1).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-5 lg:h-10 w-16 lg:w-32 text-sm lg:text-base">WOMEN</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-1 bg-slate-600">
                <Image src="/home/filter (2).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-5 lg:h-10 w- lg:w-32 text-sm lg:text-base">ACCESSORIES</button>
                </div>
             </div>
             <div className="relative col-span-1 row-span-1 bg-slate-600">
                <Image src="/home/filter (3).svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white h-5 lg:h-10 w-16 lg:w-32 text-sm lg:text-base">KIDS</button>
                </div>
             </div>
          </div>
        </div>
      </div>
      {/* mob */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 grid-rows-4 gap-4 h- p-10">
          <div className="relative bg-slate-50 col-span-1">
          <Image src="/home/filter.svg" alt="" height={0} width={0}
            className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white h-10 w-32">MEN</button>
            </div>
          </div>
          <div className="relative bg-slate-50 col-span-1">
          <Image src="/home/filter (2).svg" alt="" height={0} width={0}
            className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white h-10 w-32">WOMEN</button>
            </div>
          </div>
          <div className="relative bg-slate-50 col-span-1">
          <Image src="/home/filter (3).svg" alt="" height={0} width={0}
            className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white h-10 w-32">ACCESSORIES</button>
            </div>
          </div>
          <div className="relative bg-slate-50 col-span-1">
          <Image src="/home/filter (2).svg" alt="" height={0} width={0}
            className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white h-10 w-32">KIDS</button>
            </div>
          </div>
        </div>
        {/* <Image src="/home/filter.svg" alt="" height={20} width={200} /> */}
      </div>
       {/* feature product */}
       <div>
        <div className="text-center p-20 text-fcolor font-bold">
          <h2 className="font-sm text-lg p-6 text-fcolor ">Featured Products</h2>
          <h1 className="text-ter text-2xl">BESTSELLER PRODUCTS</h1>
          <p className="font-sm text-sm p-6 text-fcolor">Problems trying to resolve the conflict between </p>
        </div>
        {/* grid */}
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-10 space-y-8 md:space-y-0 p-24 md:p-32 text-center font-bold w-full">
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
       <Hbanner2 />
       {/* banner3 */}
        <Hbanner3 />
        {/* feature post */}
        <div >
          <div className="flex flex-col items-center justify-center text-center pt-20 text-ter font-bold text-2xl space-y-6">
            <h3 className="font-sm text-lg p-6 text-fcolor">Practice Advice</h3>
            <h1 className="text-ter text-2xl">Featured Posts</h1>
            <p className="font-sm text-sm w-96 text-fcolor">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div>
            
            <div className="grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 p-20 items-center gap-10 text-fcolor">
              {/* 1 */}
              <div className="col-span-1 w-full shadow-md hover:shadow-2xl duration-300 rounded-b-lg">
                <Image src="/home/blog1.svg" alt="" width={0} height={0} className="w-full" />
                <div className="space-y-4 p-4 pb-6">
                    <div className="flex pt-6 space-x-4 text-sm text-fcolor2">
                      <p>Google</p>
                      <p>Trending</p>
                      <p>New</p>
                    </div>
                    <h1 className="text-lg text-ter">Loudest à la Madison #1 L&apos;integra </h1>
                    <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                    <div className="flex items-center justify-between text-xs">
                      <p className="flex justify-center items-center gap-2"><LuAlarmClock />22 April 2021</p>
                      <p className="flex justify-center items-center gap-2"><GoGraph />10 comments</p>
                    </div>
                    <p className="flex items-center gap-2 font-semibold">learn more <IoChevronForwardOutline /></p>
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-1 w-full shadow-md hover:shadow-2xl duration-300 rounded-b-lg">
                <Image src="/home/blog2.svg" alt="" width={0} height={0} className="w-full" />
                <div className="space-y-4 p-4 pb-6">
                    <div className="flex pt-6 space-x-4 text-sm text-fcolor2">
                      <p>Google</p>
                      <p>Trending</p>
                      <p>New</p>
                    </div>
                    <h1 className="text-lg text-ter">Loudest à la Madison #1 L&apos;integra </h1>
                    <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                    <div className="flex items-center justify-between text-xs">
                      <p className="flex justify-center items-center gap-2"><LuAlarmClock />22 April 2021</p>
                      <p className="flex justify-center items-center gap-2"><GoGraph />10 comments</p>
                    </div>
                    <p className="flex items-center gap-2 font-semibold">learn more <IoChevronForwardOutline /></p>
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-1 w-full shadow-md hover:shadow-2xl duration-300 rounded-b-lg">
                <Image src="/home/blog3.svg" alt="" width={0} height={0} className="w-full" />
                <div className="space-y-4 p-4 pb-6">
                    <div className="flex pt-6 space-x-4 text-sm text-fcolor2">
                      <p>Google</p>
                      <p>Trending</p>
                      <p>New</p>
                    </div>
                    <h1 className="text-lg text-ter">Loudest à la Madison #1 L&apos;integra </h1>
                    <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                    <div className="flex items-center justify-between text-xs">
                      <p className="flex justify-center items-center gap-2"><LuAlarmClock />22 April 2021</p>
                      <p className="flex justify-center items-center gap-2"><GoGraph />10 comments</p>
                    </div>
                    <p className="flex items-center gap-2 font-semibold">learn more <IoChevronForwardOutline /></p>
                </div>
              </div>

              
            </div>
            
          </div>
        </div>
       
       



    </div>
  )
}
