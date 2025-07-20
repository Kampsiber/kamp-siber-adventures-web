import Navigation from "@/components/Navigation";
import Hero from "@/components/de/Hero";
import CampingSection from "@/components/de/CampingSection";
import GlampingSection from "@/components/de/GlampingSection";
import BarSection from "@/components/de/BarSection";
import ActivitiesSection from "@/components/de/ActivitiesSection";
import ContactSection from "@/components/de/ContactSection";
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