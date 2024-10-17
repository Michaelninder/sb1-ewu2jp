import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart className="mx-1 text-red-500" /> by XP-Hostde
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} XP-Hostde. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;