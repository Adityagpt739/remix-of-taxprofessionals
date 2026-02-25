
import React, { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
}

const ClientTestimonials = ({ showAllTestimonials = true, className = "", autoScroll = false }: { 
  showAllTestimonials?: boolean, 
  className?: string,
  autoScroll?: boolean 
}) => {
  const testimonials: Testimonial[] = [
    {
      name: "Rakesh Kr. Gupta",
      position: "Proprietor",
      company: "RK Gupta & Sons",
      quote: "Tax Savvy India have been managing my tax filings for years. Their expertise in GST compliance and corporate taxation has been invaluable to my business."
    },
    {
      name: "Vinit Jaiswal",
      position: "Director",
      company: "Speccom Technologies Pvt. Ltd.",
      quote: "The team at Tax Savvy India provides clear and efficient financial solutions. Their knowledge of business compliance and tax strategies is commendable."
    },
    {
      name: "Sourav Gunin",
      position: "Director",
      company: "BNG IMPEX Pvt. Ltd.",
      quote: "Handling tax matters can be stressful, but with Tax Savvy India, everything is seamless. Their timely guidance has helped my company stay compliant."
    },
    {
      name: "Uma Charan Shaw",
      position: "Proprietor",
      company: "Sattu Factory",
      quote: "From GST registration to tax filing, they have handled everything with professionalism. Highly recommended for business owners!"
    },
    {
      name: "Keya Gunin",
      position: "Partner",
      company: "BNG Fish Trader",
      quote: "Tax Savvy India have been a game-changer for our business. Their expert GST filing services and tax consultancy have helped us maintain compliance with ease. Highly recommended!"
    },
    {
      name: "Nuruddeher Shah",
      position: "Proprietor",
      company: "Sana Store",
      quote: "Managing taxes as a retailer can be challenging, but with Tax Savvy India, it's effortless. Their income tax filing, GST compliance, and business advisory have streamlined my financial operations."
    },
    {
      name: "Bishal Kumar Gupta",
      position: "Proprietor",
      company: "OM Air Express",
      quote: "The team at Tax Savvy India understands the needs of businesses like ours. From corporate tax planning to business compliance, they provide the best solutions with accuracy and efficiency."
    }
  ];

  // If not showing all testimonials, only show first 4
  const displayTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 4);
  
  // Set up autoplay plugin with 5 second interval
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };
  
  // Create embla carousel instance with autoplay if enabled
  const plugins = autoScroll ? [Autoplay(autoplayOptions)] : undefined;
  
  return (
    <div className={`py-10 ${className}`} id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-center mb-6 reveal-on-scroll">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
          Trusted by businesses across Kolkata and beyond for our professional tax consultancy and financial expertise
        </p>
        
        {/* Animated Stats */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
          {[
            { label: "Satisfied Clients", value: 3000, suffix: "+" },
            { label: "Average Refund", value: 30, suffix: " Lakhs+" },
            { label: "Years Experience", value: 15, suffix: "+" },
            { label: "5-Star Reviews", value: 500, suffix: "+" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 rounded-xl border border-border bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix} 
                className="text-3xl md:text-4xl font-bold text-primary mb-2" 
                duration={2000 + (index * 300)} // Stagger the animations slightly
              />
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Google Reviews Link */}
        <div className="text-center mb-16 reveal-on-scroll" style={{ transitionDelay: "0.4s" }}>
          <a 
            href="https://www.google.com/search?q=Tax+Professionals+Kolkata+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm border border-border hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
              <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
              <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
            </svg>
            <span className="font-medium">See our client reviews on Google</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        {/* Client Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={plugins}
          className="max-w-4xl mx-auto reveal-on-scroll"
          style={{ transitionDelay: "0.5s" }}
        >
          <CarouselContent>
            {displayTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <div className="p-1">
                  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-primary/10 h-full hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <div className="flex-grow mb-4">
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-3 text-primary/20 rotate-180" size={24} />
                          <p className="text-muted-foreground italic relative z-10">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inset-auto rounded-full" />
            <CarouselNext className="relative inset-auto rounded-full" />
          </div>
        </Carousel>

        {!showAllTestimonials && (
          <div className="text-center mt-10 reveal-on-scroll" style={{ transitionDelay: "0.5s" }}>
            <Link to="/about-us#testimonials">
              <Button variant="outline" className="rounded-full group">
                Read More Reviews
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientTestimonials;
