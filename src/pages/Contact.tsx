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
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const serviceOptions = language === "en" 
    ? [
        "ESG Awareness & Capacity Building",
        "ESG Maturity Assessment & Benchmarking",
        "ESG Strategy Development",
        "ESG Program Implementation",
        "ESG Reporting & Disclosure",
        "Climate Action Services",
      ]
    : [
        "ESG Bewustwording & Capaciteitsopbouw",
        "ESG Maturiteitsbeoordeling & Benchmarking",
        "ESG Strategieontwikkeling",
        "ESG Programma-implementatie",
        "ESG Rapportering & Openbaarmaking",
        "Klimaatactiediensten",
      ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append("access_key", "1449be17-31ec-4c89-aceb-f567d0cacb38");
    formPayload.append("name", formData.name);
    formPayload.append("company", formData.company);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("services", formData.services.join(", "));
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t.contact.success,
          description: t.contact.successDesc,
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          services: [],
          message: "",
        });
      } else {
        toast({
          title: t.contact.error,
          description: t.contact.errorDesc,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t.contact.error,
        description: t.contact.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                {language === "en" ? "Ready to simplify your ESG work?" : "Klaar om uw ESG-werk te vereenvoudigen?"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.contact.description}
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
                  <h2 className="text-3xl font-bold mb-6">
                    {language === "en" ? "Get in touch" : "Neem contact op"}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {language === "en" 
                      ? "Have questions or ready to start? Reach out directly or use the contact form." 
                      : "Vragen of klaar om te starten? Neem rechtstreeks contact op of gebruik het formulier."}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 rounded-lg bg-accent p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {language === "en" ? "Email" : "E-mail"}
                      </h3>
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
                      <h3 className="font-semibold mb-2">
                        {language === "en" ? "Phone" : "Telefoon"}
                      </h3>
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
                    <Label htmlFor="name">
                      {language === "en" ? "Name *" : "Naam *"}
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      {language === "en" ? "Company *" : "Bedrijf *"}
                    </Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === "en" ? "Email *" : "E-mail *"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === "en" ? "Phone (optional)" : "Telefoon (optioneel)"}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>
                      {language === "en" ? "Service(s) of interest" : "Dienst(en) van interesse"}
                    </Label>
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
                    <Label htmlFor="message">
                      {language === "en" ? "Message *" : "Bericht *"}
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {language === "en" 
                      ? "We only use your information to follow up on your request." 
                      : "We gebruiken uw gegevens enkel om op uw aanvraag te reageren."}
                  </p>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting 
                      ? (language === "en" ? "Sending..." : "Verzenden...") 
                      : (language === "en" ? "Send message" : "Verstuur bericht")}
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
