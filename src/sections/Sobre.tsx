export default function Sobre() {
  return (
    <section class="py-24 bg-surface-light dark:bg-surface-dark" id="sobre">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Sobre mim
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Uma jornada movida pela{" "}
              <span class="text-primary text-opacity-80">curiosidade</span>
            </h2>
            <div class="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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
            <div class="mt-8 flex items-center gap-4 text-primary">
              <span class="material-symbols-outlined text-3xl">public</span>
              <span class="font-medium">
                Baseado em Cubatão, São Paulo. Atuando globalmente.
              </span>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div class="bg-white dark:bg-background-dark p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white dark:border-gray-800 relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span class="material-symbols-outlined text-8xl">school</span>
              </div>
              <div class="relative z-10">
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">history_edu</span>
                  </div>
                  <h3 class="text-2xl font-display font-bold">Educação</h3>
                </div>
                <div class="space-y-8">
                  <div class="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
                    <h4 class="text-xl font-bold font-display">
                      Universidade Santa Cecília
                    </h4>
                    <p class="text-primary font-medium mb-1">
                      Bacharelado em Sistemas de Informação
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Agosto de 2023 • Junho 2027
                    </p>
                  </div>
                </div>
                <div class="mt-12 p-4 bg-surface-light/50 dark:bg-surface-dark/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary">
                    workspace_premium
                  </span>
                  <span class="text-sm font-medium">
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
