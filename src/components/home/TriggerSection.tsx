import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import customerRequestsImage from "@/assets/support-customer-requests.jpg";
import regulatoryGuidanceImage from "@/assets/support-regulatory-guidance.jpg";
import practicalActionImage from "@/assets/support-practical-action.jpg";

const images = [customerRequestsImage, regulatoryGuidanceImage, practicalActionImage];

const TriggerSection = () => {
  const { t } = useLanguage();
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase text-primary">Sustavision</p>
          <h2 className="text-3xl font-bold md:text-5xl">{t.supportSection.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.supportSection.description}
          </p>
        </div>

        <div
          className="flex flex-col overflow-hidden rounded-md bg-[hsl(var(--teal-dark))] shadow-xl md:h-[34rem] md:flex-row"
          onMouseLeave={() => setActivePanel(null)}
        >
          {t.supportSection.panels.map((panel, index) => {
            const isActive = activePanel === index;

            return (
              <Button
                key={panel.title}
                type="button"
                variant="ghost"
                className={`group relative h-72 min-h-72 w-full flex-1 justify-start overflow-hidden rounded-none border-b border-primary-foreground/20 p-0 text-left text-primary-foreground transition-[flex,height] duration-500 ease-out hover:bg-transparent hover:text-primary-foreground focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-foreground md:h-full md:min-h-0 md:border-b-0 md:border-r md:last:border-r-0 ${
                  isActive ? "h-[27rem] md:flex-[1.35]" : ""
                }`}
                aria-expanded={isActive}
                onMouseEnter={() => setActivePanel(index)}
                onFocus={() => setActivePanel(index)}
                onClick={() => setActivePanel(isActive ? null : index)}
              >
                <img
                  src={images[index]}
                  alt={panel.imageAlt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[hsl(var(--teal-dark))] transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-70 group-hover:opacity-90 group-focus-visible:opacity-90"
                  }`}
                />
                <span className="relative z-10 flex h-full w-full flex-col justify-end whitespace-normal px-6 py-7 md:px-7 md:py-8 lg:px-9 lg:py-10">
                  <span className="mb-4 h-px w-10 bg-primary-foreground/70" />
                  <span className="block max-w-sm text-balance text-2xl font-semibold leading-tight md:text-3xl">
                    {panel.title}
                  </span>
                  <span
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
                      isActive
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0 group-hover:mt-5 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:mt-5 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-md text-sm font-normal leading-relaxed text-primary-foreground/90 lg:text-base">
                        {panel.description}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`mt-5 flex items-center gap-2 text-xs font-semibold uppercase transition-opacity duration-300 ${
                      isActive ? "opacity-70" : "opacity-90 group-hover:opacity-0 group-focus-visible:opacity-0"
                    }`}
                  >
                    {isActive ? (
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                    {isActive ? t.supportSection.closeLabel : t.supportSection.exploreLabel}
                  </span>
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TriggerSection;