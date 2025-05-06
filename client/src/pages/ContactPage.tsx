import React from "react";
import { Helmet } from "react-helmet";
import ContactSection from "@/components/sections/ContactSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Gennesys Tech LLC</title>
        <meta 
          name="description" 
          content="Contact Gennesys Tech LLC to discuss your custom software needs. We're ready to help bring your software vision to life."
        />
      </Helmet>
      <div className="pt-16 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Have a project in mind? We'd love to hear from you. Get in touch with our team to discuss how we can help.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ContactPage;
