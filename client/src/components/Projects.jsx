import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const CardContent = (
    <>
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: project.accent }}
      />

      <div>
        <div className="flex items-start justify-between gap-4">
          <p
            className="font-mono text-[11px] uppercase tracking-[0.15em]"
            style={{ color: project.accent }}
          >
            {project.industry}
          </p>
          <span className="font-mono text-xs text-slate">0{index + 1}</span>
        </div>

        <h3 className="mt-4 font-display text-2xl text-paper">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">{project.description}</p>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-ink-line px-2.5 py-1 font-mono text-[11px] text-teal"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-ink-line pt-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
            {project.platforms}
          </span>
          <ArrowUpRight
            size={18}
            className="text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-light"
          />
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.25s ease-out",
          }}
          className="group relative flex flex-col justify-between border border-ink-line bg-ink-soft p-7 cursor-pointer"
        >
          {CardContent}
        </motion.article>
      </a>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className="group relative flex flex-col justify-between border border-ink-line bg-ink-soft p-7"
    >
      {CardContent}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        03 — Selected work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 max-w-xl font-display text-3xl text-paper sm:text-4xl"
      >
        Four industries, one frontend discipline.
      </motion.h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.id} />
        ))}
      </div>
    </section>
  );
}
