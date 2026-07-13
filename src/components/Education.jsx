import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Education() {
  const edu = siteConfig.education;
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      {/* <p className="eyebrow mb-3">education</p> */}
      <h2 className="section-title">Academic Background</h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-wrap justify-between items-center gap-4 hover:border-accent/50 transition-colors"
      >
        <div>
          <h3 className="font-display text-xl font-semibold text-text mb-1">{edu.school}</h3>
          <p className="text-muted">{edu.degree}</p>
          <p className="font-mono text-sm text-muted mt-1">{edu.period}</p>
        </div>
        <div className="text-center bg-surfaceLight px-6 py-3 rounded-lg border border-border">
          <p className="font-display text-2xl font-semibold text-gold">{edu.cgpa}</p>
          <p className="font-mono text-xs text-muted mt-1">CGPA</p>
        </div>
      </motion.div>
    </section>
  );
}