import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-2xl md:text-3xl font-bold neon-text cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            bai
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["skills", "timeline", "connect"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile indicator */}
          <div className="md:hidden flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            <span className="text-xs text-muted-foreground font-mono">ONLINE</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;