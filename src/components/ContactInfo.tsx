
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      label: "Email",
      value: "adityagupta.taxprofessionals@gmail.com",
      icon: <Mail width={24} height={24} />,
    },
    {
      label: "Phone",
      value: "+91 7003468546",
      icon: <Phone width={24} height={24} />,
    },
    {
      label: "Office",
      value: "Tax Savvy India, 31 Brabourne Road, 2nd Floor, Room No. E, Kolkata-700001",
      icon: <MapPin width={24} height={24} />,
    },
  ];

  return (
    <div className="bg-warm-100 rounded-2xl p-8 lg:p-10 border border-warm-200">
      <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
      <p className="text-muted-foreground mb-8">
        Feel free to reach out with any questions. I'm here to help make your tax experience smooth and stress-free.
      </p>
      
      <div className="space-y-6">
        {contactInfo.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10">
        <h4 className="font-medium mb-4">Office Hours</h4>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Monday-Saturday</div>
            <div>10:00 AM - 8:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
