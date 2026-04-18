import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import thomasPhoto from "@/assets/thomas-huyghe.jfif";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-hairline bg-gradient-soft py-24 md:py-36">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <p className="eyebrow mb-6">{t.about.eyebrow}</p>
              <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
                <img
                  src={thomasPhoto}
                  alt="Thomas Huyghe, founder of Sustavision"
                  className="h-32 w-32 flex-shrink-0 rounded-full object-cover ring-1 ring-hairline shadow-soft"
                />
                <div>
                  <h1 className="font-display text-3xl leading-tight md:text-5xl text-balance">
                    {t.about.title}
                  </h1>
                  <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                    <p>{t.about.bio1}</p>
                    <p>{t.about.bio2}</p>
                    <p>{t.about.bio3}</p>
                  </div>
                  <Button size="lg" asChild className="mt-10 rounded-md">
                    <Link to="/contact">
                      {t.about.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
