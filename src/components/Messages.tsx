export const Messages = () => {
  return (
    <section className="py-16 px-4 bg-sage-lighter/30 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-sage mb-4">
            Mensagem
          </h2>
          <div className="w-24 h-0.5 bg-earth mx-auto mb-6"></div>
          <iframe 
            src="https://forms.gle/vroeiJDqBi7f4PXU6"
            width="640" 
            height="700"
            title="Lista de Presença"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
};