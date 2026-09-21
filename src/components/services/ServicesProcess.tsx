import { useLanguage } from "@/i18n/LanguageContext";
import SectionIntro from "@/components/home/SectionIntro";

const ServicesProcess = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="services-process-heading" className="border-b border-hairline bg-[hsl(var(--surface-mist))] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            id="services-process-heading"
            title={t.servicesPage.process.title}
            description={t.servicesPage.process.description}
          />

          <ol className="mt-12 grid gap-8 border-y border-hairline py-8 md:mt-14 md:grid-cols-3 md:gap-10 md:py-10">
            {t.servicesPage.process.steps.map((step, index) => (
              <li key={step.title} className="md:border-l md:border-hairline md:pl-8 md:first:border-l-0 md:first:pl-0">
                <span className="font-display text-sm text-primary/60 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl leading-snug text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;