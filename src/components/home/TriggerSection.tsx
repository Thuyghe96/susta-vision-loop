import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import customerRequestsImage from "@/assets/support-customer-requests.jpg";
import regulatoryGuidanceImage from "@/assets/support-regulatory-guidance.jpg";
import practicalActionImage from "@/assets/support-practical-action.jpg";
import SectionIntro from "@/components/home/SectionIntro";

const panelImages = [customerRequestsImage, regulatoryGuidanceImage, practicalActionImage];

const TriggerSection = () => {
  const { t } = useLanguage();
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <section className="border-b border-hairline bg-background py-20 md:py-28" aria-labelledby="support-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro id="support-heading" title={t.triggers.eyebrow} description={t.triggers.description} />

          <div
          className="mt-12 flex flex-col overflow-hidden rounded-md bg-foreground shadow-card md:mt-14 md:h-[35rem] md:flex-row"
          onMouseLeave={() => setActivePanel(null)}
          >
          {t.triggers.items.map((item, index) => {
            const isActive = activePanel === index;

            return (
              <Button
                key={item.title}
                type="button"
                variant="ghost"
                aria-expanded={isActive}
                aria-controls={`support-panel-${index}`}
                onMouseEnter={() => setActivePanel(index)}
                onFocus={() => setActivePanel(index)}
                onPointerDown={(event) => {
                  if (event.pointerType !== "mouse") {
                    setActivePanel(isActive ? null : index);
                  }
                }}
                className={`group relative h-72 min-h-72 w-full flex-1 justify-start overflow-hidden whitespace-normal rounded-none border-b border-background/20 p-0 text-left text-background transition-[flex,height] duration-500 ease-out hover:bg-transparent hover:text-background focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus-visible:ring-offset-0 md:h-full md:min-h-0 md:border-b-0 md:border-r md:last:border-r-0 ${
                  isActive ? "h-[28rem] md:flex-[1.35]" : ""
                }`}
              >
                <img
                  src={panelImages[index]}
                  alt={item.imageAlt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-foreground transition-opacity duration-500 motion-reduce:transition-none ${
                    isActive
                      ? "opacity-90"
                      : "opacity-70 group-hover:opacity-90 group-focus-visible:opacity-90"
                  }`}
                />

                <span className="relative z-10 flex h-full w-full flex-col justify-end px-6 py-7 md:px-7 md:py-9 lg:px-9 lg:py-10">
                  <span className="mb-4 h-px w-10 bg-primary" aria-hidden="true" />
                  <span className="block max-w-sm font-display text-2xl leading-tight text-balance md:text-3xl">
                    {item.title}
                  </span>

                  <span
                    id={`support-panel-${index}`}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0 group-hover:mt-5 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:mt-5 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-md text-sm font-normal leading-relaxed text-background/90 lg:text-base">
                        {item.description}
                      </span>
                    </span>
                  </span>

                  <span className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase text-background/80">
                    {isActive ? <X aria-hidden="true" /> : <Plus aria-hidden="true" />}
                    {isActive ? t.triggers.closeLabel : t.triggers.exploreLabel}
                  </span>
                </span>
              </Button>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriggerSection;
