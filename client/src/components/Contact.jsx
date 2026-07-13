import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolioData";

const EASE = [0.16, 1, 0.3, 1];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow"
        >
          05 — Contact
        </motion.p>

        <div className="mt-6 grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          >
            <h2 className="max-w-md font-display text-3xl leading-snug text-paper sm:text-4xl">
              Have a build in mind? Let's talk about it.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              Open to full stack and frontend-focused roles, remote or in Lahore.
              I'll usually reply within a day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-brass-light"
              >
                <Mail size={16} className="text-brass" /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-brass-light"
              >
                <Github size={16} className="text-brass" /> {profile.githubLabel}
              </a>
              <p className="flex items-center gap-3 font-mono text-sm text-slate">
                <MapPin size={16} className="text-brass" /> {profile.location}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-ink-line bg-ink-soft p-7 shadow-xl shadow-black/20"
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.15em] text-slate">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-brass"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-slate">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-brass"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.15em] text-slate">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-brass"
                placeholder="Tell me about the project or role..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={14} />
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-teal">
                Message sent — thank you. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-400">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
