import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import TriggerSection from "@/components/home/TriggerSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import ServiceLoop from "@/components/home/ServiceLoop";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExperienceSection from "@/components/home/ExperienceSection";
import FinalCTA from "@/components/home/FinalCTA";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <TriggerSection />
        <ServiceAreas />
        <ServiceLoop />
        <WhyChooseUs />
        <ExperienceSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
