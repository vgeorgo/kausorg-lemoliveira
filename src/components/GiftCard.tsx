import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GiftCardProps {
  image: string;
  title: string;
  price: string;
  purchaseLink: string;
}

export const GiftCard = ({ image, title, price, purchaseLink }: GiftCardProps) => {
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(purchaseLink);
    toast({
      title: "Link copiado!",
      description: "O link de compra foi copiado para sua área de transferência.",
    });
  };

  return (
    <Card className="overflow-hidden bg-card border-sage-lighter hover:shadow-lg transition-shadow duration-300 p-5">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sage">{price}</span>
          <Button 
            onClick={handleCopyLink}
            variant="default"
            size="sm"
            className="bg-sage hover:bg-sage-light text-primary-foreground"
          >
            <Copy className="w-4 h-4 mr-2" />
            PIX Copia e Cola
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};