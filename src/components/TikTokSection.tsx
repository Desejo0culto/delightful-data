const TikTokSection = () => {
  return (
    <>
      <div className="section-gradient py-2">
        <div className="marquee flex gap-8 text-white font-medium text-sm">
          <span>Axilas • Virilhas • Joelhos • Olheiras • Cotovelos • Manchas no rosto • </span>
          <span>Axilas • Virilhas • Joelhos • Olheiras • Cotovelos • Manchas no rosto • </span>
          <span>Axilas • Virilhas • Joelhos • Olheiras • Cotovelos • Manchas no rosto • </span>
          <span>Axilas • Virilhas • Joelhos • Olheiras • Cotovelos • Manchas no rosto • </span>
        </div>
      </div>
      
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O PRODUTO QUE <span className="text-primary">VIRALIZOU NO TIKTOK</span>
          </h2>
          
          {/* Mobile */}
          <div className="md:hidden">
            <img 
              src="/images/Texto-do-seu-paragrafo-68.png" 
              alt="TikTok viral"
              className="w-full max-w-md mx-auto"
            />
          </div>
          
          {/* Desktop */}
          <div className="hidden md:block">
            <img 
              src="/images/Texto-do-seu-paragrafo-71-1024x329.png" 
              alt="TikTok viral"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TikTokSection;
