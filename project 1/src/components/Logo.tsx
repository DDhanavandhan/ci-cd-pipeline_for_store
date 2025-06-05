import React from 'react';
import { Egg } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Egg className="h-8 w-8 text-yellow-500" />
      <span className="ml-2 text-2xl font-bold text-gray-800">NSM <span className="text-yellow-500">Egg</span> Store</span>
    </div>
  );
};

export default Logo;