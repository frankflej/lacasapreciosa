import Image from 'next/image';
import Link from 'next/link';
import { roomsData } from '@/utils/roomsData';

const roomPics = Object.values(roomsData).map(room => ({
  name: room.name,
  image: room.mainImage,
  description: `Starting from $${room.price}/night`,
  link: `/room/${room.id}`,
}));

export default function RoomsSuites() {
  // Group rooms by type
  const deluxeRooms = roomPics.filter(room => room.name === "Deluxe King Room");
  const executiveSuites = roomPics.filter(room => room.name === "Executive Suite");

  return (
    <div className='md:px-20 px-8 py-6 font-serif text-black bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Hero Section */}
        <div className='mb-16'>
          <h1 className='text-4xl font-bold mb-6 flex items-start'>
            <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
            Rooms & Suites
          </h1>
          <div className='relative h-96 rounded-xl overflow-hidden'>
            <Image
              src={'https://ik.imagekit.io/pqgw24nd3/evrard_35.JPG?updatedAt=1751537817042'}
              alt='Luxury Suite'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Deluxe King Rooms Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-semibold mb-8'>Deluxe King Rooms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {deluxeRooms.map((room, index) => (
              <div key={index} className='group relative overflow-hidden rounded-xl'>
                <div className='relative h-64 bg-gray-50'>
                  <Image
                    src={room.image}
                    alt={`Room ${room.name}`}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
                <div className='p-6 bg-gray-100'>
                  <h3 className='text-xl font-semibold mb-2'>{room.name}</h3>
                  <p className='text-gray-600 mb-4'>{room.description}</p>
                  <Link
                    href={room.link}
                    className='text-orange-400 hover:text-orange-500 font-medium'
                  >
                    Explore Room →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Suites Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-semibold mb-8'>Executive Suites</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {executiveSuites.map((room, index) => (
              <div key={index} className='group relative overflow-hidden rounded-xl'>
                <div className='relative h-64 bg-gray-50'>
                  <Image
                    src={room.image}
                    alt={`Room ${room.name}`}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
                <div className='p-6 bg-gray-100'>
                  <h3 className='text-xl font-semibold mb-2'>{room.name}</h3>
                  <p className='text-gray-600 mb-4'>{room.description}</p>
                  <Link
                    href={room.link}
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
      <Link href="/" className='text-orange-400 hover:text-orange-500 text-center border px-4 py-2 my-10 rounded-lg inline-block'>
        ← Back to Overview
      </Link>
    </div>
  );
}