
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }).max(15),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

declare global {
  interface Window {
    Email: {
      send: (config: {
        Host: string;
        Username: string;
        Password: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
  }
}
