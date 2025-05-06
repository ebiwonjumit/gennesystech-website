import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Gennesys Tech transformed our business operations with their custom inventory management solution. The team was professional, responsive, and delivered a system that exceeded our expectations.",
    author: "John Doe",
    position: "COO, Retail Solutions Inc.",
    initials: "JD"
  },
  {
    quote: "Working with Gennesys Tech on our healthcare application was a game-changer. Their expertise in secure, HIPAA-compliant solutions gave us confidence, and the final product has received outstanding feedback from our users.",
    author: "Anna Smith",
    position: "CTO, MedTech Innovations",
    initials: "AS"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Client Testimonials"
          description="Hear what our clients have to say about working with Gennesys Tech."
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
