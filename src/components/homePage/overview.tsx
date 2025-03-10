'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import imgSrc from '@/assets/view.png';

export default function Overview() {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  return (
    <div className='px-20 py-6 font-serif text-black'>
      {/* Navigation */}
      <nav className='flex items-center justify-center border-b  gap-8 text-gray-600 text-sm uppercase tracking-wide'>
        {['OVERVIEW', 'ROOMS & SUITES', 'OFFERS', 'DINING', 'WELLNESS', 'EXPERIENCES', 'GALLERY'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 transition-all duration-200 ${activeTab === tab ? 'border-orange-400 text-black' : 'border-transparent'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16 mt-10 items-center justify-between'>
        {/* Left Side (Text) */}
        <div>
            <div className='flex items-start'>
            <div className='w-16 h-1 bg-orange-400'></div>
            <h1 className='text-3xl md:text-4xl font-semibold mb-4'>JODHPUR’S TIMELESS JEWEL<br/> OF GRANDEUR</h1>
            </div>
          <p className='text-gray-700 text-lg '>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
            more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cities
            of the world in classical literature, discovered the undoubtable source. 
          </p>
        </div>
        {/* Right Side (Image) */}
        <div>
          <Image src={imgSrc} alt='Jodhpur Palace' className='rounded-lg shadow-lg w-full' />
        </div>
      </div>
    </div>
  );
}
