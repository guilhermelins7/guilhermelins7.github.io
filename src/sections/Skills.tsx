import type { IconType } from "react-icons";
import {
  SiAngular,
  SiBootstrap,
  SiCapacitor,
  SiClaude,
  SiCloudflare,
  SiDotnet,
  SiElementor,
  SiFlutter,
  SiGit,
  SiGithubcopilot,
  SiIonic,
  SiMysql,
  SiPhp,
  SiReact,
  SiRedis,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FaAws, FaDatabase, FaInfinity, FaWandMagicSparkles } from "react-icons/fa6";
import { VscAzure, VscAzureDevops, VscEdit } from "react-icons/vsc";
import SectionTitle from "../components/SectionTitle";
import SkillCard, { type Tech } from "../components/SkillCard";

function tech(name: string, Icon: IconType, color: string): Tech {
  return { name, icon: <Icon />, color };
}

export default function Skills() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark relative"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionTitle title="Habilidades" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tecnologias do meu dia a dia
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A stack que uso para levar uma solução da especificação funcional ao
            deploy, do front-end à infraestrutura.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard
            title="Front-End"
            description="Interfaces responsivas, componentizadas e acessíveis."
            icon="web"
            className="lg:col-span-2"
            techs={[
              tech("React", SiReact, "#61DAFB"),
              tech("Angular", SiAngular, "#DD0031"),
              tech("TypeScript", SiTypescript, "#3178C6"),
              tech("Tailwind", SiTailwindcss, "#38BDF8"),
            ]}
          />
          <SkillCard
            title="Back-End"
            description="APIs, regras de negócio e integrações."
            icon="dns"
            className="lg:col-span-2"
            techs={[
              tech("C#", SiSharp, "#8B5CF6"),
              tech(".NET", SiDotnet, "#8B5CF6"),
              tech("Entity Framework", FaDatabase, "#8B5CF6"),
              tech("PHP", SiPhp, "#8993BE"),
            ]}
          />
          <SkillCard
            title="Mobile"
            description="Apps multiplataforma publicados nas lojas."
            icon="smartphone"
            techs={[
              tech("Flutter", SiFlutter, "#47C5FB"),
              tech("Ionic", SiIonic, "#3880FF"),
              tech("Capacitor", SiCapacitor, "#53B9FF"),
            ]}
          />
          <SkillCard
            title="Web / CMS"
            description="Portais institucionais e customizações avançadas."
            icon="language"
            techs={[
              tech("WordPress", SiWordpress, "#3B9AC4"),
              tech("Elementor", SiElementor, "#EC407A"),
              tech("Bootstrap", SiBootstrap, "#A97BFF"),
            ]}
          />
          <SkillCard
            title="Dados"
            description="Persistência, cache e armazenamento em nuvem."
            icon="database"
            className="lg:col-span-2"
            techs={[
              tech("SQL Server", FaDatabase, "#E0554F"),
              tech("MySQL", SiMysql, "#5A93BE"),
              tech("Redis", SiRedis, "#E5544B"),
              tech("Azure Blob Storage", VscAzure, "#2196F3"),
              tech("AWS S3", FaAws, "#FF9900"),
            ]}
          />
          <SkillCard
            title="DevOps"
            description="Versionamento, esteiras de deploy e entrega contínua."
            icon="rocket_launch"
            className="lg:col-span-2"
            techs={[
              tech("Git", SiGit, "#F05032"),
              tech("Azure DevOps", VscAzureDevops, "#2196F3"),
              tech("CI/CD", FaInfinity, "#22C55E"),
              tech("Cloudflare", SiCloudflare, "#F38020"),
            ]}
          />
          <SkillCard
            title="Inteligência Artificial"
            description="Desenvolvimento assistido por IA, da especificação aos testes."
            icon="auto_awesome"
            className="lg:col-span-2"
            techs={[
              tech("Cursor", VscEdit, "#A78BFA"),
              tech("Claude Code", SiClaude, "#D97757"),
              tech("Antigravity", FaWandMagicSparkles, "#8AB4F8"),
              tech("GitHub Copilot", SiGithubcopilot, "#9CA3AF"),
            ]}
          />
        </div>
      </div>
    </section>
  );
}
