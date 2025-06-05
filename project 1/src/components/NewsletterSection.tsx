import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success');
      } else {
        setStatus('error');
      }
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-yellow-500">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Farm-Fresh Updates</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter for seasonal offers, recipes, and farm news. 
              Join our community and get 10% off your first order!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`w-full px-6 py-4 rounded-full border ${
                  status === 'error' 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-yellow-500'
                } focus:border-transparent focus:outline-none focus:ring-2`}
                disabled={status === 'success' || isAnimating}
              />
              <button
                type="submit"
                disabled={status === 'success' || isAnimating}
                className={`absolute right-1 top-1 bottom-1 px-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isAnimating
                    ? 'bg-gray-400 text-white'
                    : status === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                }`}
              >
                {isAnimating ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            
            {status === 'error' && (
              <div className="mt-2 text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">Please enter a valid email address</span>
              </div>
            )}
            
            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Thank you for subscribing! Check your inbox for your 10% discount code.</span>
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy. We'll never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;