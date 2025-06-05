import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const StorySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('story-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-yellow-50">
      <div 
        id="story-section"
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img 
              src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our family farm" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Farm-to-Table Story</h2>
            
            <div className="h-1 w-20 bg-yellow-500 mb-6"></div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              NSM Egg Store began with a simple mission: to provide families with the freshest, most nutritious eggs possible, 
              straight from our family farm to your table.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              For three generations, we've been raising happy, healthy hens in the rolling countryside. 
              Our hens roam freely on lush pastures, enjoying a natural diet supplemented with organic feed. 
              This traditional farming approach not only ensures the welfare of our birds but also produces 
              eggs with superior taste and nutritional value.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              We're committed to sustainable farming practices that respect the environment and support 
              our local community. From our family to yours, we're proud to share the fruits of our labor.
            </p>
            
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center font-medium">
              Learn More About Our Farm
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;