import Image from "next/image";

function VisionaryLeader() {
  return (
    <section className="bg-gray-50 text-black md:w-full">
      <div
        className="mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-12 
                   flex flex-col-reverse md:flex-row items-center gap-10"
      >
        {/* Text Section */}
        <div className="md:w-1/2 md:text-left">
          <h1 className="text-2xl xl:text-4xl font-bold mb-4">
            Meet Muhammad Suleman: Visionary Leader of MSN Academy
          </h1>
          <p className="mb-6 text-gray-700 text-base xl:text-lg leading-relaxed">
            Muhammad Suleman, Founder & CEO of MSN Academy, leverages his
            expertise in data analysis and digital technologies to empower
            freelancers and developers in Pakistan. He enhanced his skills
            through a data analytics internship at Systems Limited.
          </p>

          {/* Vision & Experience */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold">Vision</h2>
              <p className="mt-2 text-gray-600">
                Empowering youth through practical, job-ready skills.
              </p>
            </div>
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold">Experience</h2>
              <p className="mt-2 text-gray-600">
                Mentoring in Python, data analysis, and freelancing.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/visionleader.png"
            alt="visionary leader"
            width={400}
            height={420}
            className="rounded-2xl w-full max-w-sm md:max-w-md xl:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default VisionaryLeader;
