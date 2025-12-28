import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import researchLab from "@/assets/research-lab.jpg";
import cfdSimulation from "@/assets/cfd-simulation.jpg";
import fieldResearch from "@/assets/field-research.jpg";

const slides = [
  {
    image: researchLab,
    title: "Laboratory Experiments",
    description: "Physical modeling of fluid flows and flow visualization",
  },
  {
    image: cfdSimulation,
    title: "CFD Simulations",
    description: "High-fidelity numerical modeling of complex flows",
  },
  {
    image: fieldResearch,
    title: "Field Research",
    description: "Real-world geophysical applications and data collection",
  },
];

const ResearchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Research <span className="text-primary">Highlights</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Exploring the frontiers of fluid dynamics through diverse methodologies
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-2"
                  >
                    {slides[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-sans text-base md:text-lg text-primary-foreground/80"
                  >
                    {slides[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchCarousel;
