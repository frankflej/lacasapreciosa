import Image from 'next/image';
import spaImage from '@/assets/spa.jpg';

export default function Wellness() {
  return (
    <div className='px-20 py-6 font-serif text-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <h1 className='text-4xl font-bold mb-6 flex items-start'>
            <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
            Wellness & Spa
          </h1>
          <div className='relative h-96 rounded-xl overflow-hidden'>
            <Image
              src={spaImage}
              alt='Spa Center'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Rejuvenate Your Senses</h2>
            <p className='text-gray-600'>
              Our holistic wellness programs combine traditional therapies with 
              modern techniques to create a truly transformative experience.
            </p>
            <ul className='space-y-4'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-orange-400 mr-3 rounded-full'></span>
                Full-service spa with private treatment rooms
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-orange-400 mr-3 rounded-full'></span>
                Yoga and meditation sessions
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-orange-400 mr-3 rounded-full'></span>
                State-of-the-art fitness center
              </li>
            </ul>
          </div>
          
          <div className='relative h-96 rounded-xl overflow-hidden'>
            <Image
              src={spaImage}
              alt='Spa Treatment'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}