import React from "react";
import { FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    title: "Expert Engineers",
    image:
      "https://storage.googleapis.com/a1aa/image/6486dd19-dcb0-4b76-fe40-111e00945609.jpg",
    description: "Lorem ipsum dolor sitam consect etur adipiscing elit tellus,",
    buttonColor: "bg-sky-400 hover:bg-sky-500",
  },
  {
    title: "On Time Delivery",
    image:
      "https://storage.googleapis.com/a1aa/image/cf82206e-d176-40cc-3c9c-10d641a9f562.jpg",
    description: "Lorem ipsum dolor sitam consect etur adipiscing elit tellus,",
    buttonColor: "bg-blue-900 hover:bg-blue-800",
  },
  {
    title: "Best Technology",
    image:
      "https://storage.googleapis.com/a1aa/image/c2321488-b8f5-4d92-c875-c87c1a5be0b9.jpg",
    description: "Lorem ipsum dolor sitam consect etur adipiscing elit tellus,",
    buttonColor: "bg-sky-400 hover:bg-sky-500",
  },
  {
    title: "25 Years Experience",
    image:
      "https://storage.googleapis.com/a1aa/image/c1f3ff1c-fc4a-4a71-96f4-72a82df69cd9.jpg",
    description: "Lorem ipsum dolor sitam consect etur adipiscing elit tellus,",
    buttonColor: "bg-blue-900 hover:bg-blue-800",
  },
];

const FeaturesCards = () => {
  return (
    <div className="bg-white flex justify-center items-center p-4">
      <div className="max-w-7xl w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" bg-blue-50 rounded-md flex flex-col"
          >
            <div className="py-4 px-2 sm:p-8 flex flex-col items-center text-center md:space-y-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-12 h-12"
                loading="lazy"
              />
              <h3 className="text-blue-900 min-h-12 font-semibold text-lg leading-6">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-6 max-w-xs">
                {card.description}
              </p>
            </div>
            <button
              type="button"
              className={`${card.buttonColor} text-white text-sm font-normal py-3 px-6 rounded-b-md w-full transition-colors flex justify-center items-center space-x-2`}
            >
              <span>View Details</span>
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
