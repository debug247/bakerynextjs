"use client"

import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { Link } from 'react-scroll'
import { FaArrowPointer } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className='bg-black w-full text-white p-3 flex justify-center items-center gap-4'>
        <FaCopyright className='size-6 text-white' />
        <h1 className='text-white text-center font-semibold text-lg'>Copyright 2024, Crave Bakes, All Rights Reserved</h1>
      </section>

      {/* scroll to top button  */}
      <div id='icon-box' className='bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowPointer className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </>
  )
}

export default Footer