import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logow from '../assets/logow.png'

const Footer = () => {
  return (
    <footer className="bg-[#103B15] text-white py-10 px-10 mt-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Left Section: Logo and Description */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <div className="mb-4">
            {/* Replace this div with your logo */}
           <img className='w-1/2' src={logow} alt="" />
          </div>
          <p className="text-sm leading-6">
            Travellers banking on timely flights for holidays or homecomings may encounter delays or cancellations. However, passengers can find solace in the broad compensation rights available for such disruptions. For further clarity on these compensation rights, please visit our{" "}
            <a href="#" className="text-[#9ACF60] underline">
              Frequently Asked Questions (FAQs)
            </a>{" "}
            page.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-[#9ACF60]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl hover:text-[#9ACF60]">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-[#9ACF60]">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-[#9ACF60]">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Center Section: Links */}
        <div className="w-full lg:w-2/3 flex flex-wrap justify-between">
          <div className="w-1/2 lg:w-auto mb-6 lg:mb-0 lg:ml-10">
            <h5 className="font-bold mb-3">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto mb-6 lg:mb-0">
            <h5 className="font-bold mb-3">About ATC</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Affiliates Program</a></li>
              <li><a href="#" className="hover:underline">Legal Partner</a></li>
              <li><a href="#" className="hover:underline">Other Partnerships</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto mb-6 lg:mb-0">
            <h5 className="font-bold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Compliance</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto">
            <h5 className="font-bold mb-3">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> 0330 808 8636
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> info@airtravelclaim.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
        Copyright © 2024 Air Travel Claim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

