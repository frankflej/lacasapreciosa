"use client";
import Image from "next/image";
import view from "@/assets/view.png";

const facilities = [
  {
    title: "HOTEL",
    image: view,
    features: [
      "Currency Exchange",
      "Baby – Sitter",
      "Car Rental",
      "Doctor On Call",
      "Games Room",
      "Helipad",
    ],
  },
  {
    title: "DINING",
    image: view,
    features: [
      "Risala (Fine-Dining, Continental & Indian Restaurant)",
      "Pillars (Multinational Cuisine)",
      "Trophy Bar",
    ],
  },
  {
    title: "WELLNESS",
    image: view,
    features: [
      "Heated Swimming Pool",
      "Indoor Swimming Pool",
      "J Wellness Circle Spa",
      "Outdoor Swimming Pool",
    ],
  },
  {
    title: "ROOMS",
    image: view,
    features: [
      "Risala (Fine-Dining, Continental & Indian Restaurant)",
      "Pillars (Multinational Cuisine)",
      "Trophy Bar",
    ],
  },
];

export default function Facilities() {
  return (
    <section className=" px-20 py-12 font-serif bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-8 flex items-start text-black">
        <span className="w-10 h-[2px] bg-orange-400 mr-4"></span> FACILITIES
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative h-64 rounded-lg overflow-hidden group"
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
              <div className="flex gap-2 items-center justify-between">
              <ul className="text-white text-sm space-y-1">
                {facility.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-[#c07b50] text-white px-4 py-2 text-sm rounded-md self-end">
                See More
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
