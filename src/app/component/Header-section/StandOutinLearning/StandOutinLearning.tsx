import React from "react";
import Image from "next/image";

export default function StandOutinLearning() {
  return (
    <section className=" bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Stand Out in Learning
          </h1>
          <p className="text-gray-600 mt-2">
            Discover the Future of Digital Skills Training
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Card */}
         {/* First Card */}
<div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row aspect-auto">
  {/* Text */}
  <div className="flex flex-col justify-center p-6 flex-1">
    <h6 className="text-sm font-semibold text-gray-700">Unique</h6>
    <h2 className="text-xl font-bold text-gray-900 mt-2">
      Why Choose MSN Academy?
    </h2>
    <p className="text-gray-600 mt-2">
      Personal mentorship sets us apart from competitors.
    </p>
    <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline">
      Learn <span className="ml-1">→</span>
    </button>
  </div>
  {/* Image */}
  <div className="relative w-full h-40 lg:w-1/2 lg:h-auto">
    <Image
      src="/9.png"
      alt="Why MSN"
      fill
      className="object-cover"
    />
  </div>
</div>


          {/* Second Card */}
          <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden flex flex-col aspect-square">
            <div className="flex flex-col justify-between p-6 flex-1">
              <h6 className="text-sm font-semibold text-gray-700">Innovative</h6>
              <h2 className="text-lg font-bold text-gray-900 mt-2">
                Competitive Edge
              </h2>
              <p className="text-gray-600 mt-2">
                Hands-on projects enhance real-world skills.
              </p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline">
                Enroll <span className="ml-1">→</span>
              </button>
            </div>
            <div className="relative w-full h-40 md:h-1/2">
              <Image
                src="/14.png"
                alt="Competitive Edge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden flex flex-col aspect-square">
            <div className="flex flex-col justify-between p-6 flex-1">
              <h6 className="text-sm font-semibold text-gray-700">Expert</h6>
              <h2 className="text-lg font-bold text-gray-900 mt-2">Join Us</h2>
              <p className="text-gray-600 mt-2">
                Transform your career with our courses.
              </p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline">
                Start <span className="ml-1">→</span>
              </button>
            </div>
            <div className="relative w-full h-40 md:h-1/2">
              <Image
                src="/14.png"
                alt="Join Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
