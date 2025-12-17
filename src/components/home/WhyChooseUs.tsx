import { User, Lightbulb, Users, Puzzle, Shield, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: User,
      title: "Founder-led expertise",
      description: "Work directly with an ESG expert with 5+ years of experience.",
    },
    {
      icon: Lightbulb,
      title: "Pragmatic & hands-on",
      description: "We focus on actions, not endless reporting.",
    },
    {
      icon: Users,
      title: "Low burden for your team",
      description: "Designed for SMEs with limited time.",
    },
    {
      icon: Puzzle,
      title: "Modular & flexible",
      description: "Use standalone services or the full loop.",
    },
    {
      icon: Shield,
      title: "CSRD & VSME experience",
      description: "Practical support for EU requirements.",
    },
    {
      icon: DollarSign,
      title: "Cost-effective",
      description: "Lean, impact-focused approach reduces wasted effort.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What Sets Us Apart</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-accent p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
