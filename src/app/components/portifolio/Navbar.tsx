"use client";

import { Github, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-[100] backdrop-blur-md border-b border-white/10 bg-black/20 px-8 py-4 flex justify-between items-center animate-fadeIn">
      <Link href="/" className="brand-logo cursor-pointer">
        brenoBezerra.dev
      </Link>

      <div className="hidden md:flex gap-10 text-[20px] uppercase tracking-[0.6em] text-white/70 font-light">
        {[
          { id: "stack", label: "Tecnologias" },
          { id: "projects", label: "Projetos" },
          { id: "about", label: "Sobre" },
          { id: "contact", label: "Contato" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/brenoBezerra"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-btn !opacity-100"
        >
          <Github size={18} />
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}