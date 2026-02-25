
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IndividualTaxCalculator from "./IndividualTaxCalculator";
import BusinessTaxCalculator from "./BusinessTaxCalculator";
import TaxResultsCard from "./TaxResultsCard";
import { Card, CardContent } from "@/components/ui/card";

export type IndividualTaxData = {
  income: number;
  age: "below60" | "60to80" | "above80";
  regime: "old" | "new";
  section80C: number;
  section80D: number;
  hra: number;
  homeLoanInterest: number;
  educationLoanInterest: number;
  otherDeductions: number;
};

export type BusinessTaxData = {
  businessType: "soleProprietorship" | "partnership" | "privateLimited";
  turnover: number;
  profit: number;
  expenses: number;
};

const TaxCalculatorComponent = () => {
  const [calculatorType, setCalculatorType] = useState<"individual" | "business">("individual");
  const [individualTaxResults, setIndividualTaxResults] = useState<{
    taxPayable: number;
    effectiveRate: number;
    breakdown: { label: string; value: number; description?: string }[];
  } | null>(null);
  
  const [businessTaxResults, setBusinessTaxResults] = useState<{
    taxPayable: number;
    effectiveRate: number;
    breakdown: { label: string; value: number; description?: string }[];
  } | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6">
        <CardContent className="p-0">
          <Tabs defaultValue="individual" onValueChange={(value) => setCalculatorType(value as "individual" | "business")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-0">
              <IndividualTaxCalculator 
                setTaxResults={setIndividualTaxResults}
              />
            </TabsContent>
            
            <TabsContent value="business" className="mt-0">
              <BusinessTaxCalculator 
                setTaxResults={setBusinessTaxResults}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <TaxResultsCard 
        results={calculatorType === "individual" ? individualTaxResults : businessTaxResults}
        type={calculatorType}
      />
    </div>
  );
};

export default TaxCalculatorComponent;
