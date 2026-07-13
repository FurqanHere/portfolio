import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

const EASE = [0.16, 1, 0.3, 1];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow"
        >
          03 — Experience
        </motion.p>

        <div className="mt-10 space-y-14">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="grid gap-6 rounded-2xl border-l-2 border-brass/50 pl-8 md:grid-cols-[0.9fr_1.6fr] md:gap-12"
            >
              <div>
                <h3 className="font-display text-2xl text-paper">{job.company}</h3>
                <p className="mt-2 font-mono text-xs text-slate">{job.meta}</p>
              </div>
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-3"
              >
                {job.points.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
