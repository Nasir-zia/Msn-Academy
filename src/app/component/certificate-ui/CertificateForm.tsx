"use client";
import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import { Certificate } from "@/types/certificate";
import CertificateCard from "./CertificateCard";
import ErrorMessage from "./ErrorMessage";
import { FaUserGraduate, FaIdCard, FaCertificate } from "react-icons/fa";
import Footer from "../footer/footer";

interface ApiError {
  response?: {
    status: number;
    data?: { message?: string };
  };
}

export default function CertificateForm() {
  const [role, setRole] = useState<"student" | "intern" | "na">("student");
  const [code, setCode] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [error, setError] = useState<string>("");

  // 🔹 Reset form jab role change ho
  useEffect(() => {
    setCertificate(null);
    setError("");
    setCode("");
  }, [role]);

  const handleCheck = async () => {
    try {
      setError("");
      setCertificate(null);

      const res = await api.get<Certificate>(
        `/certificate/getbycode/${code}?role=${role}`
      );

      if (res.status === 200) {
        if (res.data.role !== role) {
          setError(
            `This certificate belongs to a ${res.data.role}, not a ${role}.`
          );
          return;
        }
        setCertificate(res.data);
      }
    } catch (err) {
      const errorObj = err as ApiError;
      if (errorObj.response?.status === 404) {
        setError("Certificate not found for this role");
      } else if (errorObj.response?.status === 400) {
        setError("Invalid request");
      } else {
        setError("Server error, please try again later");
      }
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12 text-black">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Certificate Verification
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Form */}
          <div className="space-y-6">
            {/* Role Selection Buttons */}
            <div>
              <label className="block text-sm font-medium mb-3">Role</label>
              <div className="flex gap-3">
                {["student", "intern", "na"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r as "student" | "intern" | "na")}
                    className={`px-4 py-2 rounded-lg border shadow ${
                      role === r
                        ? "bg-[#061733] text-white"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {r === "student"
                      ? "Student"
                      : r === "intern"
                      ? "Intern"
                      : "N/A"}
                  </button>
                ))}
              </div>
            </div>

            {/* Certificate ID Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter your Certificate ID
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`Enter ${role} certificate ID`}
                className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#061733] bg-white"
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={handleCheck}
              disabled={!code}
              className="bg-[#061733] text-white px-4 py-2 rounded-lg w-full shadow hover:opacity-90 disabled:bg-gray-400"
            >
              Verify Certificate
            </button>

            {/* Details Section */}
            <div className="mt-4 text-gray-600 text-sm border-t pt-3">
              Your certificate will include your full name, course name or intern
              department, completion date, and a unique certificate number. You
              can also preview your certificate once verified.
            </div>

            {/* Error Message */}
            {error && <ErrorMessage message={error} />}
          </div>

          {/* Right Certificate Preview */}
          <div className="flex justify-center">
            {certificate ? (
              <CertificateCard certificate={certificate} />
            ) : (
              <div className="border rounded-lg p-6 w-96 text-center text-black">
                No certificate preview yet
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Steps Section with React Icons */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Certificate Verification Made Simple
          </h2>
          <p className="text-gray-600 mb-10">
            Easily verify your certificate from MSN Academy. Select your role and
            enter your ID to access your credentials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#061733] p-4 rounded-full shadow mb-3">
                <FaUserGraduate className="text-white text-3xl" />
              </div>
              <h3 className="font-semibold">Choose Your Role</h3>
              <p className="text-gray-600 text-sm">
                Select either Student, Intern, or N/A to proceed.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#061733] p-4 rounded-full shadow mb-3">
                <FaIdCard className="text-white text-3xl" />
              </div>
              <h3 className="font-semibold">Enter Your ID</h3>
              <p className="text-gray-600 text-sm">
                Provide the relevant ID to verify your certificate.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#061733] p-4 rounded-full shadow mb-3">
                <FaCertificate className="text-white text-3xl" />
              </div>
              <h3 className="font-semibold">See Your Certificate</h3>
              <p className="text-gray-600 text-sm">
                Click the button below to verify your certificate.
              </p>
            </div>
          </div>

          {/* 🔹 Hide extra verify button if certificate is verified */}
          {!certificate && (
            <button
              onClick={handleCheck}
              disabled={!code}
              className="mt-10 bg-[#061733] text-white px-6 py-3 rounded-lg shadow hover:opacity-90 disabled:bg-gray-400"
            >
              Verify
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
