import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CampingSection from "@/components/CampingSection";
import GlampingSection from "@/components/GlampingSection";
import BarSection from "@/components/BarSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CampingSection />
      <GlampingSection />
      <BarSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
