import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription successful!",
        description: `Your email ${email} has been sent to adityagupta.taxprofessionals@gmail.com`,
      });
      setEmail("");
    }
  };
  
  return (
    <footer className="bg-warm-50 pt-16 pb-8 overflow-hidden">
      <div className="container px-6 md:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/48b44e94-7acd-4bac-8af3-b1f6a56cd118.png" 
                alt="Tax Savvy India Logo" 
                className="w-10 h-10 rounded-md"
              />
              <span className="font-medium text-xl">Tax Savvy India</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming the tax experience with a human approach. Making taxes simple, stress-free, and maybe even a little enjoyable.
            </p>
            {/* Social media icons removed */}
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  View Our Services
                </a>
              </li>
              <li className="pt-3">
                <a 
                  href="https://www.google.com/search?q=Tax+Professionals+Kolkata+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Get tax tips and updates delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                required
              />
              <Button size="sm" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 14 0"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Tax Savvy India. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
