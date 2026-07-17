import { motion } from "framer-motion";
import { Bot, Code2, Server, Workflow } from "lucide-react";
import { coreSkills, toolTags } from "../data/portfolioData";

const icons = { Code2, Server, Bot, Workflow };

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

function SkillCard({ skill }) {
  const Icon = icons[skill.icon];

  return (
    <motion.div variants={cardVariant} className="gradient-border h-full">
      <div className="gradient-border-panel flex h-full flex-col bg-ink-soft p-7 transition-colors duration-300 hover:bg-ink-soft/80">
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-line bg-ink text-brass-light">
            <Icon size={20} />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
            {skill.tagline}
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl text-paper">{skill.label}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
          {skill.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-line pt-5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] text-teal"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-ink-line bg-ink-soft/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 -z-0 h-80 w-80 rounded-full bg-brass/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-1/4 -z-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow"
        >
          02 — Core Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="mt-4 max-w-xl font-display text-3xl text-paper sm:text-4xl"
        >
          AI Agents & Automation at the core, full-stack execution behind it.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-4 max-w-lg leading-relaxed text-slate"
        >
          Four disciplines that combine to cut operating costs and ship products —
          from autonomous agents and automation pipelines, through to the
          interface and backend that support them.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {coreSkills.map((skill) => (
            <SkillCard skill={skill} key={skill.label} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
            Also fluent in
          </span>
          {toolTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-line bg-ink px-3 py-1.5 text-sm text-paper"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
