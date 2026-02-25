
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { calculateIndividualTax } from "@/utils/taxCalculator";
import { IndividualTaxData } from "./TaxCalculatorComponent";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const formSchema = z.object({
  income: z.coerce.number().min(0, "Income must be a positive number"),
  age: z.enum(["below60", "60to80", "above80"], {
    required_error: "Please select your age group",
  }),
  regime: z.enum(["old", "new"], {
    required_error: "Please select a tax regime",
  }),
  section80C: z.coerce.number().min(0).max(150000, "Maximum deduction under 80C is ₹1.5 Lakhs"),
  section80D: z.coerce.number().min(0).max(100000, "Maximum deduction under 80D is ₹1 Lakh"),
  hra: z.coerce.number().min(0),
  homeLoanInterest: z.coerce.number().min(0),
  educationLoanInterest: z.coerce.number().min(0),
  otherDeductions: z.coerce.number().min(0),
});

interface IndividualTaxCalculatorProps {
  setTaxResults: React.Dispatch<React.SetStateAction<{
    taxPayable: number;
    effectiveRate: number;
    breakdown: { label: string; value: number; description?: string }[];
  } | null>>;
}

const IndividualTaxCalculator: React.FC<IndividualTaxCalculatorProps> = ({ setTaxResults }) => {
  const { toast } = useToast();
  const [showDeductions, setShowDeductions] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      income: 0,
      age: "below60",
      regime: "old",
      section80C: 0,
      section80D: 0,
      hra: 0,
      homeLoanInterest: 0,
      educationLoanInterest: 0,
      otherDeductions: 0,
    },
  });

  const watchRegime = form.watch("regime");

  React.useEffect(() => {
    setShowDeductions(watchRegime === "old");
  }, [watchRegime]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const taxData: IndividualTaxData = {
        income: values.income,
        age: values.age,
        regime: values.regime,
        section80C: values.section80C,
        section80D: values.section80D,
        hra: values.hra,
        homeLoanInterest: values.homeLoanInterest,
        educationLoanInterest: values.educationLoanInterest,
        otherDeductions: values.otherDeductions,
      };
      
      const results = calculateIndividualTax(taxData);
      setTaxResults(results);
      
      toast({
        title: "Tax calculation complete",
        description: "Your tax has been calculated successfully",
      });
    } catch (error) {
      console.error("Tax calculation error:", error);
      toast({
        variant: "destructive",
        title: "Error calculating tax",
        description: "There was a problem with your tax calculation. Please check your inputs.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Income (₹)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your annual income" {...field} />
              </FormControl>
              <FormDescription>
                Total annual income before deductions
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Age Group</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="below60" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Below 60 years
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="60to80" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      60 to 80 years (Senior Citizen)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="above80" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Above 80 years (Super Senior Citizen)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="regime"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tax Regime</FormLabel>
              <FormControl>
                <ToggleGroup 
                  type="single" 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  className="justify-start"
                >
                  <ToggleGroupItem value="old" aria-label="Old Regime">
                    Old Regime
                  </ToggleGroupItem>
                  <ToggleGroupItem value="new" aria-label="New Regime">
                    New Regime
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
              <FormDescription>
                {field.value === "old" 
                  ? "Old Regime allows deductions but has higher tax rates" 
                  : "New Regime has lower tax rates but no deductions"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {showDeductions && (
          <div className="space-y-6 border p-4 rounded-md bg-muted/30">
            <h3 className="font-medium">Deductions (Old Regime Only)</h3>
            
            <FormField
              control={form.control}
              name="section80C"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section 80C (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="PPF, ELSS, EPF, etc." {...field} />
                  </FormControl>
                  <FormDescription>
                    Max: ₹1,50,000 (Investments like PPF, EPF, LIC, ELSS)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="section80D"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section 80D - Medical Insurance (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Health insurance premium" {...field} />
                  </FormControl>
                  <FormDescription>
                    Max: ₹25,000 - ₹50,000 depending on age
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="hra"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HRA & Standard Deduction (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="HRA exemption amount" {...field} />
                  </FormControl>
                  <FormDescription>
                    Standard deduction: ₹50,000 for salaried individuals
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="homeLoanInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Loan Interest (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Interest paid on home loan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="educationLoanInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education Loan Interest (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Interest paid on education loan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="otherDeductions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Deductions (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Other eligible deductions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button type="submit" className="w-full">Calculate Tax</Button>
      </form>
    </Form>
  );
};

export default IndividualTaxCalculator;
