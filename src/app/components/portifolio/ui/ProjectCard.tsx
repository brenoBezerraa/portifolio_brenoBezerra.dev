import Image from "next/image";
import Link from "next/link";
import { getTechClasses } from "@/lib/techColors";

export default function ProjectCard({
  id,
  title,
  desc,
  techs,
  img,
}: {
  id: string;
  title: string;
  desc: string;
  techs: string[];
  img: string;
}) {
  return (
    <Link
      href={`/project/${id}`}
      className="glass-card !rounded-[32px] p-8 flex flex-col h-full hover:bg-white/5 transition-all border border-white/10 group"
    >
      {/* imagem */}
      <div className="h-48 mb-6 rounded-[24px] overflow-hidden border border-white/5 relative">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-80 group-hover:opacity-100 transition"
        />
      </div>

      {/* título */}
      <h3 className="text-lg tracking-widest uppercase mb-4">{title}</h3>

      {/* descrição */}
      <p className="text-xs text-white/70 leading-relaxed mb-6 flex-grow">
        {desc}
      </p>

      {/* stack */}
      <div className="flex flex-wrap gap-2">
        {techs.map((t) => (
          <span
            key={t}
            className={`text-[9px] px-2 py-1 rounded-full lowercase font-medium ${getTechClasses(
              t
            )}`}
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}