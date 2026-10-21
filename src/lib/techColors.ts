export function getTechClasses(tech: string) {
  const t = tech.toLowerCase();

  if (t.includes("react")) return "bg-[#61dafb] text-black";
  if (t.includes("nestjs") || t.includes("nest")) return "bg-[#e0234e] text-white";
  if (t.includes("node")) return "bg-[#43853d] text-white";
  if (t.includes("typescript") || t.includes("ts")) return "bg-[#3178c6] text-white";
  if (t.includes("prisma")) return "bg-[#2b64f6] text-white";
  if (t.includes("postgres") || t.includes("postgresql")) return "bg-[#336791] text-white";
  if (t.includes("java")) return "bg-[#007396] text-white";
  if (t.includes("spring")) return "bg-[#6db33f] text-white";
  if (t.includes("mysql")) return "bg-[#00758f] text-white";
  if (t.includes("tailwind")) return "bg-[#06b6d4] text-black";
  if (t.includes("html")) return "bg-[#e34f26] text-white";
  if (t.includes("css") && !t.includes("tailwind")) return "bg-[#2965f1] text-white";
  if (t.includes("javascript") || t === "js") return "bg-[#f7df1e] text-black";
  if (t.includes("groq")) return "bg-[#ff4d00] text-white";
  if (t.includes("ai") || t.includes("integration")) return "bg-[#8b5cf6] text-white";

  return "bg-white/5 text-white/80 border border-white/10";
}
