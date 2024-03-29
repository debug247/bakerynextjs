"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 500,
        easing: 'ease-in-sine',
    });
}, [])


  return (
    <section className='w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10 bg-[#f3f2f2]'>
      <h1 data-aos="zoom-in" className='text-[50px] text-black text-center leading-[60px]'>Our freshly baked bread is the <br></br>hero of our breakfast menu</h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-center text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil harum<br></br> amet consequuntur facilis sint tempore iusto necessitatibus illum fuga.</p>
      <button data-aos="zoom-in" data-aos-delay="400" className='border-2 border-black rounded-full px-14 py-4 font-bold'>READ MORE</button>
      <div className='w-full bg-cover bg-center flex flex-col justify-center items-center'>
        <Image data-aos="zoom-in" data-aos-delay="600" src='/banner3.jpg' alt='banner' width={800} height={600} />
      </div>
    </section>
  )
}

export default Banner