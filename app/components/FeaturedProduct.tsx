import React from "react";
import Image from "next/image";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  code: string;
  price: string;
  image: string;
  highlight?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Comfortable Chair",
    code: "Y7680",
    price: "$400",
    image: "/product-5.png",
    highlight: true,
  },
  {
    id: 2,
    name: "Comfortable Chair",
    code: "Y7681",
    price: "$410",
    image: "/product-6.png",
    highlight: true,
  },
  {
    id: 3,
    name: "Comfortable Chair",
    code: "Y7682",
    price: "$420",
    image: "/product-7.png",
    highlight: true,
  },
  {
    id: 4,
    name: "Comfortable Chair",
    code: "Y7683",
    price: "$430",
    image: "/product-8.png",
    highlight: true,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className={`group relative rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105 ${
        product.highlight
          ? "hover:bg-[#2F1AC4] hover:text-white transition-all duration-300 ease-in-out"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Icons at the top left */}
      <div className="absolute top-4 left-4 flex space-x-2  opacity-0 group-hover:opacity-100">
        <IoCartOutline
          className="text-white hover:text-red-500 cursor-pointer"
          size={20}
        />
        <IoHeartOutline
          className="text-white hover:text-blue-500 cursor-pointer"
          size={20}
        />
        <IoSearchOutline
          className="text-white hover:text-green-500 cursor-pointer"
          size={20}
        />
      </div>

      <Image
        src={product.image}
        alt={product.name}
        width={130}
        height={150}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      {/* Button Visible on Hover */}
      <button className="bg-green-500 text-white opacity-0 group-hover:opacity-100 py-2 px-4 my-2 rounded-lg font-semibold transition-opacity">
        View Details
      </button>

      <h3 className="text-lg text-pink-500 group-hover:text-white  font-semibold mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-[#151875] group-hover:text-white  mb-1">
        Code: {product.code}
      </p>
      <p className="text-md text-[#151875] group-hover:text-white   mb-4">
        {product.price}
      </p>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-2xl font-bold text-[#151875] text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
