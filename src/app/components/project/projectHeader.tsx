import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Project } from "@/types/ProjectTypes";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="mb-16">

      <h1 className="gimbal-font text-white text-[20px] sm:text-[32px] mb-4 text-left break-words">
        {project.title}
      </h1>

      <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-6">
        {project.category}
      </p>

      <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed break-words">
        {project.description}
      </p>

      <div className="flex gap-4 mt-8">

        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-btn flex items-center gap-3"
        >
          <Github size={18} />
          Code
        </Link>

        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn flex items-center gap-3"
          >
            <Globe size={18} />
            Live
          </a>
        )}

      </div>

    </header>
  );
}