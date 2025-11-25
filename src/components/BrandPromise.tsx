import { Card } from "@/components/ui/card";
import { Palette, Lightbulb, Sparkles } from "lucide-react";

const promises = [
  {
    icon: Palette,
    title: "WE Style",
    description: "Curating aesthetics that reflect your unique personality and vision for the perfect celebration."
  },
  {
    icon: Lightbulb,
    title: "WE Design",
    description: "Creating innovative concepts and layouts that transform spaces into memorable experiences."
  },
  {
    icon: Sparkles,
    title: "WE Create",
    description: "Bringing your dreams to life with meticulous attention to detail and creative excellence."
  }
];

export default function BrandPromise() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <Card 
                key={index} 
                className="p-8 text-center hover-elevate transition-all duration-300"
                data-testid={`card-promise-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
