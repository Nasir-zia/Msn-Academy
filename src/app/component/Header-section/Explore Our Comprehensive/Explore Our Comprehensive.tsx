import Image from "next/image";
import Link from "next/link";
import { FaStar, FaArrowRight} from "react-icons/fa";

export default function ExploreOurComprehensive() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="lg:text-center mb-8 px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Explore Our Comprehensive Course Offerings
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At MSN Academy, we provide a diverse range of courses designed to
          equip you with the skills needed for success in the digital world.
          Whether you&apos;re a beginner or looking to enhance your expertise,
          we have something for everyone.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-16 lg:mt-10">
        {[
          { title: "UI/UX Design", image: "/uiux.webp" },
          { title: "Web Development", image: "/web.png" },
          { title: "Mobile App Development", image: "/mobile.jpg" },
        ].map((course, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition 
                       w-full max-w-sm mx-auto flex flex-col items-center text-center p-6"
          >
            {/* Image */}
            <div className="w-full h-48 relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-black">
                  {course.title}
                </h2>
                <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
                Professional Certificate
                </p>
                <p className="flex items-center justify-center gap-1 text-sm text-gray-700 mt-2">
                  <FaStar className="text-yellow-500" /> 4.5{" "}
                  <span className="text-gray-500">(2.3k)</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                <button className="px-4 py-2 rounded-lg bg-[#061733] text-white hover:bg-gray-800 transition">
                  Enroll now
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
                  Watch demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <Link
          href="/course"
          className="inline-flex items-center justify-center gap-2 text-black font-bold hover:underline transition"
        >
          View More <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
