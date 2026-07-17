"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const isLight = theme === "light";
  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-accent-emerald/50 hover:text-accent-emerald"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
