import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 py-16 md:py-24">
      {/* Container principal do título para garantir alinhamento perfeito */}
      <div className="flex flex-col items-center w-full max-w-[90vw] md:max-w-none">
        <h1 className="gimbal-font landing-title animate-fadeInUp flex flex-col items-center">
          <span className="block">BRENO</span>
          <span className="block md:inline md:ml-4">BEZERRA</span>
        </h1>
      </div>

      {/* Linha decorativa centrada */}
      <div className="w-[30%] max-w-[180px] h-[1px] bg-white/30 mt-10 mb-8 animate-fadeIn delay-400"></div>

      {/* Container de subtítulo com flex-col para garantir alinhamento central */}
      <div className="hero-subtitle flex flex-col items-center w-full">
        <p className="text-[12px] sm:text-[15px] tracking-[0.2em] uppercase text-white font-light px-2">
          Desenvolvedor Full Stack
        </p>

        <p className="mt-2 text-[10px] sm:text-[12px] uppercase tracking-[0.15em] text-white/70 px-4">
          Construindo aplicações web modernas
        </p>

        <Link href="/portifolio" className="portfolio-btn mt-10 inline-block">
          Ver Portfólio
        </Link>
      </div>
    </div>
  );
}
