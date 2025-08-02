import React from "react";

const steps = [
  {
    id: "A",
    title: "Device Inspection & Disassembly",
    description: "We carefully open the device (laptop/printer) and securely store all components in an organized box to prevent loss or damage.",
    image:
      "compressed_images/damagedevice.webp",
  },
  {
    id: "B",
    title: "Diagnosis & Problem Identification",
    description: "Our technicians run thorough diagnostics to pinpoint the exact issue affecting your device.",
    image:
      "compressed_images/handover.webp",
  },
  {
    id: "C",
    title: "Cost Estimation & Approval",
    description: "Once the problem is identified, we provide a detailed cost estimate for the repair and seek your approval before proceeding.",
    image:
      "compressed_images/fastfix.webp",
    highlight: true,
  },
  {
    id: "D",
    title: "Customer Verification & Documentation",
    description: "All disassembled parts are documented, and we obtain your signature as verification to ensure transparency.",
    image:
      "compressed_images/devliery.webp",
  },
   {
    id: "E",
    title: "Repair Progress Updates",
    description: "We keep you informed about the ongoing repairs, including any additional findings or required actions.",
    image:
      "compressed_images/devliery.webp",
  },
   {
    id: "F",
    title: "Quality Testing & Self-Check",
    description: "After completing the repair, we rigorously test the device to ensure optimal functionality.",
    image:
      "compressed_images/devliery.webp",
  },
    {
    id: "F",
    title: "Final Delivery & Satisfaction",
    description: "Once the repair is verified, your device is safely returned to you in fully working condition. ",
    image:
      "compressed_images/devliery.webp",
  },
];

const HowWeWork = () => {
  return (
    <section className=" text-black pt-12 px-4 max-w-7xl mx-auto text-center font-semibold">
      <h2 className="large font-extrabold mb-3">
        How <span className="text-blue-500">We</span> Work
      </h2>
      <p className="small mx-auto mb-8 leading-relaxed font-normal">
        At PreetiComputers, we keep things simple. Just bring in your device, and we’ll handle the rest — fast, affordable, and stress-free.
      </p>
      <div className="w-16 h-1 mx-auto mb-14 border-b-4 border-blue-500" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center space-y-7">
            <div
              className={`relative bg-[#1f7db3]/50 rounded-3xl   flex items-center justify-center md:w-85 md:h-85 ${
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
            <span>
            <h3 className="medium">{step.title}</h3>
            <p className="verysmall max-w-[360px] font-normal">{step.description}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
