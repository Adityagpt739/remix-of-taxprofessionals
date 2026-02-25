
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import LocationInfo from "@/components/LocationInfo";

const Contact = () => {
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
  
  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="container px-6 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
            Get In Touch
          </div>
          <h2 className="section-heading mt-4 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
            Ready to simplify your taxes?
          </h2>
          <p className="section-subheading reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
            Have questions or ready to get started? I'm here to help you navigate your tax journey with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          
          <div className="space-y-8 reveal-on-scroll" style={{ transitionDelay: "0.5s" }}>
            <ContactInfo />
            <LocationInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
