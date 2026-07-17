"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectFilters } from "@/lib/data";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="glass group relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-200 ease-out will-change-transform hover:shadow-glow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink-100">
          {project.title}
        </h3>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo of ${project.title}`}
            className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-accent-emerald/40 text-accent-emerald transition-colors hover:bg-accent-emerald/10"
          >
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-ink-500 transition-colors group-hover:border-accent-emerald/50 group-hover:text-accent-emerald">
            <ArrowUpRight size={15} />
          </span>
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="w-fit rounded-full bg-accent-emerald/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-emerald">
          {project.category}
        </span>
        {project.liveUrl && (
          <span className="w-fit rounded-full border border-accent-teal/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-teal">
            Live Demo
          </span>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          {`// 04 · projects`}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                filter === f
                  ? "border-accent-emerald bg-accent-emerald/10 text-accent-emerald"
                  : "border-white/10 text-ink-300 hover:border-white/25"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
