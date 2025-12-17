import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceLoop from "@/components/home/ServiceLoop";
import ClimateServices from "@/components/home/ClimateServices";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">{t.services.title}</h1>
              <p className="text-lg text-muted-foreground">
                {t.services.description}
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  {language === "en" ? "Get started with a free consultation" : "Start met een gratis consult"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ServiceLoop />
        <ClimateServices />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6 rounded-2xl border border-primary/20 bg-accent/50 p-12">
              <h2 className="text-3xl font-bold">
                {language === "en" ? "Ready to get started?" : "Klaar om te starten?"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === "en" 
                  ? "Book your free ESG consultation and discover how we can help your business thrive sustainably." 
                  : "Boek uw gratis ESG-consult en ontdek hoe wij uw bedrijf kunnen helpen duurzaam te groeien."}
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  {language === "en" ? "Book your free consultation" : "Boek uw gratis consult"}
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default Services;
