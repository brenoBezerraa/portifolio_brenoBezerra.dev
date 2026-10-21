import { X } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (id: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  scrollToSection,
  setIsMenuOpen,
}: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center gap-10 text-xl uppercase tracking-widest animate-fadeIn">
      {[
        { id: "stack", label: "Tecnologias" },
        { id: "projects", label: "Projetos" },
        { id: "about", label: "Sobre" },
        { id: "contact", label: "Contato" },
      ].map((item) => (
        <button key={item.id} onClick={() => scrollToSection(item.id)}>
          {item.label}
        </button>
      ))}

      <button
        onClick={() => setIsMenuOpen(false)}
        className="mt-8 text-white/40"
      >
        <X size={32} />
      </button>
    </div>
  );
}