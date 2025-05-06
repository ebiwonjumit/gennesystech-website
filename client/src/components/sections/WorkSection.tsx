import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";

interface Project {
  imageSrc: string;
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    title: "Shorstacks",
    category: "Finance Technology",
    status: "In Progress",
    description: "A comprehensive financial platform aimed to teach the next generation about financial literacy and investment strategies.",
    technologies: ["React", "NextJS", "NextAuth", "TailwindCSS"]
  },
];

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Our Work"
          description="We've helped businesses across industries build software that solves real problems. Here are some of our recent projects."
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              category={project.category}
              status={project.status}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
