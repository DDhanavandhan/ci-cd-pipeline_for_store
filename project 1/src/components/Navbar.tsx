import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-3">
            <MobileNavLinks closeMenu={() => setIsOpen(false)} />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center justify-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <a href="#home" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300">Home</a>
      <div className="relative group">
        <button className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 flex items-center">
          Products
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
          <a href="#organic" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">Organic Eggs</a>
          <a href="#free-range" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">Free-Range Eggs</a>
          <a href="#specialty" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">Specialty Eggs</a>
        </div>
      </div>
      <a href="#about" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300">Our Farm</a>
      <a href="#testimonials" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300">Testimonials</a>
      <a href="#contact" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300">Contact</a>
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <>
      <a href="#home\" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2\" onClick={closeMenu}>Home</a>
      <a href="#organic" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2 pl-6" onClick={closeMenu}>Organic Eggs</a>
      <a href="#free-range" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2 pl-6" onClick={closeMenu}>Free-Range Eggs</a>
      <a href="#specialty" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2 pl-6" onClick={closeMenu}>Specialty Eggs</a>
      <a href="#about" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2" onClick={closeMenu}>Our Farm</a>
      <a href="#testimonials" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2" onClick={closeMenu}>Testimonials</a>
      <a href="#contact" className="text-gray-800 hover:text-yellow-500 transition-colors duration-300 px-3 py-2" onClick={closeMenu}>Contact</a>
    </>
  );
};

export default Navbar;