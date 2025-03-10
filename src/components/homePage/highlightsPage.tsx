"use client";
import Image from "next/image";
import view from "@/assets/view.png";
import two from "@/assets/2.png";
import one from "@/assets/1.jpg";
import three from "@/assets/3.png"

const highlights = [
    {
      src: view,
      alt: "Historical Palace",
    },
    {
      src: view,
      alt: "Royal Interior",
    },
    {
      src: view,
      alt: "Luxury Room",
    },
  ];

export default function Highlights() {
  return (
    <section className="  px-20 py-12 font-serif bg-gray-50">
      {/* Section Title */}
      <div className="lg:flex-row flex items-center justify-between flex-col">
      <h2 className="text-3xl font-semibold mb-4 flex items-start text-black">
        <span className="w-10 h-[2px] bg-orange-400  mr-4"></span> HIGHLIGHTS
      </h2>

      {/* Description */}
      <p className="text-gray-600 italic text-lg max-w-2xl mb-8">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it over
        2000 years old. Richard McClintock.
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
              Contrary to popular belief, Lorem Ipsum belief.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
