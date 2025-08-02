import React, { useRef, useState, useMemo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Slider from 'react-slick';

function ShowProducts() {
  const [isActive, setIsActive] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(20); // Show only 20 products initially

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
  
  // Memoized settings for better performance
  const settings = useMemo(() => ({
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
  }), []);

  // Memoized filtered cards for better performance
  const filteredCards = useMemo(() => {
    const filtered = cards.filter(card => card.category === categories[isActive]);
    return filtered.slice(0, visibleProducts); // Only show visible products
  }, [cards, categories, isActive, visibleProducts]);

  // Load more products function
  const loadMoreProducts = useCallback(() => {
    setVisibleProducts(prev => prev + 20);
  }, []);

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

  const contactref = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToSection = (productdescription) => {
    setSelectedProduct(productdescription);
    contactref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Optimized product card component
  const ProductCard = React.memo(({ card, index }) => (
    <div 
      key={index}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => scrollToSection(card.description)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={card.image}
          alt={card.description}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'compressed_images/placeholder.webp'; // Fallback image
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
          {card.description}
        </h3>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
          Get Quote
        </button>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`${text} font-bold text-gray-900 mb-4`}>
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of computer hardware, accessories, and components. 
            Quality products at competitive prices for all your computing needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setIsActive(index);
                setVisibleProducts(20); // Reset visible products when changing category
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                isActive === index
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {filteredCards.map((card, index) => (
            <ProductCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredCards.length < cards.filter(card => card.category === categories[isActive]).length && (
          <div className="text-center">
            <button
              onClick={loadMoreProducts}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Contact Form */}
        <div ref={contactref} className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get a Quote for {selectedProduct || 'Your Product'}
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you with a competitive quote.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('fullName', { required: 'Full name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Interest
              </label>
              <input
                type="text"
                {...register('productInterest')}
                defaultValue={selectedProduct || ''}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What product are you interested in?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Quote'}
              </button>
            </div>

            {isSubmitSuccessful && (
              <div className="text-center text-green-600 font-medium">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
