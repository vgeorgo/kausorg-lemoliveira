export const Guests = () => {
  return (
    <section className="bg-sage-lighter/30 flex items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-sage mb-4">
          Confirme sua presença
        </h2>
        <iframe
          src="https://forms.gle/jdqNuqKM1dkpwVj36"
          className="w-full h-[1100px] md:w-[600px] md:h-[1100px] border-0"
          title="Lista de Presença"
        >
          Loading...
        </iframe>
      </div>
    </section>
  );
};