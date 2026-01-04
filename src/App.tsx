import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoTestimonials from './components/VideoTestimonials';
import TikTokSection from './components/TikTokSection';
import ReviewsSection from './components/ReviewsSection';
import IngredientsSection from './components/IngredientsSection';
import ProductsSection from './components/ProductsSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <VideoTestimonials />
      <TikTokSection />
      <ReviewsSection />
      <IngredientsSection />
      <ProductsSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
