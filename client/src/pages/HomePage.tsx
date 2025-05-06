import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gennesys Tech LLC - Software Solutions</title>
        <meta 
          name="description" 
          content="Gennesys Tech LLC builds powerful, scalable software solutions that drive business growth and solve complex problems."
        />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
