import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle2 } from "lucide-react";

const ServiceLoop = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      number: 1,
      title: "ESG Awareness & Capacity Building",
      shortDesc: "Workshops, tailored upskilling, and awareness campaigns.",
      objective: "Equip teams with ESG knowledge and internal momentum.",
      deliverables: [
        "Workshop plan",
        "Tailored upskilling",
        "Comms kit",
        "Gamified exercises",
      ],
      bestFor: "Companies new to ESG or needing internal alignment.",
    },
    {
      number: 2,
      title: "ESG Maturity Assessment & Benchmarking",
      shortDesc: "Internal maturity check, supplier benchmarking, sector trend analysis.",
      objective: "Understand your current ESG level and competitive position.",
      deliverables: [
        "Maturity report",
        "Supplier comparison",
        "Stakeholder-ready presentation",
      ],
      includes: "Quick VSME/CSRD readiness review.",
    },
    {
      number: 3,
      title: "ESG Strategy Development",
      shortDesc: "Materiality assessment, strategic framework, roadmap.",
      objective: "Set clear ESG priorities & ambitions.",
      deliverables: [
        "Materiality map",
        "Strategy document",
        "Time-bound roadmap",
      ],
      includes: "Double materiality & IRO (impact, risk, opportunity) analysis.",
    },
    {
      number: 4,
      title: "ESG Program Implementation",
      shortDesc: "Action plans, KPIs, program management support.",
      objective: "Turn strategy into measurable results with minimal burden.",
      deliverables: [
        "Detailed action plan",
        "KPI dashboards",
        "Team training",
      ],
      includes: "Progress reviews & recalibration.",
    },
    {
      number: 5,
      title: "ESG Reporting & Disclosure",
      shortDesc: "Reporting blueprint, CSRD alignment, integration of existing initiatives, and certification support.",
      objective: "Build clear, compliant ESG reporting that integrates seamlessly with your existing work.",
      deliverables: [
        "Reporting blueprint",
        "Full structure and scope definition",
        "Integration of previous ESG work & active initiatives",
        "CSRD alignment",
        "Standards mapping (CSRD, GRI, etc.)",
        "Certification/assurance preparation recommendations",
      ],
      includes: "Scope options: Light, medium, or comprehensive — depending on your needs. Methodology: Desk research + alignment with your existing ESG outputs.",
      bestFor: "SMEs preparing for CSRD, needing a structured ESG report, or wanting to unify scattered sustainability work into a coherent disclosure.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer — The 5-Step Loop</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our work follows a practical, iterative loop: you learn → assess → strategize → implement → report → repeat. 
            Use standalone modules or the full loop.
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
                    Reexecute loop
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>The ESG Iterative Cycle</DialogTitle>
                    <DialogDescription className="space-y-4 pt-4">
                      <p>
                        ESG is not a one-time project—it's an ongoing journey. Our 4-step loop is designed 
                        to be repeated quarterly or annually, ensuring continuous improvement and adaptation 
                        to evolving standards.
                      </p>
                      <p>
                        Each cycle builds on the previous one, deepening your ESG maturity and impact. 
                        Whether you're starting fresh or advancing an existing program, this iterative 
                        approach keeps you aligned with best practices and stakeholder expectations.
                      </p>
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
                          {service.number}
                        </div>
                        <h3 className="font-semibold text-sm leading-tight flex-1">
                          {service.title}
                        </h3>
                      </div>

                      {hoveredCard === index ? (
                        <div className="space-y-3 animate-in fade-in duration-200">
                          <div>
                            <p className="text-xs font-semibold text-primary mb-1">Objective:</p>
                            <p className="text-sm text-muted-foreground">{service.objective}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-primary mb-2">Deliverables:</p>
                            <ul className="space-y-1">
                              {service.deliverables.map((item, i) => (
                                <li key={i} className="text-xs flex items-start gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {service.includes && (
                            <div>
                              <p className="text-xs font-semibold text-primary mb-1">Includes:</p>
                              <p className="text-xs text-muted-foreground">{service.includes}</p>
                            </div>
                          )}
                          {service.bestFor && (
                            <div>
                              <p className="text-xs font-semibold text-primary mb-1">Best for:</p>
                              <p className="text-xs text-muted-foreground">{service.bestFor}</p>
                            </div>
                          )}
                          <Badge variant="secondary" className="text-xs">Use as standalone</Badge>
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
                    {service.number}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight flex-1">
                    {service.title}
                  </h3>
                </div>

                {hoveredCard === index ? (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Objective:</p>
                      <p className="text-sm text-muted-foreground">{service.objective}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">Deliverables:</p>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-xs flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.includes && (
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">Includes:</p>
                        <p className="text-xs text-muted-foreground">{service.includes}</p>
                      </div>
                    )}
                    {service.bestFor && (
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">Best for:</p>
                        <p className="text-xs text-muted-foreground">{service.bestFor}</p>
                      </div>
                    )}
                    <Badge variant="secondary" className="text-xs">Use as standalone</Badge>
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
                Reexecute loop
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>The ESG Iterative Cycle</DialogTitle>
                <DialogDescription className="space-y-4 pt-4">
                  <p>
                    ESG is not a one-time project—it's an ongoing journey. Our 4-step loop is designed 
                    to be repeated quarterly or annually, ensuring continuous improvement and adaptation 
                    to evolving standards.
                  </p>
                  <p>
                    Each cycle builds on the previous one, deepening your ESG maturity and impact. 
                    Whether you're starting fresh or advancing an existing program, this iterative 
                    approach keeps you aligned with best practices and stakeholder expectations.
                  </p>
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
