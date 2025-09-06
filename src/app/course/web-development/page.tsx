"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";
import EnrollNavbar from "../../../enrollnavbar/enrollnavbar";
import Footer from "../../component/footer/footer";

export default function WebDevPage() {
  return (
    <>
      <EnrollNavbar />
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 bg-slate-50">
          {/* Breadcrumb */}
          <p className="text-gray-600 text-sm mb-2">Courses &gt; Web Development</p>

          {/* Title + Subtitle */}
          <h1 className="text-2xl font-bold text-gray-600 mb-2">Web Development</h1>
          <p className="text-gray-600 mb-6">
            Become a full-stack web developer with hands-on training in front-end and
            back-end technologies. Learn to build responsive, modern websites and web
            applications from scratch.
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
                      "This course covers HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. You’ll learn to design responsive front-ends, build RESTful APIs, and manage databases to create complete web applications.",
                  },
                  {
                    title: "Learning Outcomes",
                    content:
                      "By the end of this course, you’ll be able to develop dynamic, user-friendly websites and scalable applications. You’ll also build a professional portfolio to showcase your skills to employers.",
                  },
                  {
                    title: "Target Audience",
                    content:
                      "This course is designed for beginners who want to start a career in web development, as well as professionals who want to upgrade their skills in modern frameworks and full-stack development.",
                  },
                  {
                    title: "Course Duration",
                    content:
                      "The course runs for 12 weeks, with flexible schedules including recorded lessons, live coding sessions, and hands-on projects. You can learn at your own pace with mentor guidance.",
                  },
                  {
                    title: "Enrollment Fee",
                    content:
                      "The total fee for the course is $55. This includes project work, live mentoring sessions, and certification upon completion. A 30-day money-back guarantee is available.",
                  },
                  {
                    title: "Instructor Profile",
                    content:
                      "Our instructors are experienced web developers who have built scalable applications for startups and enterprises. They bring practical insights and industry best practices into their teaching.",
                  },
                  {
                    title: "Student Testimonials",
                    content:
                      "Our students have successfully launched their careers as front-end, back-end, and full-stack developers. They highlight the course’s project-based learning and strong mentor support.",
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
            <div className="border-2 h-96 p-4 ">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/web.png"
                  alt="Web Development Course"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 font-semibold">PKR 55</p>
              <p className="flex items-center text-sm text-gray-600 mb-4">
                <FaStar className="text-yellow-500 mr-1" /> 4.8 (260 reviews)
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
