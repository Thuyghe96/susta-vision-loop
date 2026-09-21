import { FlaskConical, Package, Anchor, Factory } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import bgImage from "@/assets/experience-operations.jpg";
import SectionIntro from "@/components/home/SectionIntro";

const sectorIcons = [FlaskConical, Package, Anchor, Factory];

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-b border-hairline bg-foreground py-20 text-background md:py-28"
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
      <div className="absolute inset-0 bg-foreground/85" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            id="experience-heading"
            title={t.experience.title}
            description={t.experience.description}
            inverse
          />

        <ul className="mt-10 flex flex-wrap items-center justify-start gap-2.5 md:mt-12">
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
      </div>
    </section>
  );
};

export default ExperienceSection;
