import { FaAngular, FaWordpress } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import WorkExperience from "../components/WorkExperience";
import mostenLogo from "../assets/logos/mosten.png";
import balticBankLogo from "../assets/logos/baltic-bank.png";
import hsmConsultingLogo from "../assets/logos/hsm-consulting.png";
import maxxmobiLogo from "../assets/logos/maxxmobi.png";
import brasilExportLogo from "../assets/logos/brasil-export.png";
import edenredLogo from "../assets/logos/edenred.png";

export default function Experience() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark overflow-hidden"
      id="experiencia"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle title="Experiência Profissional" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Minha jornada em Tecnologia
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="space-y-12">
              <WorkExperience
                role="Desenvolvedor Full Stack"
                company="Mosten"
                companyLogo={mostenLogo}
                employmentType="Tempo integral"
                location="Híbrido"
                experienceTime="Jun. 2025 - Atual"
                projects={[
                  {
                    client: "Baltic Bank — Clarion",
                    logo: balticBankLogo,
                    description:
                      "Desenvolvimento full-stack React e .NET da plataforma de dashboards financeiros com cálculos de média ponderada por data de aplicação/lotes, benchmarks de indicadores de mercado (CDI, Ibovespa, IFIX, IMA-B, Dólar) e regras de auditoria em banco de dados. Atuei com autonomia de ponta a ponta: da idealização e planejamento à implementação end-to-end da solução, além de otimização de gráficos e relatórios. Mantive interface direta com o cliente, conduzindo reuniões técnicas semanais.",
                  },
                  {
                    client: "HSM Consulting — Clarion",
                    logo: hsmConsultingLogo,
                    description:
                      "Dashboards interativos e relatórios dinâmicos em React e .NET para análise de investimentos, modularizando gráficos de Barra, Área, Linha e Mapa de Calor. Aplicação de desenvolvimento assistido por IA utilizando Antigravity e Claude Code.",
                  },
                  {
                    client: "MaxxMobi — Atendmaxx (iOS)",
                    logo: maxxmobiLogo,
                    description:
                      "Responsável pelas correções e publicação do aplicativo iOS construído em Angular, Ionic e Capacitor, conduzindo todo o processo até publicação na App Store em ambiente MacOS.",
                  },
                ]}
              />
              <WorkExperience
                role="Estagiário de Desenvolvimento Front End"
                company="Mosten"
                companyLogo={mostenLogo}
                employmentType="Estágio"
                location="Presencial"
                experienceTime="Fev. 2025 - Jun. 2025"
                projects={[
                  {
                    client: "Brasil Export",
                    logo: brasilExportLogo,
                    description:
                      "Evolução do portal com customizações avançadas em WordPress (Elementor, PHP, Tailwind, JavaScript) e desenvolvimento de aplicativo mobile multiplataforma em Flutter integrado a APIs REST.",
                  },
                  {
                    client: "Edenred",
                    logo: edenredLogo,
                    description:
                      "Manutenção evolutiva dos portais institucionais da Edenred e da própria Mosten, com customizações em WordPress, Elementor, PHP e JavaScript.",
                  },
                  {
                    client: "Processo de Formação — Trilha Front-End",
                    icon: (
                      <>
                        <FaAngular className="text-[#DD0031]" />
                        <FaWordpress className="text-[#21759B]" />
                      </>
                    ),
                    description:
                      "Iniciei minha trajetória na Mosten pelo Processo de Formação 2025, trilha Front-End, com foco em Angular, TypeScript e WordPress. Durante o período, desenvolvi projetos práticos orientados por mentores e obtive certificações pela plataforma Alura nas áreas de desenvolvimento web, boas práticas e ferramentas do ecossistema front-end moderno.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
