import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionIntro from "@/components/home/SectionIntro";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesFinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="services-final-heading" className="bg-closing py-20 text-closing-foreground md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            id="services-final-heading"
            title={t.servicesPage.finalCta.title}
            description={t.servicesPage.finalCta.description}
            inverse
          />

          <div className="mt-10 flex flex-col items-start gap-5 md:mt-12">
            <Button size="lg" asChild className="rounded-md bg-closing-foreground text-closing hover:bg-closing-foreground/90">
              <Link to="/contact">{t.servicesPage.finalCta.cta}</Link>
            </Button>
            <a
              href="mailto:thomas@sustavision.com"
              className="text-sm text-closing-foreground/70 underline-offset-4 transition-colors hover:text-closing-foreground hover:underline"
            >
              {t.servicesPage.finalCta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFinalCTA;