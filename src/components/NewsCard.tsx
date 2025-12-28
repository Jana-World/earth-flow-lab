import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
}

const NewsCard = ({ date, title, description }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-accent">{date}</span>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.article>
  );
};

export default NewsCard;
