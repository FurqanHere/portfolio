import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, skillGroups } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        01 — About
      </motion.p>

      <div className="mt-6 grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h2 className="max-w-lg font-display text-3xl leading-snug text-paper sm:text-4xl">
            Frontend-led full stack development, built for real client operations.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-slate">
            Over the past year I've shipped production platforms across four different
            industries — legal services, luxury marine rentals, hospitality, and talent
            marketplaces — each with its own workflows, payment flows, and languages. I
            care about translating a business's actual process into components that hold
            up in production, not just a working demo.
          </p>

          <div className="mt-10 space-y-4">
            {education.map((ed) => (
              <div key={ed.degree} className="flex gap-4 border-t border-ink-line pt-4">
                <GraduationCap className="mt-1 shrink-0 text-brass" size={18} />
                <div>
                  <p className="font-medium text-paper">{ed.degree}</p>
                  <p className="font-mono text-xs text-slate">{ed.school}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8"
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-ink-line bg-ink-soft px-3 py-1.5 text-sm text-paper"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
