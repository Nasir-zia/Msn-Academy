import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="p-8 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Your Path to Digital Mastery
        </h1>
        <p className="mt-4 text-gray-600 font-Montserrat">
          At MSN Academy, we offer a structured approach to learning that
          combines theoretical knowledge with practical application. Our courses
          are designed to equip you with the skills needed to thrive in the
          digital landscape.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="card shadow-md bg-white rounded-lg overflow-hidden">
          <figure className="h-56 w-full">
            <Image
              src="/17.png"
              alt="Interactive Learning"
              width={500}
              height={350}
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body text-black font-Albert Sans bg-gray-50">
            <h1 className="card-title text-center">
              Interactive Learning <br /> Modules for Real–World <br /> Skills
            </h1>
            <p>Each course includes hands-on projects to reinforce learning.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card shadow-md bg-white rounded-lg overflow-hidden">
          <figure className="h-56 w-full">
            <Image
              src="/18.png"
              alt="Mentorship"
              width={500}
              height={350}
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body text-black bg-gray-50">
            <h2 className="card-title text-center">
              Personal Mentorship to <br /> Guide Your Journey
            </h2>
            <p>
              Our experienced mentors provide personalized guidance throughout
              your learning experience.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card shadow-md bg-white rounded-lg overflow-hidden">
          <figure className="h-56 w-full">
            <Image
              src="/19.png"
              alt="Community"
              width={500}
              height={350}
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body text-black">
            <h2 className="card-title text-center">
              Join a Community of <br /> Aspiring Professionals
            </h2>
            <p>Collaborate with peers and industry experts as you learn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
