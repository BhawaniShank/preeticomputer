import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // `Outlet` is used to render nested routes
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <header className="bg-green-500 text-white p-4 text-center">
      
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/service" className="hover:text-gray-300">Service</Link></li>
            <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          </ul>
        </nav>
      </header> */}

<Navbar/>

      {/* Main content */}
      <main className="flex-grow  bg-gray-100">
        <Outlet /> {/* Render the nested route components here */}
            <a
                        href="https://wa.me/9829179799"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-14 h-14  fixed bottom-4 right-2 z-30 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition"
                      >
                        <FaWhatsapp className="text-white large " />
                      </a>
      </main>

<Footer/>
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        <p>My Footer</p>
      </footer> */}
    </div>
  );
};

export default Layout;
