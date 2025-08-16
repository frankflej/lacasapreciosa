"use client";
import { motion } from "framer-motion";
import BorderMagic from "../button/button";
import { useRef, useState } from 'react';
import Marquee from "react-fast-marquee";
import { useFetchingFeedbacks } from "@/hooks/useFetchingFeedbacks";
import Skeleton from 'react-loading-skeleton'

const facilities = [
  {
    id: 1,
    title: "Amory",
    description: "From the moment we arrived, we were mesmerized by the beauty of this place! The architecture, the décor, and the overall ambiance create an unforgettable experience. Every corner is picture-perfect, and the attention to detail is truly remarkable. It's a hidden gem in Jodhpur that I can't wait to visit again!",
    rating: 5,
  },
  {
    id: 2,
    title: "Rick",
    description: "Sailing on the boat was the highlight of our trip! The calm waters, the gentle breeze, and the breathtaking views made for an unforgettable experience. Watching the sunset while drifting peacefully was pure magic. If you visit, don't miss the boat ride—it's absolutely worth it!",
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
  const { data, isFetching, error } = useFetchingFeedbacks();
  console.log(data);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="mb-5 md:mb-10 text-center">
          <div className="inline-flex items-center mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="mx-4 text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Testimonials
            </span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
          </div>
          <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-4xl">
            What Our Guests Say
          </h2>
        </div>

        {/* Infinite Carousel */}
        <div className="relative py-12 w-full overflow-x-hidden">
          <Marquee pauseOnHover={true}>
            {isFetching ? (
              // Custom skeleton that matches the card design
              Array.from({ length: 5 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="w-[400px] h-[280px] mx-4 p-6 bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-sm flex flex-col animate-pulse"
                >
                  {/* Header skeleton */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Avatar skeleton */}
                      <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>
                      {/* Name skeleton */}
                      <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                    {/* Stars skeleton */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote mark skeleton */}
                  <div className="relative">
                    <div className="absolute top-0 left-0 transform -translate-y-6 text-6xl opacity-10 text-gray-300 font-serif">
                      &ldquo;
                    </div>
                    
                    {/* Text lines skeleton */}
                    <div className="relative z-10 space-y-2">
                      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              data?.Reviews?.slice(0, 5).map((review, idx) => (
              <div
                key={`${review.ReviewsId}-${idx}`}
                className="w-[400px] h-[280px] mx-4 p-6 bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-sm \
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 \
                                  flex items-center justify-center text-white font-bold">
                      {review.Name[0]}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.Name}</h3>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.Rating)].map((_, i) => (
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
                    &ldquo;
                  </div>
                  <p className="relative z-10 text-gray-600 leading-relaxed flex-1 overflow-hidden">
                    <span className="line-clamp-6">{review.Feedback}</span>
                  </p>
                </blockquote>
              </div>
            )))}
          </Marquee>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20" />
        </div>

        {/* CTA Button */}
        <div className="mt-5 md:mt-10 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 px-4">
            <a
              href='/reviews'
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-all text-base sm:text-lg tracking-wide ring-2 ring-[#c07b50]/30 hover:scale-105 w-full sm:w-auto"
            >
              Submit A Review
            </a>
            <button
              onClick={() => setShowAll(true)}
              className="inline-block bg-white text-amber-600 font-bold px-6 sm:px-8 py-3 rounded-xl shadow-md transition-all text-base sm:text-lg tracking-wide border border-amber-200 hover:bg-amber-50 hover:scale-105 w-full sm:w-auto"
            >
              View All Reviews
            </button>
          </div>
        </div>

        {showAll && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-y-auto p-8 relative animate-fadeIn">
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 text-5xl text-gray-400 hover:text-amber-500 font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center text-amber-600">All Guest Reviews</h3>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {data?.Reviews?.map((review, idx) => (
                  <div
                    key={`${review.ReviewsId}-modal-${idx}`}
                    className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow p-4"
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold mr-2">
                        {review.Name[0]}
                      </div>
                      <span className="font-semibold text-gray-900">{review.Name}</span>
                      <div className="flex ml-auto space-x-1">
                        {[...Array(review.Rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.Feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}