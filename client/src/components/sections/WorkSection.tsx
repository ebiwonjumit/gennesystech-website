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
    title: "FinTrack Dashboard",
    category: "Finance Technology",
    status: "Completed",
    description: "A comprehensive financial analytics platform for investment professionals with real-time data visualization.",
    technologies: ["React", "Node.js", "AWS"]
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    title: "MediConnect",
    category: "Healthcare",
    status: "Completed",
    description: "A telemedicine platform connecting patients with healthcare providers securely and efficiently.",
    technologies: ["Flutter", "Firebase", "HIPAA Compliant"]
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    title: "ShopSmart Platform",
    category: "E-Commerce",
    status: "Completed",
    description: "A scalable e-commerce solution with advanced inventory management and personalized recommendations.",
    technologies: ["Next.js", "GraphQL", "Stripe"]
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    title: "SmartFactory IoT",
    category: "Manufacturing",
    status: "Completed",
    description: "An IoT platform for manufacturing facilities to monitor equipment health and optimize operations.",
    technologies: ["Python", "React", "MQTT"]
  }
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
