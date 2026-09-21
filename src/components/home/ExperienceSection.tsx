import { FlaskConical, Package, Anchor, Factory } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import bgImage from "@/assets/experience-operations.jpg";

const sectorIcons = [FlaskConical, Package, Anchor, Factory];

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-b border-hairline bg-foreground py-16 text-background md:py-20"
      aria-labelledby="experience-heading"
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={864}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/80" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="experience-heading"
            className="font-display text-3xl leading-tight text-background text-balance md:text-4xl"
          >
            {t.experience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/80 text-pretty md:text-lg">
            {t.experience.description}
          </p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {t.experience.sectors.map((sector, i) => {
            const Icon = sectorIcons[i % sectorIcons.length];
            return (
              <li
                key={sector.title}
                className="flex items-center gap-2.5 rounded-full border border-background/25 bg-background/10 px-4 py-2 text-sm text-background backdrop-blur-sm md:px-5"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary-glow" strokeWidth={1.5} aria-hidden="true" />
                <span>{sector.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
