interface WorkExperienceProps {
  role: string;
  company: string;
  jobDescriptions: string[];
  experienceTime: string;
}

export default function WorkExperience({
  role,
  company,
  jobDescriptions,
  experienceTime,
}: WorkExperienceProps) {
  return (
    <div className="relative md:pl-20 group">
      <div className="absolute left-0 md:left-[28px] top-0 w-3 h-3 bg-primary rounded-full border-4 border-white dark:border-background-dark hidden md:block z-10 transition-transform group-hover:scale-150"></div>
      <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {role}
            </h3>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
              {company}
            </p>
          </div>
          <div className="px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 self-start sm:self-center">
            {experienceTime}
          </div>
        </div>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-none">
          {jobDescriptions.map((jobDescription, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary mt-1.5 material-symbols-outlined text-sm">
                fiber_manual_record
              </span>
              <span>
                {jobDescription}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
