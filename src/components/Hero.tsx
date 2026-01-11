import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Terminal } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullName = "Khert Laguna Garde";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullName.slice(0, index + 1));
      index++;
      if (index >= fullName.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(120 100% 55% / 0.05) 0%, transparent 50%)"
        }}
      />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] md:left-[20%] opacity-20"
      >
        <Shield className="w-12 h-12 md:w-20 md:h-20 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[10%] md:right-[20%] opacity-20"
      >
        <Terminal className="w-12 h-12 md:w-20 md:h-20 text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            <span className="text-sm font-mono text-muted-foreground">System Active</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">{displayText}</span>
            <span className="text-primary animate-pulse">|</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            <span className="text-primary font-medium">Cybersecurity Specialist</span>
            <span className="mx-3 text-border">|</span>
            <span className="text-primary font-medium">Prompt Engineer</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Securing digital frontiers and engineering intelligent prompts 
            to bridge the gap between human intent and AI capabilities.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground font-mono">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;