import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, ExternalLink, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// FILE PATHS FOR IMAGES & DOCUMENTS:
// - Faculty Photo: src/assets/faculty/faculty-photo.jpg
// - CV Document: public/documents/cv.pdf
// ============================================

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader title="Faculty" />

        {/* Faculty Profile */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Photo */}
                <div className="flex-shrink-0">
                  {/* REPLACE: src/assets/faculty/faculty-photo.jpg */}
                  <div className="w-48 h-56 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                    <GraduationCap className="w-20 h-20 text-primary/30" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                    Dr. Swarandeep Sahoo
                  </h2>
                  <p className="text-lg text-accent font-medium mb-4">
                    DST-INSPIRE Faculty / Assistant Professor
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Department of Applied Geophysics
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Indian Institute of Technology (ISM), Dhanbad
                  </p>

                  <p className="text-foreground leading-relaxed mb-6">
                    Dr. Swarandeep Sahoo&apos;s research focuses on geophysical fluid dynamics,
                    porous media flows, and data-driven modeling of subsurface processes.
                    His work integrates theory, experiments, and numerical simulations
                    to address problems in Earth and planetary sciences.
                  </p>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Room No. 101, Applied Geophysics Dept.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:swarandeep@iitism.ac.in" className="text-primary hover:text-accent transition-colors">
                        swarandeep@iitism.ac.in
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91-326-223-5438</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {/* REPLACE: href with actual CV path public/documents/cv.pdf */}
                    <Button variant="gold" asChild>
                      <a href="/documents/cv.pdf" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://www.iitism.ac.in/~swarandeep" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Personal Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-12 bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Research Interests</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Geophysical and planetary fluid dynamics",
                  "Porous media flow and transport",
                  "Rotating convection and dynamo theory",
                  "Physics-informed machine learning",
                ].map((interest, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Education</h3>
              <ul className="space-y-4">
                {/* REPLACE: Add actual education details */}
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">PhD – Geophysics</p>
                    <p className="text-sm text-muted-foreground">[University Name], [Year]</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">M.Tech – Applied Geophysics</p>
                    <p className="text-sm text-muted-foreground">[Institute Name], [Year]</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">B.Tech – Geophysics</p>
                    <p className="text-sm text-muted-foreground">[Institute Name], [Year]</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Academic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Academic Profiles</h3>
              <div className="flex flex-wrap gap-4">
                {/* REPLACE: Add actual profile URLs */}
                <a href="#" className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  Google Scholar
                </a>
                <a href="#" className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  ORCID
                </a>
                <a href="#" className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  ResearchGate
                </a>
                <a href="#" className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  Scopus
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
