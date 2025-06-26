import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";

const SeamlessRepairsSection = () => {
  return (
    <div className="bg-white text-gray-900 font-sans py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 text-blue-600 font-medium text-sm uppercase tracking-wider">
            <FaStar className="text-blue-500" />
            WHY CHOOSE US
            <FaStar className="text-blue-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Device. Our Priority. Always.
          </h2>
          <p className="text-lg text-gray-600">
            At PreetiComputers, we believe in honest repairs, quick service, and treating every device like it's our own.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Features List - Left Side */}
          <div className="lg:w-1/2 space-y-6">
            {[
              {
                title: "Expert Technicians",
                description: "We don’t just repair — we understand your device inside out. Years of hands-on experience, zero guesswork."
              },
              {
                title: "Customer-First Service",
                description: "We listen before we repair. Your problem matters, and we treat it that way. You’ll always get clear advice and honest support.."
              },
              {
                title: "Quality Guaranteed",
                description: "We don’t believe in shortcuts. Every repair uses quality parts and proper tools. That means your device stays fixed, not just patched."
              },
              {
                title: "Passionate Team",
                description: "We actually enjoy fixing things — it’s what we do best. That passion shows in every repair we deliver."
              }
            ].map((feature, i) => (
              <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors" key={i}>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <FaCheck className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Illustration */}
          <div className="lg:w-1/4 flex justify-center">
            <img
              src="compressed_images/laptop.webp"
              alt="Technician Illustration"
              className="w-full max-w-xs lg:max-w-none object-contain"
            />
          </div>

          {/* Stats - Right Side */}
          <div className="lg:w-1/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              { stat: "15+", label: "Years Of Experience", bg: "bg-blue-50" },
              { stat: "56,303+", label: "Devices Repaired", bg: "bg-blue-50" },
              { stat: "100%", label: "Satisfied Customers", bg: "bg-blue-50" },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 text-center ${item.bg} transition-transform hover:scale-105`}
              >
                <p className="text-blue-600 text-3xl font-bold mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-700 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamlessRepairsSection;