import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TeamCard from "@/components/TeamCard";

// ============================================
// FILE PATHS FOR TEAM MEMBER PHOTOS:
// - Faculty: src/assets/team/faculty-name.jpg
// - PhD Scholars: src/assets/team/phd-name.jpg
// - MS Students: src/assets/team/ms-name.jpg
// - Interns: src/assets/team/intern-name.jpg
// ============================================

const Team = () => {
  // REPLACE: Update with actual team data
  const faculty = [
    {
      name: "Dr. Swarandeep Sahoo",
      role: "Principal Investigator",
      area: "Geophysical Fluid Dynamics, Porous Media, Planetary Flows",
      email: "swarandeep@iitism.ac.in",
      image: "", // Add: /src/assets/team/swarandeep.jpg
    },
  ];

  const phdScholars = [
    {
      name: "Student Name",
      role: "PhD Scholar",
      area: "Multiphase Flow in Porous Media",
      email: "",
      image: "", // Add: /src/assets/team/phd-student-1.jpg
    },
    {
      name: "Student Name",
      role: "PhD Scholar",
      area: "Planetary Dynamo & Rotating Convection",
      email: "",
      image: "", // Add: /src/assets/team/phd-student-2.jpg
    },
  ];

  const msStudents = [
    {
      name: "Student Name",
      role: "MS (Research)",
      area: "Seismic Interpretation & Fluid Flow",
      email: "",
      image: "", // Add: /src/assets/team/ms-student-1.jpg
    },
  ];

  const interns = [
    {
      name: "Student Name",
      role: "Research Intern",
      area: "Data-Driven Geophysical Modeling",
      email: "",
      image: "", // Add: /src/assets/team/intern-1.jpg
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Research Team" 
          subtitle="Members of the Geophysical Fluid Dynamics Laboratory"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Faculty */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Faculty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faculty.map((member, index) => (
                  <TeamCard key={index} {...member} />
                ))}
              </div>
            </div>

            {/* PhD Scholars */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                PhD Scholars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phdScholars.map((member, index) => (
                  <TeamCard key={index} {...member} />
                ))}
              </div>
            </div>

            {/* MS/MTech Students */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                MS / MTech Students
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {msStudents.map((member, index) => (
                  <TeamCard key={index} {...member} />
                ))}
              </div>
            </div>

            {/* Project Staff & Interns */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Project Staff & Interns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interns.map((member, index) => (
                  <TeamCard key={index} {...member} />
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

export default Team;
