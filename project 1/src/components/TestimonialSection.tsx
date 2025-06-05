import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Cook",
    content: "The quality of NSM eggs is unmatched! My family can taste the difference in our morning omelets. The rich, orange yolks make everything more delicious.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Professional Chef",
    content: "As a chef, ingredient quality is everything. NSM's eggs have transformed my desserts and breakfast dishes. The freshness and flavor are exactly what I need for my restaurant.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Nutritionist",
    content: "I recommend NSM eggs to all my clients. The nutritional profile is superior to store-bought eggs, with higher omega-3s and vitamins. Plus, I love supporting ethical farming.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers who have made NSM eggs a part of their daily lives.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-yellow-200 opacity-50" />
                    
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-yellow-200"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-700 text-lg italic mb-6 relative z-10">"{testimonial.content}"</p>
                        <h4 className="font-bold text-gray-800 text-xl">{testimonial.name}</h4>
                        <p className="text-yellow-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${
                currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-yellow-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;