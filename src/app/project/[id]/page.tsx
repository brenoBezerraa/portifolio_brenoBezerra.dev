import { notFound } from "next/navigation"
import { ChevronRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/types/ProjectTypes"

import { PROJECTS_DATABASE } from "../../../../data/ProjectsData"

import Footer from "@/app/components/portifolio/Footer"
import ProjectHeader from "@/app/components/project/projectHeader"
import ProjectSpecs from "@/app/components/project/PrjectSpecs"
import ProjectImage from "@/app/components/project/ProjectImg"
import ProjectDescription from "@/app/components/project/ProjectDescription"

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project: Project | undefined = Object.hasOwn(PROJECTS_DATABASE, id)
    ? PROJECTS_DATABASE[id as keyof typeof PROJECTS_DATABASE]
    : undefined

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative">

      <div className="max-w-6xl mx-auto">

        <nav className="flex items-center gap-4 mb-12 text-xs tracking-[0.25em] uppercase text-white/60">

          <Link href="/portifolio" className="hover:text-white">
            Portfólio
          </Link>

          <ChevronRight size={14}/>

          <span className="text-white">
            Detalhes do Projeto
          </span>

        </nav>

        <ProjectHeader project={project}/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          <ProjectSpecs project={project}/>

          <div className="lg:col-span-2 space-y-12">

            <ProjectImage project={project}/>

            <ProjectDescription project={project}/>

          </div>

        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center">

          <Link
            href="/portifolio"
            className="text-white/60 hover:text-white flex items-center gap-2 uppercase text-xs tracking-widest"
          >
            <ArrowLeft size={16}/>
            Voltar
          </Link>

          <Footer/>

        </footer>

      </div>

    </main>
  )
}