export const Guests = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            Confirme sua presença
          </h2>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por favor, confirme sua presença até o dia 1 de outubro de 2025 para conserguirmos organizar tudo com carinho.
          </p>
          <iframe 
            src="https://forms.gle/jdqNuqKM1dkpwVj36"
            width="640" 
            height="1600"
            title="Lista de Presença"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
};