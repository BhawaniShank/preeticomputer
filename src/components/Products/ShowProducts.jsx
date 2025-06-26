import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Slider from 'react-slick';

function ShowProducts() {
  const [isActive, setIsActive] = useState(0);

  const text = "text-2xl md:text-3xl lg:text-5xl";

  const categories = [
    "Desktop",
    "Laptop",
    "Storage",
    "Display",
    "Printer & Scanner",
    "Security",
    "Networking",
    "Software",
    "Cable",
    "Connector & Converter"
  ];

  const cards = [
    {
      image: "https://img.freepik.com/free-photo/pc-various-wireless-devices_140725-8749.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "Branded Desktop",
      category: "Desktop"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1681426698212-53e47fec9a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3B1fGVufDB8fDB8fHww",
      description: "CPU Processor",
      category: "Desktop"
    },
    {
      image: "https://images.unsplash.com/photo-1663245270195-12927123937d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3B1JTIwZmFufGVufDB8fDB8fHww",
      description: "CPU Processor fan",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/free-psd/powerful-microchip-circuit-board-detailed-view-high-tech-innovation_191095-87201.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "Motherboard",
      category: "Desktop"
    },
    {
      image: "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMHJhbSUyMG1lbW9yeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Desktop RAM Memory",
      category: "Desktop"
    },
    {
      image: "https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpYyUyMGNhcmQlMjBncHV8ZW58MHx8MHx8fDA%3D",
      description: "Graphics Card GPU",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/premium-photo/modern-computer-fan-wooden-desk_491799-8556.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "Cabinet | Cabinet Fan",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/premium-photo/ups_253658-846.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "Power Supply SMPS",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/premium-photo/ups_253658-846.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "UPS | UPS Batteries",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/free-photo/high-angle-metallic-hard-drive-components_23-2149417039.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "SDD | HDD Casing & Copier",
      category: "Desktop"
    },
    {
      image: "https://img.freepik.com/free-vector/modern-cpu-collection-with-flat-design_23-2147970215.jpg?ga=GA1.1.1164682813.1744053150&semt=ais_hybrid&w=740",
      description: "I/O Cards PCIe Cards",
      category: "Desktop"
    },

    // Laptop Product Section 

    {
      image: "compressed_images/battery.webp",
      description: "Laptop Battery",
      category: "Laptop"
    },
    {
      image: "compressed_images/adapter.webp",
      description: "Laptop Adaptor",
      category: "Laptop"
    },
    {
      image: "compressed_images/ram.webp",
      description: "Laptop RAM",
      category: "Laptop"
    },
    {
      image: "compressed_images/pad.webp",
      description: "Laptop Cooling Pad",
      category: "Laptop"
    },
    {
      image: "compressed_images/spare.webp",
      description: "Laptop Spares",
      category: "Laptop"
    },
    {
      image: "compressed_images/accessories.webp",
      description: "Laptop Accessories",
      category: "Laptop"
    },
    {
      image: "compressed_images/screen.webp",
      description: "Laptop Screen",
      category: "Laptop"
    },
    {
      image: "compressed_images/keyboard.webp",
      description: "Laptop Keyboard",
      category: "Laptop"
    },
    {
      image: "compressed_images/touch.webp",
      description: "Laptop Base | Panel | Touchpad",
      category: "Laptop"
    },
    {
      image: "compressed_images/cable.webp",
      description: "Laptop Display Cable",
      category: "Laptop"
    },


    // Stoage Section Product 

    {
      image: "compressed_images/ssd.webp",
      description: "Internal SSD",
      category: "Storage"
    },
    {
      image: "compressed_images/exsdd.webp",
      description: "External SSD",
      category: "Storage"
    },
    {
      image: "compressed_images/exhdd.webp",
      description: "External Hard Disk",
      category: "Storage"
    },
    {
      image: "compressed_images/pen.webp",
      description: "Pendrive",
      category: "Storage"
    },
    {
      image: "compressed_images/memory.webp",
      description: "SD | Micro SD Cards",
      category: "Storage"
    },
    {
      image: "compressed_images/hdd.webp",
      description: "Computer Hard Disk",
      category: "Storage"
    },
    {
      image: "compressed_images/ser.webp",
      description: "Surveillance Hard Disk",
      category: "Storage"
    },
    {
      image: "compressed_images/enter.webp",
      description: "Enterprise | NAS Hard Disk",
      category: "Storage"
    },
    {
      image: "compressed_images/pull.webp",
      description: "Pull Out Hard Disk",
      category: "Storage"
    },
    {
      image: "compressed_images/nbox.webp",
      description: "NAS Box",
      category: "Storage"
    },

    // Display Product Service 

    {
      image: "compressed_images/led.webp",
      description: "LED | Monitor",
      category: "Display"
    },
    {
      image: "compressed_images/tv.webp",
      description: "Television",
      category: "Display"
    },
    {
      image: "compressed_images/ps.webp",
      description: "Projector | Projector Screen",
      category: "Display"
    },
    {
      image: "compressed_images/pre.webp",
      description: "Presenter | Pointer",
      category: "Display"
    },
    {
      image: "compressed_images/stand.webp",
      description: "Mount Kit | Projector Stand",
      category: "Display"
    },
    
    // Printer & Scanner Product 

    {
      image: "compressed_images/printer.webp",
      description: "Printer | Scanner",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/bar.webp",
      description: "Barcode Scanner",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/cash.webp",
      description: "Lamination Machine | Money Counter",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/bottle.webp",
      description: "Ink Bottle",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/ink.webp",
      description: "Ink Cartridge",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/dmp.webp",
      description: "Toner | DMP Cartridge",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/powder.webp",
      description: "Toner Powder",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/toner.webp",
      description: "Printer | Toner Spare Parts",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/roll.webp",
      description: "VAX Ribbon | Barcode Roll",
      category: "Printer & Scanner"
    },
    {
      image: "compressed_images/pvc.webp",
      description: "Photo Paper | Paper Rim | PVC Card",
      category: "Printer & Scanner"
    },

    // Security Product Service 

    {
      image: "compressed_images/cctv.webp",
      description: "HD Camera",
      category: "Security"
    },
    {
      image: "compressed_images/dvr.webp",
      description: "HD DVR",
      category: "Security"
    },
    {
      image: "compressed_images/ip.webp",
      description: "IP Camera",
      category: "Security"
    },
    {
      image: "compressed_images/nvr.webp",
      description: "IP NVR",
      category: "Security"
    },
    {
      image: "compressed_images/ptz.webp",
      description: "PTZ | PT | 4G | WIFI Camera",
      category: "Security"
    },
    {
      image: "compressed_images/bio.webp",
      description: "Biometrics",
      category: "Security"
    },
    {
      image: "compressed_images/lock.webp",
      description: "Locks And Brackets",
      category: "Security"
    },
    {
      image: "compressed_images/vdp.webp",
      description: "Video Door Phones VDP",
      category: "Security"
    },
    {
      image: "compressed_images/gps.webp",
      description: "GPS Tracker & Accessories",
      category: "Security"
    },
    {
      image: "compressed_images/alarm.webp",
      description: "Intrusion And Alarm",
      category: "Security"
    },
    {
      image: "compressed_images/power.webp",
      description: "Power Supply | Adapter",
      category: "Security"
    },
    {
      image: "compressed_images/rack.webp",
      description: "Rack & Accessories",
      category: "Security"
    },

    // Networking Product Service 

    {
      image: "compressed_images/switch.webp",
      description: "Desktop Switch",
      category: "Networking"
    },
    {
      image: "compressed_images/poe.webp",
      description: "POE Switch",
      category: "Networking"
    },
    {
      image: "compressed_images/fiber.webp",
      description: "Fiber Switch",
      category: "Networking"
    },
    {
      image: "compressed_images/FA.webp",
      description: "Fiber Accessories",
      category: "Networking"
    },
    {
      image: "compressed_images/router.webp",
      description: "Router | Access Point | Range Extender",
      category: "Networking"
    },
    {
      image: "compressed_images/wifi.webp",
      description: "USB Wifi Adapter | Receiver",
      category: "Networking"
    },
    {
      image: "compressed_images/tool.webp",
      description: "Tools",
      category: "Networking"
    },

    // Software Product Service 

    {
      image: "compressed_images/tally.webp",
      description: "Accounting Software",
      category: "Software"
    },
    {
      image: "compressed_images/anti.webp",
      description: "Antivirus",
      category: "Software"
    },
    {
      image: "compressed_images/office.webp",
      description: "MS Office",
      category: "Software"
    },
    {
      image: "compressed_images/windows.webp",
      description: "Windows",
      category: "Software"
    },
    {
      image: "compressed_images/linux.webp",
      description: "Linux",
      category: "Software"
    },

    // Cable Product Service 

    {
      image: "compressed_images/hdmi.webp",
      description: "HDMI Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/vga.webp",
      description: "VGA Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/usb.webp",
      description: "USB Male | Female Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/ucable.webp",
      description: "USB Printer Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/power.webp",
      description: "Power Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/3cctv.webp",
      description: "3+1 CCTV Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/lan.webp",
      description: "LAN Cables CAT6",
      category: "Cable"
    },
    {
      image: "compressed_images/fiber.webp",
      description: "Fiber Cables",
      category: "Cable"
    },
    {
      image: "compressed_images/ocable.webp",
      description: "Other Cables",
      category: "Cable"
    },

    // Connector & Converter Product Service 

    {
      image: "compressed_images/pin.webp",
      description: "Branded 9 Pin Serial Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/fcable.webp",
      description: "Branded HDMI Female To Female Cable ",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/bc.webp",
      description: "CADYCE USB TO SERIAL ",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/onoff.webp",
      description: "Computer Cabinet ON | OFF Switch Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/di.webp",
      description: "DI HDMI Coupler L Shape",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/hdmlc.webp",
      description: "HDMI Coupler Jointer Female to Female",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/sata.webp",
      description: "SATA Male To 4 Pin Female Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/DP.webp",
      description: "Smart-Pro DP To DP Connector",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/vga.webp",
      description: "VGA Connector",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/26.webp",
      description: "2 Pin to 6 Pin Pci Express Power Adapter Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/multi.webp",
      description: "Multybyte 4 Pin to 8 Pin Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/ranz.webp",
      description: "Ranz HDMI Coupler Jointer Female to Female",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/typec.webp",
      description: "Ranz Type-C to USB OTG Cable",
      category: "Connector & Converter"
    },
    {
      image: "compressed_images/sata.webp",
      description: "SATA Female To 4 Pin Male Cable",
      category: "Connector & Converter"
    },


  ];

    const sliderRef = useRef(null);
     const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filteredCards = cards.filter(card => card.category === categories[isActive]);

      const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    // Simulate an API call or submission here
    setTimeout(() => {
      alert('Message sent successfully!');
      reset();
    }, 1000);
  };

  const contactref = useRef(null)
  const [selectedProduct, setSelectedProduct]=useState(null)


    const scrollToSection = (productdescription) => {
    //  window.scrollTo({ top:[800], behavior: "smooth" });
    contactref.current.scrollIntoView();
     setSelectedProduct(productdescription);
    
  };



  



  return (
    <div className='w-full max-w-[100em] mx-auto  flex flex-col items-center justify-center py-10'>
      <h1 className={`font-semibold  large`}><spen className='text-blue-500'>Our Products</spen></h1>
      <p className='medium font-semibold mt-4 text-center px-4'>
        Looking for reliable parts? PreetiComputers offers quality accessories like keyboards, SSDs, chargers, and more <br /> all tested and budget-friendly.


      </p>

      {/* <div className='flex gap-3 pt-8 flex-wrap items-center justify-center'>
        {categories.map((category, i) => (
          <button
            key={i}
            onClick={() => setIsActive(i)}
            className={`${isActive === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded-lg small p-2 px-4 transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div> */}

{/* React Slick Categories Slider */}
      <div className="w-full px-4 py-8 max-w-[95vw] mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {categories.map((category, i) => (
            <div key={i} className="px-1">
              <button
                onClick={() => {
                  setIsActive(i);
                  // Optional: Center the active button
                  sliderRef.current.slickGoTo(i);
                }}
                className={`w-full ${
                  isActive === i 
                    ? "bg-blue-500 text-white shadow-md" 
                    : "bg-gray-200 text-black hover:bg-gray-300"
                } rounded-lg overflow-hidden w-full  small p-2 px-4 transition-all duration-200 whitespace-nowrap`}
              >
                {category}
              </button>
            </div>
          ))}
        </Slider>
      </div>



      <div className='grid grid-cols-2 gap-4 mt-10 px-6 md:px-0 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {filteredCards.map((item, j) => (
          <section key={j} className=" justify-between flex flex-col  w-full  rounded-2xl   transition">
            <>
            <img className='aspect-square object-cover rounded-2xl w-52 mx-auto' src={item.image} alt={item.description} />
            <p className='text-center max-w-[11em] min-h-14 mx-auto extrasmall  py-2 font-semibold capitalize'>{item.description}</p>
            </>
            <button onClick={()=>{scrollToSection(item.description)}} className='w-full text-center  rounded-xl text-white py-2 bg-blue-500'>Book Now</button>
          </section>
        ))}
      </div>

 <div ref={contactref} className="w-full max-w-[80em] px-6 sm:px-12 mx-auto py-12">
       
        <h2 className="text-center text-2xl font-extrabold mb-12">Book Now</h2>

        <div className="flex space-y-10 flex-col md:flex-row md:space-x-20">
       <div className='w-full  md:w-[50%]'>
       <img src="/Contact/order.webp" className='w-full h-full rounded-2xl' alt="" />
       </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                    focus:border-blue-500 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                    focus:border-blue-500 focus:ring-0 focus:outline-none border-l-4  bg-[#f3f4f6] border-l-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                defaultValue={selectedProduct}
                placeholder="Your Product"
                {...register('Product', { required: 'Product is required' })}
                className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                  focus:border-blue-500 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-500"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
                className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                  focus:border-blue-500 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-500 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white text-sm font-semibold rounded-full py-2.5 px-6 mt-2 hover:bg-blue-400 cursor-pointer transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-500 text-sm mt-2">Message submitted successfully!</p>
            )}
          </form>
        </div>
      </div>


    </div>
  );
}

export default ShowProducts;
