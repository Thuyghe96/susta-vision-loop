import { useLanguage } from "@/i18n/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative border-b border-background/15 bg-foreground py-24 text-background md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-glow">
            {t.experience.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-background md:text-5xl text-balance">
            {t.experience.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-background/70 text-pretty">
            {t.experience.description}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-10 gap-y-10 md:grid-cols-2">
          {t.experience.sectors.map((sector, i) => (
            <div key={i} className="border-t border-background/15 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-primary-glow/80 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-background md:text-2xl">{sector.title}</h3>
              </div>
              <p className="mt-3 pl-9 text-sm leading-relaxed text-background/65">
                {sector.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-sm italic text-background/55 font-display">
          {t.experience.footnote}
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
