import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart } from "lucide-react";
import coupleImg from "@assets/generated_images/happy_wedding_couple_portrait.png";

const benefits = [
  "Complete wedding planning from start to finish",
  "Vendor coordination and management",
  "Custom decoration and styling",
  "Timeline creation and day-of coordination",
  "Budget management and cost optimization",
  "Stress-free planning experience"
];

export default function WeddingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <img 
                src={coupleImg} 
                alt="Happy wedding couple"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Wedding Planning</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Are You Planning Your Wedding and Confused a Lot?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Plan your big day with us for the memories of a lifetime! Let it be anything, we are gonna be there to make it special and grand for you.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="rounded-full px-8"
              onClick={scrollToContact}
              data-testid="button-plan-wedding"
            >
              Plan Your Dream Day With Us
              <Heart className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
