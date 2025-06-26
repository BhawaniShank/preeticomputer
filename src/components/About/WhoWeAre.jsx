import React from "react";
import { motion } from "framer-motion";

const features = [
  "Certified, friendly technicians",
  "Same-day diagnostics & transparent pricing",
  "Repairs for all major brands and devices",
  "On-site and remote support available",
  "100% satisfaction guarantee",
];

const WhoWeAre = () => (
  <motion.section
    className="  w-full max-w-7xl mx-auto py-12 px-6  md:py-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Heading */}
    <motion.h2
      className="large font-extrabold text-[#1a1a3d] tracking-wide mb-8 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Who We Are
    </motion.h2>

    {/* Intro Paragraph */}
    <motion.p
      className="text-gray-700 medium mb-10 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <span className="font-semibold text-blue-500">PreetiComputers</span>, a trusted computer repair shop in Jaipur. From broken screens to slow PCs, we fix it all — quick, fair, and hassle-free. Our goal? To get you back to work without the tech stress.

.
    </motion.p>

    {/* Image + Features */}
    <div className="flex max-w-4xl mx-auto flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-10">
      {/* Image */}
      <motion.div
        className="w-full md:max-w-1/2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="compressed_images/whoweare.webp"
          alt="Our computer repair team"
          className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Features */}
      <motion.ul
        className="flex-1 text-gray-700 text-base small space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {features.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="text-blue-600 text-xl mr-3 font-bold"
            >
              ✓
            </motion.span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>

    {/* Outro Paragraph */}
    <motion.p
      className="text-gray-700 medium text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      Our mission is simple:{" "}
      <span className="font-semibold text-blue-600">make technology work for you</span>.
      Whether it’s a quick fix or a complex issue, we’re here to help—always with a smile.
    </motion.p>
  </motion.section>
);

export default WhoWeAre;