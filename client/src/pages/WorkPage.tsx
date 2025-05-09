import React from "react";
import { Helmet } from "react-helmet";
import WorkSection from "@/components/sections/WorkSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const WorkPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Gennesys Tech LLC</title>
        <meta 
          name="description" 
          content="Explore Gennesys Tech LLC's portfolio of custom software, mobile applications, and data analytics solutions built for clients across various industries."
        />
      </Helmet>
      <WorkSection />
      <div className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionHeading
            title="Ready to Start Your Project?"
            description="Let's discuss how we can help bring your software vision to life with solutions tailored to your specific needs."
          />
          <Link href="/contact">
            <Button className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
