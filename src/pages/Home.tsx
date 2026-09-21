import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import TriggerSection from "@/components/home/TriggerSection";
import ServiceRoutes from "@/components/home/ServiceRoutes";
import WhySustavision from "@/components/home/WhySustavision";
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
        <ServiceRoutes />
        <ExperienceSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
