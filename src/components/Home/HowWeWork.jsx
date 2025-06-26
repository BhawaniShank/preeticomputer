import React from "react";

const steps = [
  {
    id: "A",
    title: "Damage Device",
    description: "Bring your faulty PC or laptop to us.",
    image:
      "compressed_images/damagedevice.webp",
  },
  {
    id: "B",
    title: "Handover",
    description: "Tell us the issue, leave the rest to us.",
    image:
      "compressed_images/handover.webp",
  },
  {
    id: "C",
    title: "Fast Fixing",
    description: "Quick, quality repairs by experts.",
    image:
      "compressed_images/fastfix.webp",
    highlight: true,
  },
  {
    id: "D",
    title: "Delivery",
    description: "Get your device back, good as new.",
    image:
      "compressed_images/devliery.webp",
  },
];

const HowWeWork = () => {
  return (
    <section className=" text-black py-12 px-4 max-w-7xl mx-auto text-center font-semibold">
      <h2 className="large font-extrabold mb-3">
        How <span className="text-blue-500">We</span> Work
      </h2>
      <p className="small mx-auto mb-8 leading-relaxed font-normal">
        At PreetiComputers, we keep things simple. Just bring in your device, and we’ll handle the rest — fast, affordable, and stress-free.
      </p>
      <div className="w-16 h-1 mx-auto mb-14 border-b-4 border-blue-500" />

      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center space-y-5">
            <div
              className={`relative bg-[#1f7db3]/50 rounded-3xl   flex items-center justify-center md:w-60 md:h-60 ${
                step.highlight ? "" : ""
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute md:-bottom-5 -bottom-2 -right-2 md:-right-5 bg-blue-500 text-white small font-semibold rounded-md w-14 h-14 flex items-center justify-center select-none">
                {step.id}
              </div>
            </div>
            <h3 className="medium">{step.title}</h3>
            <p className="verysmall max-w-[160px] font-normal">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
