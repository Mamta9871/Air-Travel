import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Faq from '../Pages/Faq';
import Footer from '../Pages/Footer';

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <ScrollRestoration />
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
