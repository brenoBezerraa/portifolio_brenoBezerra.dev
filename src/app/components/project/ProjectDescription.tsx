import { Project } from "@/types/ProjectTypes";

export default function ProjectDescription({ project }: { project: Project }) {
  return (
    <article className="max-w-3xl">

      <h3 className="gimbal-font text-white mb-6 tracking-tight text-[clamp(18px,3vw,28px)] leading-tight">
        SOBRE O <br />
        DESENVOLVI&shy;MENTO
      </h3>

      <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light">
        {project.longDescription}
      </p>

    </article>
  );
}