import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, TrendingDown, AlertTriangle, Leaf } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ClimateServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { language } = useLanguage();

  const services = language === "en" ? [
    {
      icon: Cloud,
      title: "Carbon Footprinting",
      shortDesc: "Comprehensive Scopes 1–3 emissions measurement",
      deliverables: [
        "Baseline emissions report",
        "Hotspot analysis by scope",
        "Data collection framework",
        "Year-over-year tracking",
      ],
    },
    {
      icon: TrendingDown,
      title: "Reduction Planning",
      shortDesc: "SBTi-aligned pathways and action plans",
      deliverables: [
        "Science-based targets roadmap",
        "Reduction initiative portfolio",
        "Investment prioritization",
        "Implementation timeline",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Climate Risk Assessment",
      shortDesc: "Physical and transition risk evaluation",
      deliverables: [
        "Risk materiality matrix",
        "Scenario analysis (TCFD-aligned)",
        "Adaptation strategies",
        "Stakeholder communication brief",
      ],
    },
    {
      icon: Leaf,
      title: "Offsetting & Neutrality",
      shortDesc: "Carbon credit strategy and verification support",
      deliverables: [
        "Offset project evaluation",
        "Carbon neutrality roadmap",
        "Verification guidance",
        "Disclosure recommendations",
      ],
    },
  ] : [
    {
      icon: Cloud,
      title: "CO2-voetafdruk",
      shortDesc: "Uitgebreide Scope 1–3 emissiemeting",
      deliverables: [
        "Baseline emissierapport",
        "Hotspot-analyse per scope",
        "Dataverzamelingskader",
        "Jaar-op-jaar tracking",
      ],
    },
    {
      icon: TrendingDown,
      title: "Reductieplan",
      shortDesc: "SBTi-afgestemde trajecten en actieplannen",
      deliverables: [
        "Science-based targets roadmap",
        "Portfolio reductiemaatregelen",
        "Investeringsprioritering",
        "Implementatietijdlijn",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Klimaatrisicobeoordeling",
      shortDesc: "Fysieke en transitierisico-evaluatie",
      deliverables: [
        "Risico-materialiteitsmatrix",
        "Scenario-analyse (TCFD-afgestemd)",
        "Aanpassingsstrategieën",
        "Stakeholder communicatiebrief",
      ],
    },
    {
      icon: Leaf,
      title: "Compensatie & Neutraliteit",
      shortDesc: "Carbon credit strategie en verificatieondersteuning",
      deliverables: [
        "Evaluatie compensatieprojecten",
        "Koolstofneutraliteit roadmap",
        "Verificatiebegeleiding",
        "Aanbevelingen voor openbaarmaking",
      ],
    },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en" ? "Climate Action — Measure, Reduce, Report" : "Klimaatactie — Meten, Reduceren, Rapporteren"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Carbon footprinting (Scopes 1–3), reduction planning aligned with SBTi, climate risk assessment, and offsetting/neutrality support."
              : "Carbon footprinting (Scope 1–3), reductieplannen afgestemd op SBTi, klimaatrisicobeoordeling en compensatie/neutraliteitsondersteuning."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
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
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-lg bg-accent p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight flex-1 mt-1">
                      {service.title}
                    </h3>
                  </div>

                  {hoveredCard === index ? (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs font-semibold text-primary">
                        {language === "en" ? "Deliverables:" : "Deliverables:"}
                      </p>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-xs flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClimateServices;
