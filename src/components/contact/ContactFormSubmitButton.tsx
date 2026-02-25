
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ContactFormSubmitButtonProps {
  isSubmitting: boolean;
}

const ContactFormSubmitButton = ({ isSubmitting }: ContactFormSubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-full"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
};

export default ContactFormSubmitButton;
