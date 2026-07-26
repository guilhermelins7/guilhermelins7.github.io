import SectionTitle from "../components/SectionTitle";
import WorkExperience from "../components/WorkExperience";

export default function Experience() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark overflow-hidden"
      id="experiencia"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <SectionTitle title="Experiência Profissional" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Minha jornada em Tecnologia
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              Linha do tempo do meu crescimento no setor dentro de empresas, desde os meus
              primeiros passos até funções impactantes atuais.
            </p>
            <div className="p-8 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                terminal
              </span>
              <h4 className="text-xl font-bold mb-2 font-display">
                Sempre Aprendendo
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Em constante evolução com o cenário tecnológico para oferecer soluções modernas.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="space-y-12">
              <WorkExperience
                role="Desenvolvedor Full Stack"
                company="Mosten"
                experienceTime="Jan. 2025 - Atual"
                jobDescriptions={[
                  "Baltic Bank — Clarion: Desenvolvimento full-stack React e .NET da plataforma de dashboards financeiros com cálculos de média ponderada por data de aplicação/lotes, benchmarks de indicadores de mercado (CDI, Ibovespa, IFIX, IMA-B, Dólar) e regras de auditoria em banco de dados. Atuei com autonomia de ponta a ponta: da idealização e planejamento à implementação end-to-end da solução, além de otimização de gráficos e relatórios. Mantive interface direta com o cliente, conduzindo reuniões técnicas semanais.",
                  "HSM Consulting — Clarion: Dashboards interativos e relatórios dinâmicos em React e .NET para análise de investimentos, modularizando gráficos de Barra, Área, Linha e Mapa de Calor. Aplicação de desenvolvimento assistido por IA utilizando Antigravity e Claude Code.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
