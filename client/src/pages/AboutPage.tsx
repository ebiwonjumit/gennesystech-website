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
      <AboutSection />
      <TestimonialsSection />
    </>
  );
};

export default AboutPage;
