import Image from 'next/image';
import diningImage from '@/assets/dining.jpg';

export default function Dining() {
  return (
    <div className='px-20 py-6 font-serif text-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <h1 className='text-4xl font-bold mb-6 flex items-start'>
            <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
            Culinary Experiences
          </h1>
          <div className='relative h-96 rounded-xl overflow-hidden'>
            <Image
              src={diningImage}
              alt='Fine Dining'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Restaurants & Bars</h2>
            <p className='text-gray-600 mb-6'>
              Experience world-class dining with our curated selection of restaurants 
              offering both local flavors and international cuisine.
            </p>
          </div>
          
          <div className='space-y-6'>
            <div className='border-l-4 border-orange-400 pl-4'>
              <h3 className='text-xl font-semibold'>Signature Restaurant</h3>
              <p className='text-gray-600'>7:00 AM - 11:00 PM</p>
            </div>
            <div className='border-l-4 border-orange-400 pl-4'>
              <h3 className='text-xl font-semibold'>Sky Lounge & Bar</h3>
              <p className='text-gray-600'>5:00 PM - 1:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}