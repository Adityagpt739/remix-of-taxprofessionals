
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "./contact/ContactFormSchema";
import { NameEmailFields, PhoneSubjectFields, MessageField } from "./contact/ContactFormFields";
import ContactFormSubmitButton from "./contact/ContactFormSubmitButton";
import ContactFormSuccess from "./contact/ContactFormSuccess";
import { sendContactForm } from "./contact/ContactFormService";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Inquiry",
      message: "",
    },
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    const success = await sendContactForm(data);
    
    if (success) {
      setFormSubmitted(true);
      form.reset();
    }
    
    setIsSubmitting(false);
  };
  
  const handleSendAnother = () => {
    setFormSubmitted(false);
  };
  
  if (formSubmitted) {
    return <ContactFormSuccess onReset={handleSendAnother} />;
  }
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10 reveal-on-scroll" style={{ transitionDelay: "0.4s" }}>
      <h3 className="text-2xl font-medium mb-6">Send me a message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <NameEmailFields form={form} />
          <PhoneSubjectFields form={form} />
          <MessageField form={form} />
          <ContactFormSubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
