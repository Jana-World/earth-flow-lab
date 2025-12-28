import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // REPLACE: Update with actual project data
  const ongoingProjects = [
    {
      title: "Multiphase Flow in Heterogeneous Porous Media",
      fundingAgency: "SERB, Government of India",
      duration: "2023 – 2026",
      description: "This project focuses on numerical and experimental investigation of multiphase flow processes in heterogeneous porous formations relevant to subsurface energy applications.",
    },
    {
      title: "Data-Driven Modeling of Geophysical Flows",
      fundingAgency: "DST",
      duration: "2024 – 2027",
      description: "Development of machine learning and physics-informed frameworks for modeling complex geophysical fluid flow systems.",
    },
  ];

  const completedProjects = [
    {
      title: "Rotating Convection in Planetary Interiors",
      fundingAgency: "ISRO",
      duration: "2019 – 2022",
      description: "Numerical investigation of rotating convection regimes relevant to planetary core dynamics and magnetic field generation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Projects" 
          subtitle="Sponsored and collaborative research projects undertaken by the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Ongoing Projects */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Ongoing Projects
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {ongoingProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>

            {/* Completed Projects */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Completed Projects
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {completedProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
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

export default Projects;
