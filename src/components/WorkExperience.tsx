import type { ReactNode } from "react";

export interface WorkProject {
  client: string;
  description: string;
  /** Logo do cliente. Sem ela, o item usa `icon` como fallback. */
  logo?: string;
  /** Ícone(s) exibidos quando não há logo. */
  icon?: ReactNode;
}

interface WorkExperienceProps {
  role: string;
  company: string;
  experienceTime: string;
  projects: WorkProject[];
  companyLogo?: string;
  employmentType?: string;
  location?: string;
}

export default function WorkExperience({
  role,
  company,
  experienceTime,
  projects,
  companyLogo,
  employmentType,
  location,
}: WorkExperienceProps) {
  return (
    <div className="relative md:pl-20 group">
      <div className="absolute left-0 md:left-[28px] top-0 w-3 h-3 bg-primary rounded-full border-4 border-white dark:border-background-dark hidden md:block z-10 transition-transform group-hover:scale-150"></div>
      <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
          <div className="flex items-center gap-6">
            {companyLogo && (
              <img
                src={companyLogo}
                alt={company}
                className="w-24 h-24 shrink-0 rounded-2xl bg-white object-contain p-2 border border-gray-100 dark:border-gray-800"
              />
            )}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {role}
              </h3>
              <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400">
                {company}
              </p>
              {(employmentType || location) && (
                <p className="text-sm md:text-base text-gray-400 dark:text-gray-500">
                  {[employmentType, location].filter(Boolean).join(" • ")}
                </p>
              )}
            </div>
          </div>
          <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300 self-start whitespace-nowrap">
            {experienceTime}
          </div>
        </div>
        <ul className="space-y-5 list-none">
          {projects.map((project) => (
            <li
              key={project.client}
              className="flex flex-col sm:flex-row gap-5 p-6 rounded-xl bg-surface-light/60 dark:bg-background-dark/40 border border-gray-100 dark:border-gray-800"
            >
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.client}
                  className="w-20 h-20 shrink-0 rounded-xl bg-white object-contain p-2 border border-gray-100 dark:border-gray-800"
                />
              ) : (
                <span className="w-20 h-20 shrink-0 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2 text-3xl">
                  {project.icon}
                </span>
              )}
              <div>
                <h4 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {project.client}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
