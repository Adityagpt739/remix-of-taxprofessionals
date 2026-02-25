
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ServiceCategory } from "@/data/serviceCategories";

interface ServiceCardProps {
  service: ServiceCategory;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isOpen, onToggle }) => {
  return (
    <Card className="border border-border shadow-sm transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="w-14 h-14 rounded-full bg-warm-100 flex items-center justify-center text-primary mb-4">
          {service.icon}
        </div>
        <CardTitle className="text-xl font-medium">
          {service.title}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-primary mt-1">
          {service.subheading}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-6">
          {service.description}
        </p>
        
        <Collapsible 
          open={isOpen} 
          onOpenChange={onToggle}
          className="border border-border rounded-lg p-4 mt-4 hover:border-primary/30 transition-colors duration-200"
        >
          <CollapsibleTrigger className="flex w-full justify-between items-center text-primary font-medium">
            View Services
            {isOpen ? 
              <ChevronUp size={18} /> : 
              <ChevronDown size={18} />
            }
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-4 border-t border-border mt-6">
        <p className="font-medium text-sm text-muted-foreground mb-4">
          {service.cta}
        </p>
        <a 
          href="#contact" 
          className="text-primary font-medium inline-flex items-center hover:underline"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
