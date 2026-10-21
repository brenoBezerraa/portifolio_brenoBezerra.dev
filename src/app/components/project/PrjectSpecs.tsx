import { Project } from "@/types/ProjectTypes"
import { getTechClasses } from "@/lib/techColors"

export default function ProjectSpecs({ project }: { project: Project }) {
  return (
    <aside className="space-y-12">

      <div className="glass-card p-8 rounded-2xl border-white/5 max-w-sm">

        <h3 className="text-white/60 text-xs uppercase tracking-[0.35em] mb-6">
          Especificações
        </h3>

        <div className="space-y-6">

          <div>
            <p className="text-white/50 text-xs uppercase mb-1">Ano</p>
            <p className="text-white text-lg font-light">
              {project.stats.year}
            </p>
          </div>

          <div>

            <p className="text-white/50 text-xs uppercase mb-1">
              Stack Principal
            </p>

            <div className="flex flex-wrap gap-2 mt-3">

              {project.stack.map((tech) => (

                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded uppercase ${getTechClasses(
                    tech
                  )}`}
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </aside>
  )
}