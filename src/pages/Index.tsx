import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ClientTestimonials from "@/components/about/ClientTestimonials";
import OfficeCarousel from "@/components/OfficeCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));
    
    const replaceTextInElements = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let node;
      while (node = walker.nextNode()) {
        if (node.textContent && node.textContent.includes('$')) {
          node.textContent = node.textContent.replace(/\$/g, '₹');
        }
      }
      
      document.querySelectorAll('.price-amount').forEach(el => {
        if (el.textContent) {
          el.textContent = el.textContent.replace(/\$/g, '₹');
        }
      });
    };
    
    replaceTextInElements();
    
    const mutationObserver = new MutationObserver(() => {
      replaceTextInElements();
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    const learnMoreButton = document.querySelector('.learn-more-button');
    if (learnMoreButton) {
      learnMoreButton.addEventListener('click', function () {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
    
    const bookConsultationButton = document.querySelector('.book-consultation-button');
    if (bookConsultationButton) {
      bookConsultationButton.addEventListener('click', function () {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
    
    document.querySelectorAll('.service-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      mutationObserver.disconnect();
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tax Savvy India",
    "description": "Premier tax consultancy in Kolkata offering GST filing, income tax returns, corporate tax solutions and financial advisory services with 15+ years of expertise.",
    "url": "https://taxprofessionals.in",
    "telephone": "+91-1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tax Street",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/taxprofessionals",
      "https://www.linkedin.com/company/tax-professionals"
    ],
    "priceRange": "₹₹",
    "founder": {
      "@type": "Person",
      "name": "Aditya Gupta",
      "jobTitle": "Tax Consultant & Financial Advisor"
    },
    "knowsAbout": ["Tax Filing in Kolkata", "GST Services", "Income Tax Returns", "Corporate Taxation", "Financial Advisory"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Income Tax Filing",
            "description": "Professional income tax return filing services in Kolkata"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Registration & Filing",
            "description": "Complete GST services including registration and monthly/quarterly filings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Tax Solutions",
            "description": "Comprehensive corporate taxation and compliance services for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Advisory",
            "description": "Expert financial planning and wealth management services"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Kolkata",
      "containedInPlace": {
        "@type": "State",
        "name": "West Bengal"
      }
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What tax services do you offer in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive tax services including income tax filing, GST registration and filing, TDS compliance, tax audit services, and corporate taxation solutions in Kolkata."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get GST registration in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax Savvy India can help you obtain GST registration quickly and efficiently. Contact us for a hassle-free GST registration process with all necessary documentation handled by our experts."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer financial planning services in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive financial planning and wealth management services including investment advisory, insurance planning, retirement planning, and more to help clients achieve their financial goals."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with company incorporation in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our corporate services include company incorporation (Pvt Ltd, LLP, MSME), ROC filings, annual compliance, and all legal documentation required for establishing and maintaining your business."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Expert Tax Consultant in Kolkata - Tax Savvy India</title>
        <meta name="description" content="Premier tax consultancy in Kolkata offering GST filing, income tax return services, corporate tax solutions & financial advisory. 15+ years of expertise, 3000+ satisfied clients." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <link rel="canonical" href="https://taxprofessionals.in/" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Services />
      <div className="bg-warm-50 py-8">
        <ClientTestimonials showAllTestimonials={true} autoScroll={true} className="pt-0" />
      </div>
      <OfficeCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
