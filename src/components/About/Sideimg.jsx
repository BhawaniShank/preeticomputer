import React from "react";
import { FaStar } from "react-icons/fa6";
import Laptop from "/laptop.webp";

const Sideimg = () => {
  return (
    <div className="">
      <div className="max-w-[90rem] pb-10 px-4 relative overflow-hidden  flex flex-col gap-5 md:flex-row lg:pt-20 lg:px-20 rounded-3xl mx-auto bg-[#f3f7fe] min-h-[30em]">
        <img
          className="md:w-1/2 min-h-[20em] rounded-3xl object-cover"
          src={Laptop}
          alt=""
        />
        <div className="flex-1 h-full items-center justify-center">
          <h2 className="large font-bold  md:leading-[50px] ">
            Building super-powers for Educational Institutions.
          </h2>

          <p className="medium mt-5">
            The absence of a robust digital solution has been a persistent
            challenge for Indian educational institutes. At Studybase, we’re
            redefining the educational experience for all stakeholders with our
            comprehensive SaaS platform.
          </p>
        </div>
      </div>
      {/* <div className="max-w-[90rem] px-4  relative overflow-hidden  flex flex-col gap-5 md:flex-row-reverse lg:px-20 pb-20 rounded-3xl mx-auto bg-[#f3f7fe] min-h-[30em]">
        <img
          className="md:w-1/2 min-h-[20em] rounded-3xl object-cover"
          src={Laptop}
          alt=""
        />
        <div className="flex-1 h-full items-center justify-center">
          <h2 className="text-3xl font-bold lg:text-[36px] md:leading-[50px] ">
            Building super-powers for Educational Institutions.
          </h2>

          <p className="text-lg mt-5">
            The absence of a robust digital solution has been a persistent
            challenge for Indian educational institutes. At Studybase, we’re
            redefining the educational experience for all stakeholders with our
            comprehensive SaaS platform.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Sideimg;