// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <About/>
      <Faq/> 
      <Footer/>
    </div>
  );
}

export default App;
