const GuaranteeSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img 
              src="/images/STORIES-FRACTAL-7-1024x882.png" 
              alt="Garantia"
              className="w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Garantia de <span className="text-primary">7 Dias</span>
            </h2>
            
            <p className="text-gray-400 mb-6">
              Se você não ficar satisfeita com os resultados, devolvemos 100% do seu dinheiro. Sem perguntas!
            </p>
            
            <a href="#check" className="btn-primary inline-block">
              COMPRE AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
