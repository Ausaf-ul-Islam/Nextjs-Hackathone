"use client";
import Image from "next/image";
import React from "react";
import { FaTruck, FaHandsHelping, FaAward, FaHeadset } from "react-icons/fa";

const ShopexOffer: React.FC = () => {
  const offers = [
    {
      icon: <FaTruck size={40} className="text-pink-500 " />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FaHandsHelping size={40} className="text-pink-500" />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FaAward size={40} className="text-pink-500" />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FaHeadset size={40} className="text-pink-500" />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#151875] mb-8">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="mb-4">{offer.icon}</div>
              <h3 className="text-xl font-bold text-[#151875] mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;
