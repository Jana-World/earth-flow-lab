import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  fundingAgency: string;
  duration: string;
  description: string;
}

const ProjectCard = ({ title, fundingAgency, duration, description }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <h4 className="text-xl font-serif font-bold text-foreground mb-3">{title}</h4>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="w-4 h-4 text-accent" />
          <span>{fundingAgency}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-accent" />
          <span>{duration}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
