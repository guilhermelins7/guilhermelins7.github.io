import ProjectCard from "../components/ProjectCard";

export default function Trabalho() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="trabalho">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Trabalhos selecionados
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Uma seleção de projetos públicos dos quais participei, incluindo
              sites institucionais desenvolvidos em contexto profissional,
              repositórios no GitHub e projetos autorais disponíveis online.
            </p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            href="#sobre"
          >
            Mais sobre mim <span className="material-icons text-sm">north_east</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard
            title="Mosten"
            category="Site institucional • Projeto realizado pela Mosten"
            href="https://mosten.com"
            media={
              <div className="w-full h-full bg-gray-950 text-white flex flex-col justify-between p-8 transition-transform duration-700 group-hover:scale-105">
                <span className="text-sm tracking-[0.3em] uppercase text-gray-400">
                  Tecnologia e inovação
                </span>
                <span className="font-display text-5xl font-bold tracking-tight">mosten</span>
                <span className="material-icons self-end text-4xl text-primary">arrow_outward</span>
              </div>
            }
          />
          <ProjectCard
            title="Edenred Mobilidade"
            category="Site institucional • Projeto realizado pela Mosten"
            href="https://www.edenredmobilidade.com.br"
            media={
              <div className="w-full h-full bg-primary text-white flex flex-col justify-between p-8 transition-transform duration-700 group-hover:scale-105">
                <span className="text-sm tracking-[0.3em] uppercase text-white/70">
                  Gestão de frotas
                </span>
                <span className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-none">
                  Edenred<br />Mobilidade
                </span>
                <span className="material-icons self-end text-4xl">arrow_outward</span>
              </div>
            }
          />
          <div className="md:mt-12">
            <ProjectCard
              title="Almar Comunicação"
              category="Site institucional • Projeto realizado pela Mosten"
              href="https://almarcomunicacao.com.br"
              media={
                <div className="w-full h-full flex flex-col justify-between bg-gray-100 dark:bg-surface-dark p-8 transition-transform duration-700 group-hover:scale-105 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 size-44 rounded-full bg-primary/20" />
                  <span className="relative text-sm tracking-[0.3em] uppercase text-gray-500">
                    Comunicação
                  </span>
                  <span className="relative font-display text-4xl md:text-5xl font-bold tracking-tight leading-none text-gray-950 dark:text-white">
                    almar
                  </span>
                  <span className="material-icons relative self-end text-4xl text-primary">
                    arrow_outward
                  </span>
                </div>
              }
            />
          </div>
          <div className="md:mt-12">
            <ProjectCard
              title="Pzaas API Gateway"
              category="Projeto universitário • Universidade Santa Cecília"
              href="https://github.com/guilhermelins7/pzaas-api-gateway"
              media={
                <div className="w-full h-full flex flex-col justify-between bg-gray-950 text-white p-8 transition-transform duration-700 group-hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary),_transparent_45%)] opacity-30" />
                  <span className="relative text-sm tracking-[0.3em] uppercase text-gray-400">
                    Projeto universitário
                  </span>
                  <span className="relative font-display text-4xl md:text-5xl font-bold tracking-tight leading-none">
                    Pzaas<br />API Gateway
                  </span>
                  <span className="material-icons relative self-end text-4xl text-primary">
                    account_tree
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
