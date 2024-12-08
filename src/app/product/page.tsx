import Image from "next/image";

export default function Home() {
  return (
    <div>
      product


      {/* kaam */}
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
        <div>
          

        </div>
      </div>


    </div>
  );
}
