"use client";
import { Certificate } from "@/types/certificate";
import Image from "next/image";

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="
      relative mx-auto 
      w-full max-w-[1020px] 
      h-auto md:h-[600px] 
      p-4 sm:p-6 md:p-8 
      flex flex-col justify-between 
      overflow-hidden shadow bg-[#f8f3e9]
    ">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center px-2 sm:px-4 md:px-6">
        {/* Left Logo */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative">
          <Image
            src="/Screenshot_2025-09-07_102350-removebg-preview.png"
            alt="MSN Academy Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Title */}
        <div className="text-center flex-1 mx-2 sm:mx-4 md:mx-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-indigo-900 tracking-wide">
            Internship
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg font-semibold uppercase text-red-600 mt-1">
            Completion Certificate
          </h2>
        </div>

        {/* Right Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative">
          <Image
            src="/Screenshot_2025-09-07_105641-removebg-preview.png"
            alt="Award Badge"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ===== Recipient ===== */}
      <div className="text-center mt-4 sm:mt-6">
        <p className="text-gray-700 text-xs uppercase tracking-wide">
          Proudly Presented To
        </p>
        <div className="w-2/3 mx-auto border-b my-2">
          <h2 className="text-2xl sm:text-3xl italic font-bold text-red-600 mt-2">
            {certificate.recipient_name}
          </h2>
        </div>
      </div>

      {/* ===== Achievement Text ===== */}
      <div className="text-center max-w-xl mx-auto px-2 sm:px-4">
        <p className="text-gray-700 text-sm sm:text-base">
          For outstanding achievement in participating in the MSN Academy
          Internship Program in
        </p>
        <p className="text-lg sm:text-xl font-bold text-red-600 uppercase mt-3 mb-2">
          {certificate.course_title}
        </p>
      </div>

      {/* ===== Date ===== */}
      <div className="text-center">
        <p className="text-gray-700 text-xs sm:text-sm font-semibold">Date</p>
        <p className="text-gray-700 text-xs sm:text-sm">
          {new Date(certificate.issued_at).toLocaleDateString()}
        </p>
      </div>

      {/* ===== Signatures & Verified ===== */}
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-12 mb-8 md:mb-16">
        {/* Left Signature */}
        <div className="text-center">
          <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 relative mx-auto mb-1">
            <Image
              src="/Screenshot_2025-09-07_113839-removebg-preview.png"
              alt="Signature Left"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-1 font-semibold text-xs sm:text-sm">Ms. Rija Khan</p>
          <p className="text-[10px] sm:text-xs text-gray-600">HR Manager</p>
        </div>

        {/* Verified Badge (Center) */}
        <div className="text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative mx-auto">
            <Image
              src="/Screenshot_2025-09-07_123459-removebg-preview.png"
              alt="Verified Badge"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Signature */}
        <div className="text-center">
          <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 relative mx-auto mb-1">
            <Image
              src="/Screenshot 2025-09-07 114016.png"
              alt="Signature Right"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-1 font-semibold text-xs sm:text-sm">Mr. Najm Ur Rehman</p>
          <p className="text-[10px] sm:text-xs text-gray-600">Technical Mentor</p>
        </div>
      </div>

      {/* ===== Decorative Corners ===== */}
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
        <Image
          src="/Screenshot 2025-09-07 114728.png"
          alt="Decor Left"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
        <Image
          src="/Screenshot_2025-09-07_124455-removebg-preview.png"
          alt="Decor Right"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
