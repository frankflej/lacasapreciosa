import Image from 'next/image';
import Link from 'next/link';
import roomImage from '@/assets/room-sample.jpg';

export default function RoomsSuites() {
  return (
    <div className='px-20 py-6 font-serif text-black'>
      <div className='max-w-7xl mx-auto'>
        {/* Hero Section */}
        <div className='mb-16'>
          <h1 className='text-4xl font-bold mb-6 flex items-start'>
            <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
            Rooms & Suites
          </h1>
          <div className='relative h-96 rounded-xl overflow-hidden'>
            <Image
              src={roomImage}
              alt='Luxury Suite'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Room Types */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((room) => (
            <div key={room} className='group relative overflow-hidden rounded-xl'>
              <div className='relative h-64'>
                <Image
                  src={roomImage}
                  alt={`Room ${room}`}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6 bg-white'>
                <h3 className='text-xl font-semibold mb-2'>Premium Suite {room}</h3>
                <p className='text-gray-600 mb-4'>Starting from $299/night</p>
                <Link
                  href='#'
                  className='text-orange-400 hover:text-orange-500 font-medium'
                >
                  Explore Suite →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}