import { Card } from "@/components/ui/card";
import { MapPin, Users, Award } from "lucide-react";
import teamImg from "@assets/generated_images/event_planning_team_working.png";

const highlights = [
  {
    icon: MapPin,
    label: "Based in Navi Mumbai"
  },
  {
    icon: Users,
    label: "Expert Team"
  },
  {
    icon: Award,
    label: "Premium Service"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ARSO Events
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg">
                <span className="font-semibold text-foreground">ARSO EVENTS</span> is a Navi Mumbai based event management firm with a team of absolute artists from the town.
              </p>
              
              <p>
                Here at ARSO Events, every celebration is designed and coordinated by our super skilled team and created exclusively for the client's personal taste and style.
              </p>
              
              <p>
                We guide you through the myriad of details and decisions that need to be made and make the planning as fun as the celebration. Our goal is to understand your vision, develop it and execute it flawlessly.
              </p>
              
              <p>
                We aim to deliver impactfulness of celebration & profoundness of experience to make an unforgettable memory for the client. <span className="font-semibold text-foreground">Team Saine</span> ensures the most memorable and spectacular events tailored to our client's desires.
              </p>
              
              <p className="text-foreground font-medium">
                Above all, we provide an unforgettable personal experience for you and your guests and the true essence of celebration.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2" data-testid={`highlight-${index}`}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden">
              <img 
                src={teamImg} 
                alt="ARSO Events Team"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
