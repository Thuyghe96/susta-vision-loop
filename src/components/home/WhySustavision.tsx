import { UserRound, Users, Factory } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionIntro from "@/components/home/SectionIntro";

const pointIcons = [UserRound, Users, Factory];

const WhySustavision = () => {
  const { t } = useLanguage();
  const { title, description, points } = t.whySustavision;

  return (
    <section
      aria-labelledby="why-sustavision-heading"
      className="border-b border-hairline bg-[hsl(var(--surface-mist))] py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro id="why-sustavision-heading" title={title} description={description} />

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {points.map((point, index) => {
            const Icon = pointIcons[index];
            return (
              <article
                key={point.heading}
                className="flex min-h-full flex-col rounded-md border border-hairline bg-background p-7 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-8"
              >
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
        </div>
      </div>
    </section>
  );
};

export default WhySustavision;
