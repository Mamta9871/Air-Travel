import React from 'react'
import Home from '../components/Home'
import Claim from '../components/Claim'
import Faq from '../components/Faq';
import Footer from '../components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom';

const Routes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/claim' element={<Claim/>}/>
      <Route path='/faqs' element={<Faq/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
  )
}

export default Routes