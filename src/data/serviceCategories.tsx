
import { ReactNode } from "react";

export interface ServiceCategory {
  title: string;
  subheading: string;
  description: string;
  features: string[];
  cta: string;
  icon: ReactNode;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Direct Tax Services",
    subheading: "Maximize Savings, Ensure Compliance",
    description: "Tax management can be challenging, but we make it simple, strategic, and stress-free. Our expert tax consultants in Kolkata ensure that your tax filings are accurate, timely, and optimized to reduce liabilities while maintaining full compliance with Indian tax laws.",
    features: [
      "✅ Income Tax Filing & Planning – Hassle-free tax filing with expert strategies to maximize savings.",
      "✅ TDS Filing & Compliance – Ensure correct tax deductions and avoid penalties with timely submissions.",
      "✅ Tax Audits – Comprehensive audits to maintain compliance and prevent legal issues.",
      "✅ Bookkeeping & Accounting – Maintain accurate financial records for tax and legal compliance.",
      "✅ Tax Notice Handling & Appeals – Professional assistance in responding to tax authorities.",
      "✅ Custom Direct Tax Solutions – Tailored advisory for businesses, professionals, and individuals."
    ],
    cta: "Stay tax-efficient and compliant—let us handle your tax needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Indirect Tax & GST Services",
    subheading: "Stay Ahead of Regulations",
    description: "Navigating GST compliance can be overwhelming, but we ensure a seamless and hassle-free experience. From GST registration to monthly filings, we help businesses stay compliant so they can focus on growth while we handle taxation.",
    features: [
      "✔ GST Registration & Filing – Fast and easy GST registration with monthly/quarterly return filing.",
      "✔ Bookkeeping & GST Compliance – Maintain organized financial records for smooth GST processing.",
      "✔ GST Appeals & Representation – Expert support in tax disputes, assessments, and audits.",
      "✔ GST Notice Handling – Assistance in responding effectively to tax department queries.",
      "✔ Professional Tax Registration & Filing – Ensure business compliance with professional tax laws.",
      "✔ Trade License & Compliance – Registration and renewal of business licenses made hassle-free.",
      "✔ Custom Indirect Tax Assistance – Tailored tax solutions for businesses based on specific needs."
    ],
    cta: "Stay compliant, avoid penalties, and let us handle your GST needs!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    title: "Corporate Tax & Compliance",
    subheading: "Build & Grow Your Business Legally",
    description: "Whether you're launching a startup or managing an established enterprise, our corporate tax solutions ensure your business remains legally compliant, financially efficient, and tax-optimized.",
    features: [
      "📌 Company Registration & Incorporation – MSME, LLP, Pvt Ltd, and more.",
      "📌 Company Bookkeeping & Maintenance – Keep accurate financial records for tax and legal compliance.",
      "📌 ROC Filings & Annual Compliance – File necessary documents with the Registrar of Companies.",
      "📌 Corporate Tax Planning – Develop tax-efficient strategies to enhance profitability.",
      "📌 Legal Compliance & Documentation – Ensure your business meets all legal and tax obligations."
    ],
    cta: "Start, manage, and grow your business with expert corporate tax assistance!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Loan & Financial Assistance",
    subheading: "Get the Right Funding at the Right Time",
    description: "We provide personalized loan solutions to help you achieve your financial goals—whether for business expansion, personal needs, or investments.",
    features: [
      "Business Loans – Get funds for expansion, working capital, and operations.",
      "Personal Loans – Quick approval and low-interest rates for your financial needs.",
      "Home Loans – Secure financing for your dream home.",
      "Car Loans – Drive home your dream car with the best loan options.",
      "Loan Against Property (LAP) – Unlock your property's value for financial assistance.",
      "MSME & Startup Loans – Special funding options for small businesses and entrepreneurs.",
      "Credit Score Improvement – Get expert advice on securing better loan deals.",
      "EMI Planning & Loan Restructuring – Reduce financial stress with optimized repayment plans."
    ],
    cta: "Need financial support? We help you secure the best loans with ease!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3-5 3V6a2 2 0 0 1 2-2Z"/>
      </svg>
    ),
  },
  {
    title: "Taxation & Legal Services",
    subheading: "Protect Your Business & Brand",
    description: "We help individuals and businesses navigate legal and taxation requirements seamlessly, ensuring compliance and protection for your brand and assets.",
    features: [
      "MSME Certificate Registration – Get recognized as a small business and access government benefits.",
      "Trademark Registration – Secure your brand identity with legal trademark protection.",
      "PAN/TAN Services – New applications, updates, and corrections.",
      "Tax Consultancy Services – Expert tax advice for businesses and individuals.",
      "Legal Drafting & Documentation – Contracts, agreements, and other legal documents for businesses."
    ],
    cta: "Ensure legal security and compliance with expert assistance!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 4H3"/>
        <path d="M18 8H6"/>
        <path d="M19 12H5"/>
        <path d="M16 16H8"/>
        <path d="M15 20H9"/>
      </svg>
    ),
  },
  {
    title: "Digital Signature Certificates (DSC)",
    subheading: "Secure & Reliable E-Signatures",
    description: "We provide fast and affordable DSC services to help businesses and individuals conduct legally valid and secure online transactions.",
    features: [
      "🔹 Class II & Class III DSC – Essential for company filings, tenders, and secure e-transactions.",
      "🔹 E-Tender & E-Procurement DSC – Mandatory for government procurement and online bidding.",
      "🔹 Fast Processing & Competitive Pricing – Get your DSC quickly at the lowest rates."
    ],
    cta: "Need a DSC? Get it done quickly and affordably with us!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" x2="22" y1="12" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: "Financial Advisory & Wealth Management",
    subheading: "Secure Your Future with Expert Guidance",
    description: "We partner with top financial institutions to offer expert financial planning and investment strategies, ensuring you make profitable, informed decisions for long-term wealth growth and security.",
    features: [
      "📌 Investment & Wealth Planning – Tailored strategies to grow, manage, and protect your wealth.",
      "📌 Life Insurance – Secure your family's future with comprehensive life insurance plans.",
      "📌 Health Insurance – Compare and choose the best policies from Niva Bupa, HDFC Ergo, Care Health, and more.",
      "📌 Motor Insurance – Get affordable car and bike insurance with hassle-free claims and maximum benefits.",
      "📌 Mutual Funds & Term Insurance – Smart investment options for financial security and long-term growth.",
      "📌 Exclusive Insurance Discounts – Save money while securing your financial future with the best insurance deals."
    ],
    cta: "Want expert financial advice? Let's plan your investments wisely!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];
