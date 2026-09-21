import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/home/ServiceAreas";
import ServiceLoop from "@/components/home/ServiceLoop";
import FinalCTA from "@/components/home/FinalCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-hairline bg-gradient-soft py-24 md:py-36">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow mb-6">{t.services.eyebrow}</p>
              <h1 className="font-display text-4xl leading-[1.05] md:text-6xl text-balance">
                {t.servicesPage.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
                {t.servicesPage.description}
              </p>
              <Button size="lg" asChild className="mt-10 rounded-md">
                <Link to="/contact">
                  {t.servicesPage.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ServiceAreas />
        <ServiceLoop />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
