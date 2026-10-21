"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-50 animate-fadeIn">
      <Link href="/" className="brand-logo cursor-pointer">
        brenoBezerra.dev
      </Link>

      <a
        href="https://github.com/brenoBezerra"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link-btn"
      >
        <Github size={20} strokeWidth={1.5} />
        <span className="ml-2 text-[10px] tracking-[0.2em] uppercase hidden sm:inline">
        </span>
      </a>
    </header>
  );
}