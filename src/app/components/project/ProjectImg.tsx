import Image from "next/image"
import { Project } from "@/types/ProjectTypes"

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="glass-card aspect-video w-full rounded-3xl overflow-hidden relative">

      <Image
        src={project.img}
        alt={project.title}
        fill
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 66vw"
        className="object-cover"
      />

    </div>
  )
}