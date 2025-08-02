import React, { useState, useEffect } from 'react';
import StatsBanner from './StatsBanner';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      const imageUrls = [
        "compressed_images/heor.webp",
        "compressed_images/col.webp",
        "compressed_images/chip.webp",
        "compressed_images/bios.webp",
        "compressed_images/card.webp"
      ];

      Promise.all(
        imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        })
      ).then(() => setImagesLoaded(true))
       .catch(() => setImagesLoaded(true)); // Continue even if some images fail
    };

    preloadImages();
  }, []);

  return (
    <main className='max-w-[120em] relative px-3 md:px-4 lg:px-10 xl:px-28 h-[30em] md:h-[40em] lg:h-screen max-h-[50em] mx-auto bg'>
      {/* Video background with lazy loading */}
      <video
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
        src="/compressed_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
      />
      
      {/* Video placeholder - only show if video hasn't loaded yet */}
      {!videoLoaded && (
        <div className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-gray-900"></div>
      )}
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70 z-10'></div>
      
      {/* Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='max-w-2xl ml-5 z-30 text-white h-full flex flex-col justify-center relative'
      >
        <h2 className='py-2 bg-black/90 w-fit small mb-2 rounded-full flex items-center gap-2 px-4'>
          <section className='w-2 h-2 rounded-full bg-[#2563c1]'></section> 
          Simple 
          <section className='w-2 h-2 rounded-full bg-[#2563c1]'></section> 
          Fast 
          <section className='w-2 h-2 rounded-full bg-[#2563c1]'></section> 
          Affordable 
        </h2>
        
        {/* Updated Heading with blue accent */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug'>
          Jaipur's Most Trusted <br className='hidden sm:block' /> 
          <span className='text-white'>Computer</span> <span className='text-blue-400'>Repair Shop</span>
        </h1>
        
        {/* Updated Paragraph */}
        <p className='mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg'>
          Facing PC issues? <strong>Preeti Computers</strong> in Jaipur offers fast, reliable, and budget-friendly computer repair services. Walk in today for expert support!
        </p>

        <section className='flex gap-4 mt-10'>
          <NavLink to="/service" className='p-4 small bg-gradient-to-r font-semibold from-[#2a7fff] to-[#165efb] rounded-2xl min-w-36'>View Services</NavLink> 
          <NavLink to="/products" className='p-4 small flex gap-2 items-center border-2 border-[#414857] cursor-pointer rounded-2xl min-w-40'>
            <BsCart/> Buy Products
          </NavLink>
        </section>
      </motion.div>

      {/* Optimized image section with lazy loading */}
      <div className='hidden overflow-hidden scale-75 xl:block z-30 absolute top-20 right-0 h-[30em] w-[50%]'>
        {imagesLoaded && (
          <>
            <motion.img 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="compressed_images/heor.webp" 
              className='w-[90%] flex ml-[5%]' 
              alt="Hero computer" 
              loading="lazy"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src="compressed_images/col.webp" 
              className='w-40 top-0 absolute right-14 flex' 
              alt="Computer component" 
              loading="lazy"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src="compressed_images/chip.webp" 
              className='w-40 bottom-10 absolute left-28 flex' 
              alt="Computer chip" 
              loading="lazy"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              src="compressed_images/bios.webp" 
              className='w-40 -bottom-6 absolute left-60 flex' 
              alt="BIOS component" 
              loading="lazy"
            />
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              src="compressed_images/card.webp" 
              className='w-60 bottom-0 absolute right-4 flex' 
              alt="Graphics card" 
              loading="lazy"
            />
          </>
        )}
      </div>

      {/* Stats Banner */}
      <div className="max-w-4xl mx-auto relative">
        <StatsBanner />
      </div>
    </main>
  );
};

export default HeroSection;