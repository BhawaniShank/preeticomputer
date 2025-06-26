import React from 'react';
import { FaHeadset, FaCogs, FaStopwatch, FaUsers, FaMoneyBill } from 'react-icons/fa';
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <main className="bg-[#f3f4f6] text-gray-700 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 ">
            <div className="overflow-hidden rounded-tr-[120px]">
              <img
                src="compressed_images/about1.webp"
                alt="Man repairing laptop motherboard in workshop with blue shirt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-b-[120px]">
              <img
                src="compressed_images/about2.webp"
                alt="Close up of smartphone disassembled on wooden table with tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-t-[120px]">
              <img
                src="compressed_images/about4.webp"
                alt="Tablet and electronic components on workbench with tools and tape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-bl-[120px]">
              <img
                src="compressed_images/about3.webp"
                alt="Man repairing desktop computer hardware with screwdriver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <section>
            <p className="text-blue-500 font-semibold small tracking-widest mb-2 flex items-center gap-2">
              <span>✦</span>
              ABOUT PREETICOMPUTERS
              <span>✦</span>
            </p>
            <h1 className="text-[#1a1a3d] font-semibold large leading-tight mb-4">
              Every Device Deserves Care
            </h1>
            <p className="text-gray-600 medium mb-8 max-w-xl">
              Welcome to PreetiComputers, where your tech issues meet practical solutions. With hands-on experience and a passion for fixing what matters, we bring honest service and expert care to every repair.
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-xl mb-8">
             <span className='medium flex items-center' > <Feature  icon={ <FaHeadset className='medium' />} color="blue"   /> <p>Skilled Technicians</p></span>
             <span className='medium flex items-center' > <Feature  icon={ <FaCogs className='medium' />}  color="blue"   /> <p>Quality Repairs </p></span>
             <span className='medium flex items-center' > <Feature  icon={ <FaStopwatch className='medium' />} color="blue"   /> <p>Fast Turnaround</p></span>
             <span className='medium flex items-center' > <Feature  icon={ <FaMoneyBill className='medium' />} color="blue"   /> <p>Fair Pricing</p></span>
            </div>

            <p className="text-gray-600 medium mb-8 max-w-xl">
              Our mission is simple: to keep your devices running smooth without burning a hole in your pocket. Whether it’s a quick fix or a tricky issue, we’re here to help — with friendly service and real results.
            </p>
            <Link to="/contactus">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full px-8 py-3 hover:brightness-110 small transition"
            >
              Contact Now
            </button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

// ✅ Reusable Feature component
const Feature = ({ icon, color, text }) => {
  const bgClass = {
    orange: 'bg-orange-100 text-orange-400',
    blue: 'bg-blue-100 text-blue-400',
    yellow: 'bg-yellow-100 text-yellow-400',
  }[color];

  return (
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${bgClass} text-lg`}>
        {icon}
      </div>
      <p className="text-[#1a1a3d] font-semibold text-sm">{text}</p>
    </div>
  );
};

export default AboutMain;
