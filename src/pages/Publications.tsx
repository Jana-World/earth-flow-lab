import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PublicationCard from "@/components/PublicationCard";

const Publications = () => {
  // REPLACE: Update with actual publication data
  const journalArticles = [
    {
      authors: "Sahoo, S., Jana, P. P., and Singh, A.",
      year: "2024",
      title: "Multiphase flow dynamics in heterogeneous porous media",
      journal: "Journal of Geophysical Research: Solid Earth",
      type: "journal" as const,
      link: "", // Add DOI link
    },
    {
      authors: "Jana, P. P., Sahoo, S., and Roy, D.",
      year: "2023",
      title: "Data-driven modeling of geophysical fluid flows",
      journal: "Physics of Fluids",
      type: "journal" as const,
      link: "", // Add DOI link
    },
  ];

  const conferenceProceedings = [
    {
      authors: "Jana, P. P. and Sahoo, S.",
      year: "2022",
      title: "Numerical investigation of rotating convection in planetary cores",
      journal: "Proceedings of the American Geophysical Union Fall Meeting",
      type: "conference" as const,
      link: "",
    },
  ];

  const theses = [
    {
      authors: "Jana, P. P.",
      year: "2025",
      title: "Physics-informed machine learning for geophysical fluid dynamics",
      journal: "M.Tech Thesis, IIT (ISM) Dhanbad",
      type: "thesis" as const,
      link: "", // Add thesis repository link
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Publications" 
          subtitle="Peer-reviewed journal articles, conference proceedings, and theses published by members of the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Journal Articles */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Journal Articles
              </h2>
              <div className="space-y-6">
                {journalArticles.map((pub, index) => (
                  <PublicationCard key={index} {...pub} />
                ))}
              </div>
            </div>

            {/* Conference Proceedings */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Conference Proceedings
              </h2>
              <div className="space-y-6">
                {conferenceProceedings.map((pub, index) => (
                  <PublicationCard key={index} {...pub} />
                ))}
              </div>
            </div>

            {/* Theses */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Theses
              </h2>
              <div className="space-y-6">
                {theses.map((pub, index) => (
                  <PublicationCard key={index} {...pub} />
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

export default Publications;
