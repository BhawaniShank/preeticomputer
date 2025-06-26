import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How long does a typical repair take?',
    answer: 'Most repairs are done within 1–2 days. Quick fixes may be done the same day depending on the issue and parts availability.'
  },
  {
    question: 'Do you charge for checking or diagnosis?',
    answer: 'Nope! We offer free diagnostics — we’ll check the problem and let you know the cost before starting any work.'
  },
  {
    question: 'Is my data safe during repair?',
    answer: 'Yes, your data is safe. But for extra peace of mind, we recommend backing up important files before handing over the device.'
  },
  {
    question: 'Do you use original parts for replacements?',
    answer: 'We use quality and reliable parts — original when available, or high-grade compatible ones with warranty.'
  },
  {
    question: 'Do you offer pickup and delivery?',
    answer: 'Yes, we offer local pickup and delivery within Jaipur (charges may apply). Just give us a call to schedule.'
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8FAFF] py-16 px-4 sm:px-6 lg:px-8 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our virtual assistant services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 max-w-3xl w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 overflow-hidden"
                initial={false}
                animate={{
                  backgroundColor: openIndex === index ? '#FFFFFF' : '#F1F5FF',
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className={`w-full text-left font-medium text-lg rounded-lg px-6 py-4 flex items-center justify-between transition-colors ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-800'
                  }`}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-lg ${
                      openIndex === index ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    <FaChevronDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="px-6"
                    >
                      <motion.p
                        className="text-gray-600 pb-4 pt-2"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <div className="hidden lg:block relative w-96 flex-shrink-0">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-xl z-0"></div>
            <div className="relative z-10">
              <img
                src="compressed_images/faq.webp"
                alt="Professional virtual assistant"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
              <div className="absolute -left-6 -top-6 bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-2xl">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;