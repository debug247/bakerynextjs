import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import OurBreads from '@/components/OurBreads'
import OurMenus from '@/components/OurMenus'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <OurBreads />
      <WhyUs />
      <OurMenus />
      <Banner />
      <Clients />
      <Contact />
    </>
  )
}

export default page