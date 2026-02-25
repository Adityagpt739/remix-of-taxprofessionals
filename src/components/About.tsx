
import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import AboutHeader from "./about/AboutHeader";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use our custom hook for reveal animations
  useRevealAnimation();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 overflow-hidden bg-gradient-to-b from-warm-50 to-secondary/30">

      <div className="container px-6 md:px-10 mx-auto max-w-7xl">
        <AboutHeader
          title="Leading Tax Consultants in Kolkata"
          description="Providing expert tax consultancy, GST filing, income tax returns, and financial advisory services to individuals and businesses in Kolkata and across India since 2010." />

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
            <div className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <h2 className="text-2xl font-semibold tracking-tight mb-4">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-4">Tax Savvy India  is a trusted tax consulting firm with a reputation for accuracy, compliance, and financial expertise. Established in 2010, we specialize in:

                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary">✅</span> Income Tax & GST Filing
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary">✅</span> Corporate Tax & Business Advisory
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary">✅</span> Company Incorporation & Compliance
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary">✅</span> Financial Planning & Wealth Management
                  </li>
                </ul>
              </div>
              
              <Card className="overflow-hidden bg-card hover-lift transition-all duration-300 mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    Meet Our Expert
                  </h3>
                  <div className="flex gap-4">
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        Aditya Gupta – GST Practitioner, Financial Advisor, and Tax Consultant in Kolkata with 15+ years of experience in tax consulting and compliance.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary/80">
                        <Users className="h-4 w-4" />
                        <span>Over 3,000 satisfied clients</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="reveal-on-scroll hidden lg:block" style={{ transitionDelay: "0.5s" }}>
            <div className="relative">
              <img

                alt="Tax Savvy India Logo"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg" src="/lovable-uploads/0a70663a-4243-4d84-bff2-338f882ff430.png" />

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/10 max-w-xs animate-fade-in" style={{ animationDelay: "600ms" }}>
                <p className="text-sm text-muted-foreground italic">
                  "Providing expert tax and financial services to over 3,000 clients across Kolkata and India since 2010."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-14 text-center reveal-on-scroll" style={{ transitionDelay: "0.6s" }}>
          <Link to="/about-us">
            <Button
              variant="default"
              className="rounded-full px-8 py-6 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary to-primary/80 border border-primary/20 group transform">

              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default About;