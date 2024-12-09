import Image from "next/image";
import React from "react";

const UniqueFeature: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F1F0FF]  p-6 md:p-12 rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="flex-1">
        <Image
          src="/featureImage.png"
          alt="Blue Modern Sofa"
          width={400}
          height={400}
          className="w-full max-w-md rounded-lg"
        />
      </div>

      {/* Product Description */}
      <div className="flex-1 mt-6 md:mt-0 md:ml-10">
        <h2 className="text-2xl font-bold text-[#151875] mb-4">
          Unique Features Of Latest & Trending Products
        </h2>
        <ul className="space-y-2">
          <li className="text-gray-600 flex items-start">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="text-gray-600 flex items-start">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
            Reinforced with double wood dowels, glue, screws, nails corner blocks and machine nails
          </li>
          <li className="text-gray-600 flex items-start">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2 mt-1"></span>
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>

        <div className="mt-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Add To Cart
          </button>
          <div className="mt-4 text-[#151875] font-bold">
            <span>B&B Italian Sofa</span>
            <br />
            <span className="text-lg">$320</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
