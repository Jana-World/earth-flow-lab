import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CollaborationCard from "@/components/CollaborationCard";

const Collaborations = () => {
  const academicCollaborations = [
    {
      institution: "Indian Institute of Technology Bombay",
      department: "Department of Earth Sciences",
      country: "India",
    },
    {
      institution: "Indian Institute of Science, Bengaluru",
      department: "Centre for Earth Sciences",
      country: "India",
    },
    {
      institution: "University of Cambridge",
      department: "Department of Applied Mathematics and Theoretical Physics",
      country: "United Kingdom",
    },
  ];

  const industryCollaborations = [
    {
      institution: "Oil and Natural Gas Corporation (ONGC)",
      department: "Exploration & Subsurface Research",
      country: "India",
    },
    {
      institution: "National Geophysical Research Institute (NGRI)",
      department: "CSIR Laboratory",
      country: "India",
    },
  ];

  const internationalCollaborations = [
    {
      institution: "ETH Zürich",
      department: "Institute of Geophysics",
      country: "Switzerland",
    },
    {
      institution: "University of Texas at Austin",
      department: "Jackson School of Geosciences",
      country: "USA",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Collaborations" 
          subtitle="Academic, Industry, and International Research Partnerships"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Academic */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Academic Institutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicCollaborations.map((collab, index) => (
                  <CollaborationCard key={index} {...collab} />
                ))}
              </div>
            </div>

            {/* Industry */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Industry & Research Organizations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryCollaborations.map((collab, index) => (
                  <CollaborationCard key={index} {...collab} />
                ))}
              </div>
            </div>

            {/* International */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                International Collaborations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {internationalCollaborations.map((collab, index) => (
                  <CollaborationCard key={index} {...collab} />
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

export default Collaborations;
