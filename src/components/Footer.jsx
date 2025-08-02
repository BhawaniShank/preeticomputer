import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black overflow-x-hidden text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <Link
              to="/"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,


                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                userSelect: "none",
              }}
              className="text-blue-500 medium"
            >
              PreetiComputer
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              We specialize in a wide range of Rentals/Repair services and comprehensive solutions
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.facebook.com/share/17rNyKQAsu/"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
              >
                <FaFacebookF className="text-white text-sm" />
              </a>

              <a
                href="https://wa.me/9829179799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaWhatsapp className="text-white text-sm" />
              </a>

              <a
                href="https://instagram.com/preeti_computers"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
              >
                <FaInstagram className="text-white text-sm" />
              </a>
              {/* Uncomment below if needed */}
              {/* <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                <FaLinkedinIn className="text-white text-sm" />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b-2 border-dotted border-[#2a8aff] inline-block pb-1">
              Services
            </h3>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              <li>Laptop Repair</li>
              <li>Computer Repair</li>
              <li>Data Recovery</li>
              <li>Hardware Upgrade
                {/* <li>Phone Repair</li> */}
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b-2 border-dotted border-[#2a8aff] inline-block pb-1">
              Useful Links
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="list-disc list-inside">Privacy Policy</li>
              <li className="pt-3">
                <span className="font-semibold text-white">Support Team</span>
                <br />
                <span>+91 9829 179 799</span>
                <br />
                <span>+91 9828 079 799</span>
<br />
                <span>+91 9462 724 290</span>

              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b-2 border-dotted border-[#2a8aff] inline-block pb-1">
              Get In Touch
            </h3>
            <ul className="text-gray-300 text-sm space-y-4">
              <li>
                <span className="font-semibold text-white">Phone</span>
                <br />
                <span>+91 9829 179 799</span>
              </li>
              <li>
                <span className="font-semibold text-white">Email</span>
                <br />
                <span>PreetiComputersjaipur@gmail.com</span>
                <br />
                {/* <span>saurabhitservicessolutions@gmail.com</span> */}
              </li>
              <li>
                <span className="font-semibold text-white">Location</span>
                <br />
                <span>
              Shop No. F7 First Crossing First Floor,Ramgali no. 6 Opp. Makker Prints Rajapark jaipur 302004 rajasthan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
