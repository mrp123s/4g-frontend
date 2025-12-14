import React, { useState } from 'react';

// Helper function for scrolling to a specific section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Smooth scrolling effect
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Reusable navigation link component with enhanced styling
const NavLink = ({ id, children, isActive }) => (
  <button 
    onClick={() => scrollToSection(id)} 
    className={`px-3 py-2 text-sm font-semibold transition-all duration-300 
      ${isActive ? 'text-red-600 border-red-600' : 'text-gray-700 hover:text-red-600'} 
      border-b-2 ${isActive ? 'border-red-600' : 'border-transparent hover:border-red-500'}
      hover:scale-105`}
  >
    {children}
  </button>
);

const Header = () => {
  // TODO: Get item count from Cart Context
  const cartItemCount = 3;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <header className="bg-gradient-to-r from-white to-red-50 shadow-lg sticky top-0 z-50 
      backdrop-blur-sm bg-white/90 border-b border-red-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Restaurant Logo / Name with enhanced styling */}
        <button 
          onClick={() => {
            scrollToSection('home');
            setActiveSection('home');
          }} 
          className="group flex items-center space-x-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          {/* Decorative element */}
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full 
              flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">4G</span>
            </div>
            <div className="absolute -inset-1 bg-red-200 rounded-full blur opacity-0 
              group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          
          <div className="text-left">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 
              bg-clip-text text-transparent">
              FOOD PLAZZA
            </h1>
            <p className="text-xs text-gray-500 font-medium tracking-wider">Authentic Taste</p>
          </div>
        </button>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/50 rounded-2xl px-2 py-1 
          shadow-inner border border-red-100">
          <NavLink 
            id="menu-section" 
            isActive={activeSection === 'menu'}
            onClick={() => setActiveSection('menu')}
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Menu
            </span>
          </NavLink>
          
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
          
          <NavLink 
            id="about-section" 
            isActive={activeSection === 'about'}
            onClick={() => setActiveSection('about')}
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Us
            </span>
          </NavLink>
          
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
          
          <NavLink 
            id="contact-section" 
            isActive={activeSection === 'contact'}
            onClick={() => setActiveSection('contact')}
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </span>
          </NavLink>
        </nav>
        
        {/* Cart icon and mobile menu button */}
        <div className="flex items-center space-x-3">
          
          {/* Enhanced Cart Button */}
          <button 
            onClick={() => {
              // TODO: Handle cart click - maybe open cart drawer
              console.log('Cart clicked');
            }}
            className="group relative p-2.5 rounded-full bg-gradient-to-br from-white to-red-50 
              shadow-md hover:shadow-lg border border-red-100 transition-all duration-300 
              hover:scale-110 hover:bg-gradient-to-br hover:from-red-50 hover:to-white"
          >
            <div className="relative">
              {/* Cart SVG Icon with gradient */}
              <svg className="w-6 h-6 text-gray-700 group-hover:text-red-600 
                transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              {/* Cart item count badge with animation */}
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center
                  w-6 h-6 text-xs font-bold leading-none text-white
                  bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg
                  animate-pulse group-hover:animate-none
                  transform transition-transform duration-300 group-hover:scale-110">
                  {cartItemCount}
                </span>
              )}
            </div>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-red-400 opacity-0 
              group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </button>

          {/* Enhanced Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-gradient-to-br from-white to-red-50 
              shadow-md hover:shadow-lg border border-red-100 transition-all duration-300 
              hover:scale-105 active:scale-95"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-red-100 shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  scrollToSection('menu-section');
                  setIsMenuOpen(false);
                  setActiveSection('menu');
                }}
                className="flex items-center px-4 py-3 rounded-lg hover:bg-red-50 
                  transition-all duration-300 hover:pl-6 group"
              >
                <div className={`w-2 h-2 rounded-full mr-3 ${activeSection === 'menu' ? 'bg-red-500' : 'bg-gray-300 group-hover:bg-red-400'}`}></div>
                <span className={`font-medium ${activeSection === 'menu' ? 'text-red-600' : 'text-gray-700'}`}>
                  Menu
                </span>
              </button>
              
              <button 
                onClick={() => {
                  scrollToSection('about-section');
                  setIsMenuOpen(false);
                  setActiveSection('about');
                }}
                className="flex items-center px-4 py-3 rounded-lg hover:bg-red-50 
                  transition-all duration-300 hover:pl-6 group"
              >
                <div className={`w-2 h-2 rounded-full mr-3 ${activeSection === 'about' ? 'bg-red-500' : 'bg-gray-300 group-hover:bg-red-400'}`}></div>
                <span className={`font-medium ${activeSection === 'about' ? 'text-red-600' : 'text-gray-700'}`}>
                  About Us
                </span>
              </button>
              
              <button 
                onClick={() => {
                  scrollToSection('contact-section');
                  setIsMenuOpen(false);
                  setActiveSection('contact');
                }}
                className="flex items-center px-4 py-3 rounded-lg hover:bg-red-50 
                  transition-all duration-300 hover:pl-6 group"
              >
                <div className={`w-2 h-2 rounded-full mr-3 ${activeSection === 'contact' ? 'bg-red-500' : 'bg-gray-300 group-hover:bg-red-400'}`}></div>
                <span className={`font-medium ${activeSection === 'contact' ? 'text-red-600' : 'text-gray-700'}`}>
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Add custom animation for Tailwind CSS (add to your tailwind.config.js or global CSS)
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.3s ease-out;
// }

export default Header;