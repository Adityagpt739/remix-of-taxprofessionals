
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Shield } from "lucide-react";

const AboutDescription = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 reveal-on-scroll">
        <h2 className="text-3xl font-semibold tracking-tight">Tax Consultant in Kolkata</h2>
        <p className="text-lg text-muted-foreground">
          Tax Savvy India is a trusted tax consulting firm based in Kolkata with a reputation for accuracy, compliance, and financial expertise. Established in 2010, we specialize in:
        </p>
        <ul className="space-y-3 text-lg text-muted-foreground">
          <li className="transition-all duration-300 hover:translate-x-1">
            Income Tax & GST Filing
          </li>
          <li className="transition-all duration-300 hover:translate-x-1">
            Corporate Tax & Business Advisory
          </li>
          <li className="transition-all duration-300 hover:translate-x-1">
            Company Incorporation & Compliance
          </li>
          <li className="transition-all duration-300 hover:translate-x-1">
            Financial Planning & Wealth Management
          </li>
        </ul>
      </div>

      <Card className="overflow-hidden bg-card hover-lift transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Our Vision
          </h3>
          <p className="text-muted-foreground mb-4">
            To be the most trusted tax and financial advisory firm in Kolkata and West Bengal, empowering individuals and businesses to navigate complex financial landscapes with confidence and achieve their financial goals.
          </p>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mt-6">
            <Shield className="w-5 h-5 text-primary" />
            Our Commitment
          </h3>
          <p className="text-muted-foreground">
            We are committed to providing personalized, accurate, and timely financial solutions with the highest standards of integrity and professional excellence. Every client receives dedicated attention to ensure complete compliance and optimal financial outcomes.
          </p>
        </CardContent>
      </Card>

      <Card className="overflow-hidden bg-card hover-lift transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            GST Practitioner & Financial Advisor
          </h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="font-medium">Aditya Gupta – GST Practitioner, Financial Advisor, and Tax Consultant in Kolkata with 15+ years of experience in tax consulting and compliance.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="transition-all duration-300 hover:translate-x-1">Certified GST expert with specialized knowledge in complex filing requirements</li>
                <li className="transition-all duration-300 hover:translate-x-1">Authorized Digital Signature Provider with 7+ years of experience</li>
                <li className="transition-all duration-300 hover:translate-x-1">Investment advisor specializing in tax-efficient wealth management strategies</li>
                <li className="transition-all duration-300 hover:translate-x-1">Expert in income tax assessment, planning, and dispute resolution</li>
                <li className="transition-all duration-300 hover:translate-x-1">Helped over 3,000 clients across various industries optimize their tax structure</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutDescription;
