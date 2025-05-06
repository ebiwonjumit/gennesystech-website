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
      <ContactSection />
    </>
  );
};

export default ContactPage;
