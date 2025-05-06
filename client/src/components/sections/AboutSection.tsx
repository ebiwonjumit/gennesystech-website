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
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "Former tech lead at a Fortune 500 company with 15+ years of experience in enterprise software solutions."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    name: "David Chen",
    position: "CTO",
    bio: "Cloud architecture specialist with a background in scaling systems for high-growth startups."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    name: "Maya Rodriguez",
    position: "Head of Product",
    bio: "Product strategist with expertise in UX design and user-centered development methodologies."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
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
              Gennesys Tech LLC was established by a team of passionate software engineers who saw the need for more thoughtful, client-focused software development services.
            </p>
            <p className="text-gray-600">
              Since our founding, we've grown into a full-service technology partner helping businesses across industries solve complex challenges through innovative software solutions.
            </p>
            <p className="text-gray-600">
              Our approach combines technical excellence with deep business understanding, ensuring the solutions we build drive real value.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-10">Meet Our Leadership</h3>
        
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
