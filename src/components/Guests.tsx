export const Guests = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            Confirme sua presença
          </h2>
          <iframe 
            src="https://forms.gle/jdqNuqKM1dkpwVj36"
            width="500" 
            height="1100"
            title="Lista de Presença"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
};