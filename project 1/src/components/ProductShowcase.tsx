import React, { useState } from 'react';
import { Star, ShoppingCart, Info } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Organic Free-Range Eggs",
    description: "Our signature eggs from hens raised with love in open pastures. Rich in flavor and nutrition.",
    price: "$5.99",
    image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    category: "organic",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: " classic white eggs",
    description: "Specially formulated feed provides hens with flaxseed for eggs rich in omega-3 fatty acids.",
    price: "$6.49",
    image: "https://images.pexels.com/photos/4110226/pexels-photo-4110226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    category: "specialty"
  },
  {
    id: 3,
    name: "Farm Fresh Brown Eggs",
    description: "Classic brown eggs from our heritage breed hens, perfect for everyday cooking.",
    price: "$4.99",
    image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    category: "free-range"
  },
  {
    id: 4,
    name: "Heritage Breed Eggs",
    description: "A unique selection of eggs from rare heritage breeds, offering distinct flavors and colors.",
    price: "$7.99",
    image: "https://images.pexels.com/photos/96619/pexels-photo-96619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    category: "specialty",
    badge: "New Arrival"
  },
];

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Premium Egg Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of ethically produced, farm-fresh eggs. From organic to specialty varieties, 
            we have the perfect eggs for every occasion.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-sm">
            {['all', 'organic', 'free-range', 'specialty'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-transparent text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center">
            View All Products
            <ShoppingCart className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;