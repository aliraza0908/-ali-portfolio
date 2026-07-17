"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 02 · education`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Academic timeline
        </motion.h2>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-emerald via-accent-teal/50 to-transparent" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-base-950 ring-2 ring-accent-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                </span>

                <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink-100">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-accent-emerald">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-300">{item.place}</p>
                  <div className="mt-4 flex items-center gap-2 text-ink-500">
                    <GraduationCap size={14} />
                    <span className="font-mono text-xs">{item.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
