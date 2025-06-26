import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import RepairServices from '../components/Home/RepairServices'
import FeaturesCards from '../components/Home/FeaturesCards'

import LaptopRepair from '../components/Home/LaptopRepair'
import StatsBanner2 from '../components/Home/StatsBanner2'

import Testimonials from '../components/Home/Testimonials'
import HowWeWork from '../components/Home/HowWeWork'
import ContactUs from '../components/Home/ContactUs'


function Home() {
  return (
    <div className='min-h-screen '>
      <HeroSection/>
      <RepairServices/>
      <LaptopRepair/>
      <StatsBanner2/>
    
      <HowWeWork/>
      <Testimonials />
      <ContactUs/>
      {/* <FeaturesCards/> */}
    </div>
  )
}

export default Home