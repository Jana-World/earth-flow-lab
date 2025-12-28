import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ResearchAreaCard from "@/components/ResearchAreaCard";
import { Waves, Droplets, Globe, Brain, CheckCircle } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Geophysical Fluid Dynamics",
      description: "Study of fluid motion in rotating and stratified geophysical systems, including oceans, atmosphere, and planetary interiors.",
      keywords: ["Rotating flows", "Convection", "Turbulence"],
      icon: Waves,
    },
    {
      title: "Porous Media & Multiphase Flow",
      description: "Investigation of flow and transport phenomena in porous media with applications to energy, groundwater, and CO₂ sequestration.",
      keywords: ["Multiphase flow", "Reactive transport", "Upscaling"],
      icon: Droplets,
    },
    {
      title: "Planetary & Dynamo Processes",
      description: "Numerical and theoretical modeling of planetary interiors, magnetic field generation, and rotating convection.",
      keywords: ["Dynamo theory", "MHD", "Planetary interiors"],
      icon: Globe,
    },
    {
      title: "Computational & Data-Driven Geophysics",
      description: "Integration of numerical simulations with machine learning and physics-informed models for subsurface and geophysical problems.",
      keywords: ["PINNs", "ML", "Inverse problems"],
      icon: Brain,
    },
  ];

  const methods = [
    "Analytical and theoretical modeling",
    "High-performance numerical simulations",
    "Laboratory-scale experiments",
    "Machine learning and physics-informed models",
    "Seismic and geophysical data analysis",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Research" 
          subtitle="Fundamental and applied research in geophysical and planetary fluid dynamics, subsurface processes, and data-driven modeling."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Research Areas */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Research Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {researchAreas.map((area, index) => (
                  <ResearchAreaCard key={index} {...area} />
                ))}
              </div>
            </div>

            {/* Methods & Approaches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Methods & Approaches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
