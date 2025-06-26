import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Prerna Sneh",
    image: "compressed_images/unnamed.webp",
    text: `I had a wonderful experience with this service! From the moment I reached out, the owner was extremely polite, professional, and helpful. Their behavior made the entire process smooth and comfortable, and it’s evident that customer satisfaction is a top priority for them.`,
  },
  {
    name: "Raj Gandhi",
    image: "compressed_images/2.webp",
    text: `i recently got my dell laptop,s hinge repaired at preeti computers,&i m extremely satisfied with their service! the hinge was completely broken,making it difficult to open and close the laptop,but team at preeti computers fixed it perfectly in resonable price.`,
  },
  {
    name: "Deepesh Sharma",
    image: "compressed_images/3.webp",
    text: `I visited first time for my hp laptop service and they treat me very well. They fixed all my laptop issues in less time at an affordable price. I recommend you all to visit them for laptop repair solutions.`,
  },
  {
    name: "Suryansh Kapoor",
    image: "compressed_images/4.webp",
    text: `Amazing service. My laptop was stuck on lock screen, every other service center was telling to format and reinstall windows but Preeti Computers fixed the issue without losing any data  and Special Thanks to Vishal who understood the problem and fixed it completely.`,
  },
  {
    name: "Dhanpat Godara",
    image: "compressed_images/5.webp",
    text: `Recently got my laptop repaired at this place and i am totally satisfied with their work . They gave their best to resolve all my laptop problems and their prices are reasonable as compared to the market prices!`,
  },
  {
    name: "Balu",
    image: "compressed_images/6.webp",
    text: `I went to laptop service center for my Lenovo laptop repairing. Now, I am using my laptop after they did the fantastic work as if this laptop belongs to them. Thorough analysis of the problem with no cheating at all to their customers, candid feedback with proper explanations are real testimony of the owner.`,
  },


  {
    name: "Granth Dubey",
    image: "compressed_images/7.webp",
    text: `I recently purchased a computer from preeti computers and the experience was fantastic! The staff was incredibly knowledgeable and helped me find the perfect system that fit my needs and budget. They patiently answered all my questions, explaining the differences between various models without pushing for a sale. I felt confident in my decision because of their expertise.`,
  },
  {
    name: "Mayank Meshram",
    image: "compressed_images/8.webp",
    text: `Preeti Computers Laptop Service Center Is Very Good Shop in Jaipur Rajapark,it is very professional & economical,the are very co-operative & transparent in their laptop repair,there r no hidden charges,it gives us all the information about the laptop before fixing it.Highly Recommended as Reliable Source For Laptop Repairing.`,
  },
  {
    name: "Kushal Sharma",
    image: "compressed_images/9.webp",
    text: `Experienced a best service from the preeti computer Very loyal and friendly bhaiya Resolved my problem efficiently. I went to other service centre as well but the price they asked was very high compared to the price which I was asked here very genuine and good service. Thankyou preeti computers and laptop services. I will definitely come again in future.`,
  },
  {
    name: "Himadri Banerjee",
    image: "compressed_images/10.webp",
    text: `Very good service, they repaired my Dell laptop and I am fully satisfied with the service. Best part is they explain the problem to you, and then suggest the solution. Quality service in reasonable price.`,
  },
  {
    name: "Navnish Singh",
    image: "compressed_images/11.webp",
    text: `I recently had my laptop's keyboard repaired from them, and I couldn't be happier with the service I received. The staff was incredibly friendly and professional, making the entire experience smooth and hassle-free. They swiftly diagnosed the issue and provided a speedy repair that restored my keyboard to perfect working condition. The quality of their work was outstanding, and I appreciated their attention to detail. I highly recommend this shop for any laptop repairs.`,
  },
  {
    name: "Harika Gumpula",
    image: "compressed_images/12.webp",
    text: `Repaired My Dell Laptop Hinge Problem In Very Quick & Resonable Price,Service Is Very Good & Owner Behaviour is Very Friendly & Polite..Thanks Preeti Computers Laptop Service Center.`,
  },
];

const Testimonials = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReadMore = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#f5f6f7] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="large font-extrabold text-[#0a3a57]">
          What <span className="text-blue-500">Customers</span> Say
        </h2>
        <p className="mt-3 text-gray-600 small font-normal leading-relaxed">
          People trust PreetiComputers for honest service and quick repairs. Here's what some of our happy customers have to say:
        </p>
        <div className="mt-2 w-12 h-[4px] bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-4">
              <div 
                className={`bg-white rounded-tr-4xl rounded-bl-4xl p-8 flex flex-col ${
                  expandedReviews[idx] ? 'min-h-[350px]' : 'min-h-[300px]'
                } transition-all duration-300`}
              >
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-[#0a3a57] font-semibold small">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-gray-600 verysmall leading-relaxed mb-4 ${
                    expandedReviews[idx] ? '' : 'line-clamp-5'
                  }`}>
                    {item.text}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-yellow-400 text-xs flex space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  {item.text.length > 200 && (
                    <button 
                      onClick={() => toggleReadMore(idx)}
                      className="text-blue-500 text-xs font-medium hover:underline"
                    >
                      {expandedReviews[idx] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
                <div className="absolute lg:flex top-6 right-6 text-[#d6e6e3] hidden text-2xl md:text-4xl lg:text-6xl font-extrabold select-none leading-none pointer-events-none">
                  <SiComma />
                  <SiComma />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;