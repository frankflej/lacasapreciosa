"use client";
import Image from "next/image";
import view from "@/assets/view.png";
import two from "@/assets/2.png";
import one from "@/assets/1.jpg";
import three from "@/assets/3.png"
import { highlightsImg1,highlightsImg2,highlightsImg3 } from "@/assets";

const highlights = [
    {
      src: highlightsImg1,
      alt: "Historical Palace",
      description: " Thoughtfully designed rooms with modern amenities."
    },
    {
      src: highlightsImg2,
      alt: "Royal Interior",
      description: "Immerse yourself in the rich culture and heritage of la perla negra."
    },
    {
      src: highlightsImg3,
      alt: "Luxury Room",
      description: "Personalized services to make your stay truly unforgettable."
    },
  ];

export default function Highlights() {
  return (
    <section className=" md:px-20 px-8 py-12 font-serif bg-gray-50">
      {/* Section Title */}
      <div className="lg:flex-row flex items-start md:items-center justify-between flex-col">
      <h2 className="text-3xl  mb-4 flex items-start text-black">
        <span className='w-16 h-1 mr-4 text-orange-400'>━━</span> HIGHLIGHTS
      </h2>

      {/* Description */}
      <p className="text-gray-600 italic text-lg max-w-2xl mb-8">
       Discover a charming retreat where modern comfort meets timeless elegance. Our charming haven stay offers beautifully designed rooms, warm hospitality, and an unforgettable experience. Whether you&apos;re here for leisure or a getaway, indulge in a stay that blends luxury with a homely touch.
      </p>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="text-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={350}
              height={250}
              className="rounded-lg w-full h-auto"
            />
            <p className="text-md text-gray-800 mt-2">
                  {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
