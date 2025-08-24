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
      className={`${style.footer_background} bg-gray-900 text-white py-10 px-4 md:px-8 `}
    >
      <div className="container mx-auto lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="rounded-full flex items-center justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Academy Logo"
                width={200}
                height={200}
                priority
                className="max-w-[120px] sm:max-w-[150px] md:max-w-[200px]"
              />
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4 text-lg mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
              <FaBook className="text-blue-400 text-sm" /> Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaMapMarkerAlt className="text-xs" /> About Us
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaEnvelope className="text-xs" /> Contact Us
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaChalkboardTeacher className="text-xs" /> Our Courses
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaCalendarAlt className="text-xs" /> Tomorrowsis
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaNewspaper className="text-xs" /> Blog Posts
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
              <FaFolder className="text-blue-400 text-sm" /> Resources
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaQuestionCircle className="text-xs" /> FAQs
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaHeadset className="text-xs" /> Support
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaMapMarkerAlt className="text-xs" /> Centers
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaCalendarAlt className="text-xs" /> Events
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaUsers className="text-xs" /> Community
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
              <FaRss className="text-blue-400 text-sm" /> Stay Updated
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaNewspaper className="text-xs" /> Newsletter
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaGlobe className="text-xs" /> Websites
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaChalkboardTeacher className="text-xs" /> Workshops
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaFolder className="text-xs" /> Resources
              </li>
              <li className="hover:text-blue-300 cursor-pointer flex items-center justify-center md:justify-start gap-1 text-sm">
                <FaBook className="text-xs" /> Footbook
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-blue-400 text-sm" /> Subscribe
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col mb-3 max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-t text-gray-800 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-b font-medium flex items-center justify-center text-sm">
                <FaEnvelope className="mr-1" /> Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400">
              We respect your privacy.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 PSPI Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
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
