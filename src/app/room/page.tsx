import Image from 'next/image';
import Link from 'next/link';
import roomImage from '@/assets/background.jpg';


// export const roomImage = "https://ik.imagekit.io/pqgw24nd3/IMG_0321.jpg?updatedAt=1746471822700"
const roomPics = [
  {
    name: "Premium Suite",
    image: "https://ik.imagekit.io/pqgw24nd3/IMG_0308.jpg?updatedAt=1746471827272",
    description: "Starting from $299/night",
    link: "/room/1",
  },
  {
    name: "Premium Suite",
    image: "https://ik.imagekit.io/pqgw24nd3/IMG_0308.jpg?updatedAt=1746471827272",
    description: "Starting from $299/night",
    link: "/room/2",
  },
  {
    name: "Premium Suite",
    image: "https://ik.imagekit.io/pqgw24nd3/IMG_0363.jpg?updatedAt=1746471931454",
    description: "Starting from $299/night",
    link: "/room/3",
  },
]
export default function RoomsSuites() {
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
              src={roomImage}
              alt='Luxury Suite'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Room Types */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {roomPics.map((room, index) => (
            <div key={index} className='group relative overflow-hidden rounded-xl '>
              <div className='relative h-64 bg-gray-50'>
                <Image
                  src={room.image}
                  alt={`Room ${room.name}`}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6  bg-gray-100'>
                <h3 className='text-xl font-semibold mb-2'>{room.name} </h3>
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
      <Link href="/" className='text-orange-400 hover:text-orange-500 text-center border  px-4 py-2 my-10 rounded-lg'>
            ← Back to Overview
          </Link>
    </div>
  );
}