import Image from 'next/image';
import Link from 'next/link';
import { roomsData, RoomData } from '@/utils/roomsData';
import { notFound } from 'next/navigation';


export default async function RoomDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room: RoomData | undefined = roomsData[id];

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/room" className="text-orange-400 hover:text-orange-500 mb-8 inline-block">
          ← Back to Rooms
        </Link>

        {/* Room Title */}
        <h1 className="text-3xl font-bold mb-6">{room.name}</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Left Column - Two Images */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={room.images[0]}
                alt={`${room.name} View 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={room.images[1]}
                alt={`${room.name} View 2`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - One Image */}
          <div className="relative h-[calc(32rem+1rem)] rounded-lg overflow-hidden">
            <Image
              src={room.images[2]}
              alt={`${room.name} View 3`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Room Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
            <div className="space-y-4">
              <p className="text-gray-600">{room.description}</p>
              <div>
                <h3 className="font-medium">Room Size</h3>
                <p className="text-gray-600">{room.size}</p>
              </div>
              <div>
                <h3 className="font-medium">Maximum Occupancy</h3>
                <p className="text-gray-600">{room.maxOccupancy}</p>
              </div>
              <div>
                <h3 className="font-medium">Price</h3>
                <p className="text-gray-600">${room.price} per night</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-2">
              {room.amenities.map((amenity: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-8 text-center">
          <Link
            href="/booking"
            className="inline-block bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}