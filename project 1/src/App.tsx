import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import StorySection from './components/StorySection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // Update page title on mount
  useEffect(() => {
    document.title = "NSM Egg Store | Farm Fresh Eggs";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <StorySection />
      <TestimonialSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;