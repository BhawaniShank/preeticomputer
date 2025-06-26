import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Error from './pages/Error';
import Service from './pages/Service';
import Products from './pages/Products';
import Contactus from './components/Contact/ContactPage'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all other routes and includes the header/footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home route */}
          <Route path="about" element={<About />} /> {/* About route */}
          <Route path="shop" element={<Shop />} /> {/* Shop route */}
          <Route path="service" element={<Service />} /> {/* Service route */}
          <Route path="products" element={<Products />} /> {/* Service route */}
          <Route path="contactus" element={<Contactus />} /> {/* Service route */}
          <Route path="*" element={<Error />} /> {/* Catch-all route for unmatched paths */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
