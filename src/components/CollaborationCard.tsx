import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";

interface CollaborationCardProps {
  institution: string;
  department: string;
  country: string;
}

const CollaborationCard = ({ institution, department, country }: CollaborationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border text-center"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
        <Building className="w-6 h-6 text-primary" />
      </div>
      
      <h4 className="text-lg font-serif font-bold text-foreground mb-2">{institution}</h4>
      <p className="text-sm text-muted-foreground mb-2">{department}</p>
      
      <div className="flex items-center justify-center gap-1 text-sm text-accent">
        <MapPin className="w-4 h-4" />
        {country}
      </div>
    </motion.div>
  );
};

export default CollaborationCard;
