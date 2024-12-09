"use client";
import React, { useState } from "react";
import {
  IoMailOutline,
  IoCallOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoCartOutline,
  IoChevronDownOutline,
} from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-purple-600 text-white text-base py-2 px-6 flex justify-between items-center  ">
        {/* Left side */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <IoMailOutline className=" hover:text-gray-300 cursor-pointer" />
            <span>ausafulislam@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoCallOutline className=" hover:text-gray-300 cursor-pointer" />
            <span>(123) 456-7890</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-8 text-base">
          {/* Language Dropdown */}
          <div className="relative flex items-center space-x-2 cursor-pointer group text-base hover:text-gray-300">
            <span>English</span>
            <IoChevronDownOutline />
            <div className="absolute hidden group-hover:block top-6 left-0 bg-white text-black text-sm shadow-md rounded-md py-2 w-28">
              <ul role="none">
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  Spanish
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  French
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  German
                </li>
              </ul>
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="relative flex items-center space-x-2 cursor-pointer text-base group hover:text-gray-300">
            <span>USD</span>
            <IoChevronDownOutline />
            <div className="absolute hidden group-hover:block top-6 left-0 bg-white text-black text-sm shadow-md rounded-md py-2 w-28">
              <ul>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500  cursor-pointer">
                  USD
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  EUR
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  GBP
                </li>
                <li className="px-4 py-1 hover:text-white hover:bg-pink-500 cursor-pointer">
                  JPY
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer text-base hover:text-gray-300 ">
            <span>Login</span>
            <IoPersonOutline />
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
            <span>Wishlist</span>
            <IoHeartOutline />
          </div>
          <IoCartOutline className="text-3xl cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
        {/* Logo */}
        <div className="text-4xl font-bold text-black">Hekto</div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-black text-md">
          <li className="flex items-center text-pink-500 space-x-1 cursor-pointer">
            <span className="hover:text-pink-700">Home</span>
            <IoChevronDownOutline className="text-base hover:text-pink-700" />
          </li>
          <li className="hover:text-pink-500 cursor-pointer">Pages</li>
          <li className="hover:text-pink-500 cursor-pointer">Products</li>
          <li className="hover:text-pink-500 cursor-pointer">Blog</li>
          <li className="hover:text-pink-500 cursor-pointer">Shop</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>

        {/* Search bar */}
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 px-6 py-2 w-full"
            placeholder="Search"
          />
          <button className="text-white bg-pink-500 py-3 my-2 px-4 flex items-center justify-center hover:bg-pink-700">
            <IoSearchOutline />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
