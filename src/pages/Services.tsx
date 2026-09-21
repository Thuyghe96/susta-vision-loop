import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHero />
        <ServiceDetails />
        <ServicesProcess />
        <ServicesFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
