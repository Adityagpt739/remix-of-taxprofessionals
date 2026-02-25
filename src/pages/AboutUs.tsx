
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import AboutHeader from "@/components/about/AboutHeader";
import AboutDescription from "@/components/about/AboutDescription";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutAnimation from "@/components/about/AboutAnimation";
import ClientTestimonials from "@/components/about/ClientTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ArrowRight, Award, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  // Use our custom hook for reveal animations
  useRevealAnimation();

  return (
    <>
      <Helmet>
        <title>Leading Tax Consultant in Kolkata | GST & Income Tax Services</title>
        <meta 
          name="description" 
          content="Trusted tax and GST consultants in Kolkata since 2010. Specialists in income tax returns, GST filing, digital signature services, investment advisory, and financial planning with 15+ years of expertise serving 3000+ clients." 
        />
        <meta
          name="keywords"
          content="tax consultant in Kolkata, GST practitioner, income tax services Kolkata, digital signature provider, financial advisor Kolkata, investment planning, tax professionals, corporate tax solutions, company incorporation, business compliance services"
        />
      </Helmet>
      <Header />
      <main className="pt-20">
        <AboutHeader 
          title="Leading Tax Consultant in Kolkata" 
          description="Providing expert tax consultancy, GST filing, income tax returns, digital signature services, and financial advisory to individuals and businesses across Kolkata and West Bengal since 2010."
        />
        
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
                <AboutDescription />
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: "0.4s" }}>
                <AboutAnimation />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Vision and Commitment Section - Enhanced with animations */}
        <section className="py-16 bg-warm-50">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight reveal-on-scroll">
                Our Vision & Commitment
              </h2>
              <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 reveal-on-scroll" style={{ transitionDelay: "0.1s" }}></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300 reveal-on-scroll hover:-translate-y-1" style={{ transitionDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the most trusted tax and financial advisory firm in Kolkata and West Bengal, empowering individuals and businesses to navigate complex financial landscapes with confidence and achieve their financial goals.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300 reveal-on-scroll hover:-translate-y-1" style={{ transitionDelay: "0.3s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Commitment</h3>
                </div>
                <p className="text-muted-foreground">
                  We are committed to providing personalized, accurate, and timely financial solutions with the highest standards of integrity and professional excellence. Every client receives dedicated attention to ensure complete compliance and optimal financial outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white" id="our-expertise">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 reveal-on-scroll">
              Our Expertise in Tax & Financial Services
            </h2>
            <AboutFeatures />
          </div>
        </section>
        
        {/* Client Testimonials Section with ID for direct linking */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-background" id="testimonials">
          <ClientTestimonials />
        </section>
        
        <section className="py-16 bg-warm-50">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <div className="max-w-3xl mx-auto reveal-on-scroll">
              <img 
                src="/lovable-uploads/48b44e94-7acd-4bac-8af3-b1f6a56cd118.png"
                alt="Tax Savvy India Logo" 
                className="w-24 h-24 mx-auto mb-6"
              />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                We Are In A Business Of Helping Yours
              </h2>
              <p className="text-muted-foreground mb-8">
                Trust the experts with your tax compliance and financial planning needs. Our team is dedicated to providing personalized solutions that help your business thrive.
              </p>
              <div className="inline-block reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
                <a 
                  href="#contact" 
                  className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
