import { Code2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-8 max-w-6xl mx-auto scroll-mt-20">
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <Code2 className="text-orange-400" size={24} />
          <h2 className="text-2xl uppercase tracking-[0.3em] font-light">
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <ProjectCard
            id="trailer-hub"
            title="Trailer Hub"
            desc="Plataforma NestJS para gerenciamento de trailers."
            techs={["nestjs", "prisma", "postgresql"]}
            img="/imgs/trailerHub.png"
          />

          <ProjectCard
            id="ordem-servico"
            title="Ordem de Serviço"
            desc="Sistema Spring Boot para serviços técnicos."
            techs={["java", "spring boot", "mysql"]}
            img="/imgs/image.png"
          />

          <ProjectCard
            id="ecommerce-api"
            title="E-commerce API"
            desc="API escalável para gerenciamento de produtos."
            techs={["node", "typescript", "prisma"]}
            img="/imgs/ecommerce.png"
          />

          <ProjectCard
            id="jornal-universitario"
            title="Jornal Universitário"
            desc="Plataforma de notícias acadêmicas (Spring Boot + React)."
            techs={["spring boot", "react", "docker", "messaging"]}
            img="/imgs/2026-06-12_01-44.png"
          />

          <ProjectCard
            id="codigo-em-video"
            title="Código em Vídeo"
            desc="Plataforma educativa com tutor de IA (Cody) integrado via API GROQ."
            techs={["react", "nestjs"]}
            img="/imgs/codigoEmVideo.png"
          />

        </div>
      </Reveal>
    </section>
  );
}