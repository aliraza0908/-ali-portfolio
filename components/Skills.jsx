"use client";

import { motion } from "framer-motion";
import { technicalSkills, keySubjects, languages } from "@/lib/data";

function Bar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-ink-100">{name}</span>
        <span className="font-mono text-xs text-accent-emerald">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-emerald to-accent-teal shadow-glow-sm"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 03 · skills`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          What I work with
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
              Technical Skills
            </h3>
            <div className="mt-6 space-y-5">
              {technicalSkills.map((skill, i) => (
                <Bar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
                Key Subjects
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {keySubjects.map((subject, i) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="rounded-full border border-accent-emerald/25 bg-accent-emerald/[0.06] px-4 py-2 font-mono text-xs text-ink-100"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
                Languages
              </h3>
              <div className="mt-6 space-y-5">
                {languages.map((lang, i) => (
                  <Bar key={lang.name} {...lang} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
