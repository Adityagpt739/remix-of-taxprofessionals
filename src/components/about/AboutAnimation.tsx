
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutAnimation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="order-1 lg:order-2 reveal-on-scroll" style={{ transitionDelay: "0.5s" }}>
      <div className="relative">
        <div className="rounded-3xl overflow-hidden">
          {/* Animated India-relevant graphic - Improved for mobile */}
          <div className="w-full h-full min-h-[300px] bg-gradient-to-r from-orange-100 via-white to-green-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                {/* Animated Ashoka Chakra (represents Indian flag) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 240 240" width="240" height="240" className="text-blue-800 scale-75 sm:scale-100">
                    <g className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '60s' }}>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <line 
                          key={i} 
                          x1="120" 
                          y1="120" 
                          x2="120" 
                          y2="40" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          transform={`rotate(${i * 15} 120 120)`} 
                        />
                      ))}
                      <circle cx="120" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                
                {/* Tax elements with improved positioning */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Adjusted positioning to prevent overlapping */}
                    <div className={`absolute ${isMobile ? 'top-0 left-0' : 'top-4 left-4'} animate-bounce`} style={{ animationDuration: '3s' }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold text-xs sm:text-sm">
                        GST
                      </div>
                    </div>
                    <div className={`absolute ${isMobile ? 'top-0 right-0' : 'top-4 right-4'} animate-bounce`} style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold text-xs sm:text-sm">
                        ITR
                      </div>
                    </div>
                    <div className={`absolute ${isMobile ? 'bottom-0 left-0' : 'bottom-4 left-4'} animate-bounce`} style={{ animationDuration: '3.2s', animationDelay: '0.6s' }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold text-xs sm:text-sm">
                        TDS
                      </div>
                    </div>
                    <div className={`absolute ${isMobile ? 'bottom-0 right-0' : 'bottom-4 right-4'} animate-bounce`} style={{ animationDuration: '2.7s', animationDelay: '0.9s' }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold text-xs sm:text-sm">
                        ROI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats card with improved positioning */}
        <div className="absolute -bottom-4 left-0 right-0 mx-auto max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-6 reveal-on-scroll" style={{ transitionDelay: "0.7s" }}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">3,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimation;
