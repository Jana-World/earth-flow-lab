import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  // REPLACE: Update with actual blog posts
  const blogPosts = [
    {
      date: "Dec 2025",
      author: "Dr. S. Sahoo",
      category: "PhD Guidance",
      title: "How to Choose a PhD Topic in Geophysics",
      excerpt: "Selecting a PhD research topic is a critical step that shapes your academic trajectory. This article outlines a structured approach to identifying impactful problems in geophysics.",
      slug: "choosing-phd-topic",
    },
    {
      date: "Oct 2025",
      author: "P. P. Jana",
      category: "Machine Learning",
      title: "Physics-Informed Machine Learning in Geosciences",
      excerpt: "Physics-informed neural networks (PINNs) are emerging as powerful tools for modeling geophysical fluid systems. We discuss fundamentals and recent applications.",
      slug: "pinns-geosciences",
    },
    {
      date: "July 2024",
      author: "GFD Lab",
      category: "Planetary Dynamics",
      title: "Understanding Rotating Convection in Planetary Cores",
      excerpt: "Rotating convection plays a central role in planetary magnetic field generation. This post provides an intuitive overview of the governing physics.",
      slug: "rotating-convection",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHeader 
          title="Blog" 
          subtitle="Research insights, academic discussions, and explanatory articles from members of the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
