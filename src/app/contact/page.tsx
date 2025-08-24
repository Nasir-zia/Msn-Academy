"use client";
import React from "react";
import Image from "next/image";
import EnrollNavbar from "../enrollnavbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../component/footer/footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <EnrollNavbar />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-72 md:h-96 flex items-center">
        <Image
          src="/Frame.png"
          alt="Contact Banner"
          fill
          className="object-cover "
        />
        <div className="relative z-10 px-6 text-white"> 
          <h1 className="text-3xl md:text-5xl font-bold ">MSN Academy</h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">Connect With Us</h2>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Explore how to connect with us for support, collaboration, or any inquiries.
            We&apos;re here to help you grow.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-black"> {/* ✅ Whole section text black */}
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-6">We’d love to hear from you!</p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black" // ✅ Text black
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black" // ✅ Text black
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message..."
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black" // ✅ Text black
              />
            </div>
            <button
              type="submit"
              className="bg-[#021533] text-white px-6 py-2 rounded hover:bg-[#03224d]"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Info & Illustration */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4 mb-8">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#021533]" /> +92 324 8295863
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#021533]" /> msa.academy269@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#021533]" /> Karachi, Sindh
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/image 1.png"
              alt="Contact Illustration"
              width={400}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
