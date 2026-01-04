const IngredientsSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Ingredientes <span className="text-primary">100% Naturais</span>
        </h2>
        
        <img 
          src="/images/FLO-PMS-Desktop-Ingredients.jpg-1024x265.png" 
          alt="Ingredientes"
          className="w-full max-w-4xl mx-auto mb-8"
        />
        
        <p className="text-gray-400 max-w-2xl mx-auto">
          Fórmula desenvolvida com os melhores ingredientes naturais para clarear sua pele de forma segura e eficaz.
        </p>
      </div>
    </section>
  );
};

export default IngredientsSection;
