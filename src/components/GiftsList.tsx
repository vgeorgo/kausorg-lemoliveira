import { GiftCard } from "./GiftCard";
import honeymoonImg from "@/assets/honeymoon.jpg";
import gymImg from "@/assets/gym.jpg";
import snacksImg from "@/assets/snacks.jpg";
import dinnerImg from "@/assets/dinner.jpg";
import wineDryImg from "@/assets/wine-dry.jpg";
import wineSweetImg from "@/assets/wine-sweet.jpg";
import champagneImg from "@/assets/champagne.jpg";
import dogSpaImg from "@/assets/dog-spa.jpg";
import milesImg from "@/assets/miles.jpg";

const gifts = [
  {
    id: 1,
    image: honeymoonImg,
    title: "Passeio de lua de mel",
    price: "R$ 150,00",
    purchaseLink: "https://pix.example.com/honeymoon"
  },
  {
    id: 2,
    image: gymImg,
    title: "1 mês de academia para os noivos se recuperarem das gordices",
    price: "R$ 300,00",
    purchaseLink: "https://pix.example.com/gym"
  },
  {
    id: 3,
    image: snacksImg,
    title: "Snacks para levar na viagem de lua de mel",
    price: "R$ 50,00",
    purchaseLink: "https://pix.example.com/snacks"
  },
  {
    id: 4,
    image: dinnerImg,
    title: "Jantar romântico",
    price: "R$ 200,00",
    purchaseLink: "https://pix.example.com/dinner"
  },
  {
    id: 5,
    image: wineDryImg,
    title: "Vinho SECO para amadurecer o paladar dos noivos",
    price: "R$ 500,00",
    purchaseLink: "https://pix.example.com/wine-dry"
  },
  {
    id: 6,
    image: wineSweetImg,
    title: "Vinho DOCE que os noivos gostam",
    price: "R$ 20,00",
    purchaseLink: "https://pix.example.com/wine-sweet"
  },
  {
    id: 7,
    image: champagneImg,
    title: "Espumante para brindar os noivos",
    price: "R$ 100,00",
    purchaseLink: "https://pix.example.com/champagne"
  },
  {
    id: 8,
    image: dogSpaImg,
    title: "1 ano de banho para o Tino",
    price: "R$ 650,00",
    purchaseLink: "https://pix.example.com/dog-spa"
  },
  {
    id: 9,
    image: milesImg,
    title: "Um trecho de milhas aéreas para a viagem de lua de mel",
    price: "R$ 1.000,00",
    purchaseLink: "https://pix.example.com/miles"
  }
];

export const GiftsList = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            Lista de Presentes
          </h2>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui vão algumas ideias para nos presentear.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Após a escolha é só clicar no botão para copiar o link PIX.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sua presença é o nosso maior presente!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift) => (
            <GiftCard
              key={gift.id}
              image={gift.image}
              title={gift.title}
              price={gift.price}
              purchaseLink={gift.purchaseLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};