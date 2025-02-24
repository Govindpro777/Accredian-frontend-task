import React from 'react';
import { Share2 } from 'lucide-react';

const HeroSection = ({ onReferClick }: { onReferClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Refer & Earn Rewards
          </h1>
          <p className="text-xl md:text-2xl text-white text-center mb-12 max-w-2xl">
            Share your favorite courses with friends and earn exciting rewards. 
            Start referring now and be part of our growing community!
          </p>
          <button
            onClick={onReferClick}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg 
                     flex items-center gap-2 hover:bg-purple-100 transition-colors"
          >
            <Share2 className="w-6 h-6" />
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;