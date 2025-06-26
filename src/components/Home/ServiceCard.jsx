import React from "react";
import { HiPlusCircle } from "react-icons/hi";

const ServiceCard = ({ image, title, description,cl }) => {
  return (
    <div className={`${cl} min-h-[27em] md:min-h-[33em] lg:min-h-[32em] xl:min-h-[33em] flex items-center justify-center p-2 md:p-4`}>
      <div className="max-w-md w-full min-h-[21em] relative rounded-tr-[60px]">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full rounded-tr-4xl object-cover h-48 md:h-80"
          />
        </div>
        <div className="bg-white max-w-sm mx-2 md:mx-4 shadow-xl absolute pb-5 md:pb-6 xl:pb-8 rounded-bl-4xl md:rounded-bl-[60px] -mt-10 inset-x-0 z-10 p-2 md:p-6 pt-10">
          <div className="absolute -top-8 left-2 xl:left-6 bg-[#0D9BD0] p-3 md:w-16 text-4xl md:h-16 rounded-md flex items-center justify-center text-white">
            <HiPlusCircle />
          </div>
          <h2 className="text-center text-[#0B2545] mt-3 min-h-10 font-semibold medium leading-6 md:leading-6">
            {title}
          </h2>
          <p className="mt-3 text-center  min-h-20  text-gray-500  verysmall  md:leading-6 font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
