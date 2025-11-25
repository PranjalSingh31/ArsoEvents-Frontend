import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import engagementImg from "@assets/generated_images/engagement_party_elegant_setup.png";
import mandapImg from "@assets/generated_images/traditional_wedding_mandap_decoration.png";
import babyShowerImg from "@assets/generated_images/baby_shower_celebration_setup.png";
import anniversaryImg from "@assets/generated_images/anniversary_celebration_elegant_setup.png";
import weddingImg from "@assets/generated_images/outdoor_wedding_ceremony_setup.png";
import corporateImg from "@assets/generated_images/corporate_event_venue_setup.png";

const galleryImages = [
  { src: engagementImg, alt: "Elegant engagement party setup", title: "Engagement Celebration" },
  { src: mandapImg, alt: "Traditional wedding mandap", title: "Traditional Wedding" },
  { src: babyShowerImg, alt: "Baby shower celebration", title: "Baby Shower" },
  { src: anniversaryImg, alt: "Anniversary celebration", title: "Anniversary Party" },
  { src: weddingImg, alt: "Outdoor wedding ceremony", title: "Outdoor Wedding" },
  { src: corporateImg, alt: "Corporate event", title: "Corporate Event" }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-card" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            We Decor Your Dreams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of beautifully crafted events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer hover-elevate transition-all duration-300"
              onClick={() => setSelectedImage(image)}
              data-testid={`gallery-item-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                data-testid="button-close-lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
