import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group relative h-80 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4 opacity-90">{description}</p>
        {/* <button className="flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors">
          Explore Service <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button> */}
      </div>
    </div>
  );
};

const OurService = () => {
  const [showAll, setShowAll] = useState(false);

  const allServices = [
    {
      image: "compressed_images/laptoprepair.webp",
      title: "Laptop Repair",
      description: "From screen replacements to motherboard fixes, we handle all brands",
    },
    {
      image: "compressed_images/pcbuild.webp",
      title: "PC Build & Setup",
      description: "Custom gaming rigs or workstations tailored to your needs",
    },
    {
      image: "compressed_images/computerrepair.webp",
      title: "Computer Repair",
      description: "Fast diagnostics and repair for all desktop issues",
    },
    {
      image: "compressed_images/datarecovery.webp",
      title: "Data Recovery",
      description: "Emergency recovery for your precious files and memories",
    },
    {
      image: "compressed_images/Hardwarerepair.webp",
      title: "Hardware Upgrade",
      description: "Boost performance with SSD, RAM or GPU upgrades",
    },
    {
      image: "compressed_images/Phonerepair.webp",
      title: "Phone Repair",
      description: "Screen, battery and charging port repairs while you wait",
    },
    {
      image: "compressed_images/os.webp",
      title: "OS Installation & Formatting",
      description: "Clean OS installation with driver setup and data backup",
    },
    {
      image: "compressed_images/virus.webp",
      title: "Virus & Malware Removal",
      description: "Complete system cleaning and protection setup",
    },
    {
      image: "compressed_images/printer.webp",
      title: "Printer & Scanner Setup/Repair",
      description: "Installation, maintenance and troubleshooting",
    },
  ];

  const displayedServices = showAll ? allServices : allServices.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert Care for<span className="text-blue-600">Your Devices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We treat every device like it’s our own — with care, clarity, and no shortcuts. From minor fixes to major issues, we get the job done right, every time.


          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {!showAll && allServices.length > 6 && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Services <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurService;