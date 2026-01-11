import { motion } from "framer-motion";
import { Shield, Brain, Lock, Cpu, Code, Sparkles } from "lucide-react";

const skills = [
  {
    title: "Cybersecurity",
    icon: Shield,
    description: "Protecting systems and networks from digital threats through vulnerability assessment, penetration testing, and security architecture design.",
    highlights: ["Threat Analysis", "Network Security", "Ethical Hacking"],
  },
  {
    title: "Prompt Engineering",
    icon: Brain,
    description: "Crafting precise and effective prompts to maximize AI model outputs, optimizing for accuracy, creativity, and task-specific results.",
    highlights: ["AI Optimization", "Context Design", "Output Engineering"],
  },
];

const techStack = [
  { icon: Lock, label: "Security" },
  { icon: Cpu, label: "Systems" },
  { icon: Code, label: "Development" },
  { icon: Sparkles, label: "AI/ML" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest mb-4 block">
            &lt;SKILLS /&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional DNA
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies that define my approach to technology and innovation
          </p>
        </motion.div>

        {/* Skills cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 md:p-8 card-glow group"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:animate-glow-pulse transition-all duration-300">
                <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {skill.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 md:gap-8 flex-wrap"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-2 p-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/50 border border-border flex items-center justify-center">
                <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;