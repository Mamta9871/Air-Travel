import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/home",
  },
  {
    id: 2,
    title: "FAQ's",
    path: "/faqs",
  },
  {
    id: 3,
    title: "About Air Travel Claim",
    path: "/claim",
  },
  {
    id: 4,
    title: "Contact us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md xl:px-20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                className="max-w-[150px] lg:max-w-[200px] lg:w-48"
                src={Logo}
                alt="Logo"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
              {NavbarMenu.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.path}
                  className="relative group px-3 py-2 text-gray-800 hover:text-black"
                >
                  {menu.title}
                  <div className="absolute w-2 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2 top-1/2 hidden group-hover:block"></div>
                </a>
              ))}
              <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {NavbarMenu.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.path}
                  className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  {menu.title}
                </a>
              ))}
              <button className="block w-full px-4 py-2 mt-2 text-white bg-black rounded-full hover:bg-gray-700">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex justify-center items-center h-40 bg-gray-200">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 font-sans">
          Have you had your <br /> flight delayed or cancelled?
        </h1>
      </div>
    </>
  );
};

export default Navbar;
