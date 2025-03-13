// src/app/gallery/page.tsx
import Image from 'next/image';
import galleryImages from '@/assets/images';

export default function Gallery() {
  return (
    <div className='px-20 py-6 font-serif text-black'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold mb-16 flex items-start'>
          <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
          Property Gallery
        </h1>
        
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {galleryImages.map((img, index) => (
            <div key={index} className='relative aspect-square rounded-xl overflow-hidden'>
              <Image
                src={img.src} // or just img if using simple array
                alt={img.alt || `Gallery Image ${index + 1}`}
                fill
                className='object-cover transition-transform duration-300 hover:scale-105'
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur" // if using imported images
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}