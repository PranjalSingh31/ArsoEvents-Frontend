import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/elegant_wedding_reception_venue.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Turning Dreams into Reality</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          We Make Your
          <span className="block text-primary mt-2">EVENT</span>
          Stand Out From The Rest
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Because life should be celebrated! Let us style, design, and create an unforgettable experience for you and your guests.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-primary hover:bg-primary/90 border border-primary-border text-primary-foreground"
            onClick={() => scrollToSection('contact')}
            data-testid="button-plan-event"
          >
            Plan Your Event
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection('gallery')}
            data-testid="button-view-gallery"
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
