"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const codeLines = [
  { indent: 0, text: "const engineer = {" },
  { indent: 1, text: "name: 'Ali Raza'," },
  { indent: 1, text: "stack: ['Python', 'Java', 'AI/ML']," },
  { indent: 1, text: "builds: 'intelligent systems'," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-[0.22]"
        >
          <source
            src="https://assets.mixkit.co/videos/31590/31590-720.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-base-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/40 via-transparent to-base-950" />
      </div>
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-accent-emerald/20 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-teal/20 blur-[110px] animate-blob [animation-delay:4s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-deep/20 blur-[110px] animate-blob [animation-delay:8s]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow">{`// welcome to my portfolio`}</p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-4 flex h-10 items-center font-mono text-lg text-ink-300 sm:text-xl">
            <span className="text-accent-emerald">&gt;_</span>
            <span className="ml-3">{typed}</span>
            <span className="ml-1 h-6 w-[2px] animate-pulse-slow bg-accent-emerald" />
          </div>

          <p className="mt-6 max-w-lg text-balance text-ink-300">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-emerald to-accent-teal px-7 py-3 font-medium text-base-950 shadow-glow-sm transition-transform hover:scale-[1.03]"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/15 px-7 py-3 font-medium text-ink-100 transition-colors hover:border-accent-emerald/50 hover:text-accent-emerald"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-all hover:-translate-y-1 hover:border-accent-emerald/50 hover:text-accent-emerald"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Signature element: floating code window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass shadow-glass mx-auto w-full max-w-md rounded-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-accent-emerald/70" />
              <span className="ml-3 font-mono text-xs text-ink-500">profile.js</span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                  style={{ paddingLeft: `${line.indent * 16}px` }}
                  className="text-ink-300"
                >
                  <span className="text-accent-teal">{line.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-glow-radial" />
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-500"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
