import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink } from
"@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 lg:px-10 py-4",
        scrolled ?
        "bg-white/95 backdrop-blur-md shadow-sm translate-y-0" :
        "bg-transparent translate-y-0"
      )}
      role="banner"
      aria-label="Site header">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 z-20 transition-all duration-300 hover:scale-105"
          aria-label="Tax Savvy India - Home">

          <img

            alt="Tax Savvy India Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
            width="48"
            height="48" src="/lovable-uploads/109ba0bc-f3bd-494a-99cc-dd31092661f8.png" />

          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-primary">Tax Savvy India</span>
          </div>
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex gap-1">
              <NavigationMenuItem>
                <Link to="/">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/90 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium tracking-wide",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}>
                    Home
                  </div>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about-us">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/90 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium tracking-wide",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}>
                    About Us
                  </div>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div
                  onClick={() => handleSectionNavigation("services")}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/90 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium tracking-wide cursor-pointer",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}>

                  Services
                </div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/tax-calculator">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/90 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium tracking-wide",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}>
                    Tax Calculator
                  </div>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div
                  onClick={() => handleSectionNavigation("contact")}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/90 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium tracking-wide cursor-pointer",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}>

                  Contact
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:block">
          <div
            onClick={() => handleSectionNavigation("contact")}
            className="cursor-pointer">

            <Button className="rounded-full px-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] font-medium tracking-wide">
              Free Consultation
            </Button>
          </div>
        </div>

        <button
          className="md:hidden text-foreground z-20 transition-transform duration-300 hover:scale-110 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu">

          {mobileMenuOpen ?
          <X className="h-6 w-6" aria-hidden="true" /> :

          <Menu className="h-6 w-6" aria-hidden="true" />
          }
        </button>

        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-sm z-10 md:hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ?
            "opacity-100 visible" :
            "opacity-0 invisible"
          )}
          aria-hidden={!mobileMenuOpen}>

          <nav className="flex flex-col p-6 pt-20 h-full overflow-y-auto" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className="text-foreground py-2 text-lg font-medium tracking-wide hover:text-primary transition-all duration-300 hover:translate-x-1"
                onClick={() => setMobileMenuOpen(false)}>

                Home
              </Link>
              <Link
                to="/about-us"
                className="text-foreground py-2 text-lg font-medium tracking-wide hover:text-primary transition-all duration-300 hover:translate-x-1"
                onClick={() => setMobileMenuOpen(false)}>

                About Us
              </Link>
              <div
                onClick={() => handleSectionNavigation("services")}
                className="text-foreground py-2 text-lg font-medium tracking-wide hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">

                Services
              </div>
              <Link
                to="/tax-calculator"
                className="text-foreground py-2 text-lg font-medium tracking-wide hover:text-primary transition-all duration-300 hover:translate-x-1"
                onClick={() => setMobileMenuOpen(false)}>

                Tax Calculator
              </Link>
              <div
                onClick={() => handleSectionNavigation("contact")}
                className="text-foreground py-2 text-lg font-medium tracking-wide hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">

                Contact
              </div>
              <div className="pt-4">
                <div onClick={() => handleSectionNavigation("contact")} className="cursor-pointer">
                  <Button className="rounded-full w-full transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>);

};

export default Header;