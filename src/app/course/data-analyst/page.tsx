"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaCheck } from "react-icons/fa";
import EnrollNavbar from "../../../enrollnavbar/enrollnavbar";
import Footer from "../../component/footer/footer";

export default function DataAnalystPage() {
  return (
    <>
    <EnrollNavbar />
    <section className="bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 py-8 bg-slate-50">
      {/* Breadcrumb */}
      <p className="text-gray-600 text-sm mb-2">Courses &gt; Data Analyst</p>

      {/* Title + Subtitle */}
      <h1 className="text-2xl font-bold text-gray-600 mb-2">Data Analyst</h1>
      <p className="text-gray-600 mb-6">
        Join our comprehensive Digital Marketing Course to elevate your skills and career.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Includes Box */}
          <div className="border-2 rounded-lg p-6">
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
                  "This course covers essential data analysis techniques, including data cleaning, visualization, and statistical analysis. You'll gain practical skills through real-world datasets and case studies. Perfect for beginners and professionals looking to enhance their analytical expertise.",
              },
              {
                title: "Learning Outcomes",
                content:
                  "By the end of this course, you’ll be able to create effective marketing campaigns, analyze data to optimize performance, and understand the latest digital trends. You’ll also earn a certificate to showcase your new skills. Join a network of successful marketers!",
              },
              {
                title: "Target Audience",
                content:
                  "This course is designed for aspiring marketers, business owners, and anyone interested in enhancing their digital marketing knowledge. Whether you're starting from scratch or looking to refine your skills, this course is for you. No prior experience is necessary.",
              },
              {
                title: "Course Duration",
                content:
                  "The course is divided into eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, live sessions, and assignments. You can learn at your own pace and revisit materials as needed.",
              },
              {
                title: "Enrollment Fee",
                content:
                  "The total fee for the course is $55. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you’re not satisfied.",
              },
              {
                title: "Instructor Profile",
                content:
                  "Our instructors have over 12 years of experience in digital marketing and have helped numerous businesses grow their online presence. They bring practical teaching by using real-world insights and strategies to the course. You’ll benefit from their industry knowledge throughout your learning journey.",
              },
              {
                title: "Student Testimonials",
                content:
                  "Hear from our past students who have successfully transitioned into marketing roles after completing this course. They highlight how the course boosted their skills and how the supportive community, timely help provided the course for life-changing content and efficient teaching methods.",
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
        <div className="border rounded-lg p-4 lg:h-96 bg-white shadow-sm">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/Skills_Required_to_become_a_Data_Analyst.png"
              alt="Data Analyst Course"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-600 font-semibold">PKR 55</p>
          <p className="flex items-center text-sm text-gray-600 mb-4">
            <FaStar className="text-yellow-500 mr-1" /> 4.5 (231 reviews)
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
