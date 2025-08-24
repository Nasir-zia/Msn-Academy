"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";
import EnrollNavbar from "../enrollnavbar";
import Footer from "../component/footer/footer";

export default function DotNetPage() {
  return (
    <>
      <EnrollNavbar />
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto  px-4 py-8">
          <p className="text-gray-600 text-sm mb-2">Courses &gt; .NET Development</p>

          {/* Title + Subtitle */}
          <h1 className="text-2xl font-bold text-gray-600 mb-2">.NET Development</h1>
          <p className="text-gray-600 mb-6">
            Learn to build enterprise-level web, desktop, and cloud applications using
            Microsoft .NET framework, C#, and ASP.NET Core. Gain practical skills to
            develop secure, scalable, and modern applications.
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
                      "This course covers C#, ASP.NET Core, Entity Framework, and MVC architecture. You’ll also learn database integration, API development, and deployment strategies for .NET applications.",
                  },
                  {
                    title: "Learning Outcomes",
                    content:
                      "By the end of this course, you’ll be able to develop full-stack .NET applications, design scalable architectures, and build secure APIs. You’ll also have a portfolio of projects to showcase.",
                  },
                  {
                    title: "Target Audience",
                    content:
                      "This course is ideal for beginners in programming, software developers, and IT professionals looking to enhance their skills in .NET and enterprise application development.",
                  },
                  {
                    title: "Course Duration",
                    content:
                      "The course runs for 10 weeks, with live coding sessions, video tutorials, and real-world projects. Flexible learning options are available for working professionals.",
                  },
                  {
                    title: "Enrollment Fee",
                    content:
                      "The total fee for the course is $55. This includes live mentorship, project reviews, and certification upon completion. A 30-day money-back guarantee is included.",
                  },
                  {
                    title: "Instructor Profile",
                    content:
                      "Our instructors are Microsoft-certified professionals with years of experience building enterprise .NET applications. They provide practical insights and industry best practices.",
                  },
                  {
                    title: "Student Testimonials",
                    content:
                      "Our students have successfully launched their careers as .NET developers in tech companies and enterprise organizations. They highlight the course’s project-based learning and strong mentor support.",
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
                  src="/dotnet_course.png"
                  alt=".NET Development Course"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 font-semibold">PKR 55</p>
              <p className="flex items-center text-sm text-gray-600 mb-4">
                <FaStar className="text-yellow-500 mr-1" /> 4.6 (195 reviews)
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
