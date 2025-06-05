import React, { useState } from 'react';
import { ShoppingCart, Star, Info, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showInfo, setShowInfo] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-yellow-500 text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star\" className="relative">
          <Star className="w-4 h-4 text-yellow-500" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="w-4 h-4 text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}
      
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">{product.price}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowInfo(true)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <Info className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Nutritional Information Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowInfo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Nutritional Information</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories</div>
                  <div className="text-right">70 kcal</div>
                  <div>Protein</div>
                  <div className="text-right">6g</div>
                  <div>Fat</div>
                  <div className="text-right">5g</div>
                  <div>Carbohydrates</div>
                  <div className="text-right">0g</div>
                  <div>Vitamin D</div>
                  <div className="text-right">1μg (6% DV)</div>
                  <div>Vitamin B12</div>
                  <div className="text-right">0.6μg (25% DV)</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setShowInfo(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
              >
                Close
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;