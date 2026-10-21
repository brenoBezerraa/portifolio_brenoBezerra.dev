import { Layers } from "lucide-react";
import Reveal from "./ui/Reveal";
import StackItem from "./ui/StackItem";

export default function StackSection() {
  return (
    <section id="stack" className="py-32 px-8 max-w-6xl mx-auto scroll-mt-20">
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <Layers className="text-blue-400" size={24} />
          <h2 className="text-2xl uppercase tracking-[0.3em] font-light">
            Tecnologias
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <StackItem name="React" logo="react" color="61DAFB" />
          <StackItem name="Node.js" logo="nodedotjs" color="339933" />
          <StackItem name="NestJS" logo="nestjs" color="E0234E" />
          <StackItem name="Spring" logo="springboot" color="6DB33F" />
          <StackItem name="PostgreSQL" logo="postgresql" color="4169E1" />
          <StackItem name="TypeScript" logo="typescript" color="3178C6" />
          <StackItem name="Java" logo="openjdk" color="FFA500" />
          <StackItem name="Docker" logo="docker" color="2496ED" />
          <StackItem name="Prisma" logo="prisma" color="2B64F6" />
          <StackItem name="Git" logo="git" color="F05032" />
        </div>
      </Reveal>
    </section>
  );
}