import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Providing farm-fresh eggs from our family to yours since 1985.
              Committed to quality, sustainability, and animal welfare.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Youtube />} label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#products">Our Products</FooterLink>
              <FooterLink href="#about">About Our Farm</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Products</h3>
            <ul className="space-y-3">
              <FooterLink href="#organic">Organic Eggs</FooterLink>
              <FooterLink href="#free-range">Free-Range Eggs</FooterLink>
              <FooterLink href="#specialty">Specialty Eggs</FooterLink>
              <FooterLink href="#duck">Duck Eggs</FooterLink>
              <FooterLink href="#bulk">Bulk Orders</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>123 Farm Road</p>
              <p>Countryside, CA 94123</p>
              <p className="pt-2">(555) 123-4567</p>
              <p>info@nsmeggstore.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NSM Egg Store. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ 
  href, 
  icon, 
  label 
}) => {
  return (
    <a 
      href={href} 
      className="bg-gray-800 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors duration-300"
      aria-label={label}
    >
      {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
    </a>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;