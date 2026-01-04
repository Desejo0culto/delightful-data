const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="/images/STORIES-FRACTAL-1024x396.png" 
            alt="NutralFit Logo"
            className="h-10 mx-auto mb-6"
          />
        </div>
        
        <div className="bg-white/5 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <h3 className="font-bold mb-2 text-center">AVISO</h3>
          <p className="text-gray-400 text-sm text-center">
            This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">FORMAS DE PAGAMENTOS</h4>
            <img 
              src="/images/Formas-de-Pagamentos-6.svg" 
              alt="Formas de pagamento"
              className="h-8"
            />
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-2">SITE SEGURO</h4>
            <img 
              src="/images/Site-Seguro-3.svg" 
              alt="Site seguro"
              className="h-8"
            />
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p className="font-semibold mb-2">
            COPYRIGHT © NUTRAL FIT CLAREADOR | TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="max-w-2xl mx-auto">
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veiculados são de propriedade exclusiva. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
