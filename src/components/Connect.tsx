import { motion } from "framer-motion";
import { Facebook, Mail, ExternalLink } from "lucide-react";

const Connect = () => {
  return (
    <section id="connect" className="py-20 md:py-32 relative">
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
            &lt;CONNECT /&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Reach out and let's create something amazing.
          </p>
        </motion.div>

        {/* Connect buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Facebook Button */}
          <motion.a
            href="https://web.facebook.com/khrtgrde.laguna"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-card border-2 border-primary neon-border transition-all duration-300 group-hover:neon-border-strong">
              <Facebook className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">Facebook</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:garde.khert@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-card border-2 border-primary neon-border transition-all duration-300 group-hover:neon-border-strong">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">Email Me</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.a>
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground font-mono text-sm">
            &copy; {new Date().getFullYear()} Khert Laguna Garde. All systems secure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;