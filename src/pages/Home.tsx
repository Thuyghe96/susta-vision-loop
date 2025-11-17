import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import ServiceLoop from "@/components/home/ServiceLoop";
import ClimateServices from "@/components/home/ClimateServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ServiceLoop />
        <ClimateServices />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
