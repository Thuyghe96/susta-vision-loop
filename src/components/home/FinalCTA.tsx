import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="final-cta-heading" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 block h-px w-6 bg-primary-foreground/60" aria-hidden="true" />
          <h2
            id="final-cta-heading"
            className="font-display text-3xl leading-tight text-balance md:text-4xl"
          >
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80 text-pretty">
            {t.finalCta.description}
          </p>

          <div className="mt-9 flex flex-col items-center gap-5">
            <Button size="lg" variant="secondary" asChild className="rounded-md">
              <Link to="/contact">{t.finalCta.cta}</Link>
            </Button>
            <a
              href="mailto:thomas@sustavision.com"
              className="text-sm text-primary-foreground/75 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
            >
              {t.finalCta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
