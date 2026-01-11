import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "BS in Computer Science",
    institution: "Cotabato Foundation College of Science and Technology",
    type: "Higher Education",
    icon: GraduationCap,
  },
  {
    title: "Computer System Servicing",
    institution: "President Roxas National Highschool",
    type: "Secondary Education",
    icon: Award,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(120 100% 55% / 0.02) 50%, transparent 100%)"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest mb-4 block">
            &lt;EDUCATION /&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey shaping my technical foundation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node point */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary neon-border z-10 md:-translate-x-1.5 mt-6" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="glass-card p-6 card-glow"
                >
                  {/* Type badge */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.type}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Institution */}
                  <p className="text-muted-foreground">
                    {item.institution}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;