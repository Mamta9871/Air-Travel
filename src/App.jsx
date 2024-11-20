// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Claim from './components/Claim';
import Video from './components/Video';
import Compensation from './components/Compensation';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <Claim/>
      <Video/>
      <Compensation/>
      <Faq/> 
      <Footer/>
    </div>
  );
}

export default App;
