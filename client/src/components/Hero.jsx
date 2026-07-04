import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import profile from "../assets/profile.PNG";
import { profile as data, stats } from "../data/portfolioData";

const chips = [
  { label: "React.js", top: "6%", left: "-8%", delay: 0.9 },
  { label: "Node.js", top: "38%", left: "88%", delay: 1.05 },
  { label: "MongoDB", top: "82%", left: "-10%", delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-32 md:px-10"
    >
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6 flex items-center gap-2"
          >
            <MapPin size={14} />
            {data.location} · Available for on‑site and remote roles
          </motion.p>

          <h1 className="font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl">
            {data.name}
          </h1>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="mt-5 block h-[2px] w-40 bg-brass"
          />

          <p className="mt-6 max-w-xl font-mono text-base text-brass-light sm:text-lg">
            {data.title} — {data.stack}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
            {data.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
            >
              View the work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:border-brass hover:text-brass-light"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-paper">{s.value}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative border border-brass/40 bg-ink-soft p-3"
          >
            <div className="border border-ink-line">
              <img
                src={profile}
                alt="Portrait of Furqan Atiq"
                className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
              />
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
              <span>Lahore, PK</span>
              <span className="text-brass">// full-stack</span>
            </p>
          </motion.div>

          {chips.map((chip) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: chip.delay }}
              className="absolute hidden select-none border border-ink-line bg-ink-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-teal shadow-lg shadow-black/30 sm:block"
              style={{ top: chip.top, left: chip.left }}
            >
              {chip.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
