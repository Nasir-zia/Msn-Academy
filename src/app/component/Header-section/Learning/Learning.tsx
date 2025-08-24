import style from "@/style/Learning.module.css";

export default function Learning() {
  return (
    <section
      className={`${style.background_image} bg-cover text-white px-6 flex items-center  `}
    >
      <div>
        <h1 className="text-5xl mb-4 font-serif lg:mx-12">
          Start Your Learning Journey <br /> Today
        </h1>
        <p className="mb-6 lg:mx-12">
          Join our courses to gain practical skills and boost your career in the digital world.
        </p>
        <div className="space-x-4 flex lg:mx-12">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            Enroll
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
