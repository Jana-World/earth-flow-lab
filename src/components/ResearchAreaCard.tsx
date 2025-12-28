import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ResearchAreaCardProps {
  title: string;
  description: string;
  keywords: string[];
  icon: LucideIcon;
}

const ResearchAreaCard = ({ title, description, keywords, icon: Icon }: ResearchAreaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-ocean-medium flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      
      <h3 className="text-xl font-serif font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {keyword}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ResearchAreaCard;
