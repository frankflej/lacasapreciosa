"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

const LOCATION_NAME = "La Perla Negra";
const MAP_LINK =
  "https://www.google.com/maps/place/La+Perla+Negra,+Lake+Muhazi,+Rwanda/@-1.8615754,30.4378887,736m/data=!3m1!1e3!4m9!3m8!1s0x19db41b54011b13f:0x8790fdc5824dd63c!5m2!4m1!1i2!8m2!3d-1.8619118!4d30.4369867!16s%2Fg%2F11rjhzk5dq?hl=fr_CA&entry=ttu";
const MAP_PREVIEW =
  "https://maps.googleapis.com/maps/api/staticmap?center=-1.8619118,30.4369867&zoom=14&size=400x180&markers=color:red%7C-1.8619118,30.4369867&key=YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key or use a static image

export default function LocationDirection() {
  return (
    <section
      className="relative flex justify-center items-center py-16 px-4 md:px-0 font-serif"
      style={{
        background:
          "url('https://ik.imagekit.io/pqgw24nd3/evrard_26.JPG?updatedAt=1751537812646') center/cover no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-none" />
      {/* Card */}
      <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center border border-white/30">
        {/* Animated Pin */}
        <div className="relative mb-4">
          <span className="absolute rounded-full bg-[#c07b50]/40" />
          <FaMapMarkerAlt className="text-4xl text-[#c07b50] drop-shadow-lg" />
        </div>
        
        {/* Title & Address */}
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2 drop-shadow">
          Location & Direction
        </h2>
        <div className="text-center mb-6">
          <div className="text-lg font-semibold text-gray-800 mb-1">
            {LOCATION_NAME}
          </div>
          <div className="text-gray-600 text-sm">Where Tranquility Meets Endless Beauty</div>
        </div>
        {/* Button */}
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#c07b50] to-[#a8643e] hover:from-[#a8643e] hover:to-[#c07b50] text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all text-lg tracking-wide ring-2 ring-[#c07b50]/30 hover:scale-105"
        >
          Show on map
        </a>
      </div>
    </section>
  );
}
