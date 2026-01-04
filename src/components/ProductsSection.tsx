const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: '1 Unidade',
      image: '/images/nutralsGroup-883-620x1024.png',
      originalPrice: 197,
      price: 97,
      discount: '51% OFF',
      popular: false,
    },
    {
      id: 2,
      name: '2 Unidades',
      image: '/images/nutrsaGroup-882-739x1024.png',
      originalPrice: 394,
      price: 167,
      discount: '58% OFF',
      popular: true,
    },
    {
      id: 3,
      name: '3 Unidades',
      image: '/images/mjasaGroup-881-697x1024.png',
      originalPrice: 591,
      price: 217,
      discount: '63% OFF',
      popular: false,
    },
  ];

  return (
    <section id="check" className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Escolha seu <span className="text-primary">Kit Ideal</span>
          </h2>
          <p className="text-gray-400">
            Quanto mais unidades, maior o desconto!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`product-card text-center relative ${product.popular ? 'border-primary' : ''}`}
            >
              {product.popular && (
                <div className="badge absolute -top-3 left-1/2 -translate-x-1/2">
                  MAIS VENDIDO
                </div>
              )}
              
              <img 
                src={product.image} 
                alt={product.name}
                className="h-48 mx-auto mb-4 object-contain"
              />
              
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              
              <div className="mb-4">
                <span className="text-gray-500 line-through text-sm">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="ml-2 text-primary text-sm font-semibold">
                  {product.discount}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-white mb-4">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
              
              <a href="#" className="btn-primary w-full block">
                COMPRAR
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <img 
            src="/images/pvalowContainer-1024x128.png" 
            alt="Garantias"
            className="max-w-2xl mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
