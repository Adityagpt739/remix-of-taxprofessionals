
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { calculateBusinessTax } from "@/utils/taxCalculator";
import { BusinessTaxData } from "./TaxCalculatorComponent";

const formSchema = z.object({
  businessType: z.enum(["soleProprietorship", "partnership", "privateLimited"], {
    required_error: "Please select your business type",
  }),
  turnover: z.coerce.number().min(0, "Turnover must be a positive number"),
  profit: z.coerce.number().min(0, "Profit must be a positive number"),
  expenses: z.coerce.number().min(0, "Expenses must be a positive number"),
});

interface BusinessTaxCalculatorProps {
  setTaxResults: React.Dispatch<React.SetStateAction<{
    taxPayable: number;
    effectiveRate: number;
    breakdown: { label: string; value: number; description?: string }[];
  } | null>>;
}

const BusinessTaxCalculator: React.FC<BusinessTaxCalculatorProps> = ({ setTaxResults }) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: "soleProprietorship",
      turnover: 0,
      profit: 0,
      expenses: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const taxData: BusinessTaxData = {
        businessType: values.businessType,
        turnover: values.turnover,
        profit: values.profit,
        expenses: values.expenses,
      };
      
      const results = calculateBusinessTax(taxData);
      setTaxResults(results);
      
      toast({
        title: "Tax calculation complete",
        description: "Your business tax has been calculated successfully",
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
          name="businessType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Business Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="soleProprietorship" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Sole Proprietorship
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="partnership" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Partnership/LLP
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="privateLimited" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Private Limited Company
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Tax rates vary based on business structure
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="turnover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover (₹)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your annual turnover" {...field} />
              </FormControl>
              <FormDescription>
                Total revenue or sales before expenses
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Net Profit (₹)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your net profit" {...field} />
              </FormControl>
              <FormDescription>
                Profit after deducting all expenses
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Eligible Business Expenses (₹)</FormLabel>
              <FormControl>
                <Input placeholder="Enter eligible expenses" {...field} />
              </FormControl>
              <FormDescription>
                Business expenses (rent, salaries, utilities, etc.)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Calculate Tax</Button>
      </form>
    </Form>
  );
};

export default BusinessTaxCalculator;
