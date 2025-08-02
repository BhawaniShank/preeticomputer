import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Shop = lazy(() => import('./pages/Shop'));
const Error = lazy(() => import('./pages/Error'));
const Service = lazy(() => import('./pages/Service'));
const Products = lazy(() => import('./pages/Products'));
const Contactus = lazy(() => import('./components/Contact/ContactPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
