import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, RotateCw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServiceLoop = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section className="border-b border-border bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">{t.process.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl text-balance">
            {t.process.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t.process.description}
          </p>
        </div>

        {/* Desktop circular layout — minimal */}
        <div className="mx-auto mt-20 hidden max-w-5xl lg:block">
          <div className="relative mx-auto" style={{ height: "640px", width: "100%" }}>
            {/* Faint guide circle */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="560"
              height="560"
              aria-hidden
            >
              <circle cx="280" cy="280" r="280" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="2 6" opacity="0.25" />
            </svg>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2 rounded-full border-foreground/15 bg-background hover:bg-foreground/[0.03]">
                    <RotateCw className="h-4 w-4" />
                    {t.process.cycleCta}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">{t.process.cycleTitle}</DialogTitle>
                    <DialogDescription className="space-y-4 pt-4 text-base leading-relaxed">
                      <p>{t.process.cycleDesc1}</p>
                      <p>{t.process.cycleDesc2}</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/* Steps */}
            {steps.map((step, i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const radius = 290;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isOpen = hovered === i;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`w-72 cursor-default rounded-md border bg-background p-5 text-left shadow-soft transition-all duration-200 ${
                      isOpen ? "border-primary/40 shadow-card" : "border-hairline"
                    }`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    tabIndex={0}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                  >
                    <div className="mb-3 flex items-baseline gap-3">
                      <span className="font-display text-sm text-primary/60 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display text-base leading-tight text-foreground">{step.title}</h3>
                    </div>
                    {isOpen ? (
                      <div className="space-y-3 animate-in fade-in duration-200">
                        <div>
                          <p className="eyebrow mb-1 text-[0.6rem]">{t.process.objective}</p>
                          <p className="text-xs leading-relaxed text-muted-foreground">{step.objective}</p>
                        </div>
                        <div>
                          <p className="eyebrow mb-1 text-[0.6rem]">{t.process.deliverables}</p>
                          <ul className="space-y-1">
                            {step.deliverables.map((d, di) => (
                              <li key={di} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs leading-relaxed text-muted-foreground">{step.shortDesc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="mt-12 grid gap-4 lg:hidden md:grid-cols-2">
          {steps.map((step, i) => {
            const isOpen = hovered === i;
            return (
              <div
                key={i}
                className={`rounded-md border bg-background p-6 shadow-soft transition-all duration-200 ${
                  isOpen ? "border-primary/40 shadow-card" : "border-hairline"
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(isOpen ? null : i)}
                tabIndex={0}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-display text-sm text-primary/60 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg leading-tight text-foreground">{step.title}</h3>
                </div>
                {isOpen ? (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div>
                      <p className="eyebrow mb-1 text-[0.6rem]">{t.process.objective}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{step.objective}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-1 text-[0.6rem]">{t.process.deliverables}</p>
                      <ul className="space-y-1">
                        {step.deliverables.map((d, di) => (
                          <li key={di} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.shortDesc}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="gap-2 rounded-full border-foreground/15">
                <RotateCw className="h-4 w-4" />
                {t.process.cycleCta}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{t.process.cycleTitle}</DialogTitle>
                <DialogDescription className="space-y-4 pt-4 text-base leading-relaxed">
                  <p>{t.process.cycleDesc1}</p>
                  <p>{t.process.cycleDesc2}</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ServiceLoop;
