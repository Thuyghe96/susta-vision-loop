import { Award, Users, FileCheck, Target } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      text: "5 years sector experience",
    },
    {
      icon: Users,
      text: "Founder-led",
    },
    {
      icon: FileCheck,
      text: "CSRD & VSME expertise",
    },
    {
      icon: Target,
      text: "Ecovadis Platinum project experience",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex-shrink-0 rounded-full bg-accent p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{badge.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
