"use client";
import { useState } from "react";

const LocationDirection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="md:px-20 px-8 py-12 grid md:grid-cols-2 gap-8 font-serif">
      {/* Left Side - Text Content */}
      <div>
        <h2 className="text-3xl mb-6 flex items-start text-black">
           <span className='w-16 h-1 mr-4 text-orange-400'>━━</span>LOCATION & DIRECTION
        </h2>

        {/* Accordion Items */}
        {["Getting Here", "Getting Here", "Getting Here"].map((title, index) => (
          <div key={index} className="border-b border-gray-300 text-black">
            <button
              className="w-full text-left py-3 flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {title}
              <span>{openIndex === index ? "✖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <div className="pb-3 text-gray-700">
                HAVELI, JODHPUR, RAJASTHAN, INDIA  
                <br />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  className="text-[#c07b50] underline"
                >
                  OPEN GOOGLE MAPS &gt;
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Google Maps Embed */}
      <div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.644142111111!2d30.144221749999997!3d-1.94335935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc9a6c4e5c5e5%3A0x4f4f4f4f4f4f4f4f!2sEastern%20Province%2C%20Rwanda!5e0!3m2!1sen!2s!4v1643723904579!5m2!1sen!2s"
  width="100%"
  height="300"
  allowFullScreen
  loading="lazy"
  className="rounded-lg shadow-lg"
></iframe>
      </div>
    </section>
  );
};

export default LocationDirection;
