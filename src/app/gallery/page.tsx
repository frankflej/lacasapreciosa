'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import galleryImages, { galleryCategories } from '@/assets/images';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src="https://ik.imagekit.io/pqgw24nd3/evrard_35.JPG?updatedAt=1751537817042"
          alt="Gallery Hero"
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>
            Explore Our Property
          </h1>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='py-4 overflow-x-auto'>
            <div className='flex space-x-4 min-w-max'>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-orange-400 text-white shadow-md scale-105'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-orange-400 text-white shadow-md scale-105'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Category Description */}
        {selectedCategory !== 'all' && (
          <div className='mb-8 text-center'>
            <h2 className='text-2xl font-semibold mb-2'>
              {galleryCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className='text-gray-600'>
              {galleryCategories.find(c => c.id === selectedCategory)?.description}
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className='group relative aspect-[4/3] rounded-xl overflow-hidden'
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                <div className='p-4 text-white'>
                  <p className='text-lg font-semibold'>{img.alt}</p>
                  <p className='text-sm opacity-75 capitalize'>
                    {galleryCategories.find(c => c.id === img.category)?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500'>No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}