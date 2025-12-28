import { motion } from "framer-motion";
import {
  FileText,
  Megaphone,
  BookOpen,
  Handshake,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: FileText,
    title: "Recent Publications",
    items: ["Journal of Geophysical Research, 2024", "Physics of Fluids, 2023"],
    link: "#publications",
    linkText: "View All",
  },
  {
    icon: Megaphone,
    title: "Latest News",
    description: "Lab selected for SEG EVOLVE Carbon Solutions 2025 program.",
    link: "#news",
    linkText: "Read More",
  },
  {
    icon: BookOpen,
    title: "Research Blog",
    description: "How to choose a PhD topic in Geophysics and Fluid Dynamics.",
    link: "#blog",
    linkText: "Visit Blog",
  },
  {
    icon: Handshake,
    title: "Collaborations",
    description: "IIT Bombay, IISc, Cambridge, ETH Zürich, ONGC, and more.",
    link: "#collaborations",
    linkText: "Partners",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "5 PhD Scholars, 3 MS Students, 2 Postdocs, Research Interns.",
    link: "#team",
    linkText: "Meet Team",
    featured: true,
  },
  {
    icon: Settings,
    title: "Facilities",
    description:
      "High-performance computing, flow visualization, geophysical instruments.",
    link: "#facilities",
    linkText: "See Facilities",
  },
];

const HighlightsGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quick <span className="text-primary">Highlights</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Stay updated with our latest research, news, and activities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-6 rounded-xl border hover-lift cursor-pointer ${
                item.featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                  item.featured
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10 group-hover:bg-primary/20"
                } transition-colors`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    item.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              <h3
                className={`font-serif text-xl font-semibold mb-3 ${
                  item.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>

              {item.items ? (
                <ul className="space-y-2 mb-4">
                  {item.items.map((text, i) => (
                    <li
                      key={i}
                      className={`text-sm font-sans ${
                        item.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      • {text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`text-sm font-sans mb-4 leading-relaxed ${
                    item.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.description}
                </p>
              )}

              <a
                href={item.link}
                className={`inline-flex items-center text-sm font-medium transition-colors ${
                  item.featured
                    ? "text-gold hover:text-gold-light"
                    : "text-primary hover:text-accent"
                }`}
              >
                {item.linkText}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;
