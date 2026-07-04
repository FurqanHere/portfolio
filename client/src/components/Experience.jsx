import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          02 — Experience
        </motion.p>

        <div className="mt-10 space-y-14">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 border-l-2 border-brass/50 pl-8 md:grid-cols-[0.9fr_1.6fr] md:gap-12"
            >
              <div>
                <h3 className="font-display text-2xl text-paper">{job.role}</h3>
                <p className="mt-1 font-mono text-sm text-brass-light">{job.company}</p>
                <p className="mt-2 font-mono text-xs text-slate">{job.meta}</p>
              </div>
              <ul className="space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
