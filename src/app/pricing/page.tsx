import Image from "next/image";

export default function Home() {
  return (
    <div>
      price
      <div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 p-32">
          <div className="col-span-1 row-span-1 bg-slate-700 grid grid-cols-1 grid-rows-3 gap-2">
            <div className="bg-slate-400 p-20 col-span-2"></div>
            <div className="bg-slate-400 p-20 row-span-1"></div>
          </div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
          <div className="col-span-1 row-span-1 bg-slate-700 p-10"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 bg-orange-500 gap-4">
        <div className="bg-slate-400 p-20"></div>
        <div className="bg-slate-400 p-20"></div>
      </div>

      <div className="col-span-1 row-span-1">
            <div className="grid grid-cols-1 grid-rows-2">
              <div className="row-span-1 bg-slate-500">
                <Image src="/home/product-cover-5.svg" alt="" height={0} width={0}
                className="w-full h-full object-cover" />
              </div>
              <div className="row-span-1 bg-gray-500">
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


    </div>
  );
}
