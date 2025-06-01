import Image from 'next/image';
import Link from 'next/link';
import { negra } from '@/assets';
import { FaPhone, FaTools, FaClock, FaHeart } from 'react-icons/fa';

export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 font-serif">
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
              Book Your Stay
              <span className="w-16 h-1 ml-4 bg-orange-400 block"></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We&apos;re working on making your booking experience even better
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Coming Soon Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-8">
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTools className="text-orange-500 text-3xl" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Online Booking System Coming Soon!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re currently developing a seamless online booking experience for you. 
              In the meantime, our dedicated team is ready to assist you with your reservation personally.
            </p>

            {/* Features Coming */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <FaClock className="text-blue-500 text-2xl mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-800 mb-2">Instant Booking</h3>
                <p className="text-sm text-gray-600">Real-time availability and instant confirmation</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <FaHeart className="text-green-500 text-2xl mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-800 mb-2">Personalized Experience</h3>
                <p className="text-sm text-gray-600">Customized packages and special requests</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <FaPhone className="text-purple-500 text-2xl mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock assistance for your needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl text-white p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-xl mb-8 opacity-90">
              Call us now and let our team create the perfect experience for you
            </p>
            
            {/* Phone Number Highlight */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-white bg-opacity-30 p-4 rounded-full">
                  <FaPhone className="text-2xl" />
                </div>
                <div className="text-left">
                  <p className="text-sm opacity-80">Call us directly</p>
                  <h3 className="text-3xl font-bold">+250 785 310 691</h3>
                </div>
              </div>
              <p className="text-lg opacity-90">Available 24/7 for your reservations</p>
            </div>

            {/* What We Can Help With */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-lg">We can help you with:</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Room availability and pricing</li>
                  <li>• Special package deals</li>
                  <li>• Group reservations</li>
                  <li>• Event planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">Information we&apos;ll need:</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Check-in and check-out dates</li>
                  <li>• Number of guests</li>
                  <li>• Room preferences</li>
                  <li>• Special requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Other Ways to Reach Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Visit Our Contact Page</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Fill out our contact form and we&apos;ll get back to you within 24 hours
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Form
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Send us your reservation details and questions
              </p>
              <a 
                href="mailto:reservations@laperlangra.com"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
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