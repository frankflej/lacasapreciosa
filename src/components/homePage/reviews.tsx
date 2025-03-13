"use client";
import { motion } from "framer-motion";
import  BorderMagic  from "../button/button";
import { useRef } from 'react';

const facilities = [
  {
    id: 1,
    title: "Amory",
    description: "From the moment we arrived, we were mesmerized by the beauty of this place! The architecture, the décor, and the overall ambiance create an unforgettable experience. Every corner is picture-perfect, and the attention to detail is truly remarkable. It’s a hidden gem in Jodhpur that I can’t wait to visit again!",
    rating: 5,
  },
  {
    id: 2,
    title: "Rick",
    description: "Sailing on the boat was the highlight of our trip! The calm waters, the gentle breeze, and the breathtaking views made for an unforgettable experience. Watching the sunset while drifting peacefully was pure magic. If you visit, don’t miss the boat ride—it’s absolutely worth it!",
    rating: 5,
  },
  {
    id: 3,
    title: "Frank",
    description: "The food here is simply outstanding! Every dish was packed with flavor and made with fresh, high-quality ingredients. From the traditional Rajasthani dishes to the international options, everything was cooked to perfection. The chefs truly know how to create an exceptional dining experience!",
    rating: 5,
  },
  {
    id: 4,
    title: "Prosper",
    description: "Waking up to the stunning views from our room was an experience in itself! Whether it was the sunrise painting the sky with warm hues or the city lights sparkling at night, the scenery was absolutely breathtaking. Just sitting on the balcony and soaking in the views was pure bliss!",
    rating: 5,
  },
  {
    id: 5,
    title: "Darina",
    description: "I had an amazing stay at this hotel! The staff was incredibly friendly and helpful, making us feel at home right away. The rooms were spacious and beautifully designed, with all the amenities we needed. The breakfast buffet was outstanding, and the pool area was a perfect spot for relaxation. I highly recommend this hotel for a comfortable and enjoyable stay!",
    rating: 5,
  },
];

export default function Reviews() {
  const containerRef = useRef(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="mx-4 text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Testimonials
            </span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What Our Guests Say
          </h2>
        </div>

        {/* Infinite Carousel */}
        <div className="relative py-12 w-full overflow-x-hidden">
          <motion.div 
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...facilities, ...facilities].map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`} 
                className="w-[400px] mx-4 p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 
                                  flex items-center justify-center text-white font-bold">
                      {review.title[0]}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="relative">
                  <div className="absolute top-0 left-0 transform -translate-y-6 text-6xl opacity-10 text-amber-500 font-serif">
                    “
                  </div>
                  <p className="relative z-10 text-gray-600 leading-relaxed">
                    {review.description}
                  </p>
                </blockquote>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20" />
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <BorderMagic
            buttonDetail="Submit A Review"
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-amber-600 hover:to-amber-700 text-gray-950 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}