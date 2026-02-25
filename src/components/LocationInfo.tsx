
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

const LocationInfo = () => {
  const googleMapsUrl = "https://maps.google.com/maps?q=Tax+Professionals+31+Brabourne+Road+Kolkata&t=&z=16&ie=UTF8&iwloc=&output=embed";
  
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10">
        <h3 className="text-2xl font-medium mb-4">Our Location</h3>
        <p className="text-muted-foreground mb-6">
          Visit our office for in-person consultations. We're conveniently located in the heart of Kolkata.
        </p>
        
        <div className="relative w-full h-[300px] mb-4 overflow-hidden rounded-xl">
          <iframe 
            src={googleMapsUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tax Savvy India Office Location"
          ></iframe>
        </div>
        
        <div className="flex items-start gap-3 mt-4">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            Tax Savvy India, 31 Brabourne Road, 2nd Floor, Room No. E, Kolkata-700001
          </p>
        </div>
        
        <a 
          href="https://maps.google.com/maps?q=Tax+Professionals+31+Brabourne+Road+Kolkata" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full mt-6 text-primary font-medium hover:underline"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10">
        <h3 className="text-2xl font-medium mb-4">Quick Question?</h3>
        <p className="text-muted-foreground mb-6">
          Have a quick tax question? Schedule a free 15-minute call.
        </p>
        <Button variant="outline" className="w-full rounded-full">
          Schedule a quick call
        </Button>
      </div>
    </>
  );
};

export default LocationInfo;
