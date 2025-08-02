import React, { Suspense, lazy } from 'react'

// Lazy load components
const HeroSection = lazy(() => import('../components/Home/HeroSection'))
const RepairServices = lazy(() => import('../components/Home/RepairServices'))
const FeaturesCards = lazy(() => import('../components/Home/FeaturesCards'))
const LaptopRepair = lazy(() => import('../components/Home/LaptopRepair'))
const StatsBanner2 = lazy(() => import('../components/Home/StatsBanner2'))
const Testimonials = lazy(() => import('../components/Home/Testimonials'))
const HowWeWork = lazy(() => import('../components/Home/HowWeWork'))
const ContactUs = lazy(() => import('../components/Home/ContactUs'))

// Loading component for sections
const SectionLoader = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
  </div>
)

function Home() {
  return (
    <div className='min-h-screen'>
      <Suspense fallback={<SectionLoader />}>
        <HeroSection/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <RepairServices/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LaptopRepair/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <StatsBanner2/>
      </Suspense>
    
      <Suspense fallback={<SectionLoader />}>
        <HowWeWork/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactUs/>
      </Suspense>
      {/* <FeaturesCards/> */}
    </div>
  )
}

export default Home