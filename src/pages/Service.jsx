import React from 'react'
import ServiceHero from '../components/Services/ServiceHero'
import OurService from '../components/Services/OurService'
import FaqSection from '../components/Services/FaqSection'
import MobileRepairBanner from '../components/Services/MobileRepairBanner'

function Service() {
  return (
    <div>
        <ServiceHero/>
        <OurService/>
        <MobileRepairBanner/>
        <FaqSection/>
    </div>
  )
}

export default Service