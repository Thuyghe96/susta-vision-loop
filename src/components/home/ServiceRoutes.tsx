import { Link } from "react-router-dom";
import { Compass, FileCheck2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const cardIcons = [Compass, FileCheck2, TrendingUp];

const ServiceRoutes = () => {
  const { t } = useLanguage();
  const { title, description, cta, cards } = t.serviceRoutes;

  return (
    <section aria-labelledby="service-routes-heading" className="border-b border-hairline bg-[hsl(var(--sand))] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 block h-px w-6 bg-primary" aria-hidden="true" />
          <h2 id="service-routes-heading" className="font-display text-3xl leading-tight text-foreground text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">{description}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <article
                key={card.heading}
                className="flex flex-col rounded-md border border-hairline bg-background p-7 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-8"
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl leading-snug text-foreground md:text-2xl">{card.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{card.text}</p>
                <p className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed text-foreground/80">
                  {card.supporting}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="rounded-md">
            <Link to="/services">{cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceRoutes;
