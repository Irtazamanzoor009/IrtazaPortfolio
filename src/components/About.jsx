import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { getSkillIcon, getSkillColor } from "../data/skillIcons";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-3">
        about
      </motion.p> */}
      <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">
        Who I Am
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted text-lg max-w-3xl mb-14 leading-relaxed"
      >
        {siteConfig.summary}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(siteConfig.skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-surface border border-border border-l-2 border-l-gold rounded-xl p-5 hover:border-accent/40 hover:border-l-accent transition-colors"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3">
              {items.map((skill) => {
                const Icon = getSkillIcon(skill);
                const color = getSkillColor(skill);
                return (
                  <div key={skill} className="flex items-center gap-2 min-w-0">
                    <Icon
                      className={`text-base shrink-0 ${color ? "" : "text-accent"}`}
                      style={color ? { color } : undefined}
                    />
                    <span className="text-sm text-muted truncate">{skill}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}