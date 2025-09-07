"use client";
import { useState } from "react";
import Image from "next/image";
import style from "@/style/hero.module.css";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Certificate", path: "/certificate" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className={`${style.background_image} relative`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 mx-auto">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Academy Logo"
            width={116}
            height={103}
            priority
          />
        </div>

        {/* Center: Navigation (Desktop Only) */}
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
            href="https://docs.google.com/forms/d/e/1FAIpQLScLf7NGfdYzBaIkk9D7PqKQExWMwjxPnoxZ5Rz6SVzH5GPQog/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition  ">
              Join
            </button>
          </a>
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="bg-[#061733] px-4 py-2 rounded-lg text-white transition">
              Learn
            </button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
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
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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

      {/* Hero Section */}
      <div
        className={`px-4 sm:px-6 md:px-12 mt-6 flex flex-col items-start space-y-4 w-full max-w-7xl mx-auto transition-transform duration-300 ${
          isOpen ? "md:translate-x-0 -translate-x-20" : "translate-x-0"
        }`}
      >
        <h1 className="font-[SourceSans3] font-semibold text-2xl sm:text-3xl md:text-[40px] leading-snug sm:leading-[40px] md:leading-[48px] break-words w-full text-white">
          Empowering Pakistans Freelancers & <br className="hidden sm:block" />{" "}
          Developers
        </h1>

        <p className="text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[24px] max-w-full sm:max-w-xl text-gray-200">
          Join our academy today and unlock premium learning tools,
          <br className="hidden sm:block" />
          expert mentorship, and hands-on projects to put your new skills into
          action
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition mt-5">
          Enroll Now
        </button>
      </div>
    </header>
  );
}
