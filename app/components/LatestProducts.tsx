"use client";
import React, { useState } from "react";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  const products = [
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-1.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-2.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-3.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-4.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-5.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$420.00",
      oldPrice: "$500.00",
      imageUrl: "/product-8.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-4">
          Latest Products
        </h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-8 mb-8">
          {["New Arrival", "Best Seller", "Featured", "Special Offer"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold ${
                  activeTab === tab
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-700 hover:text-pink-500"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

interface ProductProps {
  title: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  price,
  oldPrice,
  imageUrl,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border rounded-lg cursor-pointer overflow-hidden shadow-md space-x-1 hover:shadow-xl transition-all bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-[360px] h-[250px] object-contain transition-transform duration-300 transform hover:scale-105"
      />
      {/* Product Details */}
      <div className="p-2 gap-1 flex flex-row justify-between  items-center">
        <h3 className="font-semibold text-md text-[#151875]">{title}</h3>
        <p className="mt-1  flex gap-2">
          <span className="text-[#151875] text-md font-semibold">{price}</span>
          <span className="line-through text-red-500 text-sm mr-2">{oldPrice}</span>
        </p>
      </div>
      {/* Hover Icons */}
      {hovered && (
        <div className="absolute bottom-4 left-4 flex flex-col items-center space-y-2">
          <button className="p-2 text-[#151875] hover:rounded-full hover:shadow-md hover:text-[#151875] transition">
            <IoCartOutline size={20} />
          </button>
          <button className="p-2 text-[#151875] hover:rounded-full hover:shadow-md hover:text-[#151875] transition">
            <IoHeartOutline size={20} />
          </button>
          <button className="p-2 text-[#151875] hover:rounded-full hover:shadow-md hover:text-[#151875] transition">
            <IoSearchOutline size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
