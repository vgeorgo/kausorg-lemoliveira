import { WeddingHero } from "@/components/WeddingHero";
import { GiftsList } from "@/components/GiftsList";
import { Footer } from "@/components/Footer";
import { Guests } from "@/components/Guests";
import { DressCode } from "@/components/DressCode";
import { Messages } from "@/components/Messages";
import { Couple } from "@/components/Couple";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <Couple />
      <GiftsList />
      <DressCode />
      <Guests />
      <Messages />
      <Footer />
    </div>
  );
};

export default Index;
