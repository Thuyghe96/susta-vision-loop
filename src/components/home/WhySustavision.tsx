import { UserRound, Users, Factory } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const pointIcons = [UserRound, Users, Factory];

const WhySustavision = () => {
  const { t } = useLanguage();
  const { title, description, processLine, points } = t.whySustavision;

  return (
    <section
      aria-labelledby="why-sustavision-heading"
      className="border-b border-hairline bg-[hsl(var(--surface-mist))] py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 block h-px w-6 bg-primary" aria-hidden="true" />
          <h2
            id="why-sustavision-heading"
            className="font-display text-3xl leading-tight text-foreground text-balance md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">{description}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {points.map((point, index) => {
            const Icon = pointIcons[index];
            return (
              <article key={point.heading} className="flex flex-col">
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl leading-snug text-foreground md:text-2xl">
                  {point.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {point.text}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {processLine}
        </p>
      </div>
    </section>
  );
};

export default WhySustavision;
