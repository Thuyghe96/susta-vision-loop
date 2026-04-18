import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-hairline bg-secondary/50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">{t.why.eyebrow}</p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl text-balance">
              {t.why.title}
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:col-span-8">
            {t.why.reasons.map((reason, i) => (
              <div key={i} className="border-t border-hairline pt-5">
                <h3 className="font-display text-lg text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
