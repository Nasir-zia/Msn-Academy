import Head from "next/head";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export default function ManagementTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "Muhammad Suleman",
      role: "Founder & CEO",
      description: "Passionate about mentoring in data science and freelancing.",
      image: "/10.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
        website: "https://example.com",
      },
    },
    {
      name: "Haadya Khan",
      role: "Content Marketing Member",
      description: "Creates and promotes engaging content to boost brand awareness and audience engagement.",
      image: "/2.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Raja Khan",
      role: "HR Admin",
      description: "Expert in employee relations and administrative HR processes.",
      image: "/7.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Daniyal Ahmed",
      role: "Development Lead",
      description: "Proficient in software development and system architecture design.",
      image: "/6.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Ashba Azeem",
      role: "Content Manager",
      description: "Specializes in managing and creating engaging digital content.",
      image: "/red.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Laralb Ali",
      role: "Strategic Finance Lead",
      description: "Guiding students in building successful freelancing careers.",
      image: "/3.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Najm Ur Rehman",
      role: "Technical Mentor",
      description: "Guides learners in mastering technical skills and real-world projects.",
      image: "/4.png",
      socials: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Management Team</title>
        <meta name="description" content="Meet our management team" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="text-center mb-12">
          <p className="text-black font-medium">Our Team</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black">Management Team</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-xl p-6  transition flex flex-col items-center text-center ">
              <div className="w-28 h-28 mb-4 relative">
                <Image src={member.image} alt={member.name} fill className="rounded-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold text-black">{member.name}</h2>
              <p className="text-sm text-black mb-3">{member.role}</p>
              <p className="text-black mb-4">{member.description}</p>

              {/* 👇 Social Icons (always shown) */}
              <div className="flex space-x-4 mt-3">
                <a
                  href={member.socials.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.socials.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-900 text-xl"
                >
                  <FaGithub />
                </a>
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-green-600 text-xl"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
