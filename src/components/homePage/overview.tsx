'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import imgSrc from '@/assets/view.png';
import { overviewImg } from '@/assets';
import { usePathname } from 'next/navigation';

export default function Overview() {
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const pathname = usePathname();

  //navigation items with their paths
  const navItems = [
    { name: 'OVERVIEW', path: '/' },
    { name: 'ROOMS & SUITES', path: '/room' },
    { name: 'DINING', path: '/dinning' },
    { name: 'EXPERIENCES', path: '/experience' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];
  

  return (
    <div className=' md:px-20 px-8 py-6 font-serif text-black'>
      {/* Navigation */}
      <nav className='hidden md:flex items-center justify-center border-b gap-8 text-gray-600 text-sm uppercase tracking-wide'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`pb-2 border-b-2 transition-all duration-200 ${
              pathname === item.path 
                ? 'border-orange-400 text-black' 
                : 'border-transparent hover:border-orange-200'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Content Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10 items-center justify-between'>
        {/* Left Side (Text) */}
        <div>
            <div className='flex items-start'>
            
            <h1 className='text-2xl md:text-4xl mb-4'><span className='w-16 h-1 mr-4 text-orange-400'>━━</span>La Perla Negra&apos;s Hidden Gem of Comfort & Luxury-</h1>
            </div>
          <p className='text-gray-700 text-lg '>
           Escape to a place where elegance meets relaxation. Whether you&apos;re seeking a weekend getaway or a long, serene stay, our boutique stay offers a blend of modern comfort and timeless charm.
Nestled in a picturesque setting, we provide beautifully designed rooms, top-tier amenities, and a warm, welcoming atmosphere. Unwind in style, explore the vibrant surroundings, and create unforgettable memories.
          </p>
        </div>
        {/* Right Side (Image) */}
        <div>
          <Image src={overviewImg} alt='Jodhpur Palace' className='rounded-lg shadow-lg w-full' width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
