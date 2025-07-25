"use client";
import Image from "next/image";
import view from "@/assets/view.png";
import BorderMagic from "../button/button";
import dining from "@/assets/dining.png";
import { facilitiesImg1, facilitiesImg2, facilitiesImg3 } from "@/assets";
import { useRouter } from "next/navigation";

const facilities = [
  {
    title: "HOTEL",
    image: facilitiesImg1,
    features: [
      "Currency Exchange",
      "Baby – Sitter",
      "Car Rental",
      "Doctor On Call",
      "Games Room",
      "Helipad",
    ],
    link: "/gallery",
  },
  {
    title: "DINING",
    image: dining,
    features: [
      "Risala (Fine-Dining, Continental & Indian Restaurant)",
      "Pillars (Multinational Cuisine)",
      "Trophy Bar",
    ],
    link: "/dining",
  },
  {
    title: "WELLNESS",
    image: facilitiesImg2,
    features: [
      "Heated Swimming Pool",
      "Indoor Swimming Pool",
      "J Wellness Circle Spa",
      "Outdoor Swimming Pool",
    ],
    link: "/experience",
  },
  {
    title: "ROOMS",
    image: facilitiesImg3,
    features: [
      "Risala (Fine-Dining, Continental & Indian Restaurant)",
      "Pillars (Multinational Cuisine)",
      "Trophy Bar",
    ],  
    link: "/room",
  },
];

export default function Facilities() {
  const router = useRouter();
  return (
    <section className=" md:px-20 px-8 py-12 font-serif bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl  mb-8 flex items-start text-black">
         <span className='w-16 h-1 mr-4 text-orange-400'>━━</span> FACILITIES
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative  md:h-96 h-64 rounded-lg overflow-hidden group"
            onClick={() => {
              router.push(facility.link);
            }}
            style={{ cursor: "pointer" }}
          >
            {/* Background Image */}
            <Image
              src={facility.image}
              alt={facility.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
              <h3 className="text-white text-xl font-bold">{facility.title}</h3>
              <div className="flex flex-col md:flex-row gap-2 items-start md:items-end justify-between">
              <ul className="text-white text-sm space-y-1">
                {facility.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <BorderMagic buttonDetail='See More' href={facility.link}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
