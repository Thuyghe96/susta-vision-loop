import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const ServiceAreas = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="border-b border-hairline bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">{t.services.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl text-balance">
            {t.services.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t.services.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl divide-y divide-hairline border-y border-hairline">
          {t.services.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:bg-secondary/30"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-display text-base text-primary/60 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="grid gap-8 pb-10 pl-0 md:grid-cols-3 md:pl-16 animate-in fade-in duration-200">
                    <div>
                      <p className="eyebrow mb-3">{t.services.detailCovers}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.covers}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">{t.services.detailWhen}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.when}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">{t.services.detailResult}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.result}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
