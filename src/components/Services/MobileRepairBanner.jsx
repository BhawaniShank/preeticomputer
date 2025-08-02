import React from "react";
import { Link } from "react-router-dom";

const MobileRepairBanner = () => {
  return (
    <div className="w-full relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl max-w-7xl mx-auto my-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('compressed_images/pattern.webp')] bg-repeat"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row flex-wrap justify-center items-center px-8 py-10 lg:py-0 gap-8">
        {/* Illustration */}
        <div className="hidden lg:block w-60 lg:w-80">
          <img
            src="compressed_images/laptop2.webp"
            alt="Mobile phone repair technician"
            className="w-full h-auto object-contain "
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center min-w-80 md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Professional <span className="text-blue-200">Laptop Repair</span>?
          </h3>
          <p className="text-blue-100 max-w-lg mx-auto md:mx-0">
            Fast, reliable repairs with warranty. We fix screens, batteries, charging ports and more for all major brands.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Link to="/contactus"
            type="button"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            Get Instant Quote
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileRepairBanner;