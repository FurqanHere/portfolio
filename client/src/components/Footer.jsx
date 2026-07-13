import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-slate sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>AI Agents · Automation · Full Stack</p>
      </div>
    </footer>
  );
}
