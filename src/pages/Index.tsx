import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LabOverview from "@/components/LabOverview";
import ResearchCarousel from "@/components/ResearchCarousel";
import HighlightsGrid from "@/components/HighlightsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <LabOverview />
        <ResearchCarousel />
        <HighlightsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
