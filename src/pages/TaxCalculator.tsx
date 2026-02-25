
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxCalculatorComponent from "@/components/TaxCalculator/TaxCalculatorComponent";
import { Helmet } from "react-helmet";

const TaxCalculator = () => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Income Tax Calculator India",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Free online income tax calculator for FY 2023-24 & 2024-25. Compare old vs. new tax regimes and plan your taxes efficiently.",
    "datePublished": "2023-11-15",
    "creator": {
      "@type": "Organization",
      "name": "Tax Savvy India"
    }
  };

  // FAQ Schema for rich results
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate my income tax in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can calculate your income tax by entering your income details, deductions, and choosing between the old and new tax regime in our calculator. The system will automatically compute your tax liability based on the latest tax slabs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between old and new tax regimes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The old tax regime allows various deductions and exemptions but has higher tax rates. The new tax regime has lower tax rates but doesn't allow most deductions and exemptions. Our calculator helps you compare both to determine which is more beneficial for you."
      }
    },
    {
      "@type": "Question",
      "name": "What tax deductions are available under Section 80C?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Section 80C allows deductions up to ₹1.5 lakh for investments in PPF, ELSS, life insurance premiums, home loan principal repayment, NSC, tax-saving fixed deposits, and more. These deductions are available under the old tax regime only."
      }
    }]

  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Income Tax Calculator India – Calculate Your Tax Online | Tax Savvy India</title>
        <meta
          name="description"
          content="Instantly calculate your income tax for FY 2023-24 & 2024-25. Compare old vs. new tax regimes, maximize savings, and ensure tax compliance with our online calculator." />

        <meta
          name="keywords"
          content="income tax calculator india, tax calculator online, income tax estimator, tax planning tool, compare tax regimes, old vs new tax regime" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <link rel="canonical" href="https://taxprofessionals.in/tax-calculator" />
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-4 py-12 pt-24 md:pt-32">
        <div className="flex flex-col items-center mb-8">
          <img

            alt="Tax Savvy India Logo"
            className="w-16 h-16 mb-4" src="/lovable-uploads/f07c73ce-27b5-4838-953a-99ded8914c05.png" />

          <h1 className="text-3xl font-bold text-center mb-6">
            Income Tax Calculator India
          </h1>
        </div>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Use our simple tax calculator to estimate your income tax liability for FY 2023-24 & 2024-25. Compare between old and new tax regimes to find which option saves you more money.
        </p>
        <TaxCalculatorComponent />
        
        {/* SEO-focused content section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How Our Income Tax Calculator Works</h2>
          <p className="mb-6 text-muted-foreground">
            Our comprehensive Income Tax Calculator is designed to help individuals and businesses in India estimate their tax liability accurately. It takes into account the latest tax slabs, deductions, exemptions, and allows you to compare between the old and new tax regimes.
          </p>
          
          <h3 className="text-xl font-medium mb-3">Key Features of Our Tax Calculator:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Accurate tax calculation based on latest tax slabs and regulations</li>
            <li>Side-by-side comparison of old and new tax regimes</li>
            <li>Detailed breakdown of tax components including base tax, surcharge, and cess</li>
            <li>Support for various deductions under Section 80C, 80D, and more</li>
            <li>User-friendly interface with instant results</li>
          </ul>
          
          <h3 className="text-xl font-medium mb-3">Why Calculate Your Income Tax?</h3>
          <p className="mb-6 text-muted-foreground">
            Understanding your tax liability in advance helps with better financial planning and avoids last-minute surprises. By using our tax calculator, you can:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Plan your investments strategically to save taxes</li>
            <li>Decide between old and new tax regimes based on your financial situation</li>
            <li>Prepare for advance tax payments accurately</li>
            <li>Identify potential tax-saving opportunities</li>
          </ul>
          
          <h3 className="text-xl font-medium mb-3">Need Help With Tax Planning?</h3>
          <p className="text-muted-foreground">
            If you need personalized guidance on tax planning, investment strategies, or assistance with tax filing, our expert tax consultants are here to help. <a href="#contact" className="text-primary hover:underline">Contact us</a> for a free consultation.
          </p>
        </div>
      </div>
      <Footer />
    </div>);

};

export default TaxCalculator;