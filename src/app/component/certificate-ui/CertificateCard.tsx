"use client";
import { Certificate } from "@/types/certificate";
import Image from "next/image";

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="relative bg-white shadow-2xl w-[1000px] h-[550px] mx-auto border border-gray-300 p-10 flex flex-col justify-between">
      {/* 🔹 Top Section */}
      <div className="flex justify-between items-start">
        {/* Left Logo */}
        <div className="w-20 h-20 relative">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="MSN Academy Logo"
            className="object-contain"
          />
        </div>

        {/* Right Award Badge */}
        <div className="w-24 h-24 relative">
          <Image
            src="/images/award-badge.png"
            width={100}
            height={100}
            alt="Award Badge"
            className="object-contain"
          />
        </div>
      </div>

      {/* 🔹 Title */}
      <div className="text-center mt-[-20px]">
        <h1 className="text-4xl font-extrabold uppercase text-indigo-900 tracking-wider leading-snug">
          Internship
        </h1>
        <h2 className="text-xl font-semibold uppercase text-red-600 mt-1 leading-tight">
          Completion Certificate
        </h2>
      </div>

      {/* 🔹 Recipient */}
      <div className="text-center mt-3">
        <p className="text-gray-700 text-sm uppercase tracking-wide leading-tight">
          Proudly Presented To
        </p>
        <h2 className="text-5xl italic font-bold text-red-600 mt-4 leading-snug">
          {certificate.recipient_name}
        </h2>
      </div>

      {/* 🔹 Achievement Text */}
      <div className="text-center max-w-3xl mx-auto mt-4 leading-relaxed">
        <p className="text-gray-700 text-lg">
          For outstanding achievement in participating in the MSN Academy
          Internship Program in
        </p>
        <p className="text-xl font-semibold text-red-600 mt-2 uppercase leading-tight">
          {certificate.course_title}
        </p>
        <p className="text-gray-700 text-base mt-2 leading-snug">
          {new Date(certificate.issued_at).toLocaleDateString()}
        </p>
      </div>

      {/* 🔹 Signatures */}
      <div className="flex justify-between items-center mt-6 px-10">
        {/* Left Signature */}
        <div className="text-center">
          <div className="w-32 h-12 relative mx-auto">
            <Image
              src="/images/sign-left.png"
              alt="Signature Left"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="mt-1 font-semibold leading-tight">Ms. Rija Khan</p>
          <p className="text-sm text-gray-600 leading-tight">HR Manager</p>
        </div>

        {/* Right Signature */}
        <div className="text-center">
          <div className="w-32 h-12 relative mx-auto">
            <Image
              src="/images/sign-right.png"
              width={100}
              height={50}
              alt="Signature Right"
              className="object-contain"
            />
          </div>
          <p className="mt-1 font-semibold leading-tight">Mr. Najm Ur Rehman</p>
          <p className="text-sm text-gray-600 leading-tight">Technical Mentor</p>
        </div>
      </div>
    </div>
  );
}
