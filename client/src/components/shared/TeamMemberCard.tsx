import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  position: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageSrc,
  name,
  position,
  bio,
}) => {
  return (
    <Card className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:shadow-md flex">
      <div className="flex-shrink-0 bg-gray-50">
        <img src={imageSrc} alt={name} className="h-48 w-auto object-contain" />
      </div>
      <CardContent className="p-6 center flex-grow">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-gray-700 font-medium mb-3">{position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
