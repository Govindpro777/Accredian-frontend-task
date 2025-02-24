import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';
import { Gift, Users, Trophy, ArrowRight } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      <HeroSection onReferClick={() => setIsModalOpen(true)} />
      <ReferralModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
       {/* How it Works Section */}
       <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Gift className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Share Referral</h3>
              <p className="mt-2 text-gray-600">
                Fill out the referral form with your friend's details
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Friend Enrolls</h3>
              <p className="mt-2 text-gray-600">
                Your friend receives an email and enrolls in a course
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Trophy className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Earn Rewards</h3>
              <p className="mt-2 text-gray-600">
                Get rewarded when your friend completes the course
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Rewards Program
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">For Referrers</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">₹1000 cash reward per successful referral</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">Access to exclusive content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">Special discounts on future courses</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">For Friends</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">10% discount on course enrollment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">Free study materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span className="ml-3">1-on-1 counseling session</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;