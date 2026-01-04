const HeroSection = () => {
  return (
    <section className="section-dark py-12 md:py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/freepik__a-soft-and-artistic-photograph-of-a-shadow-cast-on__91376.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Version */}
        <div className="md:hidden text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <i className="fab fa-tiktok text-primary"></i>
            <span className="text-sm text-gray-300">Viralizou no TikTok</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Acabe de vez com as manchas escuras da sua pele com nosso{' '}
            <span className="text-primary">clareador revolucionário</span>
          </h1>
          
          <a href="#check" className="btn-primary inline-block mb-8">
            COMPRE AGORA
          </a>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <i className="fab fa-tiktok text-primary text-xl"></i>
              <span className="text-gray-300">Viralizou no TikTok</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Acabe de vez com as manchas escuras da sua pele com nosso{' '}
              <span className="text-primary">clareador revolucionário</span>
            </h1>
            
            <a href="#check" className="btn-primary inline-block">
              COMPRE AGORA
            </a>
          </div>
          
          <div className="flex-1">
            <img 
              src="/images/freepik__a-casual-lifestyle-photo-of-a-brazilian-woman-with__23948.png" 
              alt="Mulher com pele saudável"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
