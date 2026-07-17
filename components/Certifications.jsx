"use client";

import { motion } from "framer-motion";
import { Award, Laptop } from "lucide-react";
import { certifications } from "@/lib/data";

const icons = [Award, Laptop];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 05 · certifications &amp; achievements`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Recognition along the way
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass flex items-start gap-4 rounded-2xl p-6"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-emerald/20 to-accent-teal/10 text-accent-emerald">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-300">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
