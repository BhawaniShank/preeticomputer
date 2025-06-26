import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
const RepairServices = () => {
  return (
    <div  className="bg-[#f9fbfc] overflow-hidden pt-16 md:mt-2 lg:pt-20 h-full font-[Poppins]">
      <main className="max-w-7xl mx-auto px-3 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <section className="flex flex-col md:flex-row items-center justify-center h-full md:items-start gap-8 md:gap-16">
        

          <motion.div
                initial={{ x:-100, opacity: 0 }}
  whileInView={{ x:0,scale:1, opacity: 1,transition: { duration: 1 } }}
          className="my-auto w-full max-w-xl ">
            <h1 className="text-[#0a253f] font-extrabold  large leading-tight mb-4 mt-5 md:mb-6">
              Repair Services for Your Computer
            </h1>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center text-[#00a8e8] medium leading-tight font-medium">
               <span> <FaCheckCircle className=" mr-2 md:mr-3 text-xl" /></span>
                Fast Diagnosis & Repair.
              </li>
              <li className="flex items-center text-[#00a8e8] medium leading-tight font-medium">
               <span> <FaCheckCircle className="mr-2 md:mr-3 text-xl" /></span>
                Affordable Upgrades & Fixes
              </li>
            </ul>
            <p className="text-[#5a5a5a] small leading-tight font-normal">
              From slow laptops to hardware issues, PreetiComputers in Jaipur handles it all with expert care. We fix desktops, laptops, and offer quick upgrades to keep your system running smooth.
            </p>
          </motion.div>
            <motion.div
               initial={{ x:100, opacity: 0 }}
  whileInView={{ x:0,scale:1, opacity: 1,transition: { duration: 1 } }}
            className="relative flex-shrink-0  w-full md:w-[35%] md:mr-10 my-auto">
            <img
              src="compressed_images/repair.webp "
              alt="Man wearing glasses repairing a computer motherboard on a table with tools and notebook"
              className="w-full h-auto aspect-square rounded-2xl object-cover"
              
            />
            <div
              aria-hidden="true"
              className="hidden md:block absolute border-4 rounded-2xl border-[#00a8e8] top-0 left-0 w-[calc(100%+32px)] h-[calc(100%+32px)] -translate-x-8 -translate-y-8 pointer-events-none"
            ></div>
            <div
              aria-hidden="true"
              className="hidden md:block absolute border-4 rounded-2xl border-[#00a8e8] bottom-0 right-0 w-[calc(100%+32px)] h-[calc(100%+32px)] translate-x-8 translate-y-8 pointer-events-none"
            ></div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default RepairServices;
