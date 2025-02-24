import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onReferClick={() => setIsModalOpen(true)} />
      <ReferralModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;