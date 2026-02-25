
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const goToTaxCalculator = () => {
    navigate('/tax-calculator');
  };
  
  return (
    <section id="home" className="min-h-screen pt-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-radial from-warm-100 to-transparent opacity-40 -z-10"></div>
      
      <div className="container px-6 md:px-8 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{
        animationDelay: '0.2s'
      }}>
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
            Tax relief made simple
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            WE ARE IN THE BUSINESS OF <span className="text-primary">HELPING YOURS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Meet our team of tax experts who make the complex simple and turn tax anxiety into peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact">
              <Button className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                Book a free consultation
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                Learn more
              </Button>
            </a>
          </div>
          
          <div className="pt-8 flex items-center gap-6">
            <div>
              <div className="font-medium">500+ clients helped</div>
              <div className="text-sm text-muted-foreground">with tax solutions that work</div>
            </div>
          </div>
        </div>
        
        <div className={`relative ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{
        animationDelay: '0.5s'
      }}>
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-warm-100 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-200/20 to-warm-500/20"></div>
              
              {/* Animated Indian Taxation Graphic - Improved for mobile */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 512 512" className="w-4/5 h-4/5 text-primary/10">
                    <g className="animate-spin" style={{
                    transformOrigin: 'center',
                    animationDuration: '30s'
                  }}>
                      <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
                    </g>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col items-center scale-90 sm:scale-100">
                  <div className="relative flex items-center justify-center mb-6">
                    <div className={`absolute ${isMobile ? '-left-4 -top-4' : '-left-8 -top-8'} animate-bounce`} style={{
                    animationDuration: '2.5s'
                  }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold">
                        GST
                      </div>
                    </div>
                    <div className={`absolute ${isMobile ? '-right-4 -top-4' : '-right-8 -top-8'} animate-bounce`} style={{
                    animationDuration: '3s',
                    animationDelay: '0.5s'
                  }}>
                      <div className="bg-primary/80 text-white p-2 rounded-lg font-bold">
                        ITR
                      </div>
                    </div>
                    <div className="h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">Save Taxes</div>
                    <div className="text-base sm:text-lg font-medium">Maximize Returns</div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                    <div className={`${hoveredItem === 'income' ? 'bg-green-600 text-white scale-110' : 'bg-primary/10'} p-2 sm:p-3 rounded-lg transition-all duration-300 cursor-pointer`} onMouseEnter={() => setHoveredItem('income')} onMouseLeave={() => setHoveredItem(null)} onClick={scrollToServices}>
                      <div className="text-xs font-medium text-center">Income Tax</div>
                    </div>
                    <div className={`${hoveredItem === 'corporate' ? 'bg-green-600 text-white scale-110' : 'bg-primary/10'} p-2 sm:p-3 rounded-lg transition-all duration-300 cursor-pointer`} onMouseEnter={() => setHoveredItem('corporate')} onMouseLeave={() => setHoveredItem(null)} onClick={scrollToServices}>
                      <div className="text-xs font-medium text-center">Corporate Tax</div>
                    </div>
                    <div className={`${hoveredItem === 'gst' ? 'bg-green-600 text-white scale-110' : 'bg-primary/10'} p-2 sm:p-3 rounded-lg transition-all duration-300 cursor-pointer`} onMouseEnter={() => setHoveredItem('gst')} onMouseLeave={() => setHoveredItem(null)} onClick={scrollToServices}>
                      <div className="text-xs font-medium text-center">G.S.T</div>
                    </div>
                    <div className={`${hoveredItem === 'compliance' ? 'bg-green-600 text-white scale-110' : 'bg-primary/10'} p-2 sm:p-3 rounded-lg transition-all duration-300 cursor-pointer`} onMouseEnter={() => setHoveredItem('compliance')} onMouseLeave={() => setHoveredItem(null)} onClick={scrollToServices}>
                      <div className="text-xs font-medium text-center">Compliance</div>
                    </div>
                  </div>
                  
                  {/* Added Tax Calculator Box */}
                  <div className="mt-6 w-full">
                    <div 
                      className={`${hoveredItem === 'calculator' ? 'bg-green-600 text-white scale-105' : 'bg-primary/10'} 
                                p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer 
                                flex items-center justify-center gap-2`} 
                      onMouseEnter={() => setHoveredItem('calculator')} 
                      onMouseLeave={() => setHoveredItem(null)} 
                      onClick={goToTaxCalculator}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator">
                        <rect width="16" height="20" x="4" y="2" rx="2" />
                        <line x1="8" x2="16" y1="6" y2="6" />
                        <line x1="16" x2="16" y1="14" y2="18" />
                        <path d="M16 10h.01" />
                        <path d="M12 10h.01" />
                        <path d="M8 10h.01" />
                        <path d="M12 14h.01" />
                        <path d="M8 14h.01" />
                        <path d="M12 18h.01" />
                        <path d="M8 18h.01" />
                      </svg>
                      <div className="text-sm font-medium text-center">Tax Calculator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
