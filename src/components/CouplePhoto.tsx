import { Card } from "@/components/ui/card";

interface PhotoProps {
  image: string;
  title: string;
}

export const CouplePhoto = ({ image, title }: PhotoProps) => {
  return (
    <Card className="overflow-hidden bg-card border-sage-lighter hover:shadow-lg transition-shadow duration-300 p-5">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Card>
  );
};