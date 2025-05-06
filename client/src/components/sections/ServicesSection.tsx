import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { Code, Smartphone, Database, Cloud } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Software Development",
    description: "Bespoke solutions designed to address your unique business challenges and opportunities."
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Application Development",
    description: "Native and cross-platform apps that deliver exceptional user experiences across devices."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Analytics Solutions",
    description: "Transform your data into actionable insights with our advanced analytics platforms."
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to support your business applications."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Our Services"
          description="We deliver end-to-end software solutions tailored to your business needs, from concept to deployment and beyond."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
