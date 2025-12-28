import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  area: string;
  email?: string;
  image?: string;
}

const TeamCard = ({ name, role, area, email, image }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="flex items-start gap-4">
        {/* Photo placeholder - replace with actual image */}
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-serif text-primary font-bold">
              {name.charAt(0)}
            </span>
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-serif font-bold text-foreground">{name}</h4>
          <p className="text-sm text-accent font-medium mb-1">{role}</p>
          <p className="text-sm text-muted-foreground">{area}</p>
          
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
