import { WeddingHero } from "@/components/WeddingHero";
import { GiftsList } from "@/components/GiftsList";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <GiftsList />
      <Footer />
    </div>
  );
};

export default Index;
