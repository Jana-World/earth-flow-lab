import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, MapPin } from "lucide-react";

// ============================================
// FILE PATHS FOR ALUMNI PHOTOS:
// - Alumni photos: src/assets/alumni/alumni-name.jpg
// ============================================

interface AlumniMember {
  name: string;
  degree: string;
  year: string;
  currentPosition: string;
  image?: string;
}

const AlumniCard = ({ name, degree, year, currentPosition, image }: AlumniMember) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border text-center"
  >
    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <GraduationCap className="w-10 h-10 text-primary/40" />
      )}
    </div>
    <h4 className="text-lg font-serif font-bold text-foreground">{name}</h4>
    <p className="text-sm text-accent font-medium mt-1">{degree}, {year}</p>
    <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
      <MapPin className="w-4 h-4" />
      {currentPosition}
    </div>
  </motion.div>
);

const Alumni = () => {
  // REPLACE: Update with actual alumni data
  const phdAlumni: AlumniMember[] = [
    {
      name: "Dr. A. ff,jugfigugkuku",
      degree: "PhD",
      year: "2023",
      currentPosition: "Postdoctoral Researcher, ETH Zurich",
      image: "", // Add: src/assets/alumni/a-kumar.jpg
    },
  ];

  const mtechAlumni: AlumniMember[] = [
    {
      name: "P. P. Jana",
      degree: "M.Tech",
      year: "2025",
      currentPosition: "Research Associate, Geophysical Modeling",
      image: "", // Add: src/assets/alumni/pp-jana.jpg
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Alumni" 
          subtitle="Former members of the Geophysical Fluid Dynamics Laboratory and their current professional affiliations."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* PhD Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                PhD Alumni
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {phdAlumni.map((alumni, index) => (
                  <AlumniCard key={index} {...alumni} />
                ))}
              </div>
            </div>

            {/* M.Tech Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                M.Tech Alumni
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mtechAlumni.map((alumni, index) => (
                  <AlumniCard key={index} {...alumni} />
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

export default Alumni;
