import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
        <div className='md:flex md:items-center md:justify-between bg-primary p-10 md:pl-32 md:pr-32'>
            <h1 className='text-2xl md:text-xl font-semibold'>Bandage</h1>
            <div className='flex  md:justify-between space-x-2 md:space-x-4'>
               <FaFacebook className='text-fcolor2 text-2xl md:text-xl' />
                <FaInstagram className='text-fcolor2 text-2xl md:text-xl' />
                <FaTwitter className='text-fcolor2 text-2xl md:text-xl' /> 
            </div>
        </div>
        <div className='space-y-6 md:space-y-0 md:flex md:justify-between p-10 md:pl-32 md:pr-32 font-semibold text-fcolor text-sm'>
            {/* 1 */}
            <div>
                <h2 className='text-base text-ter mb-6'>Legal</h2>
                <ul>
                    <li className='mb-3'>About Us</li>
                    <li className='mb-3'>Carrier</li>
                    <li className='mb-3'>We are hiring</li>
                    <li className='mb-3'>Blog</li>
                </ul>
            </div>
            {/* 2 */}
            <div>
                <h2 className='text-base text-ter mb-6'>Features</h2>
                <ul>
                    <li className='mb-3'>Business Marketing</li>
                    <li className='mb-3'>User Analytic</li>
                    <li className='mb-3'>Live Chat</li>
                    <li className='mb-3'>Unlimited Support</li>
                </ul>
            </div>
            {/* 3 */}
            <div>
                <h2 className='text-base text-ter mb-6'>Resources</h2>
                <ul>
                    <li className='mb-3'>IOS & Android</li>
                    <li className='mb-3'>Watch a Demo</li>
                    <li className='mb-3'>Customers</li>
                    <li className='mb-3'>API</li>
                </ul>
            </div>
            {/* 4 */}
            <div>
                <h2 className='text-base text-ter mb-6'>Company Info</h2>
                <ul>
                    <li className='mb-3'>About Us</li>
                    <li className='mb-3'>Carrier</li>
                    <li className='mb-3'>We are hiring</li>
                    <li className='mb-3'>Blog</li>
                </ul>
            </div>
            <div className='flex flex-col '>
                <h2 className='text-base text-ter mb-6'>Get in touch</h2>
                <div className='flex'>
                    <input 
                    type="text"
                    placeholder='Your Email'
                    className='h-14 w-52 border bg-primary pl-4'
                    />
                    <button className='h-14 w-52 bg-secondary rounded-r-md text-white'>Subscribe</button>
                    
                </div>
                    <p className='text-xs mt-2 text-slate-400'>Lorem, ipsum dolor.</p>
            </div>
        </div>
        <div className='font-semibold text-fcolor text-sm bg-primary p-10 pl-32 pr-32'>
            <p>Made With Love By Finland All Right Reserved </p>
        </div>
        



    </div>
  )
}

export default Footer
