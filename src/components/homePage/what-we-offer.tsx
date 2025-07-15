import {
  FaWater,
  FaHiking,
  FaFish,
  FaGlassCheers,
  FaTractor,
  FaFire,
  FaHeart,
} from "react-icons/fa";

export const WhatWeOffer = () => {
  const offers = [
    {
      icon: <FaWater className="text-3xl text-blue-400" />,
      label: "Boating Trips",
    },
    {
      icon: <FaHiking className="text-3xl text-green-500" />,
      label: "Hiking",
    },
    {
      icon: <FaFish className="text-3xl text-cyan-500" />,
      label: "Fishing",
    },
    {
      icon: <FaGlassCheers className="text-3xl text-amber-500" />,
      label: "Bar and Resto",
    },
    {
      icon: <FaTractor className="text-3xl text-lime-600" />,
      label: "Farm Touring",
    },
    {
      icon: <FaFire className="text-3xl text-red-500 animate-pulse" />,
      label: "Fire Pit",
    },
    {
      icon: <FaHeart className="text-3xl text-pink-400 animate-bounce" />,
      label: "Wedding & Honeymoon Events",
    },
  ];

  return (
    <section className="md:px-20 px-8 py-12 font-serif bg-gray-50">
      {/* Section Title */}
  

           <div className="lg:flex-row flex items-start md:items-center justify-between flex-col">
      <h2 className="text-3xl  mb-4 flex items-start text-black">
        <span className='w-16 h-1 mr-4 text-orange-400'>━━</span> WHAT WE OFFER
      </h2>

      {/* Description */}
      <p className="text-gray-600 italic text-lg max-w-2xl mb-8">
       Discover unique experiences and amenities designed to make your stay unforgettable.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.label}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-100 p-8 h-48 transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-200">{offer.icon}</div>
            <span className="text-lg font-semibold text-gray-800 text-center group-hover:text-orange-500 transition-colors">
              {offer.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
