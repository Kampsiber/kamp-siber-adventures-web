import Navigation from "@/components/Navigation";
import Hero from "@/components/si/Hero";
import CampingSection from "@/components/si/CampingSection";
import GlampingSection from "@/components/si/GlampingSection";
import BarSection from "@/components/si/BarSection";
import ActivitiesSection from "@/components/si/ActivitiesSection";
import ContactSection from "@/components/si/ContactSection";
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