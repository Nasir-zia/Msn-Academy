import React from "react";
import Header from "../component/Header-section/Header/header";
import Cards from "./cards";
import UnlockSkill from "./unlockskill";
import Readytostart from "./readytostart";
import Footer from "../component/footer/footer";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa"; 

const courses = [
  {
    title: "UI/UX Designs",
    img: "/23.jpg",
    certificate: "Professional Certificate",
    rating: 4.5,
    reviews: 231,
    button: "Enroll Now",
    link: "/ui-ux-design",
  },
  {
    title: "Web Development",
    img: "/OIP (1).jpg",
    certificate: "Professional Certificate",
    rating: 4.5,
    reviews: 231,
    button: "Enroll Now",
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    img: "/pexels-fotios-photos-1092644.jpg",
    certificate: "Professional Certificate",
    rating: 4.5,
    reviews: 231,
    button: "Enroll Now",
    link: "/mobile-development",
  },
  {
    title: "Data Analyst",
    img: "/Skills_Required_to_become_a_Data_Analyst.png",
    certificate: "Professional Certificate",
    rating: 4.5,
    reviews: 231,
    button: "Enroll Now",
    link: "/data-analyst",
  },
  {
    title: ".Net Backend Development",
    img: "/OIP.webp",
    certificate: "Professional Certificate",
    rating: 4.5,
    reviews: 231,
    button: "Enroll Now",
    link: "/net-development",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <section className="py-12 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-AlbertSans">
            Explore Our Comprehensive <br /> Course Offerings for Aspiring Digital <br />
            Professionals
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden text-center"
            >
              <figure className="relative">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">{course.title}</h2>
                <p className="text-sm text-gray-500">{course.certificate}</p>
                <p className="text-sm text-gray-600 flex items-center justify-center mt-1 gap-1">
                  <FaStar className="text-yellow-500" /> {course.rating} ({course.reviews})
                </p>
                <div className="flex justify-center mt-4 gap-2">
                  {/* Enroll Button as Link */}
                  <Link
                    href={course.link}
                    className="bg-[#021533] text-white py-2 px-4 rounded hover:bg-[#03224d] no-underline"
                  >
                    {course.button}
                  </Link>
                  {/* Demo Button */}
                  <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 flex items-center gap-1">
                    Watch demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cards />
      <UnlockSkill />
      <Readytostart />
      <Footer />
    </>
  );
}
