import churchImg from "@/assets/church.jpg";
import restauranteImg from "@/assets/restaurante.jpg";

export const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-10">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${forestHero})` }}
      ></div> */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/40 via-earth/30 to-sage-lighter/50"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-serif text-sage mb-4">
            Victor & Carolina
          </h1>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-earth font-light tracking-wide">
            Convidam para a celebração do seu matrimônio...
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-sage-lighter shadow-lg">
          <h2 className="text-2xl font-serif text-foreground mb-6">
            Celebre conosco este momento especial!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="md:col-span-2">
              <h3 className="font-semibold text-sage mb-2">Data</h3>
              <p className="text-foreground">25 de outubro de 2025</p>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-semibold text-sage mb-2">Cerimônia (17h25)</h3>
              <img className="mx-auto mb-4" src={churchImg} alt="Foto da Igreja" />
              <p className="text-foreground">Igreja do Senhor Bom Jesus do Portão - Igreja Antiga</p>
              <p className="text-muted-foreground">Rua João Bettega, 07 Portão, Curitiba - PR</p>
              <button className="mt-4 px-6 py-2 bg-sage text-white rounded hover:bg-sage-dark transition-colors">
                <a href="https://maps.app.goo.gl/dh2hPraR4ksxZJ2t6" target="_blank" rel="noopener noreferrer">
                  Ver no Google Maps
                </a>
              </button>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-sage mb-2">Recepção (19h30)</h3>
              <img className="mx-auto mb-4" src={restauranteImg} alt="Foto do Restaurante" />
              <p className="text-foreground">Dom Parma Trattoria</p>
              <p className="text-muted-foreground">R. Comendador Araújo, 598 - Batel, Curitiba - PR</p>
              <button className="mt-4 px-6 py-2 bg-sage text-white rounded hover:bg-sage-dark transition-colors">
                <a href="https://maps.app.goo.gl/mHfCsqDDckfzcQsE9" target="_blank" rel="noopener noreferrer">
                  Ver no Google Maps
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};