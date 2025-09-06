import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBook,
  FaCalendarAlt,
  FaUsers,
  FaQuestionCircle,
  FaHeadset,
  FaRss,
  FaGlobe,
  FaChalkboardTeacher,
  FaFolder,
  FaNewspaper,
} from "react-icons/fa";
import style from "@/style/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className={`${style.footer_background} bg-gray-900 text-white py-10 px-4 md:px-8`}
    >
      <div className="container mx-auto lg:mt-12">
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Academy Logo"
                width={180}
                height={180}
                priority
                className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
              />
            </div>
            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 justify-center md:justify-start">
              <FaBook className="text-blue-400 text-sm" /> Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaMapMarkerAlt className="text-xs" /> About Us
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaEnvelope className="text-xs" /> Contact Us
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaChalkboardTeacher className="text-xs" /> Our Courses
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaCalendarAlt className="text-xs" /> Tomorrowsis
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaNewspaper className="text-xs" /> Blog Posts
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 justify-center md:justify-start">
              <FaFolder className="text-blue-400 text-sm" /> Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaQuestionCircle className="text-xs" /> FAQs
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaHeadset className="text-xs" /> Support
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaMapMarkerAlt className="text-xs" /> Centers
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaCalendarAlt className="text-xs" /> Events
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaUsers className="text-xs" /> Community
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 justify-center md:justify-start">
              <FaRss className="text-blue-400 text-sm" /> Stay Updated
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaNewspaper className="text-xs" /> Newsletter
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaGlobe className="text-xs" /> Websites
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaChalkboardTeacher className="text-xs" /> Workshops
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaFolder className="text-xs" /> Resources
              </li>
              <li className="hover:text-blue-300 flex items-center gap-1 justify-center md:justify-start cursor-pointer">
                <FaBook className="text-xs" /> Footbook
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope className="text-blue-400 text-sm" /> Subscribe
            </h3>
            <p className="text-sm text-gray-300 mb-3 text-center md:text-left">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-stretch mb-3 max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border-1 border-white text-gray-800 w-full focus:ring-1 text-sm"
              />
              <button className="bg-[#061733] px-4 py-2 sm:rounded-r rounded-b font-medium text-sm w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center md:text-left">
              We respect your privacy.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 PSPI Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
