import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                ESG made simple — empowering businesses to thrive sustainably
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Hands-on ESG support for SMEs in logistics & chemicals. We handle the heavy lifting 
                so your team can focus on running the business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Visual: Simple Loop Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent border border-primary/20 p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Circular arrows */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3, 0 6"
                      fill="hsl(var(--primary))"
                    />
                  </marker>
                </defs>

                {/* Loop circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-[spin_20s_linear_infinite]"
                  style={{ transformOrigin: "center" }}
                />

                {/* Step markers */}
                <g className="font-semibold text-xs" fill="hsl(var(--primary))">
                  <circle cx="100" cy="30" r="15" fill="hsl(var(--primary))" />
                  <text x="100" y="35" textAnchor="middle" fill="white">1</text>
                  
                  <circle cx="170" cy="100" r="15" fill="hsl(var(--primary))" />
                  <text x="170" y="105" textAnchor="middle" fill="white">2</text>
                  
                  <circle cx="100" cy="170" r="15" fill="hsl(var(--primary))" />
                  <text x="100" y="175" textAnchor="middle" fill="white">3</text>
                  
                  <circle cx="30" cy="100" r="15" fill="hsl(var(--primary))" />
                  <text x="30" y="105" textAnchor="middle" fill="white">4</text>
                </g>

                {/* Center text */}
                <text
                  x="100"
                  y="100"
                  textAnchor="middle"
                  className="text-sm font-bold"
                  fill="hsl(var(--primary))"
                >
                  ESG
                </text>
                <text
                  x="100"
                  y="112"
                  textAnchor="middle"
                  className="text-xs"
                  fill="hsl(var(--muted-foreground))"
                >
                  Loop
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
