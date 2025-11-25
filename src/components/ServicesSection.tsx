import { Card } from "@/components/ui/card";
import { Heart, Briefcase, PartyPopper } from "lucide-react";
import weddingImg from "@assets/generated_images/outdoor_wedding_ceremony_setup.png";
import corporateImg from "@assets/generated_images/corporate_event_venue_setup.png";
import celebrationImg from "@assets/generated_images/birthday_celebration_party_setup.png";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Plan your big day with us for the memories of a lifetime! From intimate ceremonies to grand celebrations, we handle every detail.",
    image: weddingImg,
    highlight: true
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event management for conferences, product launches, and corporate celebrations that leave lasting impressions.",
    image: corporateImg,
    highlight: false
  },
  {
    icon: PartyPopper,
    title: "Special Celebrations",
    description: "Birthdays, anniversaries, engagements - whatever the occasion, we make it special and grand just for you.",
    image: celebrationImg,
    highlight: false
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-card" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From weddings to corporate events, we bring expertise and creativity to every celebration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden group hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
