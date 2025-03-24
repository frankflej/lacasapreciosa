"use client";
import { useState } from "react";
import Image from "next/image";
import view from "@/assets/view.png";
import { locationImg1, highlightsImg1} from "@/assets";

const palaces = [
  {
    title: "PALACES",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: locationImg1,
  },
  {
    title: "FORTS",
    description:
      "Another fascinating historical monument with an incredible story...",
    image: highlightsImg1,
  },
];

const PalacesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? palaces.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === palaces.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src={palaces[currentIndex].image}
        alt="Palace"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay with Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center  justify-center">
        <div className="bg-white p-8 md:p-12 w-[80%] max-w-lg rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{palaces[currentIndex].title}</h3>
          <p className="text-gray-700">{palaces[currentIndex].description}</p>
          <a href="#" className="text-[#c07b50] font-semibold mt-4 inline-block">
            MORE &gt;
          </a>
        </div>
      </div>

      {/* Left/Right Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray  p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray  p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        ▶
      </button>
    </section>
  );
};

export default PalacesCarousel;
