'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { negra } from '@/assets';
import { FaStar, FaSpinner} from 'react-icons/fa';
import { useSaveFeedbacks } from '@/hooks/useSaveFeedbacks';
export default function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    review: '',
    wouldRecommend: ''
  });
  
  const { mutate, isLoading: isSaving, isSuccess } = useSaveFeedbacks(setFormData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      input: {
        Name: formData.name,
        Email: formData.email,
        Feedback: formData.review,
        Rating: formData.rating,
        WouldRecommand: formData.wouldRecommend,
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 font-serif">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image 
              src={negra} 
              alt="La Perla Negra" 
              width={80} 
              height={80}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <span className="w-16 h-1 mr-4 bg-orange-400 block"></span>
              Share Your Experience
              <span className="w-16 h-1 ml-4 bg-orange-400 block"></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We&apos;d love to hear about your stay at La Perla Negra. Your feedback helps us improve and helps other guests discover our unique experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Review Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaHeart className="text-3xl text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Happy Guests</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaThumbsUp className="text-3xl text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaCommentDots className="text-3xl text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600">Would Recommend</p>
          </div>
        </div> */}

        {/* Review Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Write Your Review</h2>
          

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSaving}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSaving}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Review Message */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                id="review"
                name="review"
                required
                rows={6}
                value={formData.review}
                onChange={handleInputChange}
                disabled={isSaving}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
                placeholder="Share your experience at La Perla Negra..."
              />
            </div>

                {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overall Rating *
              </label>
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    disabled={isSaving}
                    className={`text-2xl transition-colors duration-200 ${
                      star <= formData.rating 
                        ? 'text-yellow-400 hover:text-yellow-500' 
                        : 'text-gray-300 hover:text-yellow-400'
                    } disabled:cursor-not-allowed`}
                  >
                    <FaStar />
                  </button>
                ))}
                <span className="ml-3 text-sm text-gray-600">
                  {formData.rating > 0 ? `${formData.rating}/5 stars` : 'Click to rate'}
                </span>
              </div>
            </div>

            {/* Recommendation */}
            <div>
              <label htmlFor="wouldRecommend" className="block text-sm font-medium text-gray-700 mb-2">
                Would you recommend La Perla Negra? *
              </label>
              <select
                id="wouldRecommend"
                name="wouldRecommend"
                required
                value={formData.wouldRecommend}
                onChange={handleInputChange}
                disabled={isSaving}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
              >
                <option value="" className="text-gray-500">Select an option</option>
                <option value="Definitely Yes" className="text-gray-900">Definitely Yes</option>
                <option value="Probably Yes" className="text-gray-900">Probably Yes</option>
                <option value="Maybe" className="text-gray-900">Maybe</option>
                <option value="Probably No" className="text-gray-900">Probably No</option>
                <option value="Definitely No" className="text-gray-900">Definitely No</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSaving || formData.rating === 0}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isSaving ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting Review...
                </>
              ) : (
                'Submit Review'
              )}
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 