import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-gradient-soft">
      {/* Subtle editorial background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 w-full text-primary/10"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          height="180"
        >
          <path
            d="M0,140 C240,80 480,200 720,140 C960,80 1200,200 1440,140 L1440,220 L0,220 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-6">{t.hero.eyebrow}</p>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="rounded-md">
              <Link to="/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-md border-foreground/15 bg-transparent hover:bg-foreground/[0.03]">
              <Link to="/services">{t.hero.secondaryCta}</Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <span className="h-px w-10 bg-primary/40" />
            <p className="font-display text-sm italic text-primary/80 md:text-base">
              {t.hero.positioning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
