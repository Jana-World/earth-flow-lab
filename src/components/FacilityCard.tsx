import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const FacilityCard = ({ title, description, features, icon: Icon }: FacilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-ocean-medium">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h4>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
