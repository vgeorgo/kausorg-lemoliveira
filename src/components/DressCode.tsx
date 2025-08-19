import roupaMascImg from '../assets/roupa-masc.jpg';
import roupaFemImg from '../assets/roupa-fem.jpg';

export const DressCode = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            Vestimenta
          </h2>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos pensando em um dress code <b>esporte fino</b> que combine com o tema do nosso casamento, que é inspirado na natureza.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            
          </p>

          <br />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para mulheres, <b>NÃO queremos as cores preta, verde (escuro), dourado, vermelho.</b>
          </p>
          <img src={roupaFemImg} alt="Dress Code" className="mx-auto mt-6 rounded-lg shadow-lg object-cover" /> 

          <br />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para homens, <b>NÃO queremos jeans (cor azul) e tênis esportivo</b>
          </p>
          <img src={roupaMascImg} alt="Dress Code" className="mx-auto mt-6 rounded-lg shadow-lg object-cover" /> 
        </div>
      </div>
    </section>
  );
};