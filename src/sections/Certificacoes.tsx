import { useState } from "react";
import CertificationCard from "../components/CertificationCard";

const certifications = [
  {
    icon: "code",
    badge: "React • TypeScript",
    title: "React: escrevendo com TypeScript",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/react-modernizando-escrever-typescript/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: componentização e design com Angular Material",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-componentizacao-design-angular-material/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: explorando o framework",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-explorando-framework/certificate",
  },
  {
    icon: "all_inclusive",
    badge: "RxJS • Angular",
    title: "RxJS e Angular: programando de forma reativa",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/rxjs-angular-programando-forma-reativa/certificate",
  },
  {
    icon: "language",
    badge: "WordPress",
    title: "WordPress: passo a passo para criar seu primeiro blog",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/wordpress-passo-a-passo-criar-primeiro-blog/certificate",
  },
  {
    icon: "language",
    badge: "WordPress",
    title: "WordPress: crie sites com Elementor e Figma",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/wordpress-crie-sites-elementor-figma/certificate",
  },
  {
    icon: "account_tree",
    badge: "Git • GitHub",
    title: "Git e GitHub: compartilhando e colaborando em projetos",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/git-github-compartilhando-colaborando-projetos/certificate",
  },
  {
    icon: "phone_iphone",
    badge: "Flutter",
    title: "Flutter: Widgets, Stateless, Stateful, Imagens e Animações",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/flutter-widgets-stateless-stateful-imagens-animacoes/certificate",
  },
  {
    icon: "code",
    badge: "TypeScript",
    title: "TypeScript: aplicando orientação a objetos no Front-end",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/typescript-orientado-objetos/certificate",
  },
  {
    icon: "language",
    badge: "WordPress",
    title: "Wordpress: integrando responsividade, efeitos visuais e explorando plugins",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/wordpress-responsividade-efeitos-visuais-plugins/certificate",
  },
  {
    icon: "inventory_2",
    badge: "PHP",
    title: "PHP Composer: Dependências, Autoload e Publicação",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/php-composer/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: componentização, formulários e interação com APIs",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-componentizacao-formularios-interacao-apis/certificate",
  },
  {
    icon: "accessibility_new",
    badge: "Angular • Acessibilidade",
    title: "Acessibilidade no Angular: aprimorando formulários, modais e rotas",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/acessibilidade-angular-formularios-modais-rotas/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: ciclo de vida",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-ciclo-vida/certificate",
  },
  {
    icon: "account_tree",
    badge: "Git • GitHub",
    title: "Git e GitHub: dominando controle de versão de código",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/git-github-dominando-controle-versao-codigo/certificate",
  },
  {
    icon: "database",
    badge: "PHP • PDO",
    title: "PHP e PDO: trabalhando com bancos de dados",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/php-pdo-banco-de-dados/certificate",
  },
  {
    icon: "database",
    badge: "SQLite • SQL",
    title: "SQLite online: conhecendo instruções SQL",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/sqlite-online-conhecendo-instrucoes-sql/certificate",
  },
  {
    icon: "code",
    badge: "JavaScript",
    title: "JavaScript: manipulando elementos no DOM",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/javascript-manipulando-elementos-dom/certificate",
  },
  {
    icon: "language",
    badge: "JavaScript • Web",
    title: "JavaScript para Web: Crie páginas dinâmicas",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/javascript-web-paginas-dinamicas/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: evoluindo com formulários e roteamento",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-evoluindo-formularios-roteamento/certificate",
  },
  {
    icon: "code",
    badge: "TypeScript",
    title: "TypeScript na prática: implemente um projeto completo com TypeScript e módulos",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/typescript-pratica-projeto-completo-typescript-modulos/certificate",
  },
  {
    icon: "terminal",
    badge: "Node.js",
    title: "Node.js e terminal: dominando o ambiente de desenvolvimento front-end",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/node-js-terminal-ambiente-desenvolvimento-front-end/certificate",
  },
  {
    icon: "account_tree",
    badge: "Angular",
    title: "Angular: construa uma aplicação web com componentes, linguagem de template e CLI",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/angular-aplicacao-web-componentes-linguagem-template-cli/certificate",
  },
  {
    icon: "view_quilt",
    badge: "HTML • CSS",
    title: "HTML e CSS: Classes, posicionamento e Flexbox",
    issuer: "Alura",
    href: "https://cursos.alura.com.br/user/guilherme-santos95/course/html-css-classes-posicionamento-flexbox/certificate",
  },
];

const INITIAL_COUNT = 8;

export default function Certificacoes() {
  const [expanded, setExpanded] = useState(false);
  const visibleCertifications = expanded ? certifications : certifications.slice(0, INITIAL_COUNT);

  return (
    <section className="py-24 bg-background-dark text-white overflow-hidden" id="certificacoes">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Marcos
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Expertise & Certificações
            </h2>
            <p className="text-gray-400">
              Uma coleção de credenciais verificadas que demonstram habilidades
              especializadas em todo o stack tecnológico.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          {visibleCertifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{expanded ? "Mostrar menos" : "Mostrar mais"}</span>
            <span className={`material-icons text-sm transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
