import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  authors: string;
  year: string;
  title: string;
  journal: string;
  type: "journal" | "conference" | "thesis";
  link?: string;
}

const PublicationCard = ({ authors, year, title, journal, type, link }: PublicationCardProps) => {
  const typeColors = {
    journal: "bg-primary/10 text-primary",
    conference: "bg-accent/10 text-accent",
    thesis: "bg-ocean-light/10 text-ocean-medium",
  };

  const typeLabels = {
    journal: "Journal",
    conference: "Conference",
    thesis: "Thesis",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs font-medium rounded ${typeColors[type]}`}>
              {typeLabels[type]}
            </span>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <h4 className="text-lg font-serif font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{authors}</p>
          <p className="text-sm text-accent font-medium italic">{journal}</p>
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Publication
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
