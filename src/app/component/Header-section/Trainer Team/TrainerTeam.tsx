// components/TrainerTeam.tsx
"use client";

import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";

type Trainer = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
};

const trainers: Trainer[] = [
  {
    name: "Muhammad Furqan",
    role: "Full Stack Graphic Trainer",
    description: "Trains learners in creative and technical graphic design skills",
    image: "/13.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Bissam Akbar",
    role: "Digital Marketing Trainer",
    description: "Trains learners in strategies and tools for effective online marketing.",
    image: "/12.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Fizza Khokhar",
    role: "Full Stack Developer | Frontend Trainer",
    description: "Develops end-to-end web solutions and trains learners in frontend technologies.",
    image: "/15.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Najm Ur Rehman",
    role: "Full Stack Developer | App Dev Trainer",
    description: "Builds complete web solutions and trains learners in app development.",
    image: "/4.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Muhammad Suleman Nagri",
    role: "Data Analyst Trainer",
    description: "Trains learners in data analysis, visualization, and interpretation for informed decision-making.",
    image: "/10.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Daniyal Ahmed",
    role: "Frontend Trainer",
    description: "Trains learners in designing and developing responsive, user-friendly web interfaces.",
    image: "/6.png",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
];

export default function TrainerTeam() {
  return (
    <section className="py-12  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Trainer Team
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
            >
              <div className="w-24 h-24 mb-4 relative">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                {trainer.name}
              </h3>
              <p className="text-sm text-black mb-2">{trainer.role}</p>
              <p className="text-black mb-4">{trainer.description}</p>
              <div className="flex space-x-4">
                {trainer.socials.linkedin && (
                  <a
                    href={trainer.socials.linkedin}
                    className="text-black hover:text-blue-600"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {trainer.socials.twitter && (
                  <a
                    href={trainer.socials.twitter}
                    className="text-black hover:text-gray-800"
                  >
                    <FaXTwitter size={20} />
                  </a>
                )}
                {trainer.socials.dribbble && (
                  <a
                    href={trainer.socials.dribbble}
                    className="text-black hover:text-pink-500"
                  >
                    <FaDribbble size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
