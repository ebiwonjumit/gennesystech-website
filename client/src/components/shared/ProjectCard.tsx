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
    <Card className="bg-white overflow-hidden transition-all hover:shadow-md">
      <img 
        src={imageSrc} 
        alt={`${title} screenshot`} 
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary">{category}</p>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs px-3 py-1">
            {status}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-gray-600 text-xs px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
