import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ReferralFormData {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  course: string;
}

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal = ({ isOpen, onClose }: ReferralModalProps) => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  });

  const [errors, setErrors] = useState<Partial<ReferralFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<ReferralFormData> = {};
    
    if (!formData.referrerName) newErrors.referrerName = 'Required';
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email';
    }
    
    if (!formData.refereeName) newErrors.refereeName = 'Required';
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email';
    }
    
    if (!formData.course) newErrors.course = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const response = await fetch('https://accredian-backend-gxgw.onrender.com/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Referral submitted successfully!');
        onClose();
      } else {
        alert('Failed to submit referral. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Refer a Friend</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={formData.referrerName}
              onChange={(e) => setFormData({...formData, referrerName: e.target.value})}
              className=" p-2 mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.referrerName && <p className="text-red-500 text-sm mt-1">{errors.referrerName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              value={formData.referrerEmail}
              onChange={(e) => setFormData({...formData, referrerEmail: e.target.value})}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.referrerEmail && <p className="text-red-500 text-sm mt-1">{errors.referrerEmail}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input
              type="text"
              value={formData.refereeName}
              onChange={(e) => setFormData({...formData, refereeName: e.target.value})}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.refereeName && <p className="text-red-500 text-sm mt-1">{errors.refereeName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Friend's Email</label>
            <input
              type="email"
              value={formData.refereeEmail}
              onChange={(e) => setFormData({...formData, refereeEmail: e.target.value})}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.refereeEmail && <p className="text-red-500 text-sm mt-1">{errors.refereeEmail}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Course to Refer</label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">Select a course</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="cloud-computing">Cloud Computing</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit Referral
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;