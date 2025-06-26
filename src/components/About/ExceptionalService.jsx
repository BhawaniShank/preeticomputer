 import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
 
const ExceptionalService = () => {
  return (
 
 
      <div className="flex lg:min-h-[30em] bg-[#f3f4f6] max-w-[80em]  mx-auto font-[Poppins] items-center flex-col lg:flex-row  text-black rounded-2xl p-8 xl:p-14 gap-8 md:gap-0">
        {/* Left side */}
        <div className="w-full lg:max-w-[40%] flex flex-col justify-center gap-8">
          <div className="flex items-center gap-3 medium  font-semibold tracking-widest uppercase opacity-90">
            <FaStar className="text-blue-500 text-base" />
            <span className="text-blue-500">Exceptional Service</span>
            <FaStar className="text-blue-500 text-base" />
          </div>
          <h2 className="large md:max-w-[80%] font-semibold leading-tight">
            Why We Are Best From Others
          </h2>
          <Link to="/contactus" className="w-max  rounded-full border-2 border-blue-500 px-8 py-3 medium font-semibold tracking-widest hover:bg-white hover:text-blue-500 transition-colors">
            Get a Schedule
          </Link>
        </div>
 
        {/* Right side */}
        <div className="lg:w-3/4 md:mt-10 lg:h-[20em] items-center relative flex flex-col justify-center gap-10">
          {/* Star SVG */}
          <div className="absolute leftwhite-1/4 translate-y-1/2 top-0">
            <svg
              fill="none"
              height="56"
              viewBox="0 0 48 48"
              width="56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0L26.5 15.5L42 18L26.5 20.5L24 36L21.5 20.5L6 18L21.5 15.5L24 0Z"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M24 10L25.5 15L30 16L25.5 17L24 22L22.5 17L18 16L22.5 15L24 10Z"
                fill="white"
              />
            </svg>
          </div>
 
          {/* Services */}
          <div className="flex w-full md:flex-row md:grid lg:flex md:grid-cols-2 items-end justify-center h-full lg:flex-col flex-col z-10 gap-8 md:gap-10">
            {[
              {
                title: "Fast Delivery",
                desc: "We value your time. Most repairs are done same-day or next-day — no long waits.",
                icon: (
                  <path
                    d="M3 12H17M17 12L14 9M17 12L14 15M21 19H3V5H21V19Z"
                    stroke="#2b7fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                ),
              },
              {
                title: "Free Diagnostics",
                desc: "We check your device first, explain the issue, and give you a clear estimate — all for free.",
                icon: (
                  <>
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="10"
                      rx="2"
                      stroke="#2b7fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#2b7fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </>
                ),
              },
              {
                title: "Quick Repair Process",
                desc: "From problem to solution, our process is fast and simple — no confusion, no delays.",
                icon: (
                  <>
                    <path
                      d="M12 2C13.1046 2 14 2.89543 14 4V6H10V4C10 2.89543 10.8954 2 12 2Z"
                      stroke="#2b7fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 9H17L15 21H9L7 9Z"
                      stroke="#2b7fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 13H15"
                      stroke="#2b7fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-start gap-5  `}>
                <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-lg p-4">
                  <svg
                    fill="none"
                   className="h-10"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black medium leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="small leading-relaxed opacity-90 md:max-w-[500px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
 
        
        </div>
      </div>
    // </section>
  );
};
 
export default ExceptionalService;