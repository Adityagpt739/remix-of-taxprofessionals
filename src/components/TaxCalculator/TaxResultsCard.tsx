
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

interface TaxResultsCardProps {
  results: {
    taxPayable: number;
    effectiveRate: number;
    breakdown: { label: string; value: number; description?: string }[];
  } | null;
  type: "individual" | "business";
}

const TaxResultsCard: React.FC<TaxResultsCardProps> = ({ results, type }) => {
  if (!results) {
    return (
      <Card className="flex items-center justify-center h-full">
        <CardContent className="text-center p-6">
          <CardDescription className="text-lg">
            Enter your details and click "Calculate Tax" to see your tax liability.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    } else {
      return `₹${amount.toFixed(2)}`;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tax Calculation Results</CardTitle>
        <CardDescription>
          {type === "individual" ? "Individual Income Tax" : "Business Tax"} for FY 2024-25
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Total Tax Payable</p>
              <h3 className="text-2xl font-bold text-primary">
                {formatCurrency(results.taxPayable)}
              </h3>
            </div>
            <div className="bg-muted p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Effective Tax Rate</p>
              <h3 className="text-2xl font-bold">
                {results.effectiveRate.toFixed(2)}%
              </h3>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium mb-2">Tax Breakdown</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.breakdown.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.label}
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.value < 0 
                        ? `- ${formatCurrency(Math.abs(item.value))}` 
                        : formatCurrency(item.value)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 border rounded-md bg-accent/10">
            <p className="text-sm">
              <strong>Note:</strong> This is an estimated calculation based on the 
              information provided. For precise tax planning, please consult with our 
              tax professionals.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxResultsCard;
