"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";
import EnrollNavbar from "../enrollnavbar";
import Footer from "../component/footer/footer";

export default function MobileDevPage() {
  return (
    <>
      <EnrollNavbar />
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 bg-slate-50">
          {/* Breadcrumb */}
          <p className="text-gray-600 text-sm mb-2">Courses &gt; Mobile Development</p>

          {/* Title + Subtitle */}
          <h1 className="text-2xl font-bold text-gray-600 mb-2">Mobile App Development</h1>
          <p className="text-gray-600 mb-6">
            Master mobile app development with hands-on training in Flutter, React Native, and Kotlin. 
            Learn to build high-performance iOS and Android applications with modern frameworks and tools.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Includes Box */}
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h2 className="font-semibold mb-4 text-gray-600">Includes:</h2>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Real-world projects
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Lifetime access
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Expert instructors
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Flexible schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Weekly live sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Certification upon completion
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Resource materials included
                  </li>
                </ul>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                {[
                  {
                    title: "Course Overview",
                    content:
                      "This course covers Flutter, React Native, Kotlin, and Swift. You’ll learn UI design, API integration, state management, and publishing apps to App Store and Google Play.",
                  },
                  {
                    title: "Learning Outcomes",
                    content:
                      "By the end of this course, you’ll be able to develop cross-platform apps, integrate backend APIs, and optimize apps for performance. You’ll also have a portfolio of mobile projects.",
                  },
                  {
                    title: "Target Audience",
                    content:
                      "This course is designed for aspiring mobile developers, software engineers, and anyone looking to build modern iOS and Android applications.",
                  },
                  {
                    title: "Course Duration",
                    content:
                      "The course runs for 12 weeks, including live coding sessions, assignments, and project work. Flexible learning paths are available for students and professionals.",
                  },
                  {
                    title: "Enrollment Fee",
                    content:
                      "The total fee for the course is $60. This includes mentorship, project reviews, and certification upon completion. A 30-day money-back guarantee is included.",
                  },
                  {
                    title: "Instructor Profile",
                    content:
                      "Our instructors are experienced mobile developers who have worked on apps with millions of downloads. They bring real-world experience and best practices to the classroom.",
                  },
                  {
                    title: "Student Testimonials",
                    content:
                      "Our students have published successful apps on App Store and Play Store, and many are working as mobile developers in startups and tech companies.",
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className="border rounded-lg bg-white shadow-sm p-4 group"
                  >
                    <summary className="font-semibold cursor-pointer text-gray-600">
                      {item.title}
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="border-2 rounded-lg p-4 h-96 ">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/mobile.jpg"
                  alt="Mobile App Development Course"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 font-semibold">PKR 60</p>
              <p className="flex items-center text-sm text-gray-600 mb-4">
                <FaStar className="text-yellow-500 mr-1" /> 4.7 (210 reviews)
              </p>
              <button className="w-full bg-[#021533] text-white py-2 rounded hover:bg-[#03224d] mb-2">
                Get started
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                Watch demo
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
