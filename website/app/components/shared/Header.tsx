// app/components/shared/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.jpeg"
              alt="Cinematic Systems Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <span className="font-bold text-xl text-gray-800">
            Cinematic<span className="text-blue-600">Systems</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#hero"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="#products"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Products
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Custom Mobile Menu Button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            // Hamburger Icon - different sizes: longest, shorter, shortest
            <>
              <span className="w-8 h-0.5 bg-gray-800 rounded-full transition-all duration-300"></span>
              <span className="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300"></span>
              <span className="w-3 h-0.5 bg-gray-800 rounded-full transition-all duration-300"></span>
            </>
          ) : (
            // Zigzag 'X' Icon
            <div className="relative w-full h-full flex items-center justify-center">
              <span
                className="absolute w-7 h-0.5 bg-gray-800 rounded-full transition-all duration-300"
                style={{ transform: "rotate(45deg)" }}
              ></span>
              <span
                className="absolute w-7 h-0.5 bg-gray-800 rounded-full transition-all duration-300"
                style={{ transform: "rotate(-45deg)" }}
              ></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu - Only takes content size, centered */}
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center py-6 px-8 space-y-5 min-w-[200px]">
            <Link
              href="#hero"
              className="text-gray-700 text-lg hover:text-blue-600 transition whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-gray-700 text-lg hover:text-blue-600 transition whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-gray-700 text-lg hover:text-blue-600 transition whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 text-lg hover:text-blue-600 transition whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
