"use client";
import { FaClock, FaUtensils, FaBed, FaSpa, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const hotelDetails = [
  { icon: <FaClock size={30} />, title: "CHECK IN", detail: "12:00 PM Onwards", sub: "CHECK OUT - 11:59 AM" },
  { icon: <FaUtensils size={30} />, title: "DINING", detail: "2 RESTAURANTS & 1 BAR" },
  { icon: <FaBed size={30} />, title: "ROOMS & SUITES", detail: "70 ROOMS & SUITES" },
  { icon: <FaSpa size={30} />, title: "WELLNESS", detail: "WELLNESS CIRCLE OFFERS" },
  { icon: <FaMapMarkerAlt size={30} />, title: "CONTACT", detail: "HAVELI, JODHPUR" },
  { icon: <FaEnvelope size={30} />, title: "MAIL", detail: "HAVELI.JODHPUR@GMAIL.COM" },
];

export default function HotelInfo() {
  return (
    <section className="md:px-20 px-8 py-12 font-serif">
      {/* Section Title */}
      <h2 className="text-3xl  mb-8 flex items-start text-black">
        <span className="w-16 h-1 mr-4 text-orange-400">━━</span> HOTEL INFORMATION
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {hotelDetails.map((item, index) => (
          <div key={index} className="flex items-center justify-start md:justify-center space-x-3">
            <div className="text-gray-700">{item.icon}</div>
            <div className="pb-6">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-[#c07b50] italic">{item.detail}</p>
              {item.sub && <p className="text-gray-600">{item.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
