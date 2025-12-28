import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FacilityCard from "@/components/FacilityCard";
import { Rotate3d, FlaskConical, Server, Cpu, Code, Database } from "lucide-react";

const Facilities = () => {
  const experimentalFacilities = [
    {
      title: "Rotating Convection Tank",
      description: "Laboratory-scale rotating tank facility designed to study geophysical and planetary convection under controlled rotation and thermal forcing.",
      features: ["Variable rotation rate", "Thermal boundary control", "High-resolution flow visualization"],
      icon: Rotate3d,
    },
    {
      title: "Porous Media Flow Apparatus",
      description: "Experimental setup for investigating single-phase and multiphase flow in synthetic and natural porous media.",
      features: ["Core flooding experiments", "Pressure and saturation monitoring", "Controlled permeability samples"],
      icon: FlaskConical,
    },
  ];

  const computationalFacilities = [
    {
      title: "High-Performance Computing (HPC)",
      description: "Access to institute-level and national HPC clusters for large-scale numerical simulations.",
      features: ["Parallel CFD simulations", "Geodynamo modeling", "Machine learning workflows"],
      icon: Server,
    },
    {
      title: "GPU Workstations",
      description: "Dedicated GPU-enabled workstations for data-driven modeling and deep learning applications.",
      features: ["Physics-informed neural networks (PINNs)", "Seismic and geophysical inversion", "Large dataset training"],
      icon: Cpu,
    },
  ];

  const softwareResources = [
    {
      title: "Numerical & Modeling Software",
      description: "Licensed and open-source software for simulation, data analysis, and visualization.",
      features: ["MATLAB, Python, Fortran", "OpenFOAM, OpendTect", "ParaView, GMT"],
      icon: Code,
    },
    {
      title: "Geophysical Data Repositories",
      description: "Access to global and regional datasets for academic research.",
      features: ["Seismic and well-log databases", "Geomagnetic field models", "Remote sensing products"],
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Facilities" 
          subtitle="Experimental, computational, and software resources available at the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Experimental Facilities */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Experimental Facilities
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {experimentalFacilities.map((facility, index) => (
                  <FacilityCard key={index} {...facility} />
                ))}
              </div>
            </div>

            {/* Computational Facilities */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Computational Facilities
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {computationalFacilities.map((facility, index) => (
                  <FacilityCard key={index} {...facility} />
                ))}
              </div>
            </div>

            {/* Software & Data Resources */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Software & Data Resources
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {softwareResources.map((resource, index) => (
                  <FacilityCard key={index} {...resource} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Facilities;
