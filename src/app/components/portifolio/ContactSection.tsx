import { Mail, Linkedin } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-40 px-8 text-center scroll-mt-20">
      <Reveal>
        <div className="max-w-2xl mx-auto glass-card p-12 border-white/5">
          <h2 className="text-2xl uppercase tracking-[0.3em] mb-8 font-light">
            Contato
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            <a href="mailto:brenobguabiraba@gmail.com" className="flex gap-3">
              <Mail size={20} /> brenobguabiraba@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/breno-bezerra-94b355379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}