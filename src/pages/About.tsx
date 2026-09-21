import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Building2, TrendingUp, Target } from "lucide-react";
import thomasPhoto from "@/assets/thomas-huyghe.jfif";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  
  const timeline = [
    {
      icon: GraduationCap,
      title: language === "en" ? "MSc Supply Chain Management" : "MSc Supply Chain Management",
      organization: language === "en" ? "University of Antwerp" : "Universiteit Antwerpen",
      description: language === "en" ? "Foundation in logistics and operations" : "Basis in logistiek en operations",
    },
    {
      icon: GraduationCap,
      title: language === "en" ? "MSc Global Business & Sustainability" : "MSc Global Business & Sustainability",
      organization: "Rotterdam School of Management",
      description: language === "en" ? "Specialized in sustainable business practices" : "Specialisatie in duurzame bedrijfspraktijken",
    },
    {
      icon: Building2,
      title: language === "en" ? "ESG Consultant" : "ESG Consultant",
      organization: "BDO",
      description: language === "en" 
        ? "Co-founded sustainability department; scaled team from 2 to 13 people in 2.5 years" 
        : "Mede-oprichter duurzaamheidsafdeling; team gegroeid van 2 naar 13 mensen in 2,5 jaar",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "ESG Specialist" : "ESG Specialist",
      organization: "Manuchar",
      description: language === "en" 
        ? "Carbon footprinting, responsible sourcing programs, decarbonisation roadmap; contributed to Ecovadis Platinum achievement" 
        : "Carbon footprinting, responsible sourcing programma's, decarbonisatie-roadmap; bijgedragen aan het behalen van Ecovadis Platinum",
    },
    {
      icon: Target,
      title: language === "en" ? "Founder" : "Oprichter",
      organization: "Sustavision",
      description: language === "en" 
        ? "Helping SMEs implement pragmatic ESG solutions" 
        : "KMO's helpen met pragmatische ESG-oplossingen",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img 
                  src={thomasPhoto} 
                  alt="Thomas Huyghe" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg flex-shrink-0"
                />
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold">{t.about.title}</h1>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>{t.about.bio1}</p>
                    <p>{t.about.bio2}</p>
                    <p>{t.about.bio3}</p>
                  </div>
                  <Button size="lg" asChild>
                    <Link to="/contact">{t.about.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {language === "en" ? "Experience Timeline" : "Ervaring Tijdlijn"}
              </h2>
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex-shrink-0">
                        <div className="rounded-lg bg-accent p-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.organization}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                {language === "en" ? "Let's work together" : "Laten we samenwerken"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === "en" 
                  ? "Ready to make ESG practical for your business? Let's discuss how I can help." 
                  : "Klaar om ESG praktisch te maken voor uw bedrijf? Laten we bespreken hoe ik kan helpen."}
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  {language === "en" ? "Get in touch" : "Neem contact op"}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
