"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="section-eyebrow"
        >
          {`// 01 · about`}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          A little about me
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#12E5A6,#22C7B8,transparent,#12E5A6)] opacity-70 blur-[2px]"
              />
              <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-base-950 bg-base-800 sm:h-64 sm:w-64">
                <Image
                  src="/images/profile.jpg"
                  alt={profile.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-ink-300">{profile.bio}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Location", value: "Sahiwal, PK" },
                { label: "Focus", value: "AI & Software" },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-100">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
