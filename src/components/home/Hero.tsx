import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background waves */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M0,400 C320,320 420,480 720,400 C1020,320 1120,480 1440,400 L1440,800 L0,800 Z"
            fill="hsl(var(--accent))"
            opacity="0.3"
          />
          <path
            d="M0,500 C360,420 540,580 900,500 C1260,420 1380,580 1440,520 L1440,800 L0,800 Z"
            fill="hsl(var(--primary))"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              ESG made simple — empowering businesses to thrive sustainably
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hands-on ESG support for SMEs, we handle the heavy lifting so your team can focus on running the business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Book your free ESG consultation now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View our services</Link>
            </Button>
          </div>

          {/* Founder Card */}
          <div className="inline-flex items-center gap-3 rounded-lg border border-primary/20 bg-accent/50 px-4 py-3">
            <Award className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">
              Founder-led: Thomas Huyghe — 5+ years in ESG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
