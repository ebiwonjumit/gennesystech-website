import React from "react";

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
