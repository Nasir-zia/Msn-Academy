"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import EnrollNavbar from "../enrollnavbar";
import Footer from "../component/footer/footer";

interface Certificate {
  id: string;
  name: string;
  course: string;
  issueDate: string;
  certificateUrl: string;
}

export default function CertificatePage() {
  const [role, setRole] = useState("student");
  const [code, setCode] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    try {
      setError("");
      setCertificate(null);
      setLoading(true);

      const res = await axios.get<Certificate>(
        `/api/certificate/getbycode/${code}`
      );

      console.log("Entered Code:", code);
      console.log("API Response:", res.data);

      if (res.status === 200) {
        setCertificate(res.data);
      } else {
        setError("Unexpected response from server");
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
          case 400:
            setError("Bad Request – Invalid certificate ID.");
            break;
          case 404:
            setError("Certificate not found.");
            break;
          case 500:
            setError("Internal Server Error. Please try again later.");
            break;
          default:
            setError(err.response?.data?.message || "An error occurred.");
        }
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <EnrollNavbar />
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
        {/* Top Section */}
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Certificate Verification
            </h1>
            <p className="text-gray-600 mt-2">
              Easily verify your certificates issued by MSN Academy. Just select
              your role and enter your ID to access certificate details.
            </p>

            {/* Role selection */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border rounded p-2 w-full focus:ring-2 focus:ring-red-500 text-gray-700"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Code input */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Enter your Certificate ID
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Type here..."
                className="border rounded p-2 w-full focus:ring-2 focus:ring-red-500 text-gray-700"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleVerify}
              disabled={loading || !code}
              className={`mt-4 w-full py-2 rounded transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#021533] text-white hover:bg-[#03224d]"
              }`}
            >
              {loading ? "Verifying..." : "Verify Certificate"}
            </button>

            {/* Error */}
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>

          {/* Right - Certificate Preview */}
          <div className="flex justify-center items-center">
            {certificate ? (
              <Image
                src={certificate.certificateUrl}
                alt="Certificate Preview"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            ) : (
              <Image
                src="/placeholder-certificate.png"
                alt="Placeholder"
                width={400}
                height={300}
                className="opacity-50"
              />
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-4xl mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Certificate Verification Made Simple
          </h2>
          <p className="text-gray-600 mt-2">
            Easily verify your certificate from MSN Academy. Select your role and
            enter your ID to access your credentials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <Image src="/role.png" alt="Role" width={60} height={60} />
              <h3 className="font-semibold mt-2">Choose Your Role</h3>
              <p className="text-gray-500 text-sm">
                Select either Student or Teacher to proceed
              </p>
            </div>

            <div>
              <Image src="/id.png" alt="ID" width={60} height={60} />
              <h3 className="font-semibold mt-2">Enter Your ID</h3>
              <p className="text-gray-500 text-sm">
                Provide the certificate ID to verify
              </p>
            </div>

            <div>
              <Image src="/verify.png" alt="Verify" width={60} height={60} />
              <h3 className="font-semibold mt-2">See Your Certificate</h3>
              <p className="text-gray-500 text-sm">
                Click the button below to verify your certificate
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
