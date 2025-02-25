import React from 'react'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';


const Header = () => {
  return (
    <div>
        <div className='hidden md:block'>
            <div className='flex items-center justify-between p-4 pl-10 pr-10 bg-ter text-white text-sm font-semibold'>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2'>
                            <Image src="/icon/phone.svg" alt="user icon" width={15} height={15} />
                            <p>(225) 555-0118</p>
                        </div>
                        <div className='flex space-x-2'>
                            <Image src="/icon/message.svg" alt="user icon" width={15} height={15} />
                            <p>michelle.rivera@example.com</p>
                        </div>
                        <div className='pl-28'>
                            <p>Follow Us  and get a chance to win 80% off</p>
                        </div>
                    </div>
                    
                    
                    <div className='flex items-center space-x-4'>
                        <p>Follow Us  :</p>
                        <Link href="#">
                            <Image src="/icon/instagram.svg" alt="user icon" width={15} height={15} />
                        </Link>
                        <Link href="#">
                            <Image src="/icon/fb.svg" alt="user icon" width={15} height={15} />
                        </Link>
                        <Link href="#">
                            <Image src="/icon/yt.svg" alt="user icon" width={15} height={15} />
                        </Link>
                        <Link href="#">
                            <Image src="/icon/twitter.svg" alt="user icon" width={15} height={15} />
                        </Link>
                    </div>
            </div>

            <div className='flex items-center justify-between p-6 pl-10 pr-10 font-semibold'>
                <div className='flex items-center justify-between space-x-28'>
                    <div>
                        <h1 className='text-2xl font-bold text-ter'><Link href="/">Bandage</Link> </h1>
                    </div>
                <div className='text-sm text-fcolor'>
                        <ul className='flex justify-between space-x-4'>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="/">Home</Link></li>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="../product-list">Shop</Link> <RiArrowDropDownLine className='text-xl' /></li>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="../blog">Blog</Link></li>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="../about-us">About</Link></li>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="../contact-us">Contact</Link></li>
                            <li className='flex duration-300 hover:text-gray-800'><Link href="/">Pages</Link></li>
                        </ul>
                </div>
                
                </div>
                <div className='flex space-x-10 text-sm text-fcolor2'>
                    <div className='flex space-x-2'>
                        <Image src="/icon/user.svg" alt="user icon" width={15} height={20} />
                        <p className='flex duration-300 hover:text-ter'><Link href="#">Login</Link></p>
                        <p>/</p>
                        <p className='flex duration-300 hover:text-ter'><Link href="#">Register</Link> </p>
                    </div>
                    <div className='flex space-x-6'>
                        <Image src="/icon/search.svg" alt="search icon" width={20} height={20} />
                        <Image src="/icon/cart.svg" alt="cart icon" width={20} height={20} />
                        <Image src="/icon/heart.svg" alt="wishlist icon" width={20} height={20} />


                    </div>
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className='block md:hidden'>
            <div className='flex text-ter justify-between p-8'>
                <div>
                    <Link href="/">
                    <h1 className='font-semibold text-2xl'>Bandage</h1>
                    </Link>
                </div>
                <div className='flex justify-between space-x-6'>
                    <Image src="/icon/m-search.svg" alt="wishlist icon" width={20} height={20} />
                    <Image src="/icon/m-cart.svg" alt="wishlist icon" width={20} height={20} />
                    <Image src="/icon/m-hamburger.svg" alt="wishlist icon" width={20} height={20} />
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Header
