import HeroSection from "@/components/HeroSection";
import BrandPromise from "@/components/BrandPromise";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import WeddingSection from "@/components/WeddingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <HeroSection />
      <BrandPromise />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <WeddingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
