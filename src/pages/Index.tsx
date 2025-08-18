import { WeddingHero } from "@/components/WeddingHero";
import { GiftsList } from "@/components/GiftsList";
import { Footer } from "@/components/Footer";
import { Guests } from "@/components/Guests";
import { DressCode } from "@/components/DressCode";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <GiftsList />
      <DressCode />
      <Guests />
      <Footer />
    </div>
  );
};

export default Index;
