import type { ReactNode } from "react";

export interface Tech {
  name: string;
  icon: ReactNode;
  /** Cor da marca, ajustada para manter contraste nos dois temas. */
  color: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  /** Nome do material symbol exibido ao lado do título. */
  icon: string;
  techs: Tech[];
  className?: string;
}

export default function SkillCard({
  title,
  description,
  icon,
  techs,
  className = "",
}: SkillCardProps) {
  return (
    <div
      className={`bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group ${className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined">
          {icon}
        </span>
        <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-background-dark/60 border border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <span className="text-base" style={{ color: tech.color }}>
              {tech.icon}
            </span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
