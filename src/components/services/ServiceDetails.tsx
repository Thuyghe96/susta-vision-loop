import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionIntro from "@/components/home/SectionIntro";
import { useLanguage } from "@/i18n/LanguageContext";

const ServiceDetails = () => {
  const { t } = useLanguage();

  return (
    <div>
      {t.servicesPage.services.map((service, index) => (
        <section
          key={service.title}
          aria-labelledby={`service-detail-${index}`}
          className={`border-b border-hairline py-20 md:py-28 ${
            index % 2 === 0 ? "bg-background" : "bg-secondary/60"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                id={`service-detail-${index}`}
                title={service.title}
                description={service.introduction}
              />

              <div className="mt-12 grid gap-10 border-y border-hairline py-8 md:mt-14 md:grid-cols-[1.35fr_1fr] md:gap-16 md:py-10">
                <div>
                  <h3 className="font-display text-xl leading-snug text-foreground md:text-2xl">
                    {t.servicesPage.includedLabel}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl leading-snug text-foreground md:text-2xl">
                    {t.servicesPage.outcomesLabel}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
                  <span className="font-semibold text-foreground">{t.servicesPage.forLabel}: </span>
                  {service.forWhom}
                </p>
                <Button variant="outline" asChild className="shrink-0 rounded-md border-foreground/15 bg-transparent">
                  <Link to="/contact">
                    {t.servicesPage.discussCta}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceDetails;