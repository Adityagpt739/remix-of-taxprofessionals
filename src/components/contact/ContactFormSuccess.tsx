
import { Button } from "@/components/ui/button";

interface ContactFormSuccessProps {
  onReset: () => void;
}

const ContactFormSuccess = ({ onReset }: ContactFormSuccessProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10 text-center">
      <div className="mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h3 className="text-2xl font-medium mb-4">Message Sent!</h3>
      <p className="text-muted-foreground mb-6">
        Thank you for reaching out! We've received your message and will get back to you as soon as possible.
      </p>
      <Button 
        onClick={onReset}
        className="rounded-full"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default ContactFormSuccess;
