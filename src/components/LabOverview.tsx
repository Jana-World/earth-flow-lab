import { motion } from "framer-motion";
import { Wind, Cpu, FlaskConical, Brain } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Geophysical Flows",
    description: "Ocean dynamics, atmospheric circulation, and planetary fluid mechanics",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Experiments",
    description: "Physical modeling and flow visualization techniques",
  },
  {
    icon: Cpu,
    title: "Numerical Simulations",
    description: "High-fidelity CFD and multi-physics modeling",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Data-driven approaches for complex flow predictions",
  },
];

const LabOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About the <span className="text-primary">Laboratory</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            The Geophysical Fluid Dynamics Laboratory at IIT (ISM) Dhanbad focuses on
            fundamental and applied research in geophysical and planetary fluid dynamics,
            porous media flow, subsurface processes, and data-driven modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabOverview;
