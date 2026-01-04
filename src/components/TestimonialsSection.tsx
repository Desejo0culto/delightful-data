const TestimonialsSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="/images/STORIES-FRACTAL-1024x396.png" 
            alt="NutralFit Logo"
            className="h-12 mx-auto mb-4"
          />
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="star-rating text-xl">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="text-gray-300">4.6/5</span>
          </div>
          
          <p className="text-gray-400">+43 mil clientes satisfeitas</p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {[
            { name: 'Maria Silva', text: 'Resultados incríveis em apenas 2 semanas!' },
            { name: 'Ana Costa', text: 'Minhas axilas nunca ficaram tão claras.' },
            { name: 'Julia Santos', text: 'Recomendo para todas as minhas amigas!' },
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="min-w-[280px] bg-white/5 rounded-xl p-6 snap-center"
            >
              <div className="star-rating mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
