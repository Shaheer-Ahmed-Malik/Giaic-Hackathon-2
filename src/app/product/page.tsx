import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      product


      {/* kaam
      <div className="grid grid-cols-4 grid-rows-2">
        <div>
          <Image src="/home/product-cover-5.svg" alt="" height={100} width={1000} />
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
        <div> */}



        <div className="grid bg-primary md:grid-cols-5 justify-center p-10 md:px-20 md:pb-10 gap-10">
                    <div className="relative row-span-1 md:col-span-1 group">
                        <Link href="#">
                        <Image src="/productlist/card-cover-5.svg" alt="" height={0} width={0}
                        className="h-full w-full object-cover brightness-50 group-hover:brightness-100 transition duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-sm text-white">
                            <h1 className="text-xl font-bold">Cloths</h1>
                            <p>5 items</p>
                        </div>
                        </Link>
                    </div>
                    {/* 2 */}
                    <div className="relative row-span-1 md:col-span-1 group">
                        <Link href="#">
                        <Image src="/productlist/card-cover-6.svg" alt="" height={0} width={0}
                        className="h-full w-full object-cover brightness-50 group-hover:brightness-100 transition duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-sm text-white">
                            <h1 className="text-xl font-bold">Cloths</h1>
                            <p>5 items</p>
                        </div>
                        </Link>
                    </div>
                    {/* 3 */}
                    <div className="relative row-span-1 md:col-span-1 group">
                        <Link href="#">
                        <Image src="/productlist/card-cover-3.svg" alt="" height={0} width={0}
                        className="h-full w-full object-cover brightness-50 group-hover:brightness-100 transition duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-sm text-white">
                            <h1 className="text-xl font-bold">Cloths</h1>
                            <p>5 items</p>
                        </div>
                        </Link>
                    </div>
                    {/* 4 */}
                    <div className="relative row-span-1 md:col-span-1 group">
                        <Link href="#">
                        <Image src="/productlist/card-cover-7.svg" alt="" height={0} width={0}
                        className="h-full w-full object-cover brightness-50 group-hover:brightness-100 transition duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-sm text-white">
                            <h1 className="text-xl font-bold">Cloths</h1>
                            <p>5 items</p>
                        </div>
                        </Link>
                    </div>
                    {/* 5 */}
                    <div className="relative row-span-1 md:col-span-1 group">
                        <Link href="#">
                        <Image src="/productlist/card-cover-4.svg" alt="" height={0} width={0}
                        className="h-full w-full object-cover brightness-50 group-hover:brightness-100 transition duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-sm text-white">
                            <h1 className="text-xl font-bold">Cloths</h1>
                            <p>5 items</p>
                        </div>
                        </Link>
                    </div>
                    


            </div>
          

        </div>
    
  );
}
