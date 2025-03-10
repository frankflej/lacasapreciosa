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
    <section className="  px-20 py-12 font-serif">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-8 flex items-start text-black">
        <span className="w-10 h-[2px] bg-orange-400 mr-4"></span> HOTEL INFORMATION
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {hotelDetails.map((item, index) => (
          <div key={index} className="flex items-center justify-start space-x-3">
            <span className="text-gray-700">{item.icon}</span>
            <div>
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
