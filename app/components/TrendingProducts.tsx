import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Cantilever chair",
    price: "$250",
    discounted: "$200",
    image: "/product-10.png",
  },
  {
    id: 2,
    name: "Cantilever chair",
    price: "$250",
    discounted: "$200",
    image: "/product-11.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    price: "$250",
    discounted: "$200",
    image: "/product-9.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    price: "$250",
    discounted: "$200",
    image: "/product-4.png",
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="p-6 md:p-12 bg-[#f8f9fd] font-sans">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
        Trending Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 md:p-10 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={171}
              height={171}
              className="object-contain mb-4"
            />
            <h3 className="text-md md:text-base text-[#151875] font-semibold mb-1">
              {product.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 line-through">
              {product.price}
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#151875]">
              {product.discounted}
            </p>
          </div>
        ))}
      </div>

      {/* Promo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {/* Offer Card 1 */}
        <div className="p-6 bg-pink-50 rounded-lg shadow-md flex flex-col items-center text-center relative">
          <h3 className="text-lg md:text-xl font-bold text-[#151875] mb-2">
            25% off in all products
          </h3>
          <Link
            href="#"
            className="text-pink-500 text-sm font-semibold underline hover:text-pink-600 mb-4"
          >
            Shop Now
          </Link>
          <Image
            src="/product-12.png"
            alt="Promo 1"
            width={213}
            height={207}
            className="object-contain"
          />
        </div>

        {/* Offer Card 2 */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-md flex flex-col items-center text-center relative">
          <h3 className="text-lg md:text-xl font-bold text-[#151875] mb-2">
            23% off in all products
          </h3>
          <Link
            href="#"
            className="text-pink-500 text-sm font-semibold underline hover:text-pink-600 mb-4"
          >
            View Collection
          </Link>
          <Image
            src="/product-13.png"
            alt="Promo 2"
            width={312}
            height={173}
            className="object-contain"
          />
        </div>
      </div>

      {/* Mini Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div className="p-4 bg-purple-50 rounded-lg shadow-md flex items-center justify-center text-center">
          <p className="text-sm md:text-base text-[#151875] font-medium">
            Free Shipping
          </p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg shadow-md flex items-center justify-center text-center">
          <p className="text-sm md:text-base text-[#151875] font-medium">
            24/7 Support
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg shadow-md flex items-center justify-center text-center">
          <p className="text-sm md:text-base text-[#151875] font-medium">
            Secure Payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
