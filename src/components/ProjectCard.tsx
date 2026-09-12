import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  media: ReactNode;
  href?: string;
}

export default function ProjectCard({ title, category, media, href }: ProjectCardProps) {
  const content = (
    <>
      <div className="overflow-hidden rounded-2xl mb-6 shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark aspect-video relative">
        {media}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm">{category}</p>
        </div>
        <span className="material-icons shrink-0 border border-gray-300 dark:border-gray-700 rounded-full p-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
          arrow_outward
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        className="group block cursor-pointer"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir o site ${title} em uma nova aba`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group cursor-pointer">
      {content}
    </div>
  );
}
