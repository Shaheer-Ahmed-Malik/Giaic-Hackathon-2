import Image from "next/image"
import Link from "next/link"
import { IoChevronForwardOutline } from "react-icons/io5";
import { TbListCheck } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";




export default function home(){
    return(
        <div>
            {/* shop */}
            <div>
                <div className="flex item center justify-between pl-20 p-10 pr-20 bg-primary font-semibold">
                    <h1 className="text-ter text-2xl ">SHOP</h1>
                    <p className="flex items-center justify-center space-x-2 text-sm text-fcolor2">
                        <p className="text-ter"><Link href="/">home</Link></p>
                        <IoChevronForwardOutline className="text-2xl text-fcolor2" />
                        <Link href="/product-list">Shop</Link>
                    </p>
                </div>
            </div>
            {/* category */}
            <div className="grid bg-primary md:grid-cols-5 pl-20 pr-20 pb-10 gap-10">
                    {/* <Image src="/productlist/card-cover-5.svg" alt="" height={0} width={0}  */}
                    <div className="relative row-span-1 md:col-span-1 h-52 w-56 group">
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
                    <div className="relative row-span-1 md:col-span-1 h-52 w-56 group">
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
                    <div className="relative row-span-1 md:col-span-1 h-52 w-56 group">
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
                    <div className="relative row-span-1 md:col-span-1 h-52 w-56 group">
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
                    <div className="relative row-span-1 md:col-span-1 h-52 w-56 group">
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
            {/* bar */}
            <div className="flex flex-col space-y-6 md:space-y-0 text-center md:flex md:flex-row items-center font-semibold text-fcolor justify-between py-10 px-20">
                <p>Showing all 12 results</p>
                <div className="flex items-center justify-center gap-4">
                    <p>Views:</p>
                    <Link href="#">
                        <button className="flex items-center justify-center border h-12 w-12 rounded-lg bg-primary border-gray-400 hover:bg-gray-200 duration-300">
                            <BsFillGridFill className="text-xl text-gray-700" />
                        </button>
                    </Link>
                    <Link href="#">
                        <button className="flex items-center justify-center border h-12 w-12 rounded-lg bg-primary border-gray-400 hover:bg-gray-200 duration-300">
                            <TbListCheck className="text-xl text-gray-700" />
                        </button>
                    </Link>
                    
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link href="#">
                        <button className="flex items-center justify-center w-[141] h-[50] rounded-lg font-medium bg-primary border-gray-400 border-[1px] hover:bg-gray-200 duration-300">Popularity <RiArrowDropDownLine className="text-3xl" /></button>
                    </Link>
                        <button className="w-[94] h-[50] rounded-lg bg-secondary hover:bg-blue-300 duration-300 text-white">Filter</button>
                    <Link href="#">

                    </Link>
                </div>

            </div>
            {/* bar2 */}
            <div className="hidden md:block">
                <div className="flex justify-between items-center bg-primary px-20 py-10">
                    <Image src="/productlist/vector.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector1.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector3.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector4.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector5.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector2.svg" alt="" height={20} width={75} />
                    
                </div>
            </div>
            {/* products */}
            <div>
                <h1 className="text-2xl text-ter font-bold text-center pt-10">Products</h1>
                <p className="text-sm text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="grid md:grid-cols-4 md:grid-rows-3 gap-14 md:gap-10 px-20 py-10 font-bold w-full text-gray-600">
                    {/* 1 */}
                    <div>
                        <Image src="/home/cover1.svg" alt="" height={100} width={1000} />
                        <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-ter  font-bold mt-8">Graphic Design</h2>
                        <p className="text-sm ">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
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
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
                        <div className="flex space-x-2">
                            <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                        </div>
                        </div>
                    </div>
                    {/* 9 */}
                    <div>
                        <Image src="/home/cover3.svg" alt="" height={100} width={1000} />
                        <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
                        <div className="flex space-x-2">
                            <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                        </div>
                        </div>
                    </div>
                    {/* 10 */}
                    <div>
                        <Image src="/home/cover5.svg" alt="" height={100} width={1000} />
                        <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
                        <div className="flex space-x-2">
                            <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                        </div>
                        </div>
                    </div>
                    {/* 11 */}
                    <div>
                        <Image src="/home/cover1.svg" alt="" height={100} width={1000} />
                        <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
                        <div className="flex space-x-2">
                            <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                        </div>
                        </div>
                    </div>
                    {/* 12 */}
                    <div>
                        <Image src="/home/cover2.svg" alt="" height={100} width={1000} />
                        <div className="flex flex-col items-center space-y-2">
                        <h2 className="text-ter font-bold mt-8">Graphic Design</h2>
                        <p className="text-sm">English Department</p>
                        <p className="text-sm"> <span className="text-fcolor">$16.48</span> $16.48</p>
                        <div className="flex space-x-2">
                            <div className="h-4 w-4 rounded-full bg-blue-950"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-secondary border-fcolor m-8">
                    <button className="h-[74] w-[84] border bg-primary">First</button>
                    <button className="h-[74] w-[46] border text-white bg-secondary">1</button>
                    <button className="h-[74] w-[46] border hover:bg-primary hover:text-ter duration-300">2</button>
                    <button className="h-[74] w-[46] border hover:bg-primary hover:text-ter duration-300">3</button>
                    <button className="h-[74] w-[84] border hover:bg-primary hover:text-ter duration-300">next</button>
                </div>
                

        </div>
        <div className="block md:hidden">
                <div className="flex flex-col justify-between gap-20  pt-20 pb-16 mb-2 items-center bg-primary">
                    <Image src="/productlist/vector.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector1.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector3.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector4.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector5.svg" alt="" height={20} width={75} />
                    <Image src="/productlist/vector2.svg" alt="" height={20} width={75} />
                    
                </div>
            </div>
    </div>
          
    )
}
