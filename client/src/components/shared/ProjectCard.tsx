import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  category,
  status,
  description,
  technologies,
}) => {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      <img 
        src={imageSrc} 
        alt={`${title} screenshot`} 
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{category}</p>
          </div>
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs px-3 py-1 border border-gray-300">
            {status}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-white text-gray-800 text-xs px-3 py-1 border border-gray-300">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
