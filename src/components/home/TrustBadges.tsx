import { Award, Users, FileCheck, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustBadges = () => {
  const { t } = useLanguage();
  
  const badges = [
    {
      icon: Award,
      text: t.trustBadges.experience,
    },
    {
      icon: Users,
      text: t.trustBadges.founderLed,
    },
    {
      icon: FileCheck,
      text: t.trustBadges.csrd,
    },
    {
      icon: Target,
      text: t.trustBadges.ecovadis,
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
