
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      quote: "Sarah made tax season almost enjoyable! She took the time to explain everything and found deductions I never knew I qualified for. I've been recommending her to everyone I know.",
      name: "Michael Thompson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "After years of stressful tax seasons, finding Sarah was like a breath of fresh air. She's thorough, patient, and genuinely cares about getting you the best possible outcome.",
      name: "Jennifer Davis",
      role: "Healthcare Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "As someone who dreads taxes, Sarah completely changed my perspective. She simplified everything and saved me thousands. Her approach is so refreshingly human.",
      name: "David Wilson",
      role: "Freelance Designer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "Working with Sarah has been amazing. She handled my complicated tax situation with ease and expertise. I'm actually looking forward to next tax season!",
      name: "Emily Rodriguez",
      role: "International Consultant",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];
  
  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-warm-50">
      <div className="container px-6 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
            Client Stories
          </div>
          <h2 className="section-heading mt-4 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
            What people are saying
          </h2>
          <p className="section-subheading reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
            Don't just take my word for it—hear from our satisfied clients.
          </p>
        </div>
        
        <div className="text-center mb-16 reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
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
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-on-scroll" style={{ transitionDelay: "0.5s" }}>
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
      </div>
    </section>
  );
};

export default Testimonials;
