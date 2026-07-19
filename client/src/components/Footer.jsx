import { motion } from "framer-motion";
import { Github, Linkedin, BadgeCheck, Globe } from "lucide-react";
import { profile } from "../data/portfolioData";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/FurqanHere" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/furqan-atiq/" },
  { icon: BadgeCheck, label: "Fiverr", href: "https://www.fiverr.com/furqan_here_" },
  { icon: Globe, label: "Portfolio", href: "https://iamfurqan.vercel.app/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 font-mono text-xs text-slate sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-slate transition-colors duration-300 hover:border-brass hover:text-brass-light hover:shadow-lg hover:shadow-brass/20"
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>

        <p>AI Agents · Automation · Full Stack</p>
      </div>
    </footer>
  );
}
