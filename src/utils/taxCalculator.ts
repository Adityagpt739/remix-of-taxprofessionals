
import { IndividualTaxData, BusinessTaxData } from "@/components/TaxCalculator/TaxCalculatorComponent";

// Individual Tax Calculator
export const calculateIndividualTax = (data: IndividualTaxData) => {
  const { income, age, regime, section80C, section80D, hra, homeLoanInterest, educationLoanInterest, otherDeductions } = data;
  
  let taxableIncome = income;
  let breakdown: { label: string; value: number; description?: string }[] = [
    { label: "Gross Income", value: income }
  ];
  
  // Apply deductions if old regime
  if (regime === "old") {
    const totalDeductions = Math.min(section80C, 150000) + 
                          Math.min(section80D, 100000) + 
                          hra + 
                          homeLoanInterest + 
                          educationLoanInterest + 
                          otherDeductions;
    
    taxableIncome = Math.max(0, income - totalDeductions);
    
    breakdown.push(
      { label: "Section 80C", value: -Math.min(section80C, 150000), description: "Investments like PPF, EPF, LIC" },
      { label: "Section 80D", value: -Math.min(section80D, 100000), description: "Medical insurance premium" },
      { label: "HRA & Standard Deduction", value: -hra, description: "House rent allowance & standard deduction" },
      { label: "Home Loan Interest", value: -homeLoanInterest, description: "Interest paid on home loan" },
      { label: "Education Loan Interest", value: -educationLoanInterest, description: "Interest paid on education loan" },
      { label: "Other Deductions", value: -otherDeductions, description: "Other eligible deductions" },
      { label: "Taxable Income", value: taxableIncome }
    );
  } else {
    breakdown.push(
      { label: "Taxable Income", value: taxableIncome, description: "No deductions under new regime" }
    );
  }
  
  // Calculate tax based on regime
  let tax = 0;
  
  if (regime === "old") {
    // Old regime slabs
    let exemptionLimit = 250000; // Default for below 60
    
    if (age === "60to80") {
      exemptionLimit = 300000;
    } else if (age === "above80") {
      exemptionLimit = 500000;
    }
    
    if (taxableIncome <= exemptionLimit) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - exemptionLimit) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = (500000 - exemptionLimit) * 0.05 + (taxableIncome - 500000) * 0.2;
    } else {
      tax = (500000 - exemptionLimit) * 0.05 + 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
    }
    
    // Tax slab breakdown
    if (taxableIncome > exemptionLimit) {
      breakdown.push(
        { label: `Up to ₹${(exemptionLimit/100000).toFixed(1)} Lakhs`, value: 0, description: "No tax" }
      );
      
      if (taxableIncome > 500000) {
        breakdown.push(
          { label: `₹${(exemptionLimit/100000).toFixed(1)} Lakhs to ₹5 Lakhs`, value: (500000 - exemptionLimit) * 0.05, description: "5% tax rate" }
        );
      } else {
        breakdown.push(
          { label: `₹${(exemptionLimit/100000).toFixed(1)} Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - exemptionLimit) * 0.05, description: "5% tax rate" }
        );
      }
      
      if (taxableIncome > 1000000) {
        breakdown.push(
          { label: "₹5 Lakhs to ₹10 Lakhs", value: 500000 * 0.2, description: "20% tax rate" }
        );
        breakdown.push(
          { label: "Above ₹10 Lakhs", value: (taxableIncome - 1000000) * 0.3, description: "30% tax rate" }
        );
      } else if (taxableIncome > 500000) {
        breakdown.push(
          { label: `₹5 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 500000) * 0.2, description: "20% tax rate" }
        );
      }
    }
    
  } else {
    // New regime slabs
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 600000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 900000) {
      tax = 15000 + (taxableIncome - 600000) * 0.1;
    } else if (taxableIncome <= 1200000) {
      tax = 45000 + (taxableIncome - 900000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 90000 + (taxableIncome - 1200000) * 0.2;
    } else {
      tax = 150000 + (taxableIncome - 1500000) * 0.3;
    }
    
    // Tax slab breakdown
    if (taxableIncome > 300000) {
      breakdown.push(
        { label: "Up to ₹3 Lakhs", value: 0, description: "No tax" }
      );
      
      if (taxableIncome > 600000) {
        breakdown.push(
          { label: "₹3 Lakhs to ₹6 Lakhs", value: 15000, description: "5% tax rate" }
        );
      } else {
        breakdown.push(
          { label: `₹3 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 300000) * 0.05, description: "5% tax rate" }
        );
      }
      
      if (taxableIncome > 900000) {
        breakdown.push(
          { label: "₹6 Lakhs to ₹9 Lakhs", value: 30000, description: "10% tax rate" }
        );
      } else if (taxableIncome > 600000) {
        breakdown.push(
          { label: `₹6 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 600000) * 0.1, description: "10% tax rate" }
        );
      }
      
      if (taxableIncome > 1200000) {
        breakdown.push(
          { label: "₹9 Lakhs to ₹12 Lakhs", value: 45000, description: "15% tax rate" }
        );
      } else if (taxableIncome > 900000) {
        breakdown.push(
          { label: `₹9 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 900000) * 0.15, description: "15% tax rate" }
        );
      }
      
      if (taxableIncome > 1500000) {
        breakdown.push(
          { label: "₹12 Lakhs to ₹15 Lakhs", value: 60000, description: "20% tax rate" }
        );
        breakdown.push(
          { label: "Above ₹15 Lakhs", value: (taxableIncome - 1500000) * 0.3, description: "30% tax rate" }
        );
      } else if (taxableIncome > 1200000) {
        breakdown.push(
          { label: `₹12 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 1200000) * 0.2, description: "20% tax rate" }
        );
      }
    }
  }
  
  // Apply rebate under Section 87A if applicable (for old regime)
  if (regime === "old" && taxableIncome <= 500000 && tax > 0) {
    const rebate = Math.min(tax, 12500);
    tax -= rebate;
    breakdown.push(
      { label: "Section 87A Rebate", value: -rebate, description: "Rebate for income below ₹5 Lakhs" }
    );
  }
  
  // Apply 4% Health & Education Cess
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  
  breakdown.push(
    { label: "Health & Education Cess", value: cess, description: "4% on tax amount" },
    { label: "Total Tax Payable", value: totalTax }
  );
  
  return {
    taxPayable: totalTax,
    effectiveRate: income > 0 ? (totalTax / income) * 100 : 0,
    breakdown
  };
};

// Business Tax Calculator
export const calculateBusinessTax = (data: BusinessTaxData) => {
  const { businessType, turnover, profit, expenses } = data;
  
  let taxableIncome = Math.max(0, profit);
  let taxRate = 0;
  let surchargeRate = 0;
  let breakdown: { label: string; value: number; description?: string }[] = [
    { label: "Net Profit", value: profit }
  ];
  
  // Apply deductions
  const deductions = Math.min(expenses, profit);
  if (deductions > 0) {
    taxableIncome = Math.max(0, profit - deductions);
    breakdown.push(
      { label: "Business Deductions", value: -deductions, description: "Eligible business expenses" },
      { label: "Taxable Income", value: taxableIncome }
    );
  }
  
  // Determine tax rate based on business type
  if (businessType === "soleProprietorship") {
    // For sole proprietorship, use individual tax slabs
    if (taxableIncome <= 250000) {
      taxRate = 0;
    } else if (taxableIncome <= 500000) {
      taxRate = 0.05;
    } else if (taxableIncome <= 1000000) {
      taxRate = 0.2;
    } else {
      taxRate = 0.3;
    }
    
    // Individual tax slab breakdown
    if (taxableIncome > 250000) {
      breakdown.push(
        { label: "Up to ₹2.5 Lakhs", value: 0, description: "No tax" }
      );
      
      if (taxableIncome > 500000) {
        breakdown.push(
          { label: "₹2.5 Lakhs to ₹5 Lakhs", value: 12500, description: "5% tax rate" }
        );
      } else {
        breakdown.push(
          { label: `₹2.5 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 250000) * 0.05, description: "5% tax rate" }
        );
      }
      
      if (taxableIncome > 1000000) {
        breakdown.push(
          { label: "₹5 Lakhs to ₹10 Lakhs", value: 100000, description: "20% tax rate" }
        );
        breakdown.push(
          { label: "Above ₹10 Lakhs", value: (taxableIncome - 1000000) * 0.3, description: "30% tax rate" }
        );
      } else if (taxableIncome > 500000) {
        breakdown.push(
          { label: `₹5 Lakhs to ₹${(taxableIncome/100000).toFixed(1)} Lakhs`, value: (taxableIncome - 500000) * 0.2, description: "20% tax rate" }
        );
      }
    }
    
  } else if (businessType === "partnership") {
    // For partnership/LLP, flat 30% tax
    taxRate = 0.3;
    breakdown.push(
      { label: "Partnership/LLP Tax", value: taxableIncome * taxRate, description: "Flat 30% tax rate" }
    );
    
    // Add surcharge if applicable
    if (taxableIncome > 10000000) {
      surchargeRate = 0.12;
    } else if (taxableIncome > 1000000) {
      surchargeRate = 0.07;
    }
    
  } else if (businessType === "privateLimited") {
    // For private limited companies
    if (turnover <= 400000000) {
      taxRate = 0.25;
      breakdown.push(
        { label: "Company Tax (Turnover < ₹400 Cr)", value: taxableIncome * taxRate, description: "25% tax rate" }
      );
    } else {
      taxRate = 0.3;
      breakdown.push(
        { label: "Company Tax (Turnover > ₹400 Cr)", value: taxableIncome * taxRate, description: "30% tax rate" }
      );
    }
    
    // Add surcharge if applicable
    if (taxableIncome > 100000000) {
      surchargeRate = 0.12;
    } else if (taxableIncome > 10000000) {
      surchargeRate = 0.07;
    }
  }
  
  // Calculate base tax
  let baseTax = taxableIncome * taxRate;
  
  // Calculate surcharge if applicable
  let surcharge = 0;
  if (surchargeRate > 0) {
    surcharge = baseTax * surchargeRate;
    breakdown.push(
      { label: "Surcharge", value: surcharge, description: `${surchargeRate * 100}% of tax amount` }
    );
  }
  
  // Add 4% Health & Education Cess
  const cess = (baseTax + surcharge) * 0.04;
  const totalTax = baseTax + surcharge + cess;
  
  breakdown.push(
    { label: "Health & Education Cess", value: cess, description: "4% on tax amount" },
    { label: "Total Tax Payable", value: totalTax }
  );
  
  return {
    taxPayable: totalTax,
    effectiveRate: taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0,
    breakdown
  };
};
