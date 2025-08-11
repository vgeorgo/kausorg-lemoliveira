//import forestHero from "@/assets/vito-carol-tino.jpg";

export const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
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
            Estão se casando!
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-sage-lighter shadow-lg">
          <h2 className="text-2xl font-serif text-foreground mb-6">
            Celebre conosco este momento especial
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-sage mb-2">Data</h3>
              <p className="text-foreground">25 de outubro de 2025</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-sage mb-2">Horário</h3>
              <p className="text-foreground">17h25</p>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-semibold text-sage mb-2">Local</h3>
              <p className="text-foreground">Paróquia Senhor Bom Jesus do Portão</p>
              <p className="text-muted-foreground">Rua João Bettega, praça Pe. João Bagozzi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};