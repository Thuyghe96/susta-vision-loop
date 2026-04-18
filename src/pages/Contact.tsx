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

  const serviceOptions = t.services.items.map((s) => s.title);

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
        toast({ title: t.contact.success, description: t.contact.successDesc });
        setFormData({ name: "", company: "", email: "", phone: "", services: [], message: "" });
      } else {
        toast({ title: t.contact.error, description: t.contact.errorDesc, variant: "destructive" });
      }
    } catch {
      toast({ title: t.contact.error, description: t.contact.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-hairline bg-gradient-soft py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <p className="eyebrow mb-6">{t.nav.contact}</p>
              <h1 className="font-display text-4xl leading-tight md:text-6xl text-balance">
                {t.contact.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                {t.contact.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.3fr]">
              <div className="space-y-10">
                <div>
                  <p className="eyebrow mb-4">{t.contact.directContact}</p>
                  <h2 className="font-display text-2xl md:text-3xl">
                    {language === "en" ? "Direct, personal, no gatekeeper." : "Rechtstreeks, persoonlijk, geen gatekeeper."}
                  </h2>
                </div>

                <div className="space-y-5">
                  <a href="mailto:thomas@sustavision.com" className="group flex items-start gap-4 border-t border-hairline pt-5 transition-colors hover:text-primary">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="eyebrow mb-1">{language === "en" ? "Email" : "E-mail"}</p>
                      <p className="font-display text-lg text-foreground group-hover:text-primary">thomas@sustavision.com</p>
                    </div>
                  </a>
                  <a href="tel:+32495632266" className="group flex items-start gap-4 border-t border-hairline pt-5 transition-colors hover:text-primary">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="eyebrow mb-1">{language === "en" ? "Phone" : "Telefoon"}</p>
                      <p className="font-display text-lg text-foreground group-hover:text-primary">+32 495 632 266</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-hairline bg-card p-8 shadow-soft md:p-10">
                <h2 className="font-display text-2xl mb-8">{t.contact.formTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.nameLabel} *</Label>
                      <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{language === "en" ? "Company *" : "Bedrijf *"}</Label>
                      <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.emailLabel} *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact.emailPlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{language === "en" ? "Phone (optional)" : "Telefoon (optioneel)"}</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>{language === "en" ? "Topics of interest" : "Onderwerpen van interesse"}</Label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {serviceOptions.map((service) => (
                        <div key={service} className="flex items-start gap-2">
                          <Checkbox id={service} checked={formData.services.includes(service)} onCheckedChange={() => handleServiceToggle(service)} className="mt-0.5" />
                          <label htmlFor={service} className="text-sm leading-snug cursor-pointer">{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.messageLabel} *</Label>
                    <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder} />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {language === "en"
                      ? "We only use your information to follow up on your request."
                      : "We gebruiken uw gegevens enkel om op uw aanvraag te reageren."}
                  </p>

                  <Button type="submit" size="lg" className="w-full rounded-md" disabled={isSubmitting}>
                    {isSubmitting ? t.contact.sending : t.contact.submit}
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
