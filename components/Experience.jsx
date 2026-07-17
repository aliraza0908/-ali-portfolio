"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 06 · experience`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Where I&apos;ve applied it
        </motion.h2>

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass flex flex-col gap-4 rounded-2xl p-7 sm:flex-row sm:items-start"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-emerald/10 text-accent-emerald">
                <Briefcase size={20} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-accent-emerald">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-500">{job.place}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{job.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
