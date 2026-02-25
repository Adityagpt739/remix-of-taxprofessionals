
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Shield, Lightbulb, Award, Clock, Users, FileCheck, HeartHandshake, Clock3 } from "lucide-react";

const WhyChooseSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-16 bg-warm-100 rounded-2xl p-8 lg:p-12 reveal-on-scroll" style={{ transitionDelay: "0.6s" }}>
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-medium relative inline-block">
          Why Choose Tax Savvy India?
          <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"></div>
        </h3>
        <p className="text-muted-foreground mt-4">Experience excellence in tax services</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Experience Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 0 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(0)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary group-hover:text-white">
            <Clock3 className={`h-7 w-7 text-primary transition-all duration-300 ${activeCard === 0 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2 transition-transform duration-300">15+ Years Experience</h4>
          <p className="text-muted-foreground text-sm">Trusted by businesses and individuals across industries with our proven expertise.</p>
        </div>
        
        {/* Expert Team Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 1 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Users className={`h-7 w-7 text-primary transition-all duration-300 ${activeCard === 1 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
          <p className="text-muted-foreground text-sm">Chartered Accountants, Tax Experts, and Legal Advisors working together for you.</p>
        </div>
        
        {/* Comprehensive Solutions Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 2 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileCheck className={`h-7 w-7 text-primary transition-all duration-300 ${activeCard === 2 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2">Comprehensive Solutions</h4>
          <p className="text-muted-foreground text-sm">From taxation to loans, insurance, and compliance services all under one roof.</p>
        </div>
        
        {/* Personalized Service Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 3 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <HeartHandshake className={`h-7 w-7 text-primary transition-all duration-300 ${activeCard === 3 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2">Personalized Service</h4>
          <p className="text-muted-foreground text-sm">Tailored strategies for your specific financial goals with transparent pricing.</p>
        </div>
        
        {/* 24/7 Support Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 4 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Clock className={`h-7 w-7 text-primary transition-all duration-300 ${activeCard === 4 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
          <p className="text-muted-foreground text-sm">Always here to assist you with your queries and provide timely consultations.</p>
        </div>
        
        {/* Tax Savings Card */}
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:translate-y-[-5px] ${activeCard === 5 ? 'ring-2 ring-primary/40' : ''}`}
          onMouseEnter={() => setActiveCard(5)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <TrendingUp className={`h-7 w-7 text-green-600 transition-all duration-300 ${activeCard === 5 ? 'animate-pulse' : ''}`} />
          </div>
          <h4 className="text-lg font-semibold mb-2">Maximize Savings</h4>
          <p className="text-muted-foreground text-sm">Our strategies help you save more while maintaining full compliance with regulations.</p>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-4 mb-1">
            <div className="w-3/4 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-xs text-right text-muted-foreground">
            75% potential tax savings
          </div>
        </div>
      </div>
      
      {/* Animated central graphic */}
      <div className="max-w-xs mx-auto mb-10 relative">
        <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-green-100 rounded-full p-8 opacity-30"></div>
          
          <div className="flex flex-col items-center">
            <div className="relative mb-6 mt-2">
              <div className="absolute -top-2 -left-2 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="absolute top-0 right-0 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-5 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.3s' }}>
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center border-4 border-primary animate-pulse" style={{ animationDuration: '4s' }}>
                <Award className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-primary">Expert Tax Solutions</h4>
              <p className="text-sm text-muted-foreground">Maximize Savings & Compliance</p>
            </div>
          </div>
        </div>
        
        {/* Orbiting elements with animations */}
        <div className="absolute -top-4 -left-4 animate-spin" style={{ animationDuration: '15s' }}>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="h-4 w-4 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 -right-4 animate-spin" style={{ animationDuration: '20s', animationDelay: '2s' }}>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="h-4 w-4 text-primary" />
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-spin" style={{ animationDuration: '18s', animationDelay: '1s' }}>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          onClick={scrollToContact} 
          className="rounded-full px-6 py-6 h-auto text-base font-medium group transition-all duration-300 hover:shadow-lg"
        >
          Schedule a free consultation
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          >
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseSection;
