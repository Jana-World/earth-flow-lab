import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  date: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  slug?: string;
}

const BlogCard = ({ date, author, category, title, excerpt, slug }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border"
    >
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <User className="w-4 h-4" />
          {author}
        </span>
        <span className="flex items-center gap-1 text-accent">
          <Tag className="w-4 h-4" />
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{excerpt}</p>
      
      <Link
        to={slug ? `/blog/${slug}` : "#"}
        className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
      >
        Read more
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.article>
  );
};

export default BlogCard;
