import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* <p className="eyebrow mb-3">experience</p> */}
      <h2 className="section-title">Where I've Worked</h2>

      <div className="space-y-6">
        {siteConfig.experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-colors"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-text">{job.title}</h3>
                <p className="text-accent">{job.company}</p>
              </div>
              <span className=" text-sm text-muted">{job.period}</span>
            </div>
            <ul className="space-y-2">
              {job.points.map((point, idx) => (
                <li key={idx} className="text-muted flex gap-3">
                  <span className="text-gold mt-1.5 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}