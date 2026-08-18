import SectionTitle from "../components/SectionTitle";
import unisantaLogo from "../assets/unisanta-logopng.png";

export default function Sobre() {
  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark" id="sobre">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="Sobre mim"/>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Software com foco em{" "}
              <span className="text-primary text-opacity-80">impacto real</span>
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Engenheiro de Software com experiência em projetos de alto
                impacto para clientes dos setores financeiro, logístico e de
                comunicação, atuando em todo o ciclo de vida das soluções — de
                sistemas corporativos e institucionais a apps mobile — da
                especificação funcional ao deploy.
              </p>
              <p>
                Trabalho em contato direto com equipes interdisciplinares, o que
                me permite ter visão ampla de produto, entender a real dor a ser
                resolvida e entregar soluções com valor tangível, buscando
                sempre o equilíbrio entre agilidade de entrega e qualidade da
                solução.
              </p>
              <p>
                Aplico conceitos como Feature Sliced Design, Clean
                Architecture, CQRS, SOLID, SDD, TDD, CI/CD e boas práticas de
                engenharia no dia a dia, sempre com atenção à performance,
                escalabilidade e construção de código limpo e de fácil
                manutenção.
              </p>
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
                    <div className="flex items-start gap-4">
                      <img
                        src={unisantaLogo}
                        alt="Universidade Santa Cecília"
                        className="w-14 h-14 shrink-0 rounded-xl bg-white object-contain p-1 border border-gray-100 dark:border-gray-800"
                      />
                      <div>
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
                  </div>
                </div>
                <div className="mt-12 p-4 bg-surface-light/50 dark:bg-surface-dark/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    workspace_premium
                  </span>
                  <span className="text-sm font-medium">
                    Bolsista integral &mdash; 100% de bolsa de estudos
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-3xl">public</span>
              <span className="font-medium">De Cubatão, São Paulo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
