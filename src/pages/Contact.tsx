import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const serviceOptions = [
    "ESG Awareness & Capacity Building",
    "ESG Maturity Assessment & Benchmarking",
    "ESG Strategy Development",
    "ESG Program Implementation",
    "Climate Action Services",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Ready to simplify your ESG work?</h1>
              <p className="text-lg text-muted-foreground">
                Book your free ESG consultation and discover how we can help your business thrive sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions or ready to start? Reach out directly or use the contact form.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 rounded-lg bg-accent p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:th-consulting@outlook.be"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        th-consulting@outlook.be
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 rounded-lg bg-accent p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a
                        href="tel:+32495632266"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +32 495 632 266
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Service(s) of interest</Label>
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    We only use your information to follow up on your request.
                  </p>

                  <Button type="submit" size="lg" className="w-full">
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
