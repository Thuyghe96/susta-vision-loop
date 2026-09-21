import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServiceLoop = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { t } = useLanguage();

  const services = t.serviceLoop.services;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t.serviceLoop.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.serviceLoop.description}
          </p>
        </div>

        {/* Circular Layout for Desktop */}
        <div className="hidden lg:block relative">
          <div className="relative w-full max-w-4xl mx-auto" style={{ height: "600px" }}>
            {/* Center content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2">
                    <RotateCcw className="h-5 w-5" />
                    {t.serviceLoop.reexecuteLoop}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t.serviceLoop.iterativeCycleTitle}</DialogTitle>
                    <DialogDescription className="space-y-4 pt-4">
                      <p>{t.serviceLoop.iterativeCycleDesc1}</p>
                      <p>{t.serviceLoop.iterativeCycleDesc2}</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/* Cards in circular positions */}
            {services.map((service, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <Card
                    className="w-64 transition-all duration-300 hover:shadow-lg hover:border-primary cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    tabIndex={0}
                    onFocus={() => setHoveredCard(index)}
                    onBlur={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-sm leading-tight flex-1">
                          {service.title}
                        </h3>
                      </div>

                      {hoveredCard === index ? (
                        <div className="space-y-3 animate-in fade-in duration-200">
                          <div>
                            <p className="text-xs font-semibold text-primary mb-1">{t.serviceLoop.objective}</p>
                            <p className="text-sm text-muted-foreground">{service.objective}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-primary mb-2">{t.serviceLoop.deliverables}</p>
                            <ul className="space-y-1">
                              {service.deliverables.map((item, i) => (
                                <li key={i} className="text-xs flex items-start gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Badge variant="secondary" className="text-xs">{t.serviceLoop.standalone}</Badge>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Connecting circle */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="500"
              height="500"
            >
              <circle
                cx="250"
                cy="250"
                r="250"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Grid Layout for Mobile/Tablet */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:border-primary cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              tabIndex={0}
              onFocus={() => setHoveredCard(index)}
              onBlur={() => setHoveredCard(null)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight flex-1">
                    {service.title}
                  </h3>
                </div>

                {hoveredCard === index ? (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">{t.serviceLoop.objective}</p>
                      <p className="text-sm text-muted-foreground">{service.objective}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">{t.serviceLoop.deliverables}</p>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-xs flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Badge variant="secondary" className="text-xs">{t.serviceLoop.standalone}</Badge>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:hidden text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="gap-2">
                <RotateCcw className="h-5 w-5" />
                {t.serviceLoop.reexecuteLoop}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.serviceLoop.iterativeCycleTitle}</DialogTitle>
                <DialogDescription className="space-y-4 pt-4">
                  <p>{t.serviceLoop.iterativeCycleDesc1}</p>
                  <p>{t.serviceLoop.iterativeCycleDesc2}</p>
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
