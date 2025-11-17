import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceLoop from "@/components/home/ServiceLoop";
import ClimateServices from "@/components/home/ClimateServices";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive ESG solutions tailored to your business needs. Choose standalone modules 
                or leverage the full iterative loop for maximum impact.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get started with a free consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ServiceLoop />
        <ClimateServices />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6 rounded-2xl border border-primary/20 bg-accent/50 p-12">
              <h2 className="text-3xl font-bold">Ready to get started?</h2>
              <p className="text-lg text-muted-foreground">
                Book your free ESG consultation and discover how we can help your business thrive sustainably.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book your free consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
