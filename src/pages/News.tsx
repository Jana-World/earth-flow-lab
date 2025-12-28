import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";

const News = () => {
  // REPLACE: Update with actual news data
  const newsItems = [
    {
      date: "March 2025",
      title: "Paper accepted in Journal of Geophysical Research",
      description: "Our recent work on multiphase flow in heterogeneous porous media has been accepted for publication in JGR: Solid Earth.",
    },
    {
      date: "January 2025",
      title: "GFD Lab participates in SEG EVOLVE Carbon Solutions Program",
      description: "Members of the laboratory are participating in the SEG EVOLVE Carbon Solutions program, focusing on subsurface carbon storage and monitoring.",
    },
    {
      date: "August 2024",
      title: "New PhD student joins the laboratory",
      description: "We welcome a new doctoral student working on planetary fluid dynamics and numerical dynamo modeling.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="News" 
          subtitle="Latest announcements, achievements, and activities of the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
