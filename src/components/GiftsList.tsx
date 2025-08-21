import { GiftCard } from "./GiftCard";
import pratoComidaImg from "@/assets/prato-comida.jpg";
import banhoTinoImg from "@/assets/banho-tino.png";
import negocioFechadoImg from "@/assets/negocio-fechado.jpg";
import babyImg from "@/assets/baby.jpg";
import travelImg from "@/assets/travel.jpg";
import caixaHabitacaoImg from "@/assets/caixa-habitacao.png";
import buqueImg from "@/assets/buque.jpg";
import interrogationImg from "@/assets/interrogation.jpg";

const gifts = [
  {
    id: 1,
    image: pratoComidaImg,
    title: "Sua parte no jantar do casamento (por pessoa)",
    price: "R$ 200,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba5204000053039865406200.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510LrWAKX5MCf6304F13E"
  },
  {
    id: 2,
    image: negocioFechadoImg,
    title: "Amizade dos noivos",
    price: "R$ 5000,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba52040000530398654075000.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510cE1CH2hc1a6304CE72"
  },
  {
    id: 3,
    image: caixaHabitacaoImg,
    title: "Parcela do financiamento da casa",
    price: "R$ 2.800,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba52040000530398654072800.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510SDO0n8RBLO6304471B"
  },
  {
    id: 4,
    image: travelImg,
    title: "Ajuda na lua de mel",
    price: "R$ 2000,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba52040000530398654072000.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510oYovCpuGt363043EC9"
  },
  {
    id: 5,
    image: banhoTinoImg,
    title: "Um ano de banho do Tino (nosso doguinho)",
    price: "R$ 1100,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba52040000530398654071100.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510POYxGa27sQ6304ED69"
  },
  {
    id: 6,
    image: babyImg,
    title: "Dar palpite no nome do filho(a) dos noivos",
    price: "R$ 700,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba5204000053039865406700.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510xc4MJRcbca630494F3"
  },
  {
    id: 7,
    image: buqueImg,
    title: "Direcionar o arremesso do buquê na sua direção",
    price: "R$ 400,00",
    purchaseLink: "00020126580014BR.GOV.BCB.PIX01367c27a4b8-2a03-42e1-ac39-5e1e70a631ba5204000053039865406400.005802BR5921Victor Georg Oliveira6009SAO PAULO62140510WuSQkKwDmO63040C8E"
  },
  {
    id: 8,
    image: interrogationImg,
    title: "Valor aleatório",
    price: "R$ ????",
    purchaseLink: "7c27a4b8-2a03-42e1-ac39-5e1e70a631ba"
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
            Aqui vão algumas ideias para nos presentear!
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Após a escolha é só clicar no botão para copiar o código do PIX e ir em seu aplicativo bancário para realizar a transferência.
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