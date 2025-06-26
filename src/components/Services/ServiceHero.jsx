import React from 'react';

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-[450px] pt-24 bg-black bg-opacity-90 flex flex-col justify-center items-center text-center px-4">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/0d787cd3-79e0-4e6b-2c54-224c805cddc7.jpg"
        alt="Dark blurred close-up image of a circuit board with electronic components"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        aria-hidden="true"
      />

      {/* Heading */}
      <h1 className="relative text-white font-extrabold extralarge">
        Services
      </h1>

      {/* Breadcrumb Navigation (optional) */}
      {/* <nav className="relative mt-2 medium text-white">
        <span>Home</span>
        <span className="mx-1">{'>'}</span>
        <span>Pages</span>
        <span className="mx-1">{'>'}</span>
        <a href="#" className="text-blue-500 hover:underline">
          Services
        </a>
      </nav> */}
    </section>
  );
};

export default ServiceHero;
