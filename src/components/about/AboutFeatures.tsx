
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => (
  <Card 
    className="bg-white p-6 rounded-xl shadow-sm border border-border reveal-on-scroll hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
    style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
  >
    <CardContent className="p-0">
      <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const AboutFeatures = () => {
  const features = [
    {
      title: "Income Tax & GST Services",
      description: "Comprehensive income tax returns, GST registration, monthly/quarterly filings, and compliance management for businesses and individuals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/>
          <path d="M22 6 12 13 9 11"/>
        </svg>
      ),
    },
    {
      title: "Digital Signature Certification",
      description: "Authorized Digital Signature Provider with 7+ years of experience, offering DSC for individuals, businesses, and government applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
    },
    {
      title: "Business Compliance Services",
      description: "End-to-end business compliance including company incorporation, ROC filings, and regulatory adherence for all business structures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.9 2.002H6.1c-2.3 0-3.4 1.8-3.4 4v7.3c0 2.2 1.1 4 3.4 4H8l3.3 3.4c.7.7 1.8.2 1.8-.7v-2.7h4.8c2.3 0 3.4-1.8 3.4-4v-7.3c0-2.2-1.1-4-3.4-4Z"/>
        </svg>
      ),
    },
    {
      title: "Investment & Financial Advisory",
      description: "Professional investment planning, wealth management, and financial advisory services tailored to your specific goals and risk tolerance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      title: "Corporate Tax Solutions",
      description: "Specialized corporate tax planning, compliance, and optimization strategies for businesses of all sizes in Kolkata and across India.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"/>
          <path d="M9 22v-4h6v4"/>
          <path d="M8 6h.01"/>
          <path d="M16 6h.01"/>
          <path d="M12 6h.01"/>
          <path d="M8 10h.01"/>
          <path d="M16 10h.01"/>
          <path d="M12 10h.01"/>
          <path d="M8 14h.01"/>
          <path d="M16 14h.01"/>
          <path d="M12 14h.01"/>
        </svg>
      ),
    },
    {
      title: "Tax Dispute Resolution",
      description: "Expert representation and resolution services for income tax notices, GST disputes, and other tax-related legal matters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 11 4 4 8-8"/>
          <path d="M4 8h4"/>
          <path d="M4 12h3"/>
          <path d="M4 16h2"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Feature 
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default AboutFeatures;
