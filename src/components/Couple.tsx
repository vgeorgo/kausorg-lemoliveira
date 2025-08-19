import { CouplePhoto } from "./CouplePhoto";
import casal1Img from "@/assets/casal1.jpg";
import casal2Img from "@/assets/casal2.jpg";
import casal3Img from "@/assets/casal3.jpg";
import casal4Img from "@/assets/casal4.jpg";
import casal5Img from "@/assets/casal5.jpg";
import casal6Img from "@/assets/casal6.jpg";

const photos = [
  {
    id: 1,
    image: casal1Img,
    title: "Casal 1",
  },
  {
    id: 2,
    image: casal2Img,
    title: "Casal 2",
  },
  {
    id: 6,
    image: casal6Img,
    title: "Casal 6",
  },
  {
    id: 4,
    image: casal4Img,
    title: "Casal 4",
  },
  {
    id: 5,
    image: casal5Img,
    title: "Casal 5",
  },
  {
    id: 3,
    image: casal3Img,
    title: "Casal 3",
  },
];

export const Couple = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            O casal
          </h2>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As coisas acontecem na hora certa! Isso resume nossa história. Nos conhecemos um ano antes de decidirmos começar a namorar. Mesmo tendo gostado um do outro, nós tomamos decisões de acordo com o que conseguiamos lidar no momento, mas isso não fez com que nossa história acabasse. A curiosidade e o impacto que um causou no outro estava ali, esperando para ser estimulado, uma pequena faísca que explodiu em um oceano de emoções. A cada momento estamos mais fortes e cheios de orgulho de quem somos juntos, e o inevitável do casamento é só mais um passo para duas pessoas que ja estão casados em pensamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((gift) => (
            <CouplePhoto
              key={gift.id}
              image={gift.image}
              title={gift.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};