const ReviewsSection = () => {
  const ratings = [
    { stars: 5, percent: 96 },
    { stars: 4, percent: 79 },
    { stars: 3, percent: 16 },
    { stars: 2, percent: 6 },
    { stars: 1, percent: 3 },
  ];

  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Avaliações</h2>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-bold text-primary">4.7</span>
              <div>
                <div className="star-rating text-xl mb-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text-gray-400">+1.000 Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center gap-3 mb-3">
                <span className="text-sm text-gray-400 w-16">
                  {'☆'.repeat(rating.stars)}
                </span>
                <div className="progress-bar flex-1">
                  <div 
                    className="progress-fill"
                    style={{ width: `${rating.percent}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 w-12">{rating.percent}%</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Depoimentos com imagens */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <img 
            src="/images/DEP1-1.png.webp" 
            alt="Depoimento 1"
            className="rounded-xl"
          />
          <img 
            src="/images/DEP2-1.png.webp" 
            alt="Depoimento 2"
            className="rounded-xl"
          />
          <img 
            src="/images/DEP3-1.png.webp" 
            alt="Depoimento 3"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
