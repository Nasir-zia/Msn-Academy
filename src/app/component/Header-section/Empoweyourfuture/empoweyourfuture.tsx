import React from "react";
import Image from "next/image";

const Empower = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-16 bg-gray-50">
      
      {/* Image Section */}
      <div className="flex justify-center md:justify-start lg:justify-end sm:order-1 lg:order-2">
        <Image
          src="/empower.png"
          alt="empower"
          width={500}
          height={600}
          
          priority
        />
      </div>

      {/* Text Section */}
      <div className="lg:text-left order-2 lg:order-1 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 md:mt-2  text-black">
          Empower Your Future with MSN Academy
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          MSN Academy strives to be a leading nation-building institution,
          equipping individuals with in-demand tech skills, an innovative
          mindset, and the drive to shape Pakistan&apos;s future and beyond. We
          deliver high-quality, affordable education that bridges the gap
          between academia and industry, producing job-ready professionals
          through hands-on learning, expert mentorship, and real-world projects.
          Guided by our core values of integrity and transparency, innovation
          and excellence, student-centric growth, diversity and inclusion, and
          empowerment through knowledge, we are committed to developing skilled,
          confident, and future-ready leaders.
        </p>
        <a
          href="https://forms.gle/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button
            type="button"
            className="bg-[#061733] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Learn More
          </button>
        </a>
      </div>
      
    </div>
  );
};

export default Empower;
