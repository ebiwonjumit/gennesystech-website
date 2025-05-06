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
    <Card className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
