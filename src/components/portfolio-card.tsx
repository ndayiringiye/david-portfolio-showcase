import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  children: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  index?: number;
}

export const PortfolioCard = ({ 
  children, 
  imgSrc, 
  imgAlt, 
  className = "", 
  index = 0 
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={cn(
        "group relative bg-gradient-card border border-border/50 rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500",
        className
      )}
    >
      {/* Image Section */}
      {imgSrc && (
        <div className="relative overflow-hidden">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

interface PortfolioCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PortfolioCardTitle = ({ children, className = "" }: PortfolioCardTitleProps) => {
  return (
    <h3 className={cn(
      "text-xl font-bold text-portfolio-text-primary mb-4 group-hover:text-primary transition-colors duration-300",
      className
    )}>
      {children}
    </h3>
  );
};

interface PortfolioCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const PortfolioCardDescription = ({ children, className = "" }: PortfolioCardDescriptionProps) => {
  return (
    <p className={cn(
      "text-portfolio-text-secondary leading-relaxed text-sm group-hover:text-portfolio-text-primary transition-colors duration-300",
      className
    )}>
      {children}
    </p>
  );
};