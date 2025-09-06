import React from "react";
import Image from "next/image";

function UnlockSkill() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Enroll in our courses today and unlock your potential in the digital world!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#061733] text-white font-medium rounded-lg ">
              Enroll
            </button>
            <button className="px-6 py-3 bg-gray-300 text-black   font-medium rounded-lg ">
              Contact
            </button>
          
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/21.png"
            width={500}
            height={350}
            alt="Please wait"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default UnlockSkill;
