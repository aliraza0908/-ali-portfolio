"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { icon: Github, label: "github.com/aliraza0908", href: profile.github },
  { icon: Linkedin, label: "LinkedIn Profile", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3200);
  };

  const fields = [
    { key: "name", label: "Your name", type: "text" },
    { key: "email", label: "Your email", type: "email" },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 07 · contact`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let&apos;s build something
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 max-w-xl text-ink-300"
        >
          Have a project in mind, an opportunity, or just want to talk AI and software? My inbox is open.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-emerald/10 text-accent-emerald">
                  <Icon size={18} />
                </span>
                <span className="text-sm text-ink-100 group-hover:text-accent-emerald">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-7"
          >
            {fields.map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={field.key}
                  className={`mb-2 block font-mono text-xs uppercase tracking-widest transition-colors ${
                    focused === field.key ? "text-accent-emerald" : "text-ink-500"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  id={field.key}
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused("")}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 outline-none transition-all focus:border-accent-emerald/60 focus:shadow-glow-sm"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className={`mb-2 block font-mono text-xs uppercase tracking-widest transition-colors ${
                  focused === "message" ? "text-accent-emerald" : "text-ink-500"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 outline-none transition-all focus:border-accent-emerald/60 focus:shadow-glow-sm"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-emerald to-accent-teal px-6 py-3 font-medium text-base-950 transition-transform hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={17} /> Message sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
