import { motion } from "framer-motion";
import { ArrowDownRight, GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: EASE }}
        className="eyebrow"
      >
        01 — About
      </motion.p>

      <div className="mt-6 grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          <h2 className="max-w-lg font-display text-3xl leading-snug text-paper sm:text-4xl">
            AI Agents & Automation expert, backed by full stack engineering.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-slate">
            I design autonomous AI agents and automation pipelines — including full
            social media account management — that take repetitive operations off a
            business's plate entirely. That expertise is backed by a year shipping
            production full stack platforms across four industries — legal services,
            luxury marine rentals, hospitality, and talent marketplaces — each with its
            own workflows, payment flows, and languages.
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
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          <div className="gradient-border">
            <div className="gradient-border-panel bg-ink-soft p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light">
                Also delivering
              </p>
              <h3 className="mt-3 font-display text-2xl text-paper">
                Full Stack Development
              </h3>
              <p className="mt-4 leading-relaxed text-slate">
                End-to-end product builds — React interfaces, Node.js APIs, and
                MongoDB/SQL data layers — shipped for real client operations
                across four industries.
              </p>
              <a
                href="#skills"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brass-light transition-colors hover:text-brass"
              >
                See core skills
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
