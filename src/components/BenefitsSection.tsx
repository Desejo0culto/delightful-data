const BenefitsSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Clareador NutralFit transformará sua pele{' '}
          <span className="text-primary">desde a primeira aplicação</span>
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Perfeito para você que deseja ter uma pele mais saudável e bonita.
        </p>
        
        <img 
          src="/images/lllList-1024x257.png" 
          alt="Benefícios do produto"
          className="max-w-3xl mx-auto w-full mb-8"
        />
        
        <a href="#check" className="btn-primary inline-block">
          CLAREAR AGORA!
        </a>
      </div>
    </section>
  );
};

export default BenefitsSection;
