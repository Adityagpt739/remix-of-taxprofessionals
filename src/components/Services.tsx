
import { useState } from "react";
import { serviceCategories } from "@/data/serviceCategories";
import ServiceCard from "@/components/services/ServiceCard";
import WhyChooseSection from "@/components/services/WhyChooseSection";

const Services = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
  };

  // Filter services based on selected category
  const filteredServices = () => {
    if (activeCategory === null) {
      return serviceCategories;
    } else if (activeCategory === 'tax filing') {
      return serviceCategories.filter((service) =>
      service.title.includes("Direct Tax Services") ||
      service.title.includes("Indirect Tax") ||
      service.title.includes("Corporate Tax")
      );
    } else if (activeCategory === 'gst') {
      return serviceCategories.filter((service) =>
      service.title.includes("Indirect Tax & GST")
      );
    } else if (activeCategory === 'business') {
      return serviceCategories.filter((service) =>
      service.title.includes("Loan & Financial") ||
      service.title.includes("Taxation & Legal") ||
      service.title.includes("Digital Signature") ||
      service.title.includes("Financial Advisory")
      );
    }
    return serviceCategories;
  };

  return (
    <section id="services" className="py-24 bg-warm-50/20">
      <div className="container px-6 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
            Empowering Your Financial Growth & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">At Tax Savvy India, we don't just provide services—we offer solutions that drive success. With over 15 years of experience, our team, led by Aditya Gupta, collaborates with Chartered Accountants, Legal Experts, and Financial Advisors to deliver tailored, efficient, and result-oriented solutions.

          </p>
        </div>
        
        {/* Service Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === null ?
            'bg-primary text-white' :
            'bg-warm-50 hover:bg-primary/10'}`
            }
            onClick={() => handleCategoryFilter(null)}>

            All Services
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === 'tax filing' ?
            'bg-primary text-white' :
            'bg-warm-50 hover:bg-primary/10'}`
            }
            onClick={() => handleCategoryFilter('tax filing')}>

            Tax Filing
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === 'gst' ?
            'bg-primary text-white' :
            'bg-warm-50 hover:bg-primary/10'}`
            }
            onClick={() => handleCategoryFilter('gst')}>

            GST Services
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === 'business' ?
            'bg-primary text-white' :
            'bg-warm-50 hover:bg-primary/10'}`
            }
            onClick={() => handleCategoryFilter('business')}>

            Business Advisory
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices().map((service, index) =>
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
            isOpen={openSections[index] || false}
            onToggle={() => toggleSection(index)} />

          )}
        </div>
        
        <WhyChooseSection />
      </div>
    </section>);

};

export default Services;