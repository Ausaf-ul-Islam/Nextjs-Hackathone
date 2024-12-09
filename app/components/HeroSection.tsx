import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDiamond } from "react-icons/go";
import { FaDiamond } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5E8F2] pt-24 pb-12 px-6">
      {/* Background Image Positioned at Left */}
      <div className="absolute top-0 left-0 z-[1] w-[300px] h-[200px]">
        <Image
          src="/HeroImage-1.png" // Replace with actual background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0">
        {/* Left Side: Text Section */}
        <div className="flex z-[1] flex-col relative left-20  md:items-start space-y-3 max-w-lg w-full md:w-1/2">
          <p className="text-pink-600">Best Furniture For Your Castle....</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="bg-pink-500 text-white py-3 px-6 font-semibold hover:bg-pink-600 transition"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end w-full relative">
          <Image
            src="/sofapromotionalheader.png" // Replace with actual image path
            alt="Furniture"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 text-pink-500">
        < FaDiamond className="w-4 h-4 " />
        <GoDiamond className="w-4 h-4" />
        <GoDiamond className="w-4 h-4" />
      </div>
    </section>
  );
};

export default HeroSection;
