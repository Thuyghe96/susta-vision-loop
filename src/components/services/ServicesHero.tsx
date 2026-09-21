import { useLanguage } from "@/i18n/LanguageContext";
import backgroundImage from "@/assets/experience-operations.jpg";

const ServicesHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-foreground py-20 text-background md:py-24">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        width={1920}
        height={864}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/85" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <span className="mb-4 block h-px w-8 bg-primary-glow" aria-hidden="true" />
          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-normal text-background text-balance md:text-4xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-background/80 text-pretty md:text-lg">
            {t.servicesPage.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;