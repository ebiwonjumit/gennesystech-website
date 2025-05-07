import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import TeamMemberCard from "@/components/shared/TeamMemberCard";

interface TeamMember {
  imageSrc: string;
  name: string;
  position: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQFkglm_96TFkA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724950567848?e=1752105600&v=beta&t=JQDntGEvNLdrhlzCGsTW6J7SMTuBs5vWs59sQOPUXCw",
    name: "Tito Ebiwonjumi",
    position: "Co-Founder",
    bio: "Experienced software engineer and technical product manager with a strong background in QA, mobile/web development, and IT infrastructure. Passionate about bridging product strategy with engineering execution to deliver impactful software solutions.",
  },
  {
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C5603AQGRipVourq4yg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641228111692?e=1752105600&v=beta&t=oQJifZg7BVUx1KODDfh2FvL_5-kdi4bLbRWI-3_o0-w",
    name: "Celestine Akpanoko",
    position: "Co-Founder",
    bio: "Experienced software engineer with a strong background in research-driven development and academic computing. Skilled in full-stack engineering, web technologies, and IT systems across diverse global environments.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Gennesys Tech"
          description="Founded with a vision to transform businesses through technology, we're committed to excellence in every project we undertake."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 mt-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Gennesys Tech team collaborating in the office"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-gray-600">
              Gennesys Tech was founded by our team of founders who met during
              their graduate studies at Vanderbilt University. United by a
              shared vision, they set out to provide innovative, client-focused
              software development services.
            </p>
            <p className="text-gray-600">
              Since then, Gennesys Tech has grown into a full-service technology
              partner, helping businesses across industries solve complex
              challenges through custom software solutions.
            </p>
            <p className="text-gray-600">
              Our approach combines technical excellence with a deep
              understanding of business needs, ensuring that every solution we
              build delivers real, measurable value.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10">
          Meet Our Team
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              position={member.position}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
