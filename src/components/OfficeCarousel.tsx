
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const OfficeCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const officeImages = [
    {
      src: "/lovable-uploads/45d9b7a8-833f-43ae-a4a9-4fb94bb711d3.png",
      alt: "Tax Savvy India office space with orange wall and workstations"
    },
    {
      src: "/lovable-uploads/5a135ef6-da78-4187-a07c-dd2f4aa67828.png",
      alt: "Office entrance with decorative glass door"
    },
    {
      src: "/lovable-uploads/a7397481-efce-4cd0-aec5-b50ec1943db1.png",
      alt: "Office interior with cabinet storage and consultation area"
    },
    {
      src: "/lovable-uploads/c2655ff6-3276-4b70-9bac-2f31eb4a9424.png",
      alt: "Office workspace with computer workstation and staff"
    },
    {
      src: "/lovable-uploads/0234e089-49d5-4952-9c8c-b65f4b6f4c36.png",
      alt: "Office workspace with cabinets and staff working at desks"
    }
  ];

  // Plugin configuration for autoplay
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-12 bg-background">
      <div className="container px-6 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary reveal-on-scroll">
            Our Office
          </div>
          <h2 className="section-heading mt-4 reveal-on-scroll">
            Where We Create Financial Success
          </h2>
          <p className="section-subheading reveal-on-scroll">
            Take a tour of our professional environment where we provide expert tax and financial services
          </p>
        </div>
        
        <div className="reveal-on-scroll">
          <Carousel 
            opts={{ loop: true }} 
            plugins={[autoplayPlugin]} 
            setApi={setApi}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious 
                onClick={() => api?.scrollPrev()} 
                className="static translate-y-0 mx-2" 
              />
              <CarouselNext 
                onClick={() => api?.scrollNext()} 
                className="static translate-y-0 mx-2" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OfficeCarousel;
