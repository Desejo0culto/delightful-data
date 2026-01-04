const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button className="text-white text-xl">
          <i className="fas fa-bars"></i>
        </button>
        
        <img 
          src="/images/STORIES-FRACTAL-1024x396.png" 
          alt="NutralFit Logo" 
          className="h-8 md:h-10"
        />
        
        <a href="#check" className="text-white text-xl">
          <i className="fas fa-shopping-basket"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
