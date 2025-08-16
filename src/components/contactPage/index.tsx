'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { negra } from '@/assets';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useSaveForm } from '@/hooks/useSaveForm';
import { MAP_LINK } from '../homePage/LocationDirection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { mutate, isLoading: isSaving, isSuccess, isError } = useSaveForm(setFormData);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      input: {
        FName: formData.name,
        Email: formData.email,
        Message: formData.message,
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-serif">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
              Contact Us
              <span className="w-16 h-1 ml-4 bg-orange-400 block"></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Get in touch with our team for reservations, inquiries, or any assistance you need.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Located on the pristine shores of Lake Muhazi, La Perla Negra offers an unforgettable experience. 
                Reach out to us for reservations, special requests, or any questions about your stay.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <FaPhone className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+250 795 047 121</p>
                    <p className="text-sm text-gray-500">Available 24/7 for reservations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaEnvelope className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">reservations@laperlangra.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Eastern Province, Lake Muhazi</p>
                    <p className="text-gray-600">Rwanda</p>
                    <a 
                      href={MAP_LINK} 
                      target="_blank" 
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaClock className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Operating Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Check-in: 2:00 PM onwards</p>
                      <p>Check-out: 11:00 AM</p>
                      <p>Reception: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <FaFacebook className="text-blue-600 text-xl" />
                </a>
                <a href="#" className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <FaInstagram className="text-pink-600 text-xl" />
                </a>
                <a href="#" className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <FaTwitter className="text-blue-400 text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {/* Status Messages */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm">We&apos;ll get back to you within a short time.</p>
              </div>
            )}
            
            {isError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-medium">Failed to send message.</p>
                <p className="text-sm">Please try again or call us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
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
                    placeholder="Enter your full name"
                  />
                </div>
              
              </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSaving}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
          
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSaving}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSaving ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d30.0!3d-2.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDAnMDAuMCJTIDMwwrAwMCcwMC4wIkU%3D!5e0!3m2!1sen!2srw!4v1234567890123!5m2!1sen!2srw"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
          >
            ← Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
} 