import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gennesys Tech LLC</title>
        <meta 
          name="description" 
          content="Learn about Gennesys Tech LLC, our history, our leadership team, and our mission to transform businesses through technology."
        />
      </Helmet>
      <div className="pt-16 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Get to know the team that's passionate about creating great software and helping businesses succeed.
          </p>
        </div>
      </div>
      <AboutSection />
      <TestimonialsSection />
    </>
  );
};

export default AboutPage;
