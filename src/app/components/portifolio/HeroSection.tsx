export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-20">
      {/* Container do título forçando alinhamento */}
      <div className="flex flex-col items-center w-full">
        {/* 20px no mobile, subindo até 36px em telas grandes */}
        <h1 className="gimbal-font text-white font-light text-[20px] sm:text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight animate-fadeInUp max-w-[85vw] mx-auto">
          DESENVOLVEDOR <br className="block sm:hidden" />
          FULL STACK
        </h1>
      </div>

      <p className="mt-8 text-white/50 max-w-md sm:max-w-xl uppercase tracking-[0.12em] text-[10px] sm:text-[12px] animate-fadeInUp px-4 mx-auto">
        Focado em arquitetura escalável e código limpo.
      </p>
    </section>
  );
}
