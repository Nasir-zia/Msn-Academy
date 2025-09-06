"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";
import EnrollNavbar from "../../../enrollnavbar/enrollnavbar";
import Footer from "../../component/footer/footer";

export default function UIUXPage() {
  return (
    <>
      <EnrollNavbar />
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 bg-slate-50">
          {/* Breadcrumb */}
          <p className="text-gray-600 text-sm mb-2">Courses &gt; UI/UX Design</p>

          {/* Title + Subtitle */}
          <h1 className="text-2xl font-bold text-gray-600 mb-2">UI/UX Design</h1>
          <p className="text-gray-600 mb-6">
            Master user interface and user experience design with our hands-on UI/UX Design
            course. Learn to create intuitive, engaging, and visually appealing digital
            products.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Includes Box */}
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h2 className="font-semibold mb-4 text-gray-600">Includes:</h2>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-black" /> Hands-on projects
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
                      "This course covers the foundations of UI/UX design, including user research, wireframing, prototyping, usability testing, and design systems. You’ll work with industry-standard tools like Figma and Adobe XD to bring your ideas to life.",
                  },
                  {
                    title: "Learning Outcomes",
                    content:
                      "By the end of this course, you’ll be able to design user-friendly interfaces, create engaging user journeys, and build prototypes for websites and mobile apps. You’ll also have a strong portfolio to showcase your design skills.",
                  },
                  {
                    title: "Target Audience",
                    content:
                      "This course is designed for aspiring UI/UX designers, graphic designers transitioning into digital design, product managers, and developers who want to enhance their design skills. No prior design experience is required.",
                  },
                  {
                    title: "Course Duration",
                    content:
                      "The course is divided into eight weeks, including video tutorials, live design sessions, and practical projects. You’ll also get access to mentor feedback on your design work.",
                  },
                  {
                    title: "Enrollment Fee",
                    content:
                      "The total fee for the course is $55. This includes project reviews, access to live design workshops, and certification upon completion. A 30-day money-back guarantee is included.",
                  },
                  {
                    title: "Instructor Profile",
                    content:
                      "Our instructors are experienced UI/UX designers who have worked with startups and enterprises to build successful digital products. They share real-world case studies and design strategies throughout the course.",
                  },
                  {
                    title: "Student Testimonials",
                    content:
                      "Our past students now work as UI/UX designers in tech companies and design agencies. They appreciated the project-based approach and the supportive community that helped them grow their careers.",
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
            <div className="border-2 p-4 h-96">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/uiux.webp"
                  alt="UI/UX Design Course"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 font-semibold">PKR 55</p>
              <p className="flex items-center text-sm text-gray-600 mb-4">
                <FaStar className="text-yellow-500 mr-1" /> 4.7 (180 reviews)
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
