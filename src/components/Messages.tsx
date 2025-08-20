export const Messages = () => {
  return (
    <section className="bg-sage-lighter/30 flex items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-sage mb-4">
          Mensagem
        </h2>
        <iframe 
          src="https://forms.gle/vroeiJDqBi7f4PXU6"
          className="w-full h-[800px] md:w-[600px] md:h-[800px] border-0"
          title="Lista de Presença"
        >
          Loading...
        </iframe>
      </div>
    </section>
  );
};