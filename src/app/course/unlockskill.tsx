import React from "react";
import Image from "next/image";

function UnlockSkill() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section - Left on desktop, Bottom on mobile */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Potential with Personalized Mentorship
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At MSN Academy, we believe in the power of personal mentorship and
            hands-on projects. Our experienced mentors guide you through
            real-world challenges, ensuring you gain practical skills that
            employers value.
          </p>
          <button className="px-6 py-3 bg-slate-200 text-black font-medium rounded-lg">
            Learn more
          </button>
        </div>

        {/* Image Section - Right on desktop, Top on mobile */}
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/20.png"
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
