
import { ContactFormValues } from "./ContactFormSchema";
import { toast } from "@/hooks/use-toast";

export const sendContactForm = async (data: ContactFormValues): Promise<boolean> => {
  try {
    await window.Email.send({
      Host: "smtp.gmail.com",
      Username: "adityagupta.taxprofessionals@gmail.com",
      Password: "sabkamalikek",
      To: "adityagupta.taxprofessionals@gmail.com",
      From: data.email,
      Subject: `New Contact Form Submission: ${data.subject}`,
      Body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    toast({
      title: "Message sent!",
      description: "Thank you! Your message has been sent successfully.",
    });
    
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    toast({
      title: "Error sending message",
      description: "Please try again or contact us directly via email.",
      variant: "destructive",
    });
    
    return false;
  }
};
