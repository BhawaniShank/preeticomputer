import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const services = [
  {
    image: "compressed_images/computerrepair.webp ",
    title: "Computer Repair",
    description: "Quick fixes for desktop issues like freezing, power failure, and hardware faults.",
  },
  {
    image: "compressed_images/laptoprepair.webp",
    title: "Leptop Repair",
    description: "Broken screen? Battery issues? Overheating? We repair all laptop brands with care and precision.",
  },
  {
    image: "compressed_images/datarecovery.webp",
    title: "Data Recovery",
    description: "Lost important files? We help recover your data safely from damaged or formatted drives.",
  },

];

const LaptopRepair = () => {
  return (
    <main className="bg-[#f3f4f6] relative md:pt-28">
      <section className="md:absolute px-2 mt-10 md:mt-0 top-10 mx-auto inset-x-0">
      <h1 className="text-center large font-bold">Our <span className="text-blue-500">Services</span></h1>
       <p className="text-center small mt-4 max-w-4xl mx-auto">
        At PreetiComputers, we fix slow PCs, broken screens, and software issues — fast and affordably. Whether for work or study, we keep your computer running like new. Trusted repairs, right here in Jaipur.
      </p>
      <hr className="max-w-20 text-blue-500 bg-blue-500 h-1 rounded-2xl mx-auto mt-5" />
      </section>
     
    <div className="grid grid-cols-2 mt-10 xl:px-20 max-w-[100em] mx-auto 2xl:px-40 sm:grid-cols-2 xl:grid-cols-3  ">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
        cl={index === 2 ? "hidden xl:grid" : ""}
        />
      ))}
    </div>
    <div className="text-center mt-1 md:mt-24 ">
      <Link to="/service" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
        View All Services
      </Link>
    </div>
    </main>
  );
};

export default LaptopRepair;
