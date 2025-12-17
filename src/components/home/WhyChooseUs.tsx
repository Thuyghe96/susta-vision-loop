import { User, Lightbulb, Users, Puzzle, Shield, DollarSign } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const icons = [User, Lightbulb, Users, Puzzle, Shield, DollarSign];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t.whyChooseUs.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyChooseUs.reasons.map((reason, index) => {
            const Icon = icons[index];
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
