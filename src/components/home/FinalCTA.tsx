import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-4">{t.finalCta.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl text-balance">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            {t.finalCta.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button size="lg" asChild className="rounded-md">
              <Link to="/contact">
                {t.finalCta.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">{t.finalCta.secondary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
