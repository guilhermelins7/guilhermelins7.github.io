import SectionTitle from "../components/SectionTitle";

export default function Sobre() {
  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark" id="sobre">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="Sobre mim"/>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Uma jornada movida pela{" "}
              <span className="text-primary text-opacity-80">curiosidade</span>
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Originário de uma cidade pequena com muita imaginação, descobri
                a magia da programação ainda jovem. O que começou com simples
                scripts de "Olá, Mundo!" rapidamente se transformou em uma
                obsessão para a vida toda por criar produtos digitais que geram
                impacto.
              </p>
              <p>
                Minha abordagem combina rigor técnico com o olhar atento aos
                detalhes. Acredito que o melhor software não é apenas funcional
                — ele é intuitivo, acessível e bonito. Quando não estou em
                frente a uma tela, você me encontrará explorando arquivos de
                mapas ou experimentando com arte generativa.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-3xl">public</span>
              <span className="font-medium">
                De Cubatão, São Paulo.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="bg-white dark:bg-background-dark p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white dark:border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">school</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">history_edu</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold">Educação</h3>
                </div>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
                    <h4 className="text-xl font-bold font-display">
                      Universidade Santa Cecília
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      Bacharelado em Sistemas de Informação
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Agosto de 2023 • Junho 2027
                    </p>
                  </div>
                </div>
                <div className="mt-12 p-4 bg-surface-light/50 dark:bg-surface-dark/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    workspace_premium
                  </span>
                  <span className="text-sm font-medium">
                    Arquiteto de Nuvem Certificado &amp; Profissional Full-Stack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
