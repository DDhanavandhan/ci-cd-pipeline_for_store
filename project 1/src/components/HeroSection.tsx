import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className={`container mx-auto px-4 relative z-10 text-center transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Farm Fresh Eggs <span className="text-yellow-400">Delivered</span> To Your Door
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Experience the rich taste and nutritional benefits of our ethically sourced, 
          farm-fresh eggs. From our family farm to your breakfast table.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center justify-center">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white bg-opacity-30 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;