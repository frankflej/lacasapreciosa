"use client";
import Image from "next/image";
import view from "@/assets/view.png";
import BorderMagic from "../button/button";
import { HoverEffect } from "../ui/card-hover-effect";
import MyReviews from "../ui/reviews";
const facilities = [
  {
    title: "~Amory",
    description: "From the moment we arrived, we were mesmerized by the beauty of this place! The architecture, the décor, and the overall ambiance create an unforgettable experience. Every corner is picture-perfect, and the attention to detail is truly remarkable. It’s a hidden gem in Jodhpur that I can’t wait to visit again!",
    link: "/hotel",
  },
  {
    title: "~Rick",
    description: "Sailing on the boat was the highlight of our trip! The calm waters, the gentle breeze, and the breathtaking views made for an unforgettable experience. Watching the sunset while drifting peacefully was pure magic. If you visit, don’t miss the boat ride—it’s absolutely worth it!",
    link: "/dining",
  },
  {
    title: "~Frank",
    description: "The food here is simply outstanding! Every dish was packed with flavor and made with fresh, high-quality ingredients. From the traditional Rajasthani dishes to the international options, everything was cooked to perfection. The chefs truly know how to create an exceptional dining experience!",
    link: "/wellness",
  },
  {
    title: "~Prosper",
    description: "Waking up to the stunning views from our room was an experience in itself! Whether it was the sunrise painting the sky with warm hues or the city lights sparkling at night, the scenery was absolutely breathtaking. Just sitting on the balcony and soaking in the views was pure bliss!",
    link: "/rooms",
  },
  {
    title: "~Darina",
    description: "I had an amazing stay at this hotel! The staff was incredibly friendly and helpful, making us feel at home right away. The rooms were spacious and beautifully designed, with all the amenities we needed. The breakfast buffet was outstanding, and the pool area was a perfect spot for relaxation. I highly recommend this hotel for a comfortable and enjoyable stay!",
    link: "/reviews",
  },
];

export default function Reviews() {
  return (
    <section className=" md:px-20 px-8 py-12 font-serif bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl  mb-8 flex items-start text-black">
         <span className='w-16 h-1 mr-4 text-orange-400'>━━</span> Reviews
      </h2>

      {/* Grid Layout */}
      <div>
     {/* <HoverEffect items={facilities}/> */}
     <MyReviews/>
      </div>
    </section>
  );
}
