"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function EnrollNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Certificate", path: "/certificate" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className=" top-0 z-50 bg-cover bg-center"
      style={{
        backgroundImage: "url(/background22.png)",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-evenly max-w-7xl mx-auto w-full">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Academy Logo"
   width={90}             
  height={80} 
              priority
          />
        </div>

        {/* Center: Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="text-white cursor-pointer hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Buttons + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-red-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Join
            </button>
          </a>
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Learn
            </button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-sm p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white ml-auto mb-4 focus:outline-none"
          >
            <HiX size={28} />
          </button>

          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-white cursor-pointer hover:text-red-600 transition text-lg border-b border-gray-700 pb-2 block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://forms.gle/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition w-full">
                  Learn
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
