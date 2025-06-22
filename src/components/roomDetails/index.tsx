"use client";
import {
  Wifi,
  Tv,
  Coffee,
  Wind,
  Bed,
  Users,
  Calendar,
  DollarSign,
  Check,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/magicui/text-animate";
// import BackButton from "@/components/ui/back-button";
import { useRouter } from "next/navigation";

// Placeholder data for a single room.
// In a real application, you would fetch this data based on the `params.id`.
const roomData = {
  name: "The Presidential Suite",
  price: 499,
  images: [
    "https://ik.imagekit.io/pqgw24nd3/IMG_0290.jpg?updatedAt=1748775008216",
    "https://ik.imagekit.io/pqgw24nd3/IMG_0290.jpg?updatedAt=1748775008216",
    "https://ik.imagekit.io/pqgw24nd3/IMG_0290.jpg?updatedAt=1748775008216",
    "https://ik.imagekit.io/pqgw24nd3/IMG_0290.jpg?updatedAt=1748775008216",
  ],
  description:
    "Experience unparalleled luxury in our Presidential Suite. Spanning over 1,200 sq. ft., this suite offers breathtaking panoramic views of the ocean and city skyline. It features a master bedroom with a king-sized bed, a spacious living area, a private dining room, and a marble bathroom with a jacuzzi tub. Designed for the discerning traveler, every detail has been curated to ensure an unforgettable stay.",
  amenities: [
    { icon: Wifi, text: "High-Speed WiFi" },
    { icon: Tv, text: '65" 4K Smart TV' },
    { icon: Coffee, text: "Nespresso Machine" },
    { icon: Wind, text: "Air Conditioning" },
  ],
  details: {
    guests: 4,
    bed: "1 King, 1 Sofa Bed",
  },
  whatsIncluded: [
    "Complimentary Breakfast for 2",
    "24/7 Butler Service",
    "Access to Executive Lounge",
    "Free Airport Transfer",
  ],
};

export default function RoomDetailsPage() {
  // You can use params.id to fetch the specific room data from your backend
  const { name, price, images, description, amenities, details, whatsIncluded } =
    roomData;
    const router = useRouter();
// this is the room details page
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
     
        {/* Room Title */}
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-neutral-600">
          <TextAnimate>{name}</TextAnimate>
        </h1>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mb-12 h-[600px]">
          {/* First small image (top left) */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={images[1]}
              alt={`${name} view 2`}
              fill
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          {/* Large image (right, spans both rows) */}
          <div className="relative row-span-2 overflow-hidden rounded-lg">
            <Image
              src={images[0]}
              alt={`${name} main view`}
              fill
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          {/* Second small image (bottom left) */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={images[2]}
              alt={`${name} view 3`}
              fill
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-6 border-b pb-4 border-gray-200 dark:border-neutral-700">
              About the Room
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
              {description}
            </p>

            <h3 className="text-2xl font-semibold mb-6">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <amenity.icon className="w-6 h-6 text-blue-500" />
                  <span className="text-md">{amenity.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">What&apos;s Included</h3>
            <ul className="space-y-3">
              {whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg bg-white dark:bg-neutral-800 border dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="flex justify-between items-baseline">
                  <span className="flex items-center">
                    <DollarSign className="w-7 h-7 mr-2 text-green-500" />
                    <span className="text-4xl font-bold">{price}</span>
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    / night
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-t pt-6 dark:border-neutral-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold flex items-center">
                      <Users className="w-5 h-5 mr-2" /> Max Guests
                    </span>
                    <span className="text-lg">{details.guests}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold flex items-center">
                      <Bed className="w-5 h-5 mr-2" /> Bed Type
                    </span>
                    <span className="text-lg">{details.bed}</span>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg py-7" onClick={() => router.push('/booking')}>
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
        {/* <div className="flex justify-start mt-7 mb-4">
             <BackButton />
             </div> */}
    
      </main>
             
    </div>
  );
}
