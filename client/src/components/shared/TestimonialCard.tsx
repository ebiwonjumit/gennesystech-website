import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  initials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  initials,
}) => {
  return (
    <Card className="bg-white p-8 rounded-xl shadow-sm">
      <CardContent className="p-0">
        <div className="flex gap-1 text-primary mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 italic mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
            {initials}
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{author}</h4>
            <p className="text-gray-600 text-sm">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
