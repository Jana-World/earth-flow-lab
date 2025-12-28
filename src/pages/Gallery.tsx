import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryImage from "@/components/GalleryImage";

// ============================================
// FILE PATHS FOR GALLERY IMAGES:
// - Gallery images: src/assets/gallery/image-name.jpg
// Recommended size: 1200x900px or 4:3 aspect ratio
// ============================================

const Gallery = () => {
  // REPLACE: Update with actual gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg", // Replace: src/assets/gallery/lab-workspace.jpg
      alt: "GFD Laboratory workspace",
      caption: "Laboratory workspace and computational facilities",
    },
    {
      src: "/placeholder.svg", // Replace: src/assets/gallery/rotating-tank.jpg
      alt: "Rotating tank experiment",
      caption: "Rotating convection experiment setup",
    },
    {
      src: "/placeholder.svg", // Replace: src/assets/gallery/seminar.jpg
      alt: "Research seminar",
      caption: "Research seminar on planetary fluid dynamics",
    },
    {
      src: "/placeholder.svg", // Replace: src/assets/gallery/students-working.jpg
      alt: "Students working in lab",
      caption: "Students working on numerical simulations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Gallery" 
          subtitle="Selected photographs from laboratory activities, experiments, seminars, and academic events."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <GalleryImage key={index} {...image} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
