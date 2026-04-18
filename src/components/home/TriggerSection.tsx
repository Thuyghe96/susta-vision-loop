import { useLanguage } from "@/i18n/LanguageContext";

const TriggerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">{t.triggers.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl text-balance">
            {t.triggers.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t.triggers.description}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-10 gap-y-10 md:grid-cols-2">
          {t.triggers.items.map((item, i) => (
            <article
              key={i}
              className="group relative border-t border-hairline pt-6 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-primary/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-foreground md:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 max-w-xl pl-9 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriggerSection;
