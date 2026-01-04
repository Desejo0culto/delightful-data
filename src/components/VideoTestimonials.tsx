const VideoTestimonials = () => {
  const videos = [
    { thumbnail: '/images/Camada-8-1.jpg', title: 'Depoimento 1' },
    { thumbnail: '/images/Camada-5-1.jpg', title: 'Depoimento 2' },
    { thumbnail: '/images/Camada-6-1.jpg', title: 'Depoimento 3' },
    { thumbnail: '/images/Camada-7-1.jpg', title: 'Depoimento 4' },
  ];

  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="/images/ParagraphBackground.png" 
            alt="Decoração"
            className="h-16 mx-auto mb-4"
          />
          
          <img 
            src="/images/STORIES-FRACTAL-18-1024x517.png" 
            alt="Antes e Depois"
            className="max-w-2xl mx-auto w-full mb-6"
          />
          
          <h2 className="text-2xl md:text-3xl font-bold">
            Mais de <span className="text-primary">43 mil mulheres</span> aprovaram o Clareador NutralFit
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {videos.map((video, index) => (
            <div key={index} className="video-overlay rounded-xl overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full aspect-[9/16] object-cover"
              />
              <div className="play-btn">
                <i className="fas fa-play text-primary text-xl ml-1"></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#check" className="btn-primary inline-block mb-6">
            COMPRE AGORA
          </a>
          
          <img 
            src="/images/IMG_4772-1024x97.webp" 
            alt="Selos de segurança"
            className="max-w-lg mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
