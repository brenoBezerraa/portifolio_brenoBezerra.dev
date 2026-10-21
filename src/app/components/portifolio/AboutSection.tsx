import { User } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 max-w-6xl mx-auto scroll-mt-20">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-8">
              <User className="text-purple-400" size={24} />
              <h2 className="text-2xl uppercase tracking-[0.3em] font-light">
                Sobre mim
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-6 italic">
              &quot;Desenvolver software não é apenas escrever código, é
              arquitetar soluções que resolvem problemas reais com elegância e
              performance.&quot;
            </p>

            <p className="text-white/80 leading-relaxed">
              Sou um desenvolvedor Full Stack apaixonado pelo ecossistema
              JavaScript e Java. Com foco em back-end robusto e front-end
              minimalista, busco sempre as melhores práticas de Clean Code e
              arquitetura escalável.
            </p>
          </div>

          {/* CARD COM CÓDIGO */}
          <div className="order-1 md:order-2 glass-card overflow-hidden border-purple-500/20">

            <div className="bg-white/10 px-4 py-2 flex gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">brenoBezerra</span> = {"{"} <br />

              &nbsp;&nbsp;role:{" "}
              <span className="text-orange-300">
                &quot;Desenvolvedor Full Stack&quot;
              </span>, <br />

              &nbsp;&nbsp;passion:{" "}
              <span className="text-orange-300">
                &quot;Sistemas escaláveis&quot;
              </span>, <br />

              &nbsp;&nbsp;location:{" "}
              <span className="text-orange-300">
                &quot;Fortaleza, BR&quot;
              </span>, <br />

              &nbsp;&nbsp;status:{" "}
              <span className="text-green-400">
                &quot;Construindo o futuro&quot;
              </span> <br />

              {"}"};
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}