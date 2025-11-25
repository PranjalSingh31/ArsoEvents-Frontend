import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import client1 from "@assets/generated_images/female_client_testimonial_portrait.png";
import client2 from "@assets/generated_images/male_client_testimonial_portrait.png";
import client3 from "@assets/generated_images/couple_client_testimonial_portrait.png";

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Ceremony",
    date: "October 2024",
    image: client1,
    rating: 5,
    testimonial: "ARSO Events made our dream wedding come true! Every detail was perfect, from the beautiful decorations to the seamless coordination. Highly recommended!"
  },
  {
    name: "Rahul Patel",
    event: "Corporate Event",
    date: "September 2024",
    image: client2,
    rating: 5,
    testimonial: "Professional, creative, and reliable. They organized our company's annual celebration flawlessly. The team's attention to detail was impressive!"
  },
  {
    name: "Ananya & Karan",
    event: "Engagement Party",
    date: "November 2024",
    image: client3,
    rating: 5,
    testimonial: "The most beautiful engagement party we could have imagined! Team Saine understood our vision perfectly and brought it to life. Forever grateful!"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who trusted us with their special moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate transition-all duration-300 relative"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.testimonial}"
              </p>
              
              <p className="text-sm text-muted-foreground">{testimonial.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
